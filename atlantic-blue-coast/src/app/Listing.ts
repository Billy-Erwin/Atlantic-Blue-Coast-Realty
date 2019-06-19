export class Listing {
	id: string;
	primaryPhoto: string;
	streetNumber: string;
	streetName: string;
	streetDirSuffix: string;
	streetSuffix: string;
	city: string;
	stateOrProvince: string;
	mlsId: string;
	listPrice: number;
	bedsTotal: number;
	bathsFull: number;
	bathsHalf: number;
	bathsTotal: number;
	buildingAreaTotal: number;
	yearBuilt: number;
	photos: object[];

	constructor(listingObject: object){
		if(listingObject != null){
			this.id = listingObject['Id'];
			this.listPrice = listingObject['StandardFields']['ListPrice'];
			this.primaryPhoto = listingObject['StandardFields']['Photos'][0]['Uri300'];
			this.streetNumber = listingObject['StandardFields']['StreetNumber'];
			this.streetName = listingObject['StandardFields']['StreetName'];
			this.streetDirSuffix = listingObject['StandardFields']['StreetDirSuffix'];
			this.streetSuffix = listingObject['StandardFields']['StreetSuffix'];
			this.city = listingObject['StandardFields']['City'];
			this.stateOrProvince = listingObject['StandardFields']['StateOrProvince'];
			this.bedsTotal = listingObject['StandardFields']['BedsTotal'];
			this.bathsFull = listingObject['StandardFields']['BathsFull'];
			this.bathsHalf = listingObject['StandardFields']['BathsHalf'];
			this.bathsTotal = listingObject['StandardFields']['BathsTotal'];
			this.buildingAreaTotal = listingObject['StandardFields']['BuildingAreaTotal'];
			this.yearBuilt = listingObject['StandardFields']['YearBuilt'];
			this.mlsId = listingObject['StandardFields']['MlsId'];
			this.photos = listingObject['StandardFields']['Photos'];
		}
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