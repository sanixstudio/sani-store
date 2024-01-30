import {Rule} from 'sanity'

export default {
  name: 'laptop',
  title: 'Laptop',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'longTitle',
      title: 'Long Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
    },
    {
      name: 'totalReviews',
      title: 'Total Reviews',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'model',
      title: 'Model',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'sku',
      title: 'SKU',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'productImages',
      title: 'Product Images',
      type: 'array',
      of: [{type: 'image'}],
    },
    {
      name: 'highlightFeatures',
      title: 'Highlight Features',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'specs',
      title: 'Specifications',
      type: 'object',
      fields: [
        {
          name: 'screenSize',
          title: 'Screen Size',
          type: 'number',
        },
        {
          name: 'screenResolution',
          title: 'Screen Resolution',
          type: 'string',
        },
        {
          name: 'isTouchScreen',
          title: 'Is Touch Screen',
          type: 'boolean',
        },
        {
          name: 'refreshRate',
          title: 'Refresh Rate',
          type: 'number',
        },
        {
          name: 'brightness',
          title: 'Brightness',
          type: 'number',
        },
        {
          name: 'processorModel',
          title: 'Processor Model',
          type: 'string',
        },
        {
          name: 'cpuBaseClockFrequency',
          title: 'CPU Base Clock Frequency',
          type: 'number',
        },
        {
          name: 'storageType',
          title: 'Storage Type',
          type: 'string',
        },
        {
          name: 'totalStorageCapacity',
          title: 'Total Storage Capacity',
          type: 'number',
        },
        {
          name: 'systemMemoryRam',
          title: 'System Memory RAM',
          type: 'number',
        },
        {
          name: 'graphics',
          title: 'Graphics',
          type: 'string',
        },
      ],
    },
  ],
}
