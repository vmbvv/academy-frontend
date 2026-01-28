import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Exercise1 from "./exercises/Exercise1";
import Exercise2 from "./exercises/Exercise2";
import Exercise3 from "./exercises/Exercise3";
import Exercise4 from "./exercises/Exercise4";
import Exercise5 from "./exercises/Exercise5";
import Exercise6 from "./exercises/Exercise6";
import Exercise7 from "./exercises/Exercise7";
import Exercise8 from "./exercises/Exercise8";
import Exercise9 from "./exercises/Exercise9";
import Exercise10 from "./exercises/Exercise10";
import Exercise11 from "./exercises/Exercise11";
import Exercise12 from "./exercises/Exercise12";
import Exercise13 from "./exercises/Exercise13";
import Exercise14 from "./exercises/Exercise14";
import Exercise15 from "./exercises/Exercise15";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/ex1" replace />} />
          <Route path="ex1" element={<Exercise1 />} />
          <Route path="ex2" element={<Exercise2 />} />
          <Route path="ex3" element={<Exercise3 />} />
          <Route path="ex4" element={<Exercise4 />} />
          <Route path="ex5" element={<Exercise5 />} />
          <Route path="ex6" element={<Exercise6 />} />
          <Route path="ex7" element={<Exercise7 />} />
          <Route path="ex8" element={<Exercise8 />} />
          <Route path="ex9" element={<Exercise9 />} />
          <Route path="ex10" element={<Exercise10 />} />
          <Route path="ex11" element={<Exercise11 />} />
          <Route path="ex12" element={<Exercise12 />} />
          <Route path="ex13" element={<Exercise13 />} />
          <Route path="ex14" element={<Exercise14 />} />
          <Route path="ex15" element={<Exercise15 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
