import React, { useState } from "react";
import Nav from "./Nav";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import "../styles/Main.css";

export default function Main() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = (page) => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <main>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </main>
  );
}
