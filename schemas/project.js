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
      type: "array",
      of: [{ type: "block" }],
      // title: "Description",
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
      title: "project_title",
      image: "images.0",
    },
    prepare(selection) {
      const { title, image } = selection;
      return {
        title,

        media: image,
      };
    },
  },
};
