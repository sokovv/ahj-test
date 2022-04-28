
export  function luhnAlgorithm(value) {
  value = value.replace(/\D/g, '');
  var nCheck = 0;
  var bEven = false;
  for (var n = value.length - 1; n >= 0; n--) {
    var nDigit = parseInt(value.charAt(n), 10);
    if (bEven && (nDigit *= 2) > 9) {
      nDigit -= 9;
    }
    nCheck += nDigit;
    bEven = !bEven;
  }
  return (nCheck % 10) == 0;
}

export function cardnumber(value) {
  if (value.match(/^(?:3[47][0-9]{13})$/)) {
    return 'amex';
  }
  if (value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?)$/)) {
    return 'visa';
  }
  if (value.match(/^(?:5[1-5][0-9]{14})$/)) {
    return 'master';
  }
  if (value.match(/^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/)) {
    return 'discover';
  }
  if (value.match(/^(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$/)) {
    return 'diners_club';
  }
  if (value.match(/^(?:(?:2131|1800|35\d{3})\d{11})$/)) {
    return 'jcb';
  }
  if (value.match(/^(?:220[0-4])\d+$/)) {
    return 'mir';
  }
  else {
    return false;
  }

}

