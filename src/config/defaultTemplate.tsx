const emptyTemplate = {
  projects: [
    {
      name: "Weather App",
      priority: "low",
      notStarted: [{ name: "kick ass" }, { name: "kick ass" }],
      inProgress: [{ name: "kick ass" }, { name: "kick ass" }],
      isDone: [{ name: "kick ass" }, { name: "kick ass" }],
    },
    {
      name: "Idle Game",
      priority: "moderate",
      notStarted: [],
      inProgress: [
        { name: "kick ass" },
        { name: "kick ass" },
        { name: "kick ass" },
      
      ],
      isDone: [{ name: "kick ass" }, { name: "kick ass" }],
    },
    {
      name: "Notion",
      priority: "high",
      notStarted: [{ name: "kick ass" }, { name: "kick ass" }],
      inProgress: [{ name: "kick ass" }, { name: "kick ass" }],
      isDone: [],
    },
  ],
};
export default emptyTemplate;
