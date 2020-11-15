const currency = {
  'ARS': '$',
  'USD': 'u$s',
};

export const formarCurrency = (current) => currency[current];

const dictionary = {
  'new': 'nuevo',
};

export const formatStatics = (word) => dictionary[word];
