import React from "react";
import { Route, Routes } from "react-router-dom";
import "./bootstrap.css";

// home page
import Section from "./components/Section/Section";
// Pages
import Mac from "./Pages/Mac/Mac";
import Ipad from "./Pages/Ipad/Ipad";
import Iphone from "./Pages/Iphone/iphone";
import Watch from "./Pages/Watch/Watch";
import TV from "./Pages/TV/TV";
import Four04 from "./Pages/Four04/Four04";
import SharedLayOut from "./Components/SharedLayOut";
import Productpage from "./Pages/Productpage/Productpage";
import Music from "./Pages/Music/Music";
import Support from "./Pages/Support/Support";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayOut />}>
          <Route path="/" element={<Section />} />
          <Route path="/mac" element={<Mac />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/ipad" element={<Ipad />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/music" element={<Music />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/support" element={<Support />} />
          <Route path="/iphone/:ProductID" element={<Productpage />} />

          <Route path="*" element={<Four04 />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
