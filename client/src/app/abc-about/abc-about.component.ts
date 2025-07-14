import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'abc-about',
	templateUrl: './abc-about.component.html',
	styleUrls: ['./abc-about.component.css']
})

export class AbcAboutComponent implements OnInit{
	textList: string[] = [];

	constructor() { }

	ngOnInit(){
		this.textList = [
			`Atlantic Blue Coast Realty LLC was introduced on April 1st, 2019.`,
			`Prior to starting Atlantic Blue Coast Realty, owner Eric D Hill had already established 13 years’ worth of experience in real estate – earning his NC Real Estate License and Realtor designation in 2006.  From that time, Eric has provided full real estate services to Columbus, Bladen and Brunswick Counties and surrounding areas.  Residential, Land & Acreage and Commercial Sales.  Leasing and Property Management.  Foreclosures.  Estate Property Liquidations.  Valuations.  Based out of Whiteville NC, Eric has had the privilege of working with great people in the community on numerous types of real estate transactions.  First-time Buyers.  Investors.  Vacation Homes.  In 2017, Eric even started managing an event venue in Whiteville – The Spillway.  The list of experiences goes on and on.  In April 2019, Eric D Hill took all of his experience and, with the support of his wife Heather, son Westyn, family and friends, formed his own company – Atlantic Blue Coast Realty.`,
			`In addition to the career in Real Estate, Eric has connected himself with other aspects of the community, building relationships around a number involvements.  There’s always been a special focus on opportunities to be supportive of the kids and youth of the area.  From being a church youth leader to chaperoning school trips to coaching T-Ball, baseball, basketball and soccer.  Since January 2017, Eric has been a member of the Whiteville City Parks & Recreation Advisory Committee, continuously promoting and pushing for more varieties of offerings in the area to allow for more participation, whether kids, youth or adults – traditional and non-traditional, competitive and non-competitive.  In the Fall of 2017, Eric formed Whiteville Howl Athletics Inc, a non-profit organization set up to provide local youth another outlet to develop sporting skills and team relationships outside of Parks & Recreation seasons or school teams.`,
			`Through avenues such as sponsorships and volunteering, Atlantic Blue Coast Realty has pledged to continuing to give back to the community.  Other neighborly projects are also in the works and should be announced in the near future.`,
			`Those levels of public commitments are just small samples of the characters of Eric D Hill and Atlantic Blue Coast Realty.
			Enthusiasm.  Integrity.  Respect.  Determined.`,
			`With a willingness to listen, be patient and form relationships (not just clients) and a genuine interest in helping, Eric D Hill and Atlantic Blue Coast Realty’s focus is to make
			Real Estate … easy as A B C`
		];

	}

}
