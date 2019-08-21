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
				this.primaryPhoto =
					(listingObject['StandardFields']['Photos'][0] &&
					listingObject['StandardFields']['Photos'][0]['Uri300'])?
					listingObject['StandardFields']['Photos'][0]['Uri300'] : '';
			}
			if(listingObject['CustomFields'] != null) {
				let customList = {};
				let mainCategories = Object.keys(listingObject['CustomFields'][0]);
				for(let mainCategory of mainCategories){
					customList[mainCategory] = {};
					let subCategories = listingObject['CustomFields'][0][mainCategory];
					for(let subCategory of subCategories) {
						let subCategoryName = Object.keys(subCategory)[0];
						customList[mainCategory][subCategoryName] = {};
						let customFields = subCategory[subCategoryName];
						for(let customField of customFields){
							let fieldNames = Object.keys(customField)[0];
							customList[mainCategory][subCategoryName][fieldNames] = customField[fieldNames];
						}
					}
				}
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