import { lazy, type ComponentType, type LazyExoticComponent } from "react";

const Exercise1 = lazy(() => import("./Exercise1"));
const Exercise2 = lazy(() => import("./Exercise2"));
const Exercise3 = lazy(() => import("./Exercise3"));
const Exercise4 = lazy(() => import("./Exercise4"));
const Exercise5 = lazy(() => import("./Exercise5"));
const Exercise6 = lazy(() => import("./Exercise6"));
const Exercise7 = lazy(() => import("./Exercise7"));
const Exercise8 = lazy(() => import("./Exercise8"));
const Exercise9 = lazy(() => import("./Exercise9"));
const Exercise10 = lazy(() => import("./Exercise10"));
const Exercise11 = lazy(() => import("./Exercise11"));
const Exercise12 = lazy(() => import("./Exercise12"));
const Exercise13 = lazy(() => import("./Exercise13"));
const Exercise14 = lazy(() => import("./Exercise14"));
const Exercise15 = lazy(() => import("./Exercise15"));

export type ExerciseConfig = {
  id: number;
  title: string;
  path: string;
  component: LazyExoticComponent<ComponentType>;
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
