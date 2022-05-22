import { Route, Routes } from "react-router-dom";

import AllMeetups from "./pages/AllMeetups";
import Favourites from "./pages/Favourite";
import NewMeetups from "./pages/NewMeetups";
import MainNavigation from "./components/layout/MainNavigation";


function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AllMeetups />} />
        <Route path="/new-meetups" element={<NewMeetups />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </div>
  );
}

export default App;
