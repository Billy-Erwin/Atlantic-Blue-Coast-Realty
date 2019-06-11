export class Listing {
	primaryPhoto: string;
	streetAddress: string;
	streetNumber: string;
	streetName: string;
	streetDirSuffix: string;
	streetSuffix: string;
	city: string;
	stateOrProvince: string;
	basicDetails: string;
	listPrice: number;
	bedsTotal: number;
	bathsFull: number;
	bathsHalf: number;
	bathsTotal: number;
	buildingAreaTotal: number;
	yearBuilt: number;

	constructor(listingObject: object){
		this.listPrice = listingObject.ListPrice;
		this.primaryPhoto = listingObject.Photos[0].Uri300;
		this.streetNumber = listingObject.StreetNumber;
		this.streetName = listingObject.StreetName;
		this.streetDirSuffix = listingObject.StreetDirSuffix;
		this.streetSuffix = listingObject.StreetSuffix;
		this.city = listingObject.City;
		this.stateOrProvince = listingObject.StateOrProvince;
		this.bedsTotal = listingObject.BedsTotal;
		this.bathsFull = listingObject.BathsFull;
		this.bathsHalf = listingObject.BathsHalf;
		this.bathsTotal = listingObject.BathsTotal;
		this.buildingAreaTotal = listingObject.BuildingAreaTotal;
		this.yearBuilt = listingObject.YearBuilt;
	}

	getStreetAddress(): string{
		return `${this.streetNumber} ${this.streetDirSuffix} ${this.streetName} ${this.streetSuffix}`
	};

	getCityAndState(): string{
		return `${this.city} ${this.stateOrProvince}`
	};

	getBasicDetails(): string{
		return `Beds: ${this.bedsTotal}, Baths: ${this.bathsFull}, Sqft: ${this.buildingAreaTotal}, Year Built: ${this.yearBuilt}`;
	}
}