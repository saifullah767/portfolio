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

function SkillCharts({ title, skills, subtitle }) {
  return (
    <div className="progress-wrapper">
      <div className="content">
        <span className="subtitle">{subtitle}</span>
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

const skillCopyKeys = {
  PORTFOLIO: 'portfolio',
  'LANDING PAGE': 'landingPage',
  DATABASE: 'database',
  'API DEVELOPMENT': 'apiDevelopment'
};

export default function MyDetails({ details, copy }) {
  const [activeTab, setActiveTab] = useState('professional');

  const educationColumns = [
    [
      {
        ...details.educationColumns[0][0],
        subtitle: copy.education.microverseSubtitle,
        description: copy.education.microverseDescription
      },
      {
        ...details.educationColumns[0][1],
        title: copy.education.intermediateTitle,
        subtitle: copy.education.intermediateSubtitle,
        description: copy.education.intermediateDescription
      }
    ],
    [
      {
        ...details.educationColumns[1][0],
        subtitle: copy.education.aptechSubtitle,
        description: copy.education.aptechDescription
      },
      {
        ...details.educationColumns[1][1],
        title: copy.education.bachelorsTitle,
        subtitle: copy.education.bachelorsSubtitle,
        description: copy.education.bachelorsDescription
      }
    ]
  ];

  const experienceColumns = [
    [
      {
        ...details.experienceColumns[0][0],
        subtitle: copy.experience.internTitle,
        description: copy.experience.internDescription
      },
      {
        ...details.experienceColumns[0][1],
        subtitle: copy.experience.developerTitle,
        description: copy.experience.developerDescription
      }
    ],
    [
      {
        ...details.experienceColumns[1][0],
        subtitle: copy.experience.mentorTitle,
        description: copy.experience.mentorDescription
      }
    ]
  ];

  const localizeSkills = (skills) =>
    skills.map((skill) => ({
      ...skill,
      name: copy.skillNames[skillCopyKeys[skill.name]] ?? skill.name
    }));

  return (
    <div className="rn-resume-area rn-section-gap section-separator" id="resume">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <span className="subtitle">{copy.subtitle}</span>
              <h2 className="title">{copy.title}</h2>
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
                    {copy.tabs[tab.id === 'professional' ? 'skills' : tab.id]}
                  </button>
                </li>
              ))}
            </ul>

            <div className="rn-nav-content tab-content" id="myTabContents">
              <div className={`tab-pane fade single-tab-area${activeTab === 'education' ? ' show active' : ''}`}>
                <div className="personal-experience-inner mt--40">
                  <h4 className="maintitle">{copy.educationTitle}</h4>
                  <div className="row">
                    {educationColumns.map((column, index) => (
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
                      <SkillCharts
                        title={copy.designSkills}
                        skills={localizeSkills(details.skills.design)}
                        subtitle={copy.features}
                      />
                    </div>

                    <div className="col-lg-6 col-md-6 col-12 mt_sm--60">
                      <SkillCharts
                        title={copy.developmentSkills}
                        skills={localizeSkills(details.skills.development)}
                        subtitle={copy.features}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className={`tab-pane fade${activeTab === 'experience' ? ' show active' : ''}`}>
                <div className="personal-experience-inner mt--40">
                  <h4 className="maintitle">{copy.experienceTitle}</h4>
                  <div className="row">
                    {experienceColumns.map((column, index) => (
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
