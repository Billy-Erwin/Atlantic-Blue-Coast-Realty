import * as categories from '../assets/files/customCategoryList.json';

export class Listing {
	standardFields: object[];
	customFields: {};
	id: string;
	primaryPhoto: string;
	defaultPhoto: string = '../../assets/images/abc_logo_2.jpg';
	customMain: string[] = categories.customMain;
	customTrueFalse: string[] = categories.customTrueFalse;
	detailSections = new Map();
	contactComponentInfo: object;

	constructor(listingObject: object){
		if(listingObject != null && listingObject['StandardFields'] != null){
			this.id = listingObject['Id'] != null ? listingObject['Id'] : '';
			if(listingObject['StandardFields'] != null) {
				this.standardFields = listingObject['StandardFields'];
				this.primaryPhoto =
					(listingObject['StandardFields']['Photos'][0] &&
					listingObject['StandardFields']['Photos'][0]['Uri300'])?
					listingObject['StandardFields']['Photos'][0]['Uri300'] : this.defaultPhoto;
				this.contactComponentInfo = {
					messageHeader: 'Tell me more!',
					messageBody: `Hi!  I would like more info about ${this.standardFields['UnparsedAddress']}!`
				}
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
				this.customFields = customList;
			}
			this.buildSections();
		}
		console.log(this.standardFields);
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
	}

	getBasicDetails(): string{
		let beds =
			'Beds: ' + (this.validateField(this.standardFields['BedsTotal']) ? this.standardFields['BedsTotal'] : '');
		let baths =
			'Baths: ' + (this.validateField(this.standardFields['BathsFull']) ? this.standardFields['BathsFull'] : '');
		let sqft =
			'Sqft: ' + (this.validateField(this.standardFields['BuildingAreaTotal']) ? this.standardFields['BuildingAreaTotal'] : '');
		let yearBuilt =
			'Year Built: ' + (this.validateField(this.standardFields['YearBuilt']) ? this.standardFields['YearBuilt'] : '');
		return `${beds} | ${baths} | ${sqft} | ${yearBuilt}`;
	}

	validateField(field): boolean{
		return(field != null && field != '********');
	}

	buildSections(): void {
		if(this.customFields && this.customFields['Main']){
			for(let customFieldKey of this.customMain){
				this.detailSections.set(customFieldKey, this.customFields['Main'][customFieldKey]);
			}
			let trueFalseConversion = {};
			for(let customFieldKey of this.customTrueFalse){
				let values = '';
				let aComma = '';
				if(this.customFields['Main'][customFieldKey]){
					for(let key of Object.keys(this.customFields['Main'][customFieldKey])){
						values += aComma + key;
						if(aComma === ''){
							aComma = ', ';
						}
					}
					trueFalseConversion[customFieldKey] = values;
				}
			}
			this.detailSections.set('Misc', trueFalseConversion);
		}
	}
}