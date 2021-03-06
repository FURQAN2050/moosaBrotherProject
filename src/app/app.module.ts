import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Http, HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  imports: [
  BrowserModule.withServerTransition({ appId: 'serverApp' }),
  BrowserAnimationsModule,
  HttpModule,
  SharedModule,
  RouterModule.forRoot(rootRouterConfig, { useHash: false })
  ],
  declarations: [
  AppComponent,
  LoginComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }