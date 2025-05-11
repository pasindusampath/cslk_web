"use client"

import { useState } from "react"
import Image from "next/image"

const courseData = {
  title: "Modern Frontend Development with React",
  subtitle: "Master modern frontend development with React",
  instructor: {
    name: "Harshana",
    bio: "Full-Stack Web Developer with 8+ years of experience in React, Node.js, and modern frontend architecture. Known for mentoring 3,000+ developers globally and delivering practical, hands-on coding sessions.",
    image: "/instructors/harshana.jpg",
  },
  fee: "$89.00",
  discount: "$149.00",
  lastUpdated: "12 April, 2025",
  thumbnail: "/coursecards/react.png",
  tabs: ["Overview", "Curriculum", "Instructor", "Reviews"],
  overview: {
    description:
      "Master modern frontend development with React. Learn how to build dynamic UIs, handle state, use APIs, and deploy responsive web applications.",
    highlights: [
      "Learn JSX, Props, State, and Hooks",
      "Build Dynamic and Responsive UIs",
      "Understand Routing, Forms, and API Integration",
      "Work with REST and GraphQL APIs",
      "Build and Deploy Real-World Projects",
      "Use Modern Tools like VS Code, GitHub, Netlify/Vercel",
    ],
  },
  curriculum: {
    duration: "6 weeks",
    modules: [
      { title: "Module 1: Introduction to React & JSX", lessons: 4, duration: "1 week" },
      { title: "Module 2: Components, Props, and State", lessons: 5, duration: "1 week" },
      { title: "Module 3: React Hooks & Lifecycle", lessons: 5, duration: "1 week" },
      { title: "Module 4: Routing with React Router", lessons: 5, duration: "1 week" },
      { title: "Module 5: API Integration (REST/GraphQL)", lessons: 5, duration: "1 week" },
      { title: "Module 6: Final Project – React E-commerce App", lessons: 6, duration: "1 week" },
    ],
  },
  reviews: {
    text: '"Harshana explains everything clearly. I had no idea what React was before, and now I’ve built my own working web app!"',
    additionalText:
      '"Highly recommend this to any beginner. The project-focused structure makes it super fun and useful."',
  },
  learningPoints: [
    { text: "Build modern, responsive UI with React", color: "blue" },
    { text: "Understand JSX, Props, and Component Architecture", color: "blue" },
    { text: "Master Hooks and Component Lifecycle", color: "blue" },
    { text: "Integrate with REST and GraphQL APIs", color: "blue" },
    { text: "Build and deploy a real e-commerce app", color: "blue" },
    { text: "Use GitHub, VS Code, and Netlify/Vercel", color: "blue" },
  ],
  requirements: [
    { text: "Basic HTML, CSS, and JavaScript", icon: "🌐" },
    { text: "Laptop / PC with Node.js installed", icon: "💻" },
    { text: "Eagerness to build real-world projects", icon: "🚀" },
  ],
};



export default function CourseCard() {
  const [activeTab, setActiveTab] = useState("Overview")

  return (
    <div style={{ paddingTop: "64px", paddingBottom: "64px", backgroundColor: "#F3F4F6" }}>
    <div
      style={{
        fontFamily: "Inter, system-ui, sans-serif",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
        maxWidth: "1000px",
        margin: "0 auto",
        backgroundColor: "#ffffff",
      }}
    >
      {/* Header Image */}
      <div style={{ position: "relative", width: "100%", height: "360px" }}>
        <Image
          src={courseData.thumbnail || "/placeholder.svg"}
          alt="Course banner"
          fill
          style={{ objectFit: "cover" }}
        />
        <button
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            backgroundColor: "rgba(0,0,0,0.7)",
            color: "#fff",
            border: "none",
            padding: "10px 16px",
            borderRadius: "10px",
            fontSize: "14px",
            fontWeight: "500",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
        >
          Share
        </button>
      </div>

      {/* Course Info Header */}
      <div style={{ padding: "32px 36px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <div style={{ maxWidth: "65%" }}>
            <div
              style={{
                display: "inline-block",
                backgroundColor: "#007bff",
                color: "#fff",
                fontSize: "14px",
                padding: "8px 16px",
                borderRadius: "8px",
                marginBottom: "16px",
                fontWeight: "500",
              }}
            >
              Online & Offline
            </div>
            <h1
              style={{
                fontSize: "28px",
                fontWeight: "700",
                margin: "0 0 16px 0",
                lineHeight: "1.3",
                color: "#111827",
              }}
            >
              {courseData.subtitle}
            </h1>
            <p
              style={{
                fontSize: "16px",
                color: "#4B5563",
                margin: "0",
              }}
            >
              Trainer: <span style={{ fontWeight: "600" }}>{courseData.instructor.name}</span> | Last Updated:{" "}
              {courseData.lastUpdated}
            </p>
          </div>

          <div style={{ textAlign: "right" }}>
            <div style={{ marginBottom: "12px" }}>
              <span
                style={{
                  fontSize: "28px",
                  fontWeight: "700",
                  color: "#007bff",
                }}
              >
                {courseData.fee}
              </span>
              <span
                style={{
                  textDecoration: "line-through",
                  marginLeft: "12px",
                  color: "#9CA3AF",
                  fontSize: "18px",
                }}
              >
                {courseData.discount}
              </span>
            </div>
            <button
              style={{
                padding: "14px 28px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(0,123,255,0.25)",
                transition: "all 0.2s ease",
              }}
            >
              <a href="https://wa.me/+94787149579">Enroll Now</a>
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          gap: "32px",
          borderBottom: "1px solid #E5E7EB",
          padding: "0 36px",
          marginBottom: "8px",
        }}
      >
        {courseData.tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              cursor: "pointer",
              padding: "16px 8px",
              fontSize: "16px",
              fontWeight: activeTab === tab ? 600 : 400,
              color: activeTab === tab ? "#007bff" : "#4B5563",
              borderBottom: activeTab === tab ? "3px solid #007bff" : "none",
              transition: "all 0.2s ease",
            }}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Tab Content */}
      <div style={{ padding: "32px 36px 40px" }}>
        {activeTab === "Overview" && (
          <>
            <h3
              style={{
                fontSize: "22px",
                fontWeight: "600",
                marginBottom: "20px",
                color: "#111827",
              }}
            >
              Course Overview
            </h3>
            <p
              style={{
                marginBottom: "24px",
                color: "#374151",
                fontSize: "16px",
                lineHeight: "1.6",
              }}
            >
              {courseData.overview.description}
            </p>
            <h4
              style={{
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "16px",
                color: "#111827",
              }}
            >
              Course Highlights
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: "0",
                color: "#374151",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "12px",
              }}
            >
              {courseData.overview.highlights.map((point, idx) => (
                <li
                  key={idx}
                  style={{
                    marginBottom: "8px",
                    fontSize: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span
                    style={{
                      color: "#007bff",
                      fontSize: "18px",
                    }}
                  >
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </>
        )}

        {activeTab === "Curriculum" && (
          <>
            <h3
              style={{
                fontSize: "22px",
                fontWeight: "600",
                marginBottom: "20px",
                color: "#111827",
              }}
            >
              Curriculum
            </h3>
            <p
              style={{
                fontSize: "16px",
                marginBottom: "24px",
              }}
            >
              Total Duration: <strong>{courseData.curriculum.duration}</strong>
            </p>
            <ul
              style={{
                marginTop: "16px",
                padding: "0",
                listStyle: "none",
              }}
            >
              {courseData.curriculum.modules.map((mod, idx) => (
                <li
                  key={idx}
                  style={{
                    marginBottom: "16px",
                    padding: "16px",
                    borderRadius: "12px",
                    backgroundColor: "#F9FAFB",
                    border: "1px solid #E5E7EB",
                  }}
                >
                  <div
                    style={{
                      fontSize: "17px",
                      fontWeight: "600",
                      marginBottom: "4px",
                      color: "#111827",
                    }}
                  >
                    {mod.title}
                  </div>
                  <div
                    style={{
                      fontSize: "15px",
                      color: "#4B5563",
                    }}
                  >
                    {mod.lessons} lessons ({mod.duration})
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}

        {activeTab === "Instructor" && (
          <>
            <h3
              style={{
                fontSize: "22px",
                fontWeight: "600",
                marginBottom: "24px",
                color: "#111827",
              }}
            >
              Instructor
            </h3>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "20px",
                backgroundColor: "#F9FAFB",
                padding: "24px",
                borderRadius: "16px",
              }}
            >
              <Image
                src={courseData.instructor.image || "/placeholder.svg"}
                alt="Instructor"
                width={80}
                height={80}
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "3px solid white",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                }}
              />
              <div>
                <p
                  style={{
                    fontWeight: "700",
                    margin: "0 0 8px 0",
                    fontSize: "20px",
                    color: "#111827",
                  }}
                >
                  {courseData.instructor.name}
                </p>
                <p
                  style={{
                    margin: "0",
                    color: "#4B5563",
                    fontSize: "16px",
                    lineHeight: "1.6",
                  }}
                >
                  {courseData.instructor.bio}
                </p>
              </div>
            </div>
          </>
        )}

        {activeTab === "Reviews" && (
          <>
            <h3
              style={{
                fontSize: "22px",
                fontWeight: "600",
                marginBottom: "20px",
                color: "#111827",
              }}
            >
              Reviews
            </h3>
            <div
              style={{
                backgroundColor: "#F9FAFB",
                padding: "24px",
                borderRadius: "16px",
                marginBottom: "32px",
                borderLeft: "4px solid #007bff",
              }}
            >
              <p
                style={{
                  fontSize: "18px",
                  fontStyle: "italic",
                  color: "#374151",
                  lineHeight: "1.6",
                  margin: "0 0 16px 0",
                }}
              >
                {courseData.reviews.text}
              </p>
              <p
                style={{
                  fontSize: "18px",
                  fontStyle: "italic",
                  color: "#374151",
                  lineHeight: "1.6",
                  margin: "0",
                }}
              >
                {courseData.reviews.additionalText}
              </p>
            </div>

            <h4
              style={{
                fontSize: "20px",
                fontWeight: "600",
                marginTop: "32px",
                marginBottom: "16px",
                color: "#111827",
              }}
            >
              What you'll learn
            </h4>
            <ul
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "16px",
                padding: "0",
                listStyle: "none",
              }}
            >
              {courseData.learningPoints.map((point, idx) => (
                <li
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    backgroundColor: "#EFF6FF",
                    padding: "14px 18px",
                    borderRadius: "10px",
                    fontSize: "16px",
                    color: "#1E40AF",
                  }}
                >
                  <span>✓</span> {point.text}
                </li>
              ))}
            </ul>

            <h4
              style={{
                fontSize: "20px",
                fontWeight: "600",
                marginTop: "32px",
                marginBottom: "16px",
                color: "#111827",
              }}
            >
              Requirements
            </h4>
            <ul
              style={{
                display: "flex",
                gap: "16px",
                flexWrap: "wrap",
                padding: "0",
                listStyle: "none",
              }}
            >
              {courseData.requirements.map((req, idx) => (
                <li
                  key={idx}
                  style={{
                    backgroundColor: "#F9FAFB",
                    padding: "14px 20px",
                    borderRadius: "12px",
                    border: "1px solid #E5E7EB",
                    fontSize: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span style={{ fontSize: "20px" }}>{req.icon}</span> {req.text}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
    </div>
  )
}
