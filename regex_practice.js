const regexes = {
  canadianPostalCode: /[^DFIOQU][A-Z]/g,
  //   visa: _________,
  //   masterCard: _________,
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
