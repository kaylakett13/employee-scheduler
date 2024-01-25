import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { NavComponent } from './nav/nav.component';

//PrimeNg Imports
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    HomeMenuComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CardModule
  ],
  providers: [
    provideClientHydration()
  ],
})
export class AppModule { }
