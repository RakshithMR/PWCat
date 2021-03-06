import { BrowserModule } from '@angular/platform-browser';
import { NgModule,MatCardModule  } from '@angular/core';


import { AppComponent } from './app.component';
import { MatToolbarModule, MatCardModule  } from '@angular/material';
import { ImgCardComponent } from './img-card/img-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgCardComponent
  ],
  imports: [
    BrowserModule,
	MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
