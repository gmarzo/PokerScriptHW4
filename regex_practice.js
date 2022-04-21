const regexes = {
  canadianPostalCode:
    /^[^DFIOQU][A-Z][0-9][^DFIOQU][A-Z] ([0-9][^DFIOQU][A-Z][0-9])?$/,
  visa: /^4(\d{15}|\d{12})$/,
  masterCard: /^(51-55\d{14})|((2221-2720)(\d{12}))$/,
  //   adaFloat: _________,
  //   notThreeEndingInOO: _________,
  //   divisibleBy32: _________,
  //   sevenThroughThirtyOne: _________,
  //   mLComment: _________,
  //   notFileForFirstNoLookAround: _________,
  //   notFileForFirstWithLookAround: _________,
  //   cOctal: _________,
  //   restrictedFloatingPoint: _________,
  //   palindrome2358: _________,
  //   noNegativeIntLits: _________,
  //   repeated: _________,
};

export function matches(name, string) {
  return regexes[name].test(string);
}
