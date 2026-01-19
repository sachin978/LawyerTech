import React from "react";

function CaseLaw() {
  return (
    <div className="container case-page">
      {/* Case Header */}
      <section className="case-hero">
        <span className="case-badge">Supreme Court of India</span>
        <h1 className="case-title">
          Maneka Gandhi v. Union of India
        </h1>

        <p className="case-citation">
          (1978) 1 SCC 248 · Constitutional Bench · Decided on 25 January 1978
        </p>

        <div className="case-meta">
          <div>
            <strong>Judges:</strong> Beg C.J., Chandrachud J., Krishna Iyer J.
          </div>
          <div>
            <strong>Subject:</strong> Fundamental Rights · Article 21
          </div>
        </div>
      </section>

      {/* Case Content */}
      <section className="case-content">
        <div className="case-section">
          <h2>Facts</h2>
          <p>
            The petitioner’s passport was impounded by the Government of India
            without furnishing reasons. The action was challenged as violative
            of Articles 14, 19, and 21 of the Constitution.
          </p>
        </div>

        <div className="case-section">
          <h2>Issues</h2>
          <ul>
            <li>Whether the right to travel abroad is part of personal liberty</li>
            <li>
              Whether “procedure established by law” must be just, fair, and reasonable
            </li>
          </ul>
        </div>

        <div className="case-section">
          <h2>Held</h2>
          <p>
            The Supreme Court held that the procedure contemplated under Article 21
            must be fair, just, and reasonable, thereby rejecting arbitrary state action.
          </p>
        </div>

        <div className="case-section">
          <h2>Ratio Decidendi</h2>
          <blockquote className="case-quote">
            “The procedure prescribed by law must be reasonable, fair and just,
            and not arbitrary, fanciful or oppressive.”
          </blockquote>
        </div>

        <div className="case-section">
          <h2>Significance</h2>
          <p>
            This judgment transformed Article 21 into a dynamic source of rights
            and established substantive due process in Indian constitutional law.
          </p>
        </div>
      </section>

      {/* Related References */}
      <section className="case-references">
        <h3>Referred Articles & Cases</h3>

        <table className="table">
          <thead>
            <tr>
              <th>Reference</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Article 21</td>
              <td>Constitution</td>
            </tr>
            <tr>
              <td>Article 14</td>
              <td>Constitution</td>
            </tr>
            <tr>
              <td>A.K. Gopalan v. State of Madras</td>
              <td>Case Law</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Disclaimer */}
      <section className="case-disclaimer">
        <p>
          Disclaimer: This summary is for academic reference only. For authoritative
          text, refer to the official judgment.
        </p>
      </section>
    </div>
  );
}

export default CaseLaw;
