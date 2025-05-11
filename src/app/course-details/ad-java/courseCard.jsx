"use client"

import { useState } from "react"
import Image from "next/image";


const courseData = {
  title: "Java Advanced: Advanced Techniques and Best Practices",
  subtitle: "Master Java Concurrency, Design Patterns, and Scalable Backends",
  instructor: {
    name: "Pasindu Sampath",
    bio: "Senior Software Engineer with 12+ years of experience in enterprise Java, microservices, and backend architecture. A mentor and trainer to professionals across 20+ countries.",
    image: "/instructors/pasindu-sampath.jpg",
  },
  fee: "$119.00",
  discount: "$179.00",
  lastUpdated: "05 May, 2025",
  thumbnail: "/coursecards/javaa.png",
  tabs: ["Overview", "Curriculum", "Instructor", "Reviews"],
  overview: {
    description:
      "This course is designed for Java developers looking to move beyond the basics. You'll master advanced techniques such as concurrency, performance tuning, SOLID principles, and modern design patterns with real-world projects and enterprise-grade architecture.",
    highlights: [
      "Refresher on OOP and Interface-Based Design",
      "Deep dive into Design Patterns and SOLID Principles",
      "Concurrency, Multi-threading & Parallelism in Java",
      "Memory Management and JVM Performance Tuning",
      "Spring Boot REST APIs and Deployment Best Practices",
      "Capstone Project: OOP-based Inventory Management System",
    ],
  },
  curriculum: {
    duration: "8 weeks",
    modules: [
      { title: "Module 1: OOP Principles Refresher", lessons: 4, duration: "0.5 weeks" },
      { title: "Module 2: Interfaces, Abstract Classes, Aggregation vs Composition", lessons: 6, duration: "1 week" },
      { title: "Module 3: SOLID Principles", lessons: 5, duration: "1 week" },
      { title: "Module 4: Design Patterns (Factory, Singleton, Strategy)", lessons: 7, duration: "1 week" },
      { title: "Module 5: Java Concurrency & Multithreading", lessons: 7, duration: "1.5 weeks" },
      { title: "Module 6: JVM Internals & Performance Tuning", lessons: 5, duration: "1 week" },
      { title: "Module 7: Spring Boot REST APIs & Testing", lessons: 7, duration: "1.5 weeks" },
      { title: "Module 8: Final Project - OOP Inventory System", lessons: 6, duration: "0.5 weeks" },
    ],
  },
  reviews: {
    text: '"This course elevated my Java skills from intermediate to professional-grade. Pasindu’s explanation of concurrency and Spring Boot was crystal clear!"',
    additionalText: '"The enterprise project was the perfect hands-on challenge. I now feel confident to tackle large backend systems."',
  },
  learningPoints: [
    { text: "Apply OOP with confidence in real-world projects", color: "blue" },
    { text: "Understand and implement SOLID principles", color: "blue" },
    { text: "Use design patterns like Factory and Strategy", color: "blue" },
    { text: "Write concurrent Java code with thread safety", color: "blue" },
    { text: "Build and test Spring Boot REST APIs", color: "blue" },
    { text: "Deploy enterprise-grade systems with best practices", color: "blue" },
  ],
  requirements: [
    { text: "Basic Java knowledge and syntax", icon: "📘" },
    { text: "Familiarity with OOP fundamentals", icon: "🧠" },
    { text: "Java IDE and Git setup", icon: "💻" },
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
          src={courseData.thumbnail || "/coursecards/javaa.png"}
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
