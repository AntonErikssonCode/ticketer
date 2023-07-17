import { createContext } from "react";
import { emptyTemplate } from "./config/defaultTemplate";

export const AppContext = createContext({
  data: emptyTemplate,
  handleSetData: (data: any) => {},
  addProject: (newProject: any) => {},
  renameProject: (newName: string, index: number) => {},
  removeProject: (index: number) => {},
  addTicket: (newTicket: any, projectIndex: number, type: string) => {},
  deleteTicket: (projectIndex: number, type: string, ticketIndex: number) => {},
});
