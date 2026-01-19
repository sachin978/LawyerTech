import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <strong>LegalWiki</strong>
          <p className="text-small text-muted">
            Neutral legal knowledge platform for professionals, students,
            and researchers.
          </p>
        </div>

        <div>
          <p className="footer-title">Resources</p>
          <p>Acts & Sections</p>
          <p>Case Laws</p>
          <p>Legal Articles</p>
        </div>

        <div>
          <p className="footer-title">Legal</p>
          <p>Disclaimer</p>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} LegalWiki · All rights reserved
      </div>
    </footer>
  );
}

export default Footer;
