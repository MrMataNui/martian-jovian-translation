$(() => {
  $('#ConWordCound').prev().css({
    'font-size': '140%'
  });
  $(function () {
    var header = '<tr><th>English</th><th>Conlang</th></tr>';
    var ConDictCon = [];
    var ConDictEng = [];
    var ConlangDict = {};
    var NewConlangDict = [];
    var ConDictionary = [];
    $('#c_lang_dict').keypress(function (event) {
      var keycode = (event.keyCode ? event.keyCode : event.which);
      if (keycode == '13')
        dictClick();
    });
    $('#c_lang_calculate').click(function () {
      dictClick();
    });

    function renewArr() {
      ConDictCon = [];
      ConDictEng = [];
      ConlangDict = {};
      NewConlangDict = [];
      ConDictionary = [];
      DictEngSort = [];
      DictConSort = [];
    }

    function dictClick() {
      renewArr();
      ConDictionary, ConlangDict = getDictionary(ConDictionary, ConlangDict);
      DictEngSort, DictConSort = getDict(ConDictionary);
      $('#dict').append(header);
      dicSorter(DictEngSort);
      $('#ConWordCound').text('Your conlang has ' +
        DictEngSort.length +
        ' words in it.');
      $('#ConWordCound').css({
        'font-size': '140%'
      });
      $('#c_lang_dict').focus();
    }

    $.each(ConDictionary, function (i, ConDict_val) {
      if (i % 2 == 0)
        ConDictEng.push(ConDict_val);
      else
        ConDictCon.push(ConDict_val);
    });
    $.each(ConDictEng, function (i, Dict_val) {
      ConlangDict[i] = {
        English: ConDictEng[i],
        Conlang: ConDictCon[i]
      }
      NewConlangDict.push([ConDictEng[i], ConDictCon[i]]);
    });

    function dicSorter(dicSort) {
      tr = '';
      $.each(dicSort, function (i, val) {
        val['English'] = val['English'].replace(/_/g, ' ')
        val['Conlang'] = val['Conlang'].replace(/_/g, ' ')
        tr += '<tr>';
        tr += '<td>' + val['English'] + ':</td>';
        tr += '<td>' + val['Conlang'] + '</td>';
        tr += '</tr>';
      });
      $('#dict').append(tr);
    }
    $('#EngSort').click(function () {
      $('#dict').empty();
      $('#dict').append(header);
      dicSorter(DictEngSort);
      // $('#c_lang_dict').focus();
    });
    $('#ConSort').click(function () {
      $('#dict').empty();
      $('#dict').append(header);
      dicSorter(DictConSort);
      // $('#c_lang_dict').focus();
    });
    $('#getUserDict').click(function () {
      window.location = 'getUserDict.html?ConDictionary=' + NewConlangDict + '&ConlangDict=' + ConlangDict;
    });
  });
  $('#dict').click(function () {
    $.each(ConDictionary, function (i, ConDict_val) {
      ConDict_val[0] = ConDict_val[0].replace(/ /g, '_')
      ConDict_val[1] = ConDict_val[1].replace(/ /g, '_')
    });
    window.location = 'userDictionary.html?ConDictionary=' + ConDictionary;
  });
  $('#c_lang_dict').focus();
});
