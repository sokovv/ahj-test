import { luhnAlgorithm, cardnumber } from '../validators';

/Luna algoritm/ 
  test.each([
    ['true for valid organization luhnAlgorithm', '4111111111111111', true],
    ['true for valid organization luhnAlgorithm', '30569309025904', true],
    ['true for valid organization luhnAlgorithm', '5555555555554444', true],
    ['false for invalid organization luhnAlgorithm', '7715964999', false],
    ['false for invalid organization luhnAlgorithm', '56565', false],
    ['false for invalid organization luhnAlgorithm', '000120', false],
  ])(('it should be %s'), (_, input, expected) => {
    expect(luhnAlgorithm(input)).toBe(expected);
  });

  /Name card/ 
  test.each([
    ['true for valid organization cardnumber', '4111111111111111', 'visa'],
    ['true for valid organization cardnumber', '30569309025904', 'diners_club'],
    ['true for valid organization cardnumber', '5555555555554444', 'master'],
    ['true for valid organization cardnumber', '371449635398431', 'amex'],
    ['true for valid organization cardnumber', '6011111111111117', 'discover'],
    ['true for valid organization cardnumber', '3530111333300000', 'jcb'],
    ['true for valid organization cardnumber', '2202200128683966', 'mir'],
    ['false for invalid organization cardnumber', '0000', false],
  ])(('it should be %s'), (_, input, expected) => {
    expect(cardnumber(input)).toBe(expected);
  });
  