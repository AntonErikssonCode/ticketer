const emptyTemplate = {
  projects: [
    {
      name: "Weather App",
      priority: "low",
      notStarted: [{ name: "kick ass",  priority: "low", }, { name: "kick ass",  priority: "low", }],
      inProgress: [{ name: "kick ass",  priority: "low", }, { name: "kick ass",  priority: "low", }],
      isDone: [{ name: "kick ass",  priority: "low", }],
    },
    {
      name: "Idle Game",
      priority: "moderate",
      notStarted: [],
      inProgress: [
        { name: "kick ass" ,  priority: "low",},
        { name: "kick ass",  priority: "low", },
        { name: "kick ass",  priority: "low", },
      ],
      isDone: [{ name: "kick ass",  priority: "low", }, { name: "kick ass",  priority: "low", }],
    },
    {
      name: "Notion",
      priority: "high",
      notStarted: [{ name: "kick ass" ,  priority: "low",}, { name: "kick ass" ,  priority: "low",}],
      inProgress: [{ name: "kick ass",  priority: "low", }, { name: "kick ass",  priority: "low", }],
      isDone: [{ name: "kick ass",  priority: "low", }, { name: "kick ass" ,  priority: "low",},{ name: "kick ass",  priority: "low", }, { name: "kick ass",  priority: "low", },{ name: "kick ass",  priority: "low", }, { name: "kick ass" ,  priority: "low",},{ name: "kick ass" ,  priority: "low",}, { name: "kick ass",  priority: "low", },{ name: "kick ass",  priority: "low", }, { name: "kick ass",  priority: "low", }],
    },
  ],
};
const emptyProject = {
  name: "Empty",
  priority: "low",
  notStarted: [],
  inProgress: [],
  isDone: [],
};

const emptyTicket = { name: "Empty Ticket" ,  priority: "low",};

export { emptyTemplate, emptyProject, emptyTicket };
