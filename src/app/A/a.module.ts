import { NgModule } from '@angular/core';

import { AComponent } from './a.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: AComponent,
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../B/b.module').then(m => m.BModule)
                    }
                ]
            }
        ])
    ],
    exports: [],
    declarations: [AComponent],
})
export class AModule {
}
