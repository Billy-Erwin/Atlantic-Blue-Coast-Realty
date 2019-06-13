import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbcFooterComponent } from './abc-footer/abc-footer.component';
import { AbcHeaderComponent } from './abc-header/abc-header.component';
import { AbcSocialMediaComponent } from './abc-social-media/abc-social-media.component';
import { AbcSocialMediaWrapperComponent } from './abc-social-media-wrapper/abc-social-media-wrapper.component';
import { AbcTextAreaComponent } from './abc-text-area/abc-text-area.component';
import { AbcUnderConstructionComponent } from './abc-under-construction/abc-under-construction.component';
import { AbcBannerComponent } from './abc-banner/abc-banner.component';
import { AbcSlidingHeaderComponent } from './abc-sliding-header/abc-sliding-header.component';
import { AbcFeaturedListingsComponent } from './abc-featured-listings/abc-featured-listings.component';
import { AbcLargeRowComponent } from './abc-large-row/abc-large-row.component';
import { AbcListingCardComponent } from './abc-listing-card/abc-listing-card.component';
import { AbcListingCardDeckComponent } from './abc-listing-card-deck/abc-listing-card-deck.component';
import { AbcCarouselCardDeckComponent } from './abc-carousel-card-deck/abc-carousel-card-deck.component';
import { AbcSelectedListingComponent } from './abc-selected-listing/abc-selected-listing.component';

@NgModule({
	declarations: [
		AppComponent,
		AbcFooterComponent,
		AbcHeaderComponent,
		AbcSocialMediaComponent,
		AbcSocialMediaWrapperComponent,
		AbcTextAreaComponent,
		AbcUnderConstructionComponent,
		AbcBannerComponent,
		AbcSlidingHeaderComponent,
		AbcFeaturedListingsComponent,
		AbcLargeRowComponent,
		AbcListingCardComponent,
		AbcListingCardDeckComponent,
		AbcCarouselCardDeckComponent,
		AbcSelectedListingComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
