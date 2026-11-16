import { useEffect } from "react";
import { useRoute } from "./lib/router";
import AlfiePlatform from "./pages/AlfiePlatform";
import Trust from "./pages/Trust";
import Developers from "./pages/Developers";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

export default function App() {
  const { path, hash } = useRoute();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      return;
    }
    let tries = 0;
    const attempt = () => {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView();
      } else if (tries++ < 12) {
        requestAnimationFrame(attempt);
      }
    };
    requestAnimationFrame(attempt);
  }, [path, hash]);

  switch (path) {
    case "/trust":
      return <Trust />;
    case "/developers":
      return <Developers />;
    case "/about":
      return <About />;
    case "/contact":
      return <Contact />;
    case "/privacy":
      return <Privacy />;
    case "/terms":
      return <Terms />;
    default:
      return <AlfiePlatform />;
  }
}
