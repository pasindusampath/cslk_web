import React from "react";

const departments = [
  { title: "Software Engineering", icon: "💻", delay: "0.2s" },
  { title: "AI & Data Science", icon: "🧠", delay: "0.3s" },
  { title: "Mobile Development", icon: "📱", delay: "0.4s" },
  { title: "UI/UX Design", icon: "🎨", delay: "0.5s" },
];

export const DepartmentOne = () => {
  return (
    <section>
      <div className="td_height_112 td_height_lg_75" />
      <div className="container">
        <div
          className="td_section_heading td_style_1 text-center wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_accent_color">
            Departments
          </p>
          <h2 className="td_section_title td_fs_48 mb-0">Specialized Tracks</h2>
          <p className="td_section_subtitle td_fs_18 mb-0">
            Learn through industry-aligned departments to build skills in the most in-demand fields.
          </p>
        </div>

        <div className="td_height_50 td_height_lg_50" />

        <div className="row g-4 justify-content-center">
          {departments.map((dept, idx) => (
            <div
              key={idx}
              className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay={dept.delay}
            >
              <div className="td_iconbox td_style_1 text-center px-4 py-5 shadow-sm rounded bg-white w-100" style={{ maxWidth: "280px" }}>
                <div className="td_iconbox_icon mb-3" style={{ fontSize: "48px", lineHeight: "1" }}>
                  {dept.icon}
                </div>
                <h3 className="td_iconbox_title td_medium td_fs_24 mb-0">{dept.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
