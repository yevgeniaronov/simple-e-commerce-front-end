function checkRTL(s) {
  var ltrChars = 'A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF' + '\u2C00-\uFB1C\uFDFE-\uFE6F\uFEFD-\uFFFF',
      rtlChars = '\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC',
      rtlDirCheck = new RegExp('^[^' + ltrChars + ']*[' + rtlChars + ']');

  return rtlDirCheck.test(s);
};

$(document).ready(function () {
  var checkRTLString = $('.soundDescription');
  for (var i = 0; i < checkRTLString.length; i++) {
    var isRTL = checkRTL(checkRTLString[i].innerText);
    if (isRTL) {
      $(checkRTLString[i]).css('direction', 'rtl');
    }
  }
});
