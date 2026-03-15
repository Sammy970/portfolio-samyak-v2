import { defineField, defineType } from "sanity";

export const hackathonType = defineType({
  name: "hackathon",
  title: "Hackathons",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "dates", title: "Dates", type: "string", description: "e.g. December 3rd - 5th, 2023" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 4 }),
    defineField({ name: "image", title: "Image Path", type: "string", description: "Path to image, e.g. /kavach.png" }),
    defineField({ name: "mlh", title: "MLH Badge URL", type: "url" }),
    defineField({
      name: "links",
      title: "Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Label", type: "string" }),
            defineField({ name: "href", title: "URL", type: "url" }),
          ],
          preview: {
            select: { title: "title", subtitle: "href" },
          },
        },
      ],
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "dates" },
  },
});
