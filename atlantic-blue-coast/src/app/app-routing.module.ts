import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AbcSelectedListingComponent} from "./abc-selected-listing/abc-selected-listing.component";

const routes: Routes = [
	{ path: 'selected-listing', component: AbcSelectedListingComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
