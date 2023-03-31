import { NgModule } from '@angular/core';

import { AComponent } from './a.component';
import { CommonModule } from '@angular/common';
import { ARoutingModule } from './a-routing.module';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    imports: [
        ARoutingModule,
        CommonModule,
        MatInputModule, // <-- if imported
    ],
    exports: [],
    declarations: [AComponent],
})
export class AModule {
}
