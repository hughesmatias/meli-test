module.exports = {
  formatSearchItems: ({
    results: items,
    available_filters,
  }) => ({
    author: {
      name: "string",
      lastName: "string",
    },
    items: [...items.map(item => ({
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: item.price.toString().split(".")[0],
        decimal: item.price.toString().split(".")[1] || 00,
      },
      picture: item.thumbnail,
    }))],
    categories: (available_filters.find(filter => filter.id == 'category') && [...available_filters.find(filter => filter.id == 'category').values.map(item => item.name)])
  }),
}
