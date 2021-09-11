export const addProduct = (item, itemList, inList, product) => {

  const existing = item.find(el => el.id === product.id)
  if (!existing) {
    itemList(preState => [...preState, product])
    inList(true)
  }

  return { item, itemList, inList, product }
}