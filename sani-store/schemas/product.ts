export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'ratings',
      title: 'Ratings',
      type: 'number',
    },
    {
      name: 'image',
      title: 'Image URL',
      type: 'file',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'total_ratings',
      title: 'Total Ratings',
      type: 'number',
    },
  ],
}
