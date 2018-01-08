var DictConSort = [];
var DictEngSort = [];

function getDict (ConDictionary) {
	$.each(ConDictionary, function (i, ConDict_val) {
		DictConSort[i] = ConDictionary[i];
		DictEngSort[i] = ConDictionary[i];
	});

	function SortByEng(a, b){
		var aName = a.English.toLowerCase();
		var bName = b.English.toLowerCase(); 
		return ( (aName < bName) ? -1 : ( (aName > bName) ? 1 : 0) );
	}
	function SortByCon(a, b){
		var aName = a.Conlang.toLowerCase();
		var bName = b.Conlang.toLowerCase(); 
		return ( (aName < bName) ? -1 : ( (aName > bName) ? 1 : 0) );
	}

	DictEngSort.sort(SortByEng);
	DictConSort.sort(SortByCon);
	return DictEngSort, DictConSort;
}
