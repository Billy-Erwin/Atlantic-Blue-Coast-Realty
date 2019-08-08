export class AbcAdvancedSearch {
	beds: number;
	baths: number;
	min_lot_size: number;
	max_lot_size: number;
	min_price: number;
	max_price: number;
	min_year_built: number;
	max_year_built: number;
	min_sqft: number;
	max_sqft: number;

	filterParameters: string[] = [];

	filterString: string = '_filter='

	formatQuery(){
		this.setBedsCondition();
		console.log('filterParameters : ', this.filterParameters);
		this.setBathsCondition();
		console.log('filterParameters : ', this.filterParameters);
		this.setPriceCondition();
		console.log('filterParameters : ', this.filterParameters);
		this.setYearBuiltCondition();
		console.log('filterParameters : ', this.filterParameters);
		this.setSqftCondition();
		console.log('filterParameters : ', this.filterParameters);
		for(let i = 0; i < this.filterParameters.length; i++){
			console.log('param : ', this.filterParameters[i]);
			this.filterString += `${this.filterParameters[i]} And `
		}
		this.filterString = this.filterString.substring(0, this.filterString.length - 5);
	}

	setBedsCondition(){
		if(this.beds !== null && this.beds > 0){
			this.filterParameters.push(`BedsTotal Ge ${this.beds}`);
		}
	}

	setBathsCondition(){
		if(this.baths !== null && this.baths > 0){
			this.filterParameters.push(`BathsFull Ge ${this.baths}`);
		}
	}

	setPriceCondition(){
		if(this.min_price && this.max_price){
			this.filterParameters.push(`ListPrice Bt ${this.min_price}, ${this.max_price}`);
		} else if (this.min_price){
			this.filterParameters.push(`ListPrice Ge ${this.min_price}`);
		} else if (this.max_price){
			this.filterParameters.push(`ListPrice Le ${this.max_price}`);
		}
	}

	setSqftCondition(){
		if(this.min_sqft && this.max_sqft){
			this.filterParameters.push(`BuildingAreaTotal Bt ${this.min_sqft}, ${this.max_sqft}`);
		} else if (this.min_sqft){
			this.filterParameters.push(`BuildingAreaTotal Ge ${this.min_sqft}`);
		} else if (this.max_sqft){
			this.filterParameters.push(`BuildingAreaTotal Le ${this.max_sqft}`);
		}
	}

	setLotSizeCondition(){

	}

	setYearBuiltCondition(){
		if(this.min_year_built && this.max_year_built){
			this.filterParameters.push(`YearBuilt Bt ${this.min_year_built}, ${this.max_year_built}`);
		} else if (this.min_year_built){
			this.filterParameters.push(`YearBuilt Ge ${this.min_year_built}`);
		} else if (this.max_year_built){
			this.filterParameters.push(`YearBuilt Le ${this.max_year_built}`);
		}
	}
}
