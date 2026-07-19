import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import SideNav from "./components/SideNav";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Post from "./pages/Post";

// scroll to top when the route path changes (but let in-page #anchors do their thing)
function ScrollManager() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (!window.location.hash) window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <SideNav />
      <ScrollManager />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Post />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </>
  );
}
