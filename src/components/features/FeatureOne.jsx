"use client";

import React from "react";
import { useHobble } from "../../lib/hooks/useHobble";

const featureImg = "home_1/feature_img.jpg";

export const FeatureOne = () => {
  useHobble();

  return (
    <section>
      <div className="td_height_120 td_height_lg_80" />
      <div className="container">
        <div className="td_features td_style_1 td_hobble">
          <div className="td_features_thumb">
            <img
              src={featureImg}
              alt=""
              className="td_radius_10 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            />
          </div>
          <div
            className="td_features_content td_white_bg td_radius_10 wow fadeInRight"
            data-wow-duration="1s"
            data-wow-delay="0.25s"
          >
            <div className="td_section_heading td_style_1">
              <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_accent_color">
                CODESCHOOL LK
              </p>
              <h2 className="td_section_title td_fs_48 mb-0">
                Learn to Code, Build Your Future
              </h2>
            </div>

            <div className="td_height_50 td_height_lg_50" />

            <ul className="td_feature_list td_mp_0">
              <li>
                <div className="td_feature_icon td_center">💻</div>
                <div className="td_feature_info">
                  <h3 className="td_fs_32 td_semibold td_mb_15">
                    Real-World Projects
                  </h3>
                  <p className="td_fs_14 td_heading_color td_opacity_7 mb-0">
                    Build practical skills by working on real applications and solving industry-based problems hands-on.
                  </p>
                </div>
              </li>
              <li>
                <div className="td_feature_icon td_center">🧠</div>
                <div className="td_feature_info">
                  <h3 className="td_fs_32 td_semibold td_mb_15">
                    Fundamental Programming Skills
                  </h3>
                  <p className="td_fs_14 td_heading_color td_opacity_7 mb-0">
                    Master essential coding concepts in Python, JavaScript, and PHP—tailored for beginners and beyond.
                  </p>
                </div>
              </li>
              <li>
                <div className="td_feature_icon td_center">🌍</div>
                <div className="td_feature_info">
                  <h3 className="td_fs_32 td_semibold td_mb_15">
                    Support for Sri Lankan Learners
                  </h3>
                  <p className="td_fs_14 td_heading_color td_opacity_7 mb-0">
                    Get personalized mentorship, internship links, and job-ready training built for the Sri Lankan tech industry.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Keep all background SVG effects unchanged */}
          <div className="td_features_shape_1 position-absolute td_accent_color td_hover_layer_3">
            {/* SVG path (unchanged) */}
          </div>
          <div className="td_features_shape_2 position-absolute td_accent_color td_hover_layer_5">
            {/* SVG path (unchanged) */}
          </div>
        </div>
      </div>
      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
