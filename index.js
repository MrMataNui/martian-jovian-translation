$(() => {
  var keys = Object.keys(JovLetters);
  var letterSort = {};
  keys.sort();
  $.each(keys, (j, key_val) => {
    $.each(JovLetters, (i, letter_val) => {
      if (key_val === i) {
        letterSort[key_val] = letter_val;
      }
    });
  });
  var tr = '';
  $.each(JovLetters, (i, j) => {
    tr += `<tr>
      <td> ${i} ${i.toLowerCase()}: </td>
      <td> ${j} </td>
    </tr>`;
  });
  $('#Pronunciation').append(tr);

  function findChar(Char, thisVar, dict_val) {
    // gets the affix
    var val = thisVar.parent().prev().children('td:nth-child(' + Char + ')').html();
    var val = $.trim(val);
    if (val.indexOf('(') >= 0) {
      var parenthesis = val.indexOf('(');
      var parenthesis2 = val.indexOf(')');
      // sets valToDel to letters in parenthesis
      var valToDel = val.slice(parenthesis, parenthesis2 + 1);
      $.each(JovVowels, (vowKey, vowVal) => {
        var new_val = vowVal.toLowerCase();
        // checks if letters in parenthesis starts with a vowel
        if (val.charAt(parenthesis + 1).toUpperCase() === vowVal) {
          // console.log(valToDel);
          // checks if the word ends with a vowel
          $.each(JovVowels, (vowKey2, vowVal2) => {
            if (dict_val.slice(-1).toUpperCase() === vowVal2 ||
              dict_val.slice(-6).toLowerCase() === '&euml;') {
              val = val.replace(valToDel, '');
            } else {
              val = val.replace('(', '');
              val = val.replace(')', '');
            }
          });
        }
      });
    }
    // adds the affix to the word
    val = val.replace('-', dict_val);
    // capitalises the first letter of the word
    if (val.charAt(0) === '&') {
      val = val.charAt(0).toUpperCase() +
        val.charAt(1).toUpperCase() +
        val.slice(2).toLowerCase();
    } else {
      val = val.charAt(0).toUpperCase() +
        val.slice(1).toLowerCase();
    }
    thisVar.html(val);
  }
  $.each(JovDict, (dict_key, dict_val) => {
    switch (dict_key) {
      // checks the dictionary for an English word
      case 'I':
      case 'Me':
      case 'Mine':
      case 'To_me':
      case 'He':
      case 'Him':
      case 'His':
      case 'To_him':
      case 'We':
      case 'Us':
      case 'Ours':
      case 'To_us':
      case 'They':
      case 'Them':
      case 'Theirs':
      case 'To_them':
        // prints the translated word
        $('#' + dict_key.toLowerCase()).next().html(dict_val);
        break;
        // checks the dictionary for a form of 'you'
        // 'sing--' = singular
        // 'plur--' = plural
        // '--N' = Nominative
        // '--A' = Accusative
      case 'singYouN':
      case 'singYouA':
      case 'singYours':
      case 'singToYou':
      case 'plurYouN':
      case 'plurYouA':
      case 'plurYours':
      case 'plurToYou':
        // prints the translated word
        $('#' + dict_key).next().html(dict_val);
        break;
      case 'Study':
        $('#' + dict_key).children().html('(' + dict_val + ')');
        $('.Past').each(() => {
          findChar(2, $(this), dict_val);
        });
        $('.Present').each(() => {
          findChar(3, $(this), dict_val);
        });
        $('.Future').each(() => {
          findChar(4, $(this), dict_val);
        });
        break;
      case 'Man':
        $('.nounFirst').each(() => {
          findChar(3, $(this), dict_val);
        });
        $('.nounSecond').each(() => {
          findChar(5, $(this), dict_val);
        });
        break;
    }
  });
  $('#eng_text').keypress((event) => {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode === '13') {
      conlangTranslate(JovDict, JovLetters, JovVowels);
    }
  });
  $('#calculate').click(() => {
    conlangTranslate(JovDict, JovLetters, JovVowels);
  });
  $('#eng_text').focus();
});
