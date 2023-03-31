import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
    selector: 'BComponent',
    template: `I am the BComponent - {{ stateValue }}`
})

export class BComponent implements OnInit {
    public stateValue: string = '';
    private readonly isBrowser: boolean;
    private readonly isServer: boolean;
    static STATE_KEY = makeStateKey<string>('STATE_KEY');

    constructor(private state: TransferState,
                @Inject(PLATFORM_ID) platformId: Object) {
        this.isBrowser = isPlatformBrowser(platformId);
        this.isServer = isPlatformServer(platformId);
    }
    ngOnInit() {
        if (this.isServer) {
            this.state.set(BComponent.STATE_KEY, '<state key set in server>');
        } else if (this.isBrowser) {
            this.stateValue = this.state.get(BComponent.STATE_KEY, '<no state>');
        }
    }
}