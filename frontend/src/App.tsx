import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import { exercises } from "./exercises/registry";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<Navigate to={`/${exercises[0].path}`} replace />}
          />
          {exercises.map((exercise) => {
            const Component = exercise.component;
            return (
              <Route
                key={exercise.id}
                path={exercise.path}
                element={<Component />}
              />
            );
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
