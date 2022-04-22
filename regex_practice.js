const regexes = {
  canadianPostalCode:
    /^[A-CEGHJ-NPR-TV-Z]\d[A-CEGHJ-NPR-TV-Z] \d[A-CEGHJ-NPR-TV-Z]\d$/,
  visa: /^4(\d{15}|\d{12})$/,
  masterCard:
    /^(5[1-5]\d{14})$|^(2((2(2[1-9]|[3-9]\d))|[3-6]\d{2}|7([01]\d|20)))\d{12}$/,
  //   adaFloat: _________,
  notThreeEndingInOO: /^(\p{L}(?![oO]{2}\b)\p{L}*)?$/u,
  divisibleBy32: /^0{1,4}$|^[01]*(?<=0{5,})$/,
  sevenThroughThirtyOne: /^[7-9]$|^[12]\d$|^3[01]$/,
  mLComment: /^\(\*+\s?\S*\s?\*+\)$/,
  //   notFileForFirstNoLookAround: _________,
  //   notFileForFirstWithLookAround: _________,
  cOctal: /^0[0-7]*$/,
  //   restrictedFloatingPoint: _________,
  palindrome2358:
    /^([.])\1$|^([.])([.])\1$|^([.])([.])([.])\2\1$|^([.])([.])([.])([.])\4\3\2\1$/u,
  //   noNegativeIntLits: _________,
  //   repeated: _________,
};

export function matches(name, string) {
  return regexes[name].test(string);
}
