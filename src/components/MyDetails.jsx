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

function SkillGroups({ groups, copy }) {
  return (
    <div className="portfolio-skill-grid">
      {groups.map((group) => (
        <section key={group.id} className="portfolio-skill-card">
          <span className="portfolio-skill-card__eyebrow">{copy.features}</span>
          <h4>{copy.skillGroups[group.id]}</h4>
          <div className="portfolio-skill-card__items">
            {group.items.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function localizeColumns(columns, translations) {
  return columns.map((column) =>
    column.map((item) => {
      const localized = translations[item.id];

      return localized
        ? {
            ...item,
            subtitle: localized.subtitle,
            description: localized.description
          }
        : item;
    })
  );
}

export default function MyDetails({ details, copy }) {
  const [activeTab, setActiveTab] = useState('professional');

  const educationColumns = localizeColumns(details.educationColumns, copy.education);
  const experienceColumns = localizeColumns(details.experienceColumns, copy.experience);

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
                  <SkillGroups groups={details.skills} copy={copy} />
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
