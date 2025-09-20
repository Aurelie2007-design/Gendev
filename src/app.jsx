import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./assets/components/navbar";
import Accueil from "./assets/accueil";
import { useAuth } from "./store/useAuth";
import { Toaster } from "react-hot-toast";
import SignUpPage from "./assets/components/signIn";
import LogInPage from "./assets/components/logIn";
import Footer from "./assets/components/footer";
import Propos from "./assets/propos";
import Formations from "./assets/formations";
import Services from "./assets/services";
import Edition from "./assets/Edition";
import Projects from "./assets/projects";
import Temoignages from "./assets/temoignages";
import Actualites from "./assets/actualites";
import Contact from "./assets/contact";

const App = () => {
  const { User } = useAuth();
  return (
    <div>
      <Navbar />
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/propos" element={<Propos />} />
        <Route path="/formation" element={<Formations />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/temoignages" element={<Temoignages />} />
        <Route path="/actualites" element={<Actualites />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/edition/:id" element={<Edition />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
