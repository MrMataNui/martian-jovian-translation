$(() => {
  let tr = '';
  $.each(letters, (i, j) => {
    tr += `<tr>
      <td> ${i} ${i.toLowerCase()}: </td>
      <td> ${j} </td>
    </tr>`;
  });
  $('#Pronunciation').append(tr);

  $('#eng_text').focus();
  $('#calculate').click(() => {
    console.log($('#eng_text').val());

    let punctuation = ['!', '.', '?', ',' /*, ';', ':', '"', "'" */ ];
    let user_text = $.trim($('#eng_text').val().toUpperCase());
    let split_text = user_text.split(' ');
    let stringPunc = [];
    let punc = '';
    let split_letter = [];

    $.each(split_text, (i, split_val) => {
      $.each(punctuation, (j, punct_val) => {
        if (split_val.indexOf(punct_val) >= 0) {
          stringPunc[i] = split_val;
          stringPunc[i] = stringPunc[i].split(punct_val);
          punc = punct_val;
          $.each(stringPunc, (k, value) => {
            if (stringPunc[i][k] != '') {
              split_text[i] = stringPunc[i][k];
              return false;
            }
          });
        }
      });
      split_letter[i] = split_val.split('');
    });
    let letterVal = '';
    $.each(split_letter, (i, split_val) => {
      $.each(split_val, (j, split_val2) => {
        $.each(letters, (k, letter_val) => {
          switch (split_val2) {
            case k:
              letterVal += letter_val;
              break;
            case 'Ë':
              letterVal += '&#601;';
              return false;
            case 'Š':
              letterVal += '&#643;';
              return false;
            case 'Ž':
              letterVal += '&#658;';
              return false;
          }
          // if (split_val2 === /*|| ( split_val2 === 'š' && split_val[j+1] === 'y' )*/ ) {}
        });
      });
      letterVal += ' ';
    });

    $('#div').children('p').html(`/${$.trim(letterVal)}/`);
    $('#div').children('p').text((_, txt) => {
      return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
    });
    console.log(letterVal);
    console.log(split_text);
    console.log(split_letter);

    $('#eng_text').focus();
  });
});
