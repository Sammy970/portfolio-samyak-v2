import { groq } from "next-sanity";

export const profileQuery = groq`*[_type == "profile"][0]{
  name,
  initials,
  url,
  location,
  locationLink,
  description,
  summary,
  avatarUrl,
  skills,
  contact
}`;

export const workQuery = groq`*[_type == "work"] | order(order asc) {
  company,
  href,
  badges,
  location,
  title,
  logoUrl,
  start,
  end,
  description
}`;

export const educationQuery = groq`*[_type == "education"] | order(order asc) {
  school,
  href,
  degree,
  logoUrl,
  start,
  end
}`;

export const projectsQuery = groq`*[_type == "project"] | order(order asc) {
  title,
  href,
  dates,
  active,
  description,
  technologies,
  links,
  image,
  video,
  features,
  installation
}`;

export const certificationsQuery = groq`*[_type == "certification"] | order(order asc) {
  title,
  provider,
  issuer,
  href,
  date,
  logoUrl,
  image
}`;

export const hackathonsQuery = groq`*[_type == "hackathon"] | order(order asc) {
  title,
  dates,
  location,
  description,
  image,
  mlh,
  links
}`;
