import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BasicDirectiveDirective } from './basicDirective/basic-directive.directive';
import { BetterDirectiveDirective } from './betterDirective/better-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicDirectiveDirective,
    BetterDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
