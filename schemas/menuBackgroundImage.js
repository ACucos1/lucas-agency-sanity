export default {
  name: "menuBackgroundImage",
  type: "document",
  title: "Menu Background Image",
  fields: [{ name: "image", type: "image", title: "Image" }],
  preview: {
    select: {
      image: "image",
    },
    prepare(selection) {
      const { image } = selection;
      return {
        title: "Menu Background Image",
        media: image,
      };
    },
  },
};
