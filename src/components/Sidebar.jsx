import React from "react";

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <p className="sidebar-title">Primary Law</p>
        <ul className="sidebar-list">
          <li>📘 Constitution of India</li>
          <li>⚖️ Indian Penal Code</li>
          <li>📜 CrPC</li>
          <li>📑 CPC</li>
        </ul>

        <p className="sidebar-title">Case Law</p>
        <ul className="sidebar-list">
          <li>🏛 Supreme Court</li>
          <li>🏢 High Courts</li>
          <li>📂 Tribunals</li>
        </ul>

        <p className="sidebar-title">Knowledge</p>
        <ul className="sidebar-list">
          <li>📖 Articles</li>
          <li>🧠 Legal Concepts</li>
          <li>🎓 Student Guides</li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
