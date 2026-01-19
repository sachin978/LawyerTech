import React from "react";

function Article() {
  return (
    <div className="container article-page">
      {/* Hero with Illustration */}
      <section className="article-hero visual-hero">
        <div className="article-hero-text">
          <span className="article-category">Constitutional Law</span>
          <h1>Right to Life under Article 21</h1>
          <p className="article-subtitle">
            How Indian constitutional courts expanded personal liberty
            through landmark judgments.
          </p>

          <div className="article-meta">
            <strong>Adv. R. Sharma</strong>
            <span className="meta-muted"> · Updated Jan 2026</span>
          </div>
        </div>

        <img
          src="https://illustrations.popsy.co/blue/law.svg"
          alt="Law illustration"
          className="hero-illustration"
        />
      </section>

      {/* Content */}
      <section className="article-content">
        <p className="article-paragraph">
          Article 21 stands at the heart of India’s constitutional democracy.
          Over decades, the judiciary transformed it from a narrow guarantee
          into a living source of rights.
        </p>

        <h2>Core Text</h2>
        <blockquote className="article-quote">
          “No person shall be deprived of his life or personal liberty
          except according to procedure established by law.”
        </blockquote>

        <h2>Why It Matters</h2>
        <div className="feature-cards">
          <div className="card feature-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/942/942748.png"
              alt=""
            />
            <p>Human Dignity</p>
          </div>

          <div className="card feature-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2784/2784459.png"
              alt=""
            />
            <p>Personal Liberty</p>
          </div>

          <div className="card feature-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1041/1041873.png"
              alt=""
            />
            <p>Due Process</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Article;
