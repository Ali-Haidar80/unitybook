import "./app.css";
import Feed from "./pages/Feed";
import { Routes, Route, Outlet } from "react-router-dom";
import Friends from "./pages/Friends";
import Videos from "./pages/Videos";
import Marketplace from "./pages/Marketplace";
import Groups from "./pages/Groups";
import FriendRequests from "./pages/FriendRequests";
import Profile from "./pages/Profile";
import Sidebar from "./components/sidebar";
import Reels from "./pages/Reels";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [hideNavbar, setHideNavbar] = useState(true);

  // Logic to hide/show the navbar based on route or conditions
  const shouldHideNavbar = window.location.pathname === '/videos/reels';

  return (
    <>
    {!shouldHideNavbar && <Header />}
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/friends" element={<Outlet />}>
          <Route index element={<Friends />} />
          <Route path="requests" element={<FriendRequests />} />
        </Route>
        <Route path="/videos" element={<Outlet />}>
          <Route index element={<Videos />} />
          <Route path="reels" element={<Reels Hide={setHideNavbar} />} />
        </Route>

        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/videos" element={<Videos />} /> */}
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/bookmarks" element={<Sidebar />} />
      </Routes>
    </>
  );
}

export default App;
