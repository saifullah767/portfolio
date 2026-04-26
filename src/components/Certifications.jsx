export default function Certifications({ certifications }) {
  return (
    <div id="experiences" className="rn-experience-area section-separator rn-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <h2 className="title">Professional Certification</h2>
            </div>
          </div>
        </div>

        <div className="row mt--10">
          <div className="col-12 mt_experience">
            {certifications.map((cert, index) => (
              <div key={cert.credentialUrl} className="experience-style-two" data-order={index + 1}>
                <div className="experience-left">
                  <div className="experience-image">
                    <img src={cert.image} alt={cert.title} />
                  </div>
                  <div className="experience-center">
                    <span className="date">{cert.issuer}</span>
                    <h4 className="experience-title">{cert.title}</h4>
                    <h6 className="subtitle">{cert.subtitle}</h6>
                  </div>
                </div>
                <div className="experience-right">
                  <div className="experience-footer">
                    <a className="rn-btn" href={cert.credentialUrl} target="_blank" rel="noreferrer">
                      <span>CREDENTIALS</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
