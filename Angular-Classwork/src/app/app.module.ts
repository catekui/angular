import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './Intro-to-Angular/my-component/my-component.component';
import { catecomponent } from './Intro-to-Angular/Cate-component/cate-component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    catecomponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
