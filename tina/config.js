import { defineConfig } from "tinacms";
import page from "./collections/page";
import post from "./collections/post";

export const config = defineConfig({
  // ✅ Keeping local mode by omitting clientId and token
  branch:
    process.env.NEXT_PUBLIC_TINA_BRANCH ||
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
    process.env.HEAD ||
    "main",

  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },

  build: {
    publicFolder: "public",
    outputFolder: "admin",
  },

  schema: {
    collections: [
      page,
      post,
      {
        name: "docs",
        label: "Docusaurus Docs",
        path: "docs",
        format: "md",
        frontmatterFormat: "yaml",
	match: {
    	  include: "**/*",
 	},      
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
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

export default config;

