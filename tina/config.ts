import { defineConfig } from "tinacms";

export default defineConfig({
  clientId: "b4a3ad44-9b40-4236-b87e-c1eb84120adf", 
  token: "40b5eb1feb48b4759d42c7d906abc5f049e8d7e1",
  branch: "main", // ✅ moved to root

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

