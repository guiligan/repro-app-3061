import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'repro-app-3061' }),
        AppRoutingModule,
        // BModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
