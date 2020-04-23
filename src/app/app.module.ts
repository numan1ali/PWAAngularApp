import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './modules/main.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
// import { routingComponents } from './modules/app-routing/app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MainModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
