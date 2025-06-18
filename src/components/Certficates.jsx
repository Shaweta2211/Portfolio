import React from "react";
import "../assets/css/style.css";

export const Certificates = () => {
  return (
    <section className="certificates-section">
      <div className="certificates-container">
        <h3 className="certificates-heading">🎓 Certificates</h3>

        <div className="certificate-cards">
          <div className="certificate-card">
            <h4>React.js Certification</h4>
            <h5>Infosys</h5>
            <p className="certificate-year">2025</p>
          </div>

          <div className="certificate-card">
            <h4>Node.js Certification</h4>
            <h5>Infosys</h5>
            <p className="certificate-year">2025</p>
          </div>

          <div className="certificate-card">
            <h4>MERN Stack Internship</h4>
            <h5>Rackron Technologies Pvt Ltd</h5>
            <p className="certificate-year">2025</p>
          </div>
        </div>
      </div>
    </section>
  );
};
