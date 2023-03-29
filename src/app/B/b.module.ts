import { NgModule } from '@angular/core';

import { BComponent } from './b.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: BComponent
            }
        ])
    ],
    exports: [BComponent],
    declarations: [BComponent],
})
export class BModule {
}
