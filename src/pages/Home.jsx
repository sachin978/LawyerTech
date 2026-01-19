import React from "react";
import SearchBar from "../components/SearchBar";

function Home() {
  return (
    <div className="container">
      {/* HERO WITH BACKGROUND IMAGE */}
      <section className="home-hero">
        <h1>Modern Legal Knowledge, Built for the Digital Age</h1>

        <p>
          Explore Acts, Case Laws, and legal analysis through a clean,
          structured, and professionally curated platform.
        </p>

        <div className="hero-actions">
          <button className="btn btn-primary">
            Explore Laws
          </button>

          <button className="btn btn-ghost">
            Browse Case Laws
          </button>
        </div>

        <div style={{ marginTop: "24px", maxWidth: "480px" }}>
          <SearchBar />
        </div>
      </section>

      {/* REST OF HOME CONTENT */}
      <section>
        <h2>Primary Laws</h2>
        {/* existing cards/grid */}
      </section>
    </div>
  );
}

export default Home;
