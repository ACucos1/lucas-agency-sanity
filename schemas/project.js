export default {
  name: "project",
  type: "document",
  title: "Project",
  fields: [
    {
      name: "project_title",
      type: "string",
      title: "Title",
    },
    {
      name: "project_description",
      type: "text",
      title: "Description",
    },
    {
      name: "background_image",
      type: "image",
      title: "Background Image",
    },
    {
      name: "images",
      type: "array",
      title: "Images",
      of: [
        {
          name: "image",
          type: "image",
          title: "Image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
          ],
        },
      ],
      options: {
        layout: "grid",
      },
    },
    {
      name: "display",
      type: "string",
      title: "Display as",
      description: "How should we display these images?",
      options: {
        list: [
          {
            title: "Stacked on top of eachother",
            value: "stacked",
          },
          {
            title: "In-line",
            value: "inline",
          },
          {
            title: "Carousel",
            value: "carousel",
          },
        ],
        layout: "radio",
      },
    },
    {
      name: "zoom",
      type: "boolean",
      title: "Zoom enabled",
      description: "Should we enable zooming of images",
    },
  ],
  preview: {
    select: {
      images: "images",
      image: "images.0",
    },
    prepare(selection) {
      const { images, image } = selection;

      return {
        title: `Gallery block of ${Object.keys(images).length} images`,
        subtitle: `Alt text: ${images.alt}`,
        media: image,
      };
    },
  },
};
