import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Paths } from "./navigate";
import * as Pages from "./pages";
import { NotFound } from "./common/NotFound";

console.log("Pages", <Pages.Mesas />);

function App() {
  return (
    <div>
      <header>Header</header>
      <BrowserRouter>
        <Routes>
          <Route path={Paths.Home} element={<h1>Home</h1>} />
          <Route path={Paths.Mesas} element={<Pages.Mesas />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
