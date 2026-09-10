export const UPCOMING_DUMMY_DATA = [
  {
    id: 1,
    key: "mon",
    day: "Monday",
    isCompleted: true,
    dayLabel: null,
  },
  {
    id: 2,
    key: "tue",
    day: "Tuesday",
    isCompleted: true,
    dayLabel: null,
  },
  {
    id: 3,
    key: "wed",
    day: "Wednesday",
    isCompleted: false,
    dayLabel: "Today ‧ Wednesday",
  },
  {
    id: 4,
    key: "thu",
    day: "Thursday",
    isCompleted: false,
    dayLabel: "Tomorrow ‧ Thursday",
    upcomingTasks: [
      {
        id: 1,
        isCompleted: true,
        taskName: "Work on guardrail mapping in atlas.",
      },
      {
        id: 2,
        isCompleted: true,
        taskName: "Work on 360 button for sign module.",
      },
      {
        id: 3,
        isCompleted: false,
        taskName: "Work on 360 button for sign module.",
      },
      {
        id: 4,
        isCompleted: false,
        taskName: "Work on 360 button for sign module.",
      },
    ],
  },
  {
    id: 5,
    key: "fri",
    day: "Friday",
    isComplted: false,
    dayLabel: "10 Sep ‧ Friday",
    upcomingTasks: [
      {
        id: 1,
        isCompleted: false,
        taskName: "Work on guardrail mapping in 3dViewer.",
      },
      {
        id: 2,
        isCompleted: false,
        taskName: "Work on 360 button for zone module.",
      },
    ],
  },
  {
    id: 6,
    key: "sat",
    day: "Saturday",
    isCompleted: false,
    dayLabel: "11 Sep ‧ Saturday",
    upcomingTasks: [],
  },
  {
    id: 7,
    key: "sun",
    day: "Sunday",
    isCompleted: false,
    dayLabel: "12 Sep ‧ Sunday",
    upcomingTasks: [
      {
        id: 1,
        isCompleted: true,
        taskName: "Work on guardrail mapping in atlas.",
      },
      {
        id: 2,
        isCompleted: false,
        taskName: "Work on zone button for sign module.",
      },
      {
        id: 3,
        isCompleted: true,
        taskName: "Work on 360 button for culvert module.",
      },
    ],
  },
];

export const POP_UP_TASKS = [
  {
    id: 1,
    isCompleted: true,
    taskName: "Work on guardrail mapping in atlas.",
  },
  {
    id: 2,
    isCompleted: true,
    taskName: "Work on 360 button for sign module.",
  },
  {
    id: 3,
    isCompleted: false,
    taskName: "Work on 360 button for sign module.",
  },
  {
    id: 4,
    isCompleted: false,
    taskName: "Work on 360 button for sign module.",
  },
];
