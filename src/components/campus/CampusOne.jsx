import React from "react";
import Link from "next/link";

const campusLife1 = "/home_1/feature1.png";
const campusLife2 = "/home_1/feature2.png";
const campusLife3 = "/home_1/feature3.png";
const campusLife4 = "/home_1/feature4.png";

export const CampusOne = () => {
  return (
    <section
      className="td_accent_bg td_shape_section_1"
      style={{
        position: "relative",
        padding: "80px 0",
        overflow: "hidden",
        backgroundColor: "#1f29ff",
        backgroundImage:
          "radial-gradient(circle, rgba(255, 255, 255, 0.3) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
        marginTop: "30px",
        paddingTop: "20px",
        paddingBottom: "20px",
      }}
    >
      <div className="td_height_120 td_height_lg_80" />
      <div className="container">
        <div className="row td_gap_y_40">
          <div className="col-lg-5 wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.2s">
            <div className="td_height_57 td_height_lg_0" />
            <div className="td_section_heading td_style_1">
              <h2 className="td_section_title td_fs_48 mb-0 td_white_color">
                Explore CodeSchool LK
              </h2>
              <p className="td_section_subtitle td_fs_18 mb-0 td_white_color td_opacity_7">
                Empowering Sri Lankan developers and students through industry-focused online courses, hands-on coding practice, and career-ready programs.
              </p>
            </div>

            {/* Button Section */}
            <div className="td_btn_box mt-4 d-flex align-items-center gap-2">
              <svg width="299" height="315" viewBox="0 0 299 315" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.75" clipPath="url(#clip0)">
                  <path d="M242.757 275.771C242.505 275.771 242.253 275.75 242.005 275.707C32.3684 239.98 0.342741 8.13005 0.0437414 5.79468C-0.108609 4.51176 0.22739 3.21754 0.9787 2.19335C1.73001 1.16916 2.8359 0.497795 4.05598 0.32519C5.27606 0.152585 6.5117 0.492693 7.4943 1.27158C8.4769 2.05047 9.12704 3.20518 9.3034 4.48471C9.59772 6.7514 40.7872 231.477 243.5 266.022C244.658 266.22 245.702 266.868 246.426 267.838C247.15 268.808 247.5 270.028 247.406 271.256C247.312 272.484 246.782 273.63 245.921 274.467C245.06 275.303 243.93 275.769 242.757 275.771Z" fill="white"/>
                  <path d="M299.002 275.455C271.709 283.305 237.446 297.872 215.562 314.617L235.465 269.602L223.318 221.648C242.099 242.137 273.428 262.728 299.002 275.455Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="299" height="314" fill="white" transform="translate(0 0.421875)" />
                  </clipPath>
                </defs>
              </svg>

              <div className="td_btn_box_in">
                <Link href="/contact" className="td_btn td_style_1 td_radius_10 td_medium td_fs_18">
                  <span className="td_btn_in td_heading_color td_white_bg">
                    <span>Contact Us</span>
                    <svg
                      width="19"
                      height="20"
                      viewBox="0 0 19 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginLeft: "8px" }}
                    >
                      <path
                        d="M15.1575 4.34302L3.84375 15.6567"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.157 11.4142C15.157 11.4142 16.0887 5.2748 15.157 4.34311C14.2253 3.41142 8.08594 4.34314 8.08594 4.34314"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section - Cards */}
          <div className="col-lg-6 offset-lg-1">
            <div className="row">
              <div className="col-sm-6">
                <CourseCard title="Web Development Bootcamp" img={campusLife1} />
                <div className="td_height_40 td_height_lg_30" />
                <CourseCard title="Fullstack Career Track" img={campusLife3} />
              </div>
              <div className="col-sm-6">
                <div className="td_height_50 td_height_lg_30" />
                <CourseCard title="Mobile App Development" img={campusLife2} />
                <div className="td_height_40 td_height_lg_30" />
                <CourseCard title="Student Projects & Showcase" img={campusLife4} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="td_height_112 td_height_lg_75" />
    </section>
  );
};

const CourseCard = ({ title, img }) => (
  <div className="td_card td_style_2 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
    <Link href="/" className="td_card_thumb d-block">
      <img src={img} alt={title} className="w-100" />
    </Link>
    <div className="td_card_info">
      <h2 className="td_card_title mb-0 td_fs_18 td_semibold td_white_color">
        <Link href="/">{title}</Link>
      </h2>
      <Link href="/" className="td_card_btn">
        <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.564 4.70161L4.42188 18.8438" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18.5654 13.5341C18.5654 13.5341 19.7299 5.85989 18.5654 4.69528C17.4008 3.53067 9.72656 4.69531 9.72656 4.69531" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </div>
  </div>
);
