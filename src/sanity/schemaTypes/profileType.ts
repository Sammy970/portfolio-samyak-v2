import { defineField, defineType } from "sanity";

export const profileType = defineType({
  name: "profile",
  title: "Profile",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "initials", title: "Initials", type: "string" }),
    defineField({ name: "url", title: "Site URL", type: "url" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "locationLink", title: "Location Map Link", type: "url" }),
    defineField({ name: "description", title: "Short Description", type: "text", rows: 2 }),
    defineField({ name: "summary", title: "Summary", type: "text", rows: 5 }),
    defineField({ name: "avatarUrl", title: "Avatar URL", type: "string", description: "Path to avatar image, e.g. /me.png" }),
    defineField({
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "contact",
      title: "Contact",
      type: "object",
      fields: [
        defineField({ name: "email", title: "Email", type: "string" }),
        defineField({ name: "tel", title: "Phone", type: "string" }),
        defineField({
          name: "github",
          title: "GitHub URL",
          type: "url",
        }),
        defineField({
          name: "linkedin",
          title: "LinkedIn URL",
          type: "url",
        }),
      ],
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "description" },
  },
});
