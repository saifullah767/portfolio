import { useState } from 'react';

function ResumeList({ items }) {
  return (
    <div className="content">
      <div className="experience-list">
        {items.map((item) => (
          <div key={`${item.title}-${item.subtitle}`} className="resume-single-list">
            <div className="inner">
              <div className="heading">
                <div className="title">
                  <h4>{item.title}</h4>
                  <span>{item.subtitle}</span>
                </div>
              </div>
              <p className="description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SkillCharts({ title, skills }) {
  return (
    <div className="progress-wrapper">
      <div className="content">
        <span className="subtitle">Features</span>
        <h4 className="maintitle">{title}</h4>

        {skills.map((skill) => (
          <div key={skill.name} className="progress-charts">
            <h6 className="heading heading-h6">{skill.name}</h6>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${skill.percent}%` }}
                aria-valuenow={skill.percent}
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MyDetails({ details }) {
  const [activeTab, setActiveTab] = useState('professional');

  return (
    <div className="rn-resume-area rn-section-gap section-separator" id="resume">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <span className="subtitle">{details.subtitle}</span>
              <h2 className="title">My Details</h2>
            </div>
          </div>
        </div>

        <div className="row mt--45">
          <div className="col-lg-12">
            <ul className="rn-nav-list nav nav-tabs" id="myTabs" role="tablist">
              {details.tabs.map((tab) => (
                <li key={tab.id} className="nav-item">
                  <button
                    type="button"
                    className={`nav-link${activeTab === tab.id ? ' active' : ''}`}
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="rn-nav-content tab-content" id="myTabContents">
              <div className={`tab-pane fade single-tab-area${activeTab === 'education' ? ' show active' : ''}`}>
                <div className="personal-experience-inner mt--40">
                  <h4 className="maintitle">Education</h4>
                  <div className="row">
                    {details.educationColumns.map((column, index) => (
                      <div key={`education-column-${index + 1}`} className="col-lg-6 col-md-12 col-12">
                        <ResumeList items={column} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className={`tab-pane fade${activeTab === 'professional' ? ' show active' : ''}`}>
                <div className="personal-experience-inner mt--40">
                  <div className="row row--40">
                    <div className="col-lg-6 col-md-6 col-12">
                      <SkillCharts title="Design Skill" skills={details.skills.design} />
                    </div>

                    <div className="col-lg-6 col-md-6 col-12 mt_sm--60">
                      <SkillCharts title="Development Skill" skills={details.skills.development} />
                    </div>
                  </div>
                </div>
              </div>

              <div className={`tab-pane fade${activeTab === 'experience' ? ' show active' : ''}`}>
                <div className="personal-experience-inner mt--40">
                  <h4 className="maintitle">Job Experience</h4>
                  <div className="row">
                    {details.experienceColumns.map((column, index) => (
                      <div key={`experience-column-${index + 1}`} className="col-lg-6 col-md-12 col-12 mt_md--60 mt_sm--60">
                        <ResumeList items={column} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
