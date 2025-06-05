import { defineConfig } from "tinacms";

export default defineConfig({
  contentApiUrlOverride: "/admin/api/graphql",
  build: {
    publicFolder: "static",
    outputFolder: "admin",
  },
  media: {
    publicFolder: "static",
    mediaRoot: "images",
  },
  schema: {
    collections: [
      {
        name: "docs",
        label: "Docs",
        path: "docs",
        format: "md",
        frontmatterFormat: "yaml",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Content",
            isBody: true,
          },
        ],
      },
    ],
  },
});

