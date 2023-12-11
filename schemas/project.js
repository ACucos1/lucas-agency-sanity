export default {
  name: "project",
  type: "document",
  title: "Projects",
  fieldsets: [
    {
      name: "photo",
      title: "Photography",
      hidden: ({ document }) => document?.media_type !== "photo",
    },
    {
      name: "video",
      title: "Videography",
      hidden: ({ document }) => document?.media_type !== "video",
    },
  ],
  fields: [
    {
      name: "project_title",
      type: "string",
      title: "Title",
    },
    {
      name: "main_category",
      type: "reference",
      to: [{ type: "main_category" }],
      options: {
        disableNew: true,
      },
    },
    {
      name: "sub_category",
      type: "reference",
      to: [{ type: "sub_category" }],
      options: {
        filter: ({ document }) => {
          // console.log(document);

          return {
            filter: "parent_category._ref == $mainCategory",
            params: { mainCategory: document.main_category._ref },
          };
        },
      },
    },
    {
      name: "media_type",
      type: "string",
      title: "Media Type",
      options: {
        layout: "radio",
        list: [
          { title: "Photo", value: "photo" },
          { title: "Video", value: "video" },
        ],
      },
      initialValue: "Photo",
      validation: (Value) => Value.required().error("Project Must Have a Type"),
    },
    {
      title: "Work Type",
      name: "work_type",
      type: "array",
      of: [{ type: "reference", to: [{ type: "work_types" }] }],
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
      title: "Header Image",
      fieldset: "photo",
    },

    {
      name: "video_type",
      type: "string",
      title: "Video Type",
      fieldset: "video",
      options: {
        layout: "radio",
        list: [
          {
            title: "URL",
            value: "url",
          },
          { title: "Upload", value: "upload" },
        ],
      },
    },
    {
      name: "cover_video",
      type: "file",
      fieldset: "video",
      title: "Cover Video",
      hidden: ({ document }) => document?.video_type !== "upload",
    },
    {
      name: "cover_video_url",
      type: "url",
      fieldset: "video",
      title: "Cover Video URL",
      hidden: ({ document }) => document?.video_type !== "url",
    },
    {
      name: "media",
      type: "array",
      title: "Images & Video",
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
        {
          name: "video",
          type: "file",
          title: "Video",
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
    },
  ],
  initialValue: async () => {
    const mainCategoryResponse = await fetch(
      `https://o42gmrdk.api.sanity.io/v2022-03-25/data/query/development?query=*[_type == "main_category"] | order(_createdAt asc)`
    );
    const mainCategoryResJson = await mainCategoryResponse.json();
    const mainCategories = mainCategoryResJson.result;

    const subCategoryResponse = await fetch(
      `https://o42gmrdk.api.sanity.io/v2022-03-25/data/query/development?query=*[_type == "sub_category"] | order(_createdAt asc)`
    );
    const subCategoryResJson = await subCategoryResponse.json();
    const subCategories = subCategoryResJson.result;
    return {
      main_category: { _ref: mainCategories[0]._id },
      sub_category: { _ref: subCategories[0]._id },
    };
  },
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
