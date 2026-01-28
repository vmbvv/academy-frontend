import { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import RouteErrorBoundary from "./components/RouteErrorBoundary";
import { exercises } from "./exercises/registry";
import Home from "./pages/Home";

function App() {
  const firstPath = exercises[0]?.path;
  const fallback = (
    <div className="bg-slate-800 p-8 rounded-2xl max-w-lg shadow-xl shadow-black/10">
      <div className="text-slate-300">Loading exercise...</div>
    </div>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {exercises.map((exercise) => {
            const Component = exercise.component;
            return (
              <Route
                key={exercise.id}
                path={exercise.path}
                element={
                  <Suspense fallback={fallback}>
                    <RouteErrorBoundary>
                      <Component />
                    </RouteErrorBoundary>
                  </Suspense>
                }
              />
            );
          })}
          <Route
            path="*"
            element={
              firstPath ? <Navigate to={firstPath} replace /> : <Home />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
