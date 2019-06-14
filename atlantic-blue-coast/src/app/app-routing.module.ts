import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AbcSelectedListingComponent} from "./abc-selected-listing/abc-selected-listing.component";
import {AbcHomePageComponent} from "./abc-home-page/abc-home-page.component";

const routes: Routes = [
	{ path: 'selected-listing', component: AbcSelectedListingComponent },
	{
		path: 'home',
		component: AbcHomePageComponent,
		data: { title: 'Atlantic Blue Coast' }
	},
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	}
	// { path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
