export default {
  name: "videoProject",
  type: "document",
  title: "Video Project",
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
      name: "background_video",
      type: "file",
      title: "Cover Video",
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
