"use client"

import { useState } from "react"
import Image from "next/image"

const courseData = {
  title: "Java Fundamentals Bootcamp",
  subtitle: "Master Java Programming from Scratch with Real-World Applications",
  instructor: {
    name: "Pasindu Sampath",
    bio: "Senior Software Engineer with 12+ years in Java, Spring Boot, and enterprise architecture. Passionate educator with experience mentoring 5,000+ students globally.",
    image: "/instructors/pasindu-sampath.jpg",
  },
  fee: "$79.00",
  discount: "$129.00",
  lastUpdated: "10 April, 2025",
  thumbnail: "/coursecards/javaf.png",
  tabs: ["Overview", "Curriculum", "Instructor", "Reviews"],
  overview: {
    description:
      "Learn core Java programming fundamentals from scratch. This course covers variables, control structures, arrays, object-oriented principles, and real-world project implementation using Java SE.",
    highlights: [
      "Complete Java Basics + OOP Concepts",
      "Hands-on Coding Exercises and Quizzes",
      "Mini Projects in Every Module",
      "Live Debugging and Problem-Solving Sessions",
      "Certificate of Completion",
      "Discussion Forum and Community Support",
    ],
  },
  curriculum: {
    duration: "6 weeks",
    modules: [
      { title: "Module 1: Introduction to Java & IDE Setup", lessons: 4, duration: "0.5 week" },
      { title: "Module 2: Data Types & Control Statements", lessons: 6, duration: "1 week" },
      { title: "Module 3: Arrays and Array Methods", lessons: 5, duration: "1 week" },
      { title: "Module 4: Classes, Objects & Constructors", lessons: 6, duration: "1 week" },
      { title: "Module 5: Inheritance, Polymorphism, Abstraction, and Encapsulation", lessons: 7, duration: "1 week" },
      { title: "Module 6: File Handling & Exception Management", lessons: 5, duration: "0.5 week" },
      { title: "Module 7: Mini Projects (Console Applications)", lessons: 5, duration: "1 week" },
    ],
  },
  reviews: {
    text: '"This course by Pasindu is a gem for beginners. The clarity and real-world examples helped me land my first internship as a Java developer!"',
    additionalText:
      '"I particularly loved the final project. It ties everything together and shows how much you\'ve progressed."',
  },
  learningPoints: [
    { text: "Master Java syntax and core concepts", color: "blue" },
    { text: "Develop real Java console-based apps", color: "blue" },
    { text: "Understand OOP principles deeply", color: "blue" },
    { text: "Learn debugging and error handling", color: "blue" },
    { text: "Boost logical thinking and flow control", color: "blue" },
    { text: "Get industry-ready coding practices", color: "blue" },
  ],
  requirements: [
    { text: "Basic computer knowledge", icon: "🖥️" },
    { text: "Laptop / PC with Java installed", icon: "💻" },
    { text: "Willingness to learn and practice", icon: "🔥" },
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
