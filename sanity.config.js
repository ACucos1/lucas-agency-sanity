// sanity.config.js
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { media, mediaAssetSource } from "sanity-plugin-media";
import schemas from "./schemas/schema";
import deskStructure from "./deskStructure";

export default defineConfig({
  title: "Point Cloud Creative",
  projectId: "o42gmrdk",
  dataset: "production",
  plugins: [deskTool({ structure: deskStructure }), media()],
  schema: {
    types: schemas,
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
