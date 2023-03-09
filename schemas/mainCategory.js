import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";

export default {
  title: "Main Categories",
  name: "main_category",
  type: "document",
  fields: [
    {
      title: "Main Category Name",
      type: "string",
      name: "category_name",
    },
    orderRankField({ type: "main_category" }),
    {
      title: "Menu Background Image",
      type: "image",
      name: "main_category_menu_background_image",
    },
  ],
  orderings: [orderRankOrdering],
};
