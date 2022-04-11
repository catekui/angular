import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './Intro-to-Angular/my-component/my-component.component';
import { catecomponent } from './Intro-to-Angular/Cate-component/cate-component';
import { InterpolationComponent } from './BASICS/Data-binding/interpolation/interpolation.component';
import { PropertyBindingComponent } from './BASICS/property-binding/property-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    catecomponent,
    InterpolationComponent,
    PropertyBindingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
