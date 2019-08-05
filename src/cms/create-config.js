export default function (config = {}) {
  return {
    load_config_file: false,
    media_folder: 'static/media',
    public_folder: '/media',
    collections: [
      {
        name: 'education',
        label: 'Education',
        folder: 'src/content/education',
        create: true,
        slug: '{{slug}}',
        fields: [
          { label: 'Template Key', name: 'templateKey', widget: 'hidden', default: 'education' },
          { label: 'Title', name: 'title', widget: 'string' },
          { label: 'Description', name: 'body', widget: 'markdown', required: false },
          { label: 'Image', name: 'image', widget: 'image', required: false },
          { label: 'Degree', name: 'degree', widget: 'string' },
          { label: 'School', name: 'school', widget: 'string' },
          { label: 'Date', name: 'date', widget: 'date' },
        ]
      },
    ],
    ...config
  };
}