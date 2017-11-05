$(function(){

	// code written by MrMataNui
	var punctuation = ['!', '.', '?' /*, ';', ':', '"', "'" */ ];
	var toWho = ['ME','YOU','HIM', 'HER', 'IT', 'US', 'THEM'];
	var punc;

	$('#eng_text').focus();
	$('#calculate').click(function(){

		var user_text = $.trim($('#eng_text').val().toUpperCase());
		// user_text = $.trim(user_text);
		var split_text = user_text.split(' ');

		var solutionArray = [];
		var placementArray = [];
		var stringPunc = [];
		var solutionVar = '';
		var Tenses = '';
		
		// checks if there is a punctuation at the end
		$.each(split_text, function (i, split_val) {
			$.each(punctuation, function (j, punct_val) {
				// checks if personal pronoun contains 'to' (to me, to you, to them ... )
				if (split_val == 'TO') {
					$.each(toWho, function (k, value) {
						if ( split_text[i+1] == toWho[k] ) {
							split_text[i] += ' '+split_text[i+1];
							split_text[i+1] = '';
							return false;
						} else if ( split_text[i+1] == toWho[k] + punct_val ) {
							split_text[i] += ' '+split_text[i+1];
							split_text[i+1] = '';
							return false;
						}
					});
				}
				if (split_text[i].indexOf(punct_val) >= 0) {
					stringPunc[i] = split_val;
					stringPunc[i] = stringPunc[i].split(punct_val);
					punc = punct_val;
					$.each(stringPunc, function (k, value) {
						if (stringPunc[i][k] != ''){
							split_val = stringPunc[i][k];
						}
					});
				}
			});
		});

		function punctu (solutionVar, dict, key) {
			solutionVar += dict[key];
			solutionVar = $.trim(solutionVar);
			solutionVar += punc;
			return solutionVar;
		}
		var nouns = {To_me: 'TO ME', /*To_him: ['TO HIM', 'TO HER', 'TO IT'],*/ To_us: 'TO US', To_them: 'TO THEM'}
		// translates each word
		$.each(split_text, function (i, split_val) {
			$.each(dict, function (dict_key, dict_val) {
					var upperKey = dict_key.toUpperCase();
					if (stringPunc[i]) {
						switch (split_val) {
							case (upperKey + punc):
								solutionVar = punctu (solutionVar, dict, dict_key);
								break;
							case ('YOU' + punc):
								solutionVar = punctu (solutionVar, dict, 'singYouN');
								break;
							case ('TO YOU' + punc):
								solutionVar = punctu (solutionVar, dict, 'singToYou');
								break;
							case 'COLOR':
								solutionVar = punctu (solutionVar, dict, 'Colour');
								break;
							case ('TO HIM' + punc):
							case ('TO HER' + punc):
							case ('TO IT' + punc):
								solutionVar = punctu (solutionVar, dict, 'To_him');
						}
						return;
					} else {
						switch (split_val) {
							case upperKey:
								solutionVar += dict[dict_key] + ' ';
								break;
							case 'YOU':
								solutionVar += dict['singYouN'] + ' ';
								break;
							case 'TO YOU':
								solutionVar += dict['singToYou'] + ' ';
								break;
							case 'COLOR':
								solutionVar += dict['Colour'] + ' ';
								break;
							case 'TO HIM':
							case 'TO HER':
							case 'TO IT':
								solutionVar += dict['To_him'] + ' ';
						}
					}
					// checks for the tense
					if (split_val == 'DID')
						Tenses = 'past';
					else if (split_val == 'DO' || split_val == 'DOES')
						Tenses = 'present';
					else if (split_val == 'WILL')
						Tenses = 'future';
					return;
			});
			
			$.each(nouns, function (noun_key, noun_val) {
					if (stringPunc[i]) {
						if (split_val == (noun_val + punc) ) {
							solutionVar = punctu (solutionVar, dict, noun_key);
							return false;
						}
						return;
					} else if (split_val == noun_val) {
					solutionVar += dict[noun_key] + ' ';
					return false;
				} else if (split_val)
					solutionArray[i] = '--';
			});
		});

		var solution = $.trim(solutionVar);
		
		solutionArray = solution.split(' ');
		// console.log(solutionArray);
		
		var set = '';
		// removes the words 'will' and 'do'
		$.each(solutionArray, function (i, val) {
			$.each(dict, function (dict_key, dict_val) {
				if (dict_key == 'Will' && val == dict_val)
					solutionArray.splice(i, 1);
				else if (dict_key == 'Do' && val == dict_val)
					solutionArray.splice(i, 1);
			});
		});
		// adds the parts of speech to placementArray
		$.each(solutionArray, function (i, val) {
			$.each(dict, function (dict_key, dict_val) {
				if ( val.toUpperCase() == dict_val.toUpperCase() + punc 
					|| val.toUpperCase() == dict_val.toUpperCase() ) {
					$.each(wordPlacement, function (place_key, place_val) {
						if ( dict_key.toUpperCase() == place_key.toUpperCase() ) {
							placementArray[i] = place_val;
						}
					});
				} else if ( val.toUpperCase() == dict_val.toUpperCase() ) {
					$.each(wordPlacement, function (place_key, place_val) {
						if ( dict_key.toUpperCase() == place_key.toUpperCase() ) {
							placementArray[i] = place_val;
						}
					});
				}
			});
		});
		// checks the parts of speech to see if affixes are neccesary
		$.each(placementArray, function (i, val) {
			if ( val == 'pronounP' && placementArray[i+1] == 'verb' ) {
				switch ( solutionArray[i] ) {
					case 'De':
					case 'Do&zcaron;':
					case 'Dos':
					case 'Du':
						var place = '#FPS';
						break;
					case 'U&scaron;e':
					case 'U&scaron;uy':
					case 'Un&scaron;&euml;':
					case 'U&scaron;o':
						var place = '#SPS';
						break;
					case '&Zcaron;&euml;f':
					case '&Zcaron;&euml;b':
					case '&Zcaron;uf':
					case '&Zcaron;ey':
						var place = '#TPS';
						break;
					case 'Mon':
					case 'M&euml;v':
					case 'Moc':
					case 'Moq':
						var place = '#FPP';
						break;
					case 'Qo':
					case 'Qu&scaron;':
					case 'Qo&scaron;':
					case 'Qu':
						var place = '#SPP';
						break;
					case 'Gu':
					case 'Gub':
					case 'Goc':
					case 'Gam':
						var place = '#TPP';
						break;
				}
				
			}
			$(place).each(function () {
				if ( solutionArray[i+1].slice(-1) == punc) {
					solutionArray[i+1] = solutionArray[i+1].slice(0, -1);
					var solPunc = true;
				}
				if ( Tenses == 'past' )
					var num = 'td:nth-child(2)';
				if ( Tenses == 'present' )
					var num = 'td:nth-child(3)';
				if ( Tenses == 'future' )
					var num = 'td:nth-child(4)';
				var tense = $(this).siblings(num).text();
				tense = $.trim(tense);
				if (tense.indexOf('(') >= 0 ) {
					var parenthesis = tense.indexOf('(');
					var parenthesis2 = tense.indexOf(')');

					// sets valToDel to letters in parenthesis
					var valToDel = tense.slice(parenthesis, parenthesis2+1);
					$.each(vowels, function (vowKey, vowVal) {
						var new_val = vowVal.toLowerCase();
						// checks if letters in parenthesis starts with a vowel
						if ( tense.charAt(parenthesis+1).toUpperCase() == vowVal ) {
							// checks if the word ends with a vowel
							$.each(vowels, function (vowKey2, vowVal2) {
								if ( solutionArray[i+1].slice(-1).toUpperCase() == vowVal2 ) {
									valToDel = valToDel.replace('(', '');
									valToDel = valToDel.replace(')', '');
									tense = tense.replace(valToDel, '');
									// return false;
								} else {
									tense = tense.replace('(', '');
									tense = tense.replace(')', '');
								}
							});
						}
					});
				}

				// adds the affix to the word
				tense = tense.replace('-', solutionArray[i+1]);

				// capitalises the first letter of the word
				if ( tense.charAt(0) == '&' ) {
					tense = tense.charAt(0).toUpperCase()
						+ tense.charAt(1).toUpperCase()
						+ tense.slice(2).toLowerCase();
				} else {
					tense = tense.charAt(0).toUpperCase()
						+ tense.slice(1).toLowerCase();
				}
				solutionArray[i+1] = tense;
				if (solPunc)
					solutionArray[i+1] += punc;
				solutionArray.splice(i, 1);
				solutionVar = solutionArray.join(' ');
				solution = $.trim(solutionVar);
			});
		});

		// adds the translated text to $('#div')
		var html = $.parseHTML( solution );
		var divC = $('#div').children('p');
		$('#div').children('p').html(solution);
		$('#div').children('p').text(function(_, txt) {
			return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
		});

		// adds the user text to $('#div')
		$('#div').find('h3').text(user_text);
		$('#div').find('h3').text(function(_, txt) {
			if (txt.indexOf(' i ') >= 0 || txt.indexOf(' I ') >= 0) {
				if (txt.indexOf(' i ') >= 0)
					var textFind = txt.indexOf(' i ')+1;
				else if (txt.indexOf(' I ') >= 0)
					var textFind = txt.indexOf(' I ')+1;
				var english = txt.charAt(0).toUpperCase()
						+ txt.slice(1, textFind).toLowerCase()
						+ txt.charAt(textFind).toUpperCase()
						+ txt.slice(textFind + 1).toLowerCase();
				$('#eng_text').val(english);
				return english;

				// } else if (txt.indexOf(' i') >= 0 || txt.indexOf(' I') >= 0) {
				// if (txt.indexOf(' i') >= 0)
					// var textFind = txt.indexOf(' i')+1;
				// else if (txt.indexOf(' I') >= 0)
					// var textFind = txt.indexOf(' I')+1;

				// if (textFind == (txt.indexOf(punc)-1)) {
					// var textFind = txt.indexOf(punc)-1;
					// var english = txt.charAt(0).toUpperCase();
					// english += txt.slice(1, textFind).toLowerCase();
					// english += txt.charAt(textFind).toUpperCase();
					// english += txt.slice(textFind + 1).toLowerCase();
					// $('#eng_text').val(english);
					// return english;
					
				// } else if (textFind == (txt.length-1)) {
					// var textFind = txt.length-1;
					// var english = txt.charAt(0).toUpperCase();
					// english += txt.slice(1, textFind).toLowerCase();
					// english += txt.charAt(textFind).toUpperCase();
					// english += txt.slice(textFind + 1).toLowerCase();
					// $('#eng_text').val(english);
					// return english;
					
				// }
			} else {
				$('#eng_text').val(txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase());
				return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
			}
		});
		$('#div').find('p').wrapInner('<strong><em></em></strong>');
		$('#eng_text').focus();
	});
});