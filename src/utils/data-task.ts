export type Status = "todo" | "incompleted" | "done";
export type Task = {
  id: string;
  title: string;
  status: Status;
  point?: number;
};

export const statuses:Status[] = ["todo" , "incompleted" , "done"];


export const tasks: Task[] = [
  {
    id: "BUS-1",
    status: "done",
    title: "Doing Some Researc",
  },
  {
    id: "BUS-2",
    status: "incompleted",
    title: "Youtube Upload Thingi",
    point: 5,
  },
  {
    id: "BUS-3",
    status: "done",
    title: "Do some exercises",
  },
  {
    id: "BUS-4",
    status: "todo",
    title: "Write Some Essay",
    point: 10
  }
];
