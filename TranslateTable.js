$(function(){
	// code written by MrMataNui
	$('.article tr td:nth-child(even)').each(function(){
		if ($(this).text().indexOf('[') >= 0) {
			var ital_1 = [];
			var ital_2 = [];
			var newItal = $(this).text();
			ital_1 = newItal.split('[');
			ital_2 = ital_1[1].split(']');
			var italTotal = '['+ital_2[0]+']';
			$(this).html(ital_1[0] + italTotal.italics() + ital_2[1]);
		}
	});
	$('	#nounMorph tr:nth-child(even) td, \
		#verbs tr:nth-child(odd) td').each(function(){
			$(this).text('('+$(this).text()+')');
			$(this).wrapInner('<strong><em></em></strong>');
	});
	$('	.evenWrap tr td:nth-child(2n+3), \
		#verbs tr td:not(:nth-child(1)), \
		#derivMorph tr td:nth-child(2), \
		#Pronunciation td:nth-child(1)').each(function(){
			$(this).wrapInner('<strong><em></em></strong>');
	});
});