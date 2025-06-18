import React from "react";
import "../assets/css/style.css";


const CertificateCard = ({ title, issuer, year }) => {
  return (
    <div className="certificate-card">
      <h4>{title}</h4>
      <h5>{issuer}</h5>
      <p className="certificate-year">{year}</p>
    </div>
  );
};

// Main Certificates Component
export const Certificates = () => {
  const certificateData = [
    {
      title: "React.js Certification",
      issuer: "Infosys",
      year: "2025",
    },
    {
      title: "Node.js Certification",
      issuer: "Infosys",
      year: "2025",
    },
    {
      title: "MERN Stack Internship",
      issuer: "Rackron Technologies Pvt Ltd",
      year: "2025",
    },
  ];

  return (
    <section className="certificates-section">
      <div className="certificates-container">
        <h3 className="certificates-heading">🎓 Certificates</h3>

        <div className="certificate-cards">
          {certificateData.map((cert, index) => (
            <CertificateCard
              key={index}
              title={cert.title}
              issuer={cert.issuer}
              year={cert.year}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
