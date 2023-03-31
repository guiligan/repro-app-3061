import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AComponent } from './a.component';


const routes: Routes = [
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
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ARoutingModule {
}
