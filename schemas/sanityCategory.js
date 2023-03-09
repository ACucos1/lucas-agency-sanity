export default {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    { name: "title", type: "string" },
    {
      name: "parent",
      type: "reference",
      to: [{ type: "category" }],
      options: { filter: "!defined(parent)" },
    },
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "parent.title",
    },
    prepare: ({ title, subtitle }) => ({
      title,
      subtitle: subtitle ? `- ${subtitle}` : ``,
    }),
  },
};
