import { createContext } from "react";
import {emptyTemplate} from "./config/defaultTemplate";

export const AppContext = createContext({
  data: emptyTemplate,
  handleSetData: (data: any) => {},
  addProject: (newProject: any) => {},
});
