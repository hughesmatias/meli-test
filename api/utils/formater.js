const {
  NAME: name,
  LASTNAME: lastName,
} = process.env;

const getItemInformation = (item) => ({
  id: item.id,
  title: item.title,
  price: {
    currency: item.currency_id,
    amount: item.price.toString().split(".")[0],
    decimal: item.price.toString().split(".")[1] || '00',
  },
  picture: item.thumbnail,
  condition: item.condition,
  free_shipping: item.shipping.free_shipping || false,
  location: `${item.address ? item.address.city_name + ', ' + item.address.state_name : false}`,
});

module.exports = {
  formatSearchItems: ({
    results: items,
  }) => ({
    author: {
      name,
      lastName,
    },
    items: [...items.map(item => ({
      ...getItemInformation(item),
    }))],
  }),

  formatItem: ({
    data: item,
    description,
    categoryData,
  }) => ({
    author: {
      name,
      lastName,
    },
    item: {
      ...getItemInformation(item),
      sold_quantity: item.sold_quantity,
      description: description.plain_text,
      category: categoryData.path_from_root,
    },
  })
}
