import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbcFooterComponent } from './abc-footer/abc-footer.component';
import { AbcHeaderComponent } from './abc-header/abc-header.component';
import { AbcSocialMediaComponent } from './abc-social-media/abc-social-media.component';
import { AbcSocialMediaWrapperComponent } from './abc-social-media-wrapper/abc-social-media-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    AbcFooterComponent,
    AbcHeaderComponent,
    AbcSocialMediaComponent,
    AbcSocialMediaWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
