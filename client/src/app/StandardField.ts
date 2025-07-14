export class StandardField{
	fieldName: string;
	searchable: boolean;
	type: string;
	resourceUri: string;
	hasList: boolean;
	maxListSize: number;
	mlsVisible: object[];
	label: string;
	defaults: object[];

	constructor(fieldName: string, sparkStandardField: object){
		this.fieldName = fieldName ? fieldName : '';
		this.searchable = sparkStandardField['Searchable'] ? sparkStandardField['Searchable'] : false;
		this.type = sparkStandardField['Type'] ? sparkStandardField['Type'] : '';
		this.resourceUri = sparkStandardField['ResourceUri'] ? sparkStandardField['ResourceUri'] : '';
		this.hasList = sparkStandardField['HasList'] ? sparkStandardField['HasList'] : false;
		this.maxListSize = sparkStandardField['MaxListSize'] ? sparkStandardField['MaxListSize'] : 0;
		this.mlsVisible = sparkStandardField['MlsVisible'] ? sparkStandardField['MlsVisible'] : [];
		this.label = sparkStandardField['Label'] ? sparkStandardField['Label'] : '';
		this.defaults = sparkStandardField['Defaults'] ? sparkStandardField['Defaults'] : [];
	}
}