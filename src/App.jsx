import React from "react";
import { Route, Routes } from "react-router-dom";
import "./bootstrap.css";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

// home page
import Section from "./Components/Section/Section";
// Pages
import Mac from "./Pages/Mac/Mac";
import Ipad from "./Pages/Ipad/Ipad";
import Iphone from "./Pages/Iphone/iphone";
import Watch from "./Pages/Watch/Watch";
import TV from "./Pages/TV/TVandHome";
import Four04 from "./Pages/Four04/Four04";
import SharedLayOut from "./Components/SharedLayOut";
import Music from "./Pages/Music/Music";
import Support from "./Pages/Support/Support";
import Store from "./Pages/Store/Store";
import Iphonepage from "./Pages/Productpage/Iphonepage";
import Ipadpage from "./Pages/Productpage/Ipadpage";
import Macpage from "./Pages/Productpage/Macpage";
import Watchpage from "./Pages/Productpage/Watchpage";
import Storepage from "./Pages/Productpage/Storepage";
import Airpods from "./Pages/Airpod/Airpods";
import Airpodspage from "./Pages/Productpage/Airpodspage";
import Vision from "./Pages/Vision/Vision";
import Visionpage from "./Pages/Productpage/Visionpage";
import TvandHomepage from "./Pages/Productpage/TvandHomepage";
import TVandHome from "./Pages/TV/TVandHome";
import Entertainmentpage from "./Pages/Productpage/Entertainmentpage";
import Entertainment from "./Pages/Entertainment/Entertainment";
import Accessories from "./Pages/Accessories/Accessories";
import Accessoriespage from "./Pages/Productpage/Accessoriespage";
import Supportpage from "./Pages/Productpage/Supportpage";
import Search from "./Pages/Search/Search";
import Cart from "./Pages/Cart/Cart";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayOut />}>
          <Route path="/" element={<Section />} />
          <Route path="/store" element={<Store />} />
          <Route path="/mac" element={<Mac />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/ipad" element={<Ipad />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/airpods" element={<Airpods />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/music" element={<Music />} />
          <Route path="/tvandhome" element={<TVandHome />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/support" element={<Support />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/iphone/:ProductID" element={<Iphonepage />} />
          <Route path="/ipad/:ProductID" element={<Ipadpage />} />
          <Route path="/mac/:ProductID" element={<Macpage />} />
          <Route path="/watch/:ProductID" element={<Watchpage />} />
          <Route path="/store/:ProductID" element={<Storepage />} />
          <Route path="/airpods/:ProductID" element={<Airpodspage />} />
          <Route path="/vision/:ProductID" element={<Visionpage />} />
          <Route path="/tvandhome/:ProductID" element={<TvandHomepage />} />
          <Route
            path="/entertainment/:ProductID"
            element={<Entertainmentpage />}
          />
          <Route path="/accessories/:ProductID" element={<Accessoriespage />} />
          <Route path="/support/:ProductID" element={<Supportpage />} />

          <Route path="*" element={<Four04 />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
