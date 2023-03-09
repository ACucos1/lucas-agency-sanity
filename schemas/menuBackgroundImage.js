export default {
  name: "menuBackgroundImage",
  type: "document",
  title: "Menu Item Settings",
  fields: [
    { name: "label", type: "string", title: "Label" },
    { name: "image", type: "image", title: "Image" },
    { name: "order", type: "number", title: "Order" },
  ],
  orderings: [
    {
      title: "Order, Ascending",
      name: "Order",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      image: "image",
    },
    prepare(selection) {
      const { image } = selection;
      return {
        title: "Menu Item Settings",
        media: image,
      };
    },
  },
};
