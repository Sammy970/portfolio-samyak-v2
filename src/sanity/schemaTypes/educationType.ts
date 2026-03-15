import { defineField, defineType } from "sanity";

export const educationType = defineType({
  name: "education",
  title: "Education",
  type: "document",
  fields: [
    defineField({ name: "school", title: "School / University", type: "string", validation: (r) => r.required() }),
    defineField({ name: "href", title: "School Website", type: "url" }),
    defineField({ name: "degree", title: "Degree", type: "string" }),
    defineField({ name: "logoUrl", title: "Logo Path", type: "string", description: "Path to logo image, e.g. /vit.png" }),
    defineField({ name: "start", title: "Start Year", type: "string" }),
    defineField({ name: "end", title: "End Year", type: "string" }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
  preview: {
    select: { title: "school", subtitle: "degree" },
  },
});
