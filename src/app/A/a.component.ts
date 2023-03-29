import { Component } from '@angular/core';

@Component({
    selector: 'AComponent',
    template: `
        <div>I am the AComponent</div>
        <router-outlet></router-outlet>
    `
})

export class AComponent {
}