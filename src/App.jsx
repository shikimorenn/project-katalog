import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./commponent/Navbar";
import HeroSection from "./commponent/HeroSection";
import Section from "./commponent/Section";
import About from "./commponent/About";
import Quest from "./commponent/Quest";
import Footer from "./commponent/Footer";
import Detail from "./pages/Detail";
import Actionlist from "./pages/Actionlist";
import FightingList from "./pages/Fightinglist";
import HorrorList from "./pages/Horrorlist";
import RacingList from "./pages/Racinglist";
import ShootingList from "./pages/Shootinglist";
import SportList from "./pages/Sportlist";
import img1 from "./assets/slendrina.jpg";
import img2 from "./assets/nascar.jpg";
import img3 from "./assets/animefight.jpg";
import img4 from "./assets/childhouse.jpg";

function ScrollToSection() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);

      setTimeout(() => {
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  }, [hash]);

  return null;
}

function App() {
  const detailProducts = [
    {
      id: 1,
      title: "Slendrina 4 Horror Classic Games",
      oldPrice: "Rp. 270.000",
      price: "Rp. 250.000",
      img: img1,
      description:
        "Face the terror again in Slendrina 4. Survive the nightmare in dark environments with improved AI.",
      features: [
        "New jump scares",
        "AI enemy improvements",
        "More puzzles",
        "Multiple endings",
      ],
    },
    {
      id: 2,
      title: "Nascar Racing Online",
      oldPrice: "Rp. 175.000",
      price: "Rp. 150.000",
      img: img2,
      description:
        "Start your engines! Experience intense online racing on official NASCAR tracks.",
      features: [
        "Online Multiplayer Racing",
        "Car Customization",
        "Official Tracks",
        "Realistic Simulation",
      ],
    },
    {
      id: 3,
      title: "Fighting Anime 3D Online",
      oldPrice: "Rp. 150.000",
      price: "Rp. 100.000",
      img: img3,
      description: "Explore fast-paced anime 3D battles with global fighters.",
      features: [
        "Real-time PvP",
        "Unique ultimate attacks",
        "Dozens of characters",
        "Skill-based combat",
      ],
    },
    {
      id: 4,
      title: "Horror House 2",
      oldPrice: "Rp. 300.000",
      price: "Rp. 250.000",
      img: img4,
      description:
        "Explore the abandoned house and uncover the source of terrifying hauntings.",
      features: [
        "Unpredictable ghost AI that reacts to your actions",
        "Challenging puzzles and hidden objects to discover",
        "Immersive 3D sound design that heightens fear",
        "Limited resources for true survival horror experience",
      ],
    },
    {
      id: 5,
      title: "Fighting Anime 3D Online",
      oldPrice: "Rp. 150.000",
      price: "Rp. 100.000",
      img: img3,
      description: "Explore fast-paced anime 3D battles with global fighters.",
      features: [
        "Real-time PvP",
        "Unique ultimate attacks",
        "Dozens of characters",
        "Skill-based combat",
      ],
    },
    {
      id: 6,
      title: "Fighting Anime 3D Online",
      oldPrice: "Rp. 150.000",
      price: "Rp. 100.000",
      img: img3,
      description: "Explore fast-paced anime 3D battles with global fighters.",
      features: [
        "Real-time PvP",
        "Unique ultimate attacks",
        "Dozens of characters",
        "Skill-based combat",
      ],
    },
  ];

  return (
    <BrowserRouter>
      <ScrollToSection />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <div className="pt-12"></div>
              <Section />
              <About />
              <Quest />
            </>
          }
        />
        <Route
          path="/detail/:id"
          element={<Detail products={detailProducts} />}
        />
        <Route path="/actionlist" element={<Actionlist />} />
        <Route path="/fightinglist" element={<FightingList />} />
        <Route path="/horrorlist" element={<HorrorList />} />
        <Route path="/racinglist" element={<RacingList />} />
        <Route path="/shootinglist" element={<ShootingList />} />
        <Route path="/Sportlist" element={<SportList />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
