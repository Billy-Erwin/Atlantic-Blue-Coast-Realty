import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import * as $ from 'jquery';

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
import { AbcHomePageComponent } from './abc-home-page/abc-home-page.component';
import { AbcSearchPropertiesComponent } from './abc-search-properties/abc-search-properties.component';
import { AbcAboutComponent } from './abc-about/abc-about.component';
import { AbcContactUsComponent } from './abc-contact-us/abc-contact-us.component';
import { AbcCommunityComponent } from './abc-community/abc-community.component';
import { AbcListingsPageComponent } from './abc-listings-page/abc-listings-page.component';
import { AbcSpillwayComponent } from './abc-spillway/abc-spillway.component';
import { AbcPhotoViewerComponent } from './abc-photo-viewer/abc-photo-viewer.component';
import { AbcSimpleSearchComponent } from './abc-simple-search/abc-simple-search.component';
import { AbcAdvancedSearchComponent } from './abc-advanced-search/abc-advanced-search.component';
import {FormsModule} from "@angular/forms";
import { AbcEmailComponent } from './abc-email/abc-email.component';

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
		AbcSelectedListingComponent,
		AbcHomePageComponent,
		AbcSearchPropertiesComponent,
		AbcAboutComponent,
		AbcContactUsComponent,
		AbcCommunityComponent,
		AbcListingsPageComponent,
		AbcSpillwayComponent,
		AbcPhotoViewerComponent,
		AbcSimpleSearchComponent,
		AbcAdvancedSearchComponent,
		AbcEmailComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
