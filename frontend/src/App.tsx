import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import { exercises } from "./exercises/registry";

function App() {
  const firstPath = exercises[0]?.path;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={firstPath ? <Navigate to={firstPath} replace /> : <div />}
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
          <Route
            path="*"
            element={firstPath ? <Navigate to={firstPath} replace /> : <div />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
