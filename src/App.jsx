import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Work from "./components/Work";
import Stack from "./components/Stack";
import Education from "./components/Education";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-paper font-body">
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Work />
        <Stack />
        <Education />
      </main>
      <Footer />
    </div>
  );
}
