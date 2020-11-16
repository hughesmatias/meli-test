const currency = {
  ARS: "$",
  USD: "u$s",
};

export const formarCurrency = (current) => currency[current];

const dictionary = {
  new: "nuevo",
};

export const formatStatics = (word) => dictionary[word];

export const getSingularOrPlural = (amount, singular, plural) =>
  amount > 1 || amount == 0 ? plural : singular;
