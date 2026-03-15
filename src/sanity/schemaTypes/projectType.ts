import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "href", title: "Project Link", type: "url" }),
    defineField({ name: "dates", title: "Dates", type: "string", description: "e.g. Jul 2023 - Jul 2023" }),
    defineField({ name: "active", title: "Active?", type: "boolean" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 4 }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "links",
      title: "Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "type", title: "Type", type: "string", description: "e.g. Website, Source, NPM" }),
            defineField({ name: "href", title: "URL", type: "url" }),
          ],
          preview: {
            select: { title: "type", subtitle: "href" },
          },
        },
      ],
    }),
    defineField({ name: "image", title: "Image Path", type: "string", description: "Path to image, e.g. /linkkar.png" }),
    defineField({ name: "video", title: "Video URL", type: "string" }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "installation", title: "Installation Instructions", type: "text", rows: 3 }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower number = shown first",
    }),
  ],
  orderings: [
    { title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "title", subtitle: "dates" },
  },
});
