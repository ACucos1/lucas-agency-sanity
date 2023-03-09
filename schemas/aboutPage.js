export default {
  name: "aboutPage",
  type: "document",
  title: "About",
  fields: [
    {
      name: "mainImage",
      title: "Display Image",
      type: "image",
    },
    {
      name: "tagLine",
      title: "Tag Line",
      type: "string",
    },
    {
      name: "aboutDescription",
      type: "text",
      title: "Blurb",
    },
  ],
};
