// import React from "react";
// import { BlogPagination } from "./BlogPagination";
// import { BlogItem } from "./BlogItem";

// const post1 = "/home_1/post_1.jpg";
// const post2 = "/home_1/post_2.jpg";
// const post3 = "/home_1/post_3.jpg";
// const post4 = "/home_1/post_4.jpg";
// const post5 = "/home_1/post_5.jpg";
// const post6 = "/home_1/post_6.jpg";
// const post7 = "/home_1/post_7.jpg";
// const post8 = "/home_1/post_8.jpg";
// const post9 = "/home_1/post_9.jpg";

// export const BlogAll = () => {
//   const blogPosts = [
//     {
//       image: post1,
//       date: "Jan 23, 2024",
//       author: "Jhon Doe",
//       title: "Comprehensive Student Guide for New Educations System",
//       excerpt:
//         "Education is a dynamic and evolving field that plays a crucial.",
//     },
//     {
//       image: post2,
//       date: "Jan 17, 2024",
//       author: "Jhon Doe",
//       title: "Overview of the New Education System for Students",
//       excerpt:
//         "Education is a dynamic and evolving field that plays a crucial.",
//     },
//     {
//       image: post3,
//       date: "Jan 13, 2024",
//       author: "Jhon Doe",
//       title: "Student Guide for the New Education System",
//       excerpt:
//         "Education is a dynamic and evolving field that plays a crucial.",
//     },
//     {
//       image: post4,
//       date: "Jan 09, 2024",
//       author: "Jhon Doe",
//       title: "Comprehensive Student Guide for New Educations System",
//       excerpt:
//         "Education is a dynamic and evolving field that plays a crucial.",
//     },
//     {
//       image: post5,
//       date: "Jan 07, 2024",
//       author: "Jhon Doe",
//       title: "Overview of the New Education System for Students",
//       excerpt:
//         "Education is a dynamic and evolving field that plays a crucial.",
//     },
//     {
//       image: post6,
//       date: "Jan 05, 2024",
//       author: "Jhon Doe",
//       title: "Student Guide for the New Education System",
//       excerpt:
//         "Education is a dynamic and evolving field that plays a crucial.",
//     },
//     {
//       image: post7,
//       date: "Jan 04, 2024",
//       author: "Jhon Doe",
//       title: "Comprehensive Student Guide for New Educations System",
//       excerpt:
//         "Education is a dynamic and evolving field that plays a crucial.",
//     },
//     {
//       image: post8,
//       date: "Jan 03, 2024",
//       author: "Jhon Doe",
//       title: "Overview of the New Education System for Students",
//       excerpt:
//         "Education is a dynamic and evolving field that plays a crucial.",
//     },
//     {
//       image: post9,
//       date: "Jan 01, 2024",
//       author: "Jhon Doe",
//       title: "Student Guide for the New Education System",
//       excerpt:
//         "Education is a dynamic and evolving field that plays a crucial.",
//     },
//   ];

//   return (
//     <section>
//       <div className="td_height_120 td_height_lg_80" />
//       <div className="container">
//         <div className="row td_gap_y_30">
//           {blogPosts.map((post, index) => (
//             <div className="col-lg-4" key={index}>
//               <BlogItem {...post} />
//             </div>
//           ))}
//         </div>

//         <div className="td_height_60 td_height_lg_40" />

//         {/* pagination */}
//         <BlogPagination />
//       </div>
//       <div className="td_height_120 td_height_lg_80" />
//     </section>
//   );
// };


"use client"

import { useEffect, useState } from "react"

export const BlogAll = () => {
  const [fadeIn, setFadeIn] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      style={{
        padding: "80px 20px",
        textAlign: "center",
        backgroundColor: "#ffffff",
        transition: "opacity 0.8s ease, transform 0.8s ease",
        opacity: fadeIn ? 1 : 0,
        transform: fadeIn ? "translateY(0)" : "translateY(20px)",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "50px auto" }}>
        <img
          src="/assets/images/placeholders/coming-soon.jpg" // Corrected path
          alt="Coming Soon"
          style={{ maxWidth: "200px", marginBottom: "32px", opacity: 0.9 }}
        />
        <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#1f2937", marginBottom: "16px" }}>
          Blogs will be available soon!
        </h2>
        <p style={{ fontSize: "18px", color: "#6b7280" }}>
          We're preparing high-quality articles and updates for you. Stay tuned — exciting content is on its way.
        </p>
      </div>
    </section>
  )
}
