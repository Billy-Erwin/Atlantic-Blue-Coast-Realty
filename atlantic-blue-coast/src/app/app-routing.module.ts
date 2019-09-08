import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AbcSelectedListingComponent} from "./abc-selected-listing/abc-selected-listing.component";
import {AbcHomePageComponent} from "./abc-home-page/abc-home-page.component";
import {AbcAboutComponent} from "./abc-about/abc-about.component";
import {AbcListingsPageComponent} from "./abc-listings-page/abc-listings-page.component";
import {AbcCommunityComponent} from "./abc-community/abc-community.component";
import {AbcSearchPropertiesComponent} from "./abc-search-properties/abc-search-properties.component";
import {AbcContactUsComponent} from "./abc-contact-us/abc-contact-us.component";

const routes: Routes = [
	{
		path: 'selected-listing/:id',
		component: AbcSelectedListingComponent,
		data: { title: 'Selected Listing' }
	},
	{
		path: 'home',
		component: AbcHomePageComponent,
		data: { title: 'Atlantic Blue Coast' }
	},
	{
		path: 'contact_us',
		component: AbcContactUsComponent,
		data: { title: 'Contact Us' }
	},
	{
		path: 'search',
		component: AbcSearchPropertiesComponent,
		data: { title: 'Search Properties' }
	},
	{
		path: 'search/:searchText',
		component: AbcSearchPropertiesComponent,
		data: { title: 'Search Properties' }
	},
	{
		path: 'community',
		component: AbcCommunityComponent,
		data: { title: 'Community' }
	},
	{
		path: 'listings',
		component: AbcListingsPageComponent,
		data: { title: 'Featured Listings' }
	},
	{
		path: 'about',
		component: AbcAboutComponent,
		data: { title: 'About' }
	},
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},
	{
		path: '**',
		redirectTo: '/home',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }
