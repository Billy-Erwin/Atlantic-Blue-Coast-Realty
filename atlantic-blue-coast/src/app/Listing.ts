export class Listing {
	standardFields: object[];
	customFields: object[];
	id: string;
	primaryPhoto: string;

	constructor(listingObject: object){
		if(listingObject != null && listingObject['StandardFields'] != null){
			this.id = listingObject['Id'] != null ? listingObject['Id'] : '';
			if(listingObject['StandardFields'] != null) {
				this.standardFields = listingObject['StandardFields'];
				// this.customFields = listingObject['CustomFields'];
				// console.log('standardFields : ', this.standardFields);
				// console.log('Main : ', this.customFields[0]['Main']);
				// console.log('Details : ', this.customFields[0]['Details']);
				this.primaryPhoto =
					listingObject['StandardFields']['Photos'][0]['Uri300'] != null ?
						listingObject['StandardFields']['Photos'][0]['Uri300'] : '';
			}
		}
	}

	getStreetAddress(): string{
		let streetDirPrefix = this.standardFields['StreetDirPrefix'] != null ? this.standardFields['StreetDirPrefix'] : '';
		let streetDirSuffix = this.standardFields['StreetDirSuffix'] != null ? this.standardFields['StreetDirSuffix'] : '';
		let streetName = this.standardFields['StreetName'] != null ? this.standardFields['StreetName'] : '';
		let streetNumber = this.standardFields['StreetNumber'] != null ? this.standardFields['StreetNumber'] : '';
		let streetSuffix = this.standardFields['StreetSuffix'] != null ? this.standardFields['StreetSuffix'] : '';

		return `${streetNumber} ${streetDirPrefix} ${streetName} ${streetDirSuffix} ${streetSuffix}`;
	};

	getCityAndState(): string{
		let city = this.standardFields['City'] != null ? this.standardFields['City'] : '' ;
		let stateOrProvince = this.standardFields['StateOrProvince'] != null ? this.standardFields['StateOrProvince'] : '';
		return `${city} ${stateOrProvince}`;
	};

	getBasicDetails(): string{
		let beds = 'Beds: ' + (this.standardFields['BedsTotal'] != null ? this.standardFields['BedsTotal']: '');
		let baths = 'Baths: ' + (this.standardFields['BathsFull'] != null ? this.standardFields['BathsFull']: '');
		let sqft = 'Sqft: ' + (this.standardFields['BuildingAreaTotal'] != null ? this.standardFields['BuildingAreaTotal']: '');
		let yearBuilt = 'Year Built: ' + (this.standardFields['YearBuilt'] != null ? this.standardFields['YearBuilt']: '');
		return `${beds} | ${baths} | ${sqft} | ${yearBuilt}`;
	}


}