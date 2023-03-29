import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BComponent } from './B/b.component';

const routes: Routes = [
    {
        path: 'a',
        loadChildren: () => import('./A/a.module').then(m => m.AModule)
    },
    {
        path: 'b-module',
        loadChildren: () => import('./B/b.module').then(m => m.BModule)
    },
    {
        path: 'b-component',
        component: BComponent,
    },
    {
        path: '',
        loadChildren: () => import('./A/a.module').then(m => m.AModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
