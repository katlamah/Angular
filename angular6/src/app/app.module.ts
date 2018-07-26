import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { LifeCycleComponent } from './lifecyclecomponent/app.component.lifecycle'
import { routingModule } from './routing.module'


@NgModule({
  declarations: [
    AppComponent,
    LifeCycleComponent
  ],
  imports: [
    BrowserModule,
    routingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
