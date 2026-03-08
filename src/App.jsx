import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Stack from "./sections/Stack";
import Contact from "./sections/Contact";
import "./App.css";

export default function App() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
