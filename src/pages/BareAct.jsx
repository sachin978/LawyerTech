import React from "react";

function BareAct() {
  return (
    <div className="container">
      {/* Act Header */}
      <section className="card">
        <h1>Indian Penal Code, 1860</h1>
        <p className="text-muted">
          Central Act · Criminal Law · As amended up to 2024
        </p>
      </section>

      {/* Section Navigation */}
      <section className="card" style={{ marginTop: "24px" }}>
        <h2>Sections</h2>

        <div className="grid grid-3">
          <div className="card">
            <strong>Section 299</strong>
            <p className="text-muted">Culpable Homicide</p>
          </div>

          <div className="card">
            <strong>Section 300</strong>
            <p className="text-muted">Murder</p>
          </div>

          <div className="card">
            <strong>Section 302</strong>
            <p className="text-muted">Punishment for Murder</p>
          </div>

          <div className="card">
            <strong>Section 420</strong>
            <p className="text-muted">Cheating and dishonestly inducing delivery of property</p>
          </div>
        </div>
      </section>

      {/* Selected Section */}
      <section className="card" style={{ marginTop: "24px" }}>
        <h2>Section 420 – Cheating</h2>

        <p>
          Whoever cheats and thereby dishonestly induces the person deceived
          to deliver any property to any person, or to make, alter or destroy
          the whole or any part of a valuable security, or anything which is
          signed or sealed, and which is capable of being converted into a
          valuable security, shall be punished with imprisonment of either
          description for a term which may extend to seven years, and shall
          also be liable to fine.
        </p>
      </section>

      {/* Commentary */}
      <section className="card" style={{ marginTop: "24px" }}>
        <h2>Commentary</h2>

        <p>
          Section 420 IPC is one of the most frequently invoked provisions in
          cases involving financial fraud. The essential ingredients include
          deception, dishonest inducement, and delivery of property.
        </p>

        <p>
          Mere breach of contract does not constitute cheating unless
          fraudulent intention existed at the time of inducement.
        </p>
      </section>

      {/* Judicial Interpretation */}
      <section className="card" style={{ marginTop: "24px" }}>
        <h2>Judicial Interpretation</h2>

        <table className="table">
          <thead>
            <tr>
              <th>Case</th>
              <th>Principle Laid Down</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hridaya Ranjan Prasad v. State of Bihar</td>
              <td>
                Intention to cheat must exist at the inception of the transaction.
              </td>
            </tr>
            <tr>
              <td>Vesa Holdings v. State of Kerala</td>
              <td>
                Criminal proceedings cannot be used to settle civil disputes.
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Cross References */}
      <section className="card" style={{ marginTop: "24px" }}>
        <h2>Related Provisions</h2>

        <ul>
          <li>Section 415 – Definition of Cheating</li>
          <li>Section 417 – Punishment for Cheating</li>
          <li>Section 406 – Criminal Breach of Trust</li>
        </ul>
      </section>

      {/* Disclaimer */}
      <section className="card text-small text-muted" style={{ marginTop: "24px" }}>
        <p>
          Disclaimer: Bare Act text is reproduced for reference purposes.
          Commentary reflects general legal understanding and is not legal advice.
        </p>
      </section>
    </div>
  );
}

export default BareAct;
