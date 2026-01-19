import React from "react";

function Dashboard() {
  return (
    <div>
      <h1>Contributor Dashboard</h1>

      <section>
        <h3>Your Contributions</h3>
        <ul>
          <li>Article: Bail Jurisprudence (Pending Review)</li>
          <li>IPC 420 Commentary (Approved)</li>
        </ul>
      </section>

      <section>
        <h3>Actions</h3>
        <button>Create New Article</button>
        <button>Edit Draft</button>
      </section>
    </div>
  );
}

export default Dashboard;
