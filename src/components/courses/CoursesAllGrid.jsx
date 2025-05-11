import React from "react";
import Link from "next/link";

const courseThumb1 = "/home_1/java2.png";
const courseThumb2 = "/home_1/react.png";
const courseThumb3 = "/home_1/ai.png";
const courseThumb4 = "/home_1/javaad.png";

const coursesList = [
  {
    id: 13,
    label: "Featured",
    image: courseThumb1,
    seats: 120,
    semesters: 10,
    category: "Software Engineering",
    title: "Java Fundamentals: From Beginner to Pro",
    description:
      "Build a strong foundation in Java programming and kickstart your software development journey.",
    rating: 4.8,
    totalRatings: 18,
    route: "/course-details/java",
  },
  {
    id: 14,
    label: "New",
    image: courseThumb2,
    seats: 100,
    semesters: 8,
    category: "Web Development",
    title: "React Masterclass: Build Modern Web Apps",
    description:
      "Learn React from scratch and create dynamic, high-performance websites and applications.",
    rating: 5,
    totalRatings: 22,
    route: "/course-details/react",
  },
  {
    id: 15,
    label: "Best Seller",
    image: courseThumb3,
    seats: 80,
    semesters: 6,
    category: "Artificial Intelligence",
    title: "AI Chatbot Bootcamp: Build Smart Chatbots",
    description:
      "Master AI-powered chatbot development and dive deep into advanced Java skills.",
    rating: 5,
    totalRatings: 30,
    route: "/course-details/ai-chatbot",
  },
  {
    id: 16,
    label: "New",
    image: courseThumb4,
    seats: 120,
    semesters: 10,
    category: "Software Engineering",
    title: "Java Advanced: Advanced Techniques and Best Practices",
    description:
      "Enhance your Java skills with advanced techniques and best practices for software development.",
    rating: 4.8,
    totalRatings: 18,
    route: "/course-details/ad-java",
  },
];

export const CoursesAllGrid = () => {
  return (
    <div className="row td_gap_y_30 td_row_gap_30">
      {coursesList.map((course) => (
        <div key={course.id} className="col-lg-4 col-md-6">
          <div className="td_card td_style_3 d-block td_radius_10">
            {course.label && (
              <span className="td_card_label td_accent_bg td_white_color">
                {course.label}
              </span>
            )}
            <Link href={course.route || "/course-details"} className="td_card_thumb">
              <img src={course.image} alt={course.title} />
            </Link>
            <div className="td_card_info td_white_bg">
              <div className="td_card_info_in">
                <Link
                  href="/courses-grid-view"
                  className="td_card_category td_fs_14 td_bold td_heading_color td_mb_14"
                >
                  <span>{course.category}</span>
                </Link>
                <h2 className="td_card_title td_fs_24 td_mb_16">
                  <Link href={course.route || "/course-details"}>{course.title}</Link>
                </h2>
                <p className="td_card_subtitle td_heading_color td_opacity_7 td_mb_20">
                  {course.description}
                </p>
                <div className="td_card_review">
                  <div className="td_rating" data-rating={course.rating}>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <div className="td_rating_percentage">
                      <i className="fa-solid fa-star fa-fw"></i>
                      <i className="fa-solid fa-star fa-fw"></i>
                      <i className="fa-solid fa-star fa-fw"></i>
                      <i className="fa-solid fa-star fa-fw"></i>
                      <i className="fa-solid fa-star fa-fw"></i>
                    </div>
                  </div>
                  <span className="td_heading_color td_opacity_5 td_medium">
                    ({course.rating}/{course.totalRatings} Ratings)
                  </span>
                </div>
                <div className="td_card_btn">
                  <Link
                    href={course.route || "/course-details"}
                    className="td_btn td_style_1 td_radius_10 td_medium"
                  >
                    <span className="td_btn_in td_white_color td_accent_bg">
                      <span>See details</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
