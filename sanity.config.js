// sanity.config.js
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { media, mediaAssetSource } from "sanity-plugin-media";
import { colorInput } from "@sanity/color-input";
import schemas from "./schemas/schema";
import deskStructure from "./deskStructure";

export default defineConfig({
  title: "Point Cloud Creative",
  projectId: "o42gmrdk",
  dataset: "development",
  plugins: [deskTool({ structure: deskStructure }), media(), colorInput()],
  schema: {
    types: schemas,
    templates: [
      {
        id: "subcategories-by-maincategory",
        title: "Sub Categories by Main Category",
        description: "Sub Categories under specific Main category",
        schemaType: "sub_category",
        parameters: [{ name: "mainCategoryId", type: "string" }],
        value: (params) => ({
          parent_category: { _type: "reference", _ref: params.mainCategoryId },
        }),
      },
      {
        id: "projects-by-categories",
        title: "Projects",
        description: "Projects under main category and sub category",
        schemaType: "project",
        parameters: [
          { name: "mainCategoryId", type: "string" },
          { name: "subCategoryId", type: "string" },
        ],
        value: (params) => ({
          main_category: { _type: "reference", _ref: params.mainCategoryId },
          sub_category: { _type: "reference", _ref: params.subCategoryId },
        }),
      },
    ],
  },
  form: {
    file: {
      assetSources: (previousAssetSources) => {
        return previousAssetSources.filter(
          (assetSource) => assetSource !== mediaAssetSource
        );
      },
    },
  },
});
