import React from "react";

function Header() {
  return (
    <header className="header header-visual">
      <div className="header-left">
        <div className="brand-wrap">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135679.png"
            alt="Legal knowledge"
            className="brand-icon"
          />
          <div>
            <div className="brand">LegalWiki</div>
            <div className="brand-tag">Modern Legal Knowledge Platform</div>
          </div>
        </div>
      </div>

      <div className="header-center">
        <input
          type="text"
          className="input search-input"
          placeholder="Search Acts, Cases, Judgments…"
        />
      </div>

      <div className="header-right">
        <button className="btn btn-ghost">Login</button>
        <button className="btn btn-primary">Contribute</button>
      </div>
    </header>
  );
}

export default Header;
