import type { ComponentType } from "react";
import Exercise1 from "./Exercise1";
import Exercise2 from "./Exercise2";
import Exercise3 from "./Exercise3";
import Exercise4 from "./Exercise4";
import Exercise5 from "./Exercise5";
import Exercise6 from "./Exercise6";
import Exercise7 from "./Exercise7";
import Exercise8 from "./Exercise8";
import Exercise9 from "./Exercise9";
import Exercise10 from "./Exercise10";
import Exercise11 from "./Exercise11";
import Exercise12 from "./Exercise12";
import Exercise13 from "./Exercise13";
import Exercise14 from "./Exercise14";
import Exercise15 from "./Exercise15";

export type ExerciseConfig = {
  id: number;
  title: string;
  path: string;
  component: ComponentType;
};

export const exercises: ExerciseConfig[] = [
  { id: 1, title: "Greeting Component", path: "ex1", component: Exercise1 },
  { id: 2, title: "Counter", path: "ex2", component: Exercise2 },
  { id: 3, title: "Toggle Visibility", path: "ex3", component: Exercise3 },
  { id: 4, title: "Props & Cards", path: "ex4", component: Exercise4 },
  { id: 5, title: "Todo List", path: "ex5", component: Exercise5 },
  { id: 6, title: "Conditional Rendering", path: "ex6", component: Exercise6 },
  { id: 7, title: "Lists & Keys", path: "ex7", component: Exercise7 },
  { id: 8, title: "useEffect Demo", path: "ex8", component: Exercise8 },
  { id: 9, title: "Stopwatch", path: "ex9", component: Exercise9 },
  { id: 10, title: "Form Validation", path: "ex10", component: Exercise10 },
  { id: 11, title: "useRef Demo", path: "ex11", component: Exercise11 },
  { id: 12, title: "Context API", path: "ex12", component: Exercise12 },
  { id: 13, title: "Custom Hook", path: "ex13", component: Exercise13 },
  { id: 14, title: "Fetch API Data", path: "ex14", component: Exercise14 },
  { id: 15, title: "Shopping Cart", path: "ex15", component: Exercise15 },
];
