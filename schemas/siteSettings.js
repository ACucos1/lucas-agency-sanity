export default {
  name: "siteSettings",
  type: "document",
  title: "Site Settings",
  fields: [
    {
      name: "siteName",
      type: "string",
      title: "Site Name",
    },
    {
      name: "background_color",
      type: "color",
      title: "Background Color",
    },

    { name: "introBlurb", type: "string", title: "Intro Blurb" },
    {
      name: "logoMedia",
      type: "file",
      title: "Logo Media",
    },
  ],
};
