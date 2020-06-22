module.exports = {
  docs: [
    "intro",
    "docsguide",
    {
      type: "category",
      label: "Architecture",
      items: [
        "architecture/overview",
        "architecture/connections",
        "architecture/matching",
      ],
    },
    {
      type: "category",
      label: "Installation",
      items: [
        "installation/introduction",
        "installation/itp",
        "installation/mmo",
        "installation/sp",
        "installation/mojaloop",
      ],
    },
    {
      type: "category",
      label: "Use Cases",
      items: ["usecases", "uclist", "uccreation"],
    },
    { type: "category", label: "Test Cases", items: ["tclist", "tctemplate"] },
    {
      type: "category",
      label: "User Manual",
      items: ["quickguide", "session", "tests", "results"],
    },
  ],
};
