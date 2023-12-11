import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";

export default {
  title: "Sub Categories",
  name: "sub_category",
  type: "document",
  fields: [
    {
      title: "SubCategory Name",
      type: "string",
      name: "category_name",
    },
    orderRankField({ type: "main_category" }),
    {
      title: "Menu Background Image",
      type: "image",
      name: "sub_category_menu_background_image",
    },
    {
      title: "Main Category",
      name: "parent_category",
      type: "reference",
      to: { type: "main_category" },
      //   hidden: true,
    },
    {
      title: "Images",
      name: "images",
      type: "array",
      of: [
        {
          type: "image",
        },
      ],
    },
  ],
  orderings: [orderRankOrdering],
  preview: {
    select: {
      title: "category_name",
      mainCategory: "parent_category.category_name",
    },
    prepare(selection) {
      const { title, mainCategory } = selection;
      // console.log(mainCategory);
      return {
        title: mainCategory
          ? `${mainCategory} - ${title}`
          : `No Main Category - ${title}`,
      };
    },
  },
};
