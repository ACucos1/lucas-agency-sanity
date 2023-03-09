export default {
  name: "contactPage",
  type: "document",
  title: "Contact",
  fields: [
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
    },
    {
      name: "socialLinks",
      type: "array",
      of: [
        {
          name: "socialLink",
          type: "string",
          title: "Social Link",
        },
      ],
    },
  ],
};
