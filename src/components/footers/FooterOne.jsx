import React from "react";
import Link from "next/link";

const footerLogo = "/logo.png";

export const FooterOne = () => {
  return (
    <footer
      className="td_footer td_style_1"
      style={{
        backgroundColor: "#1f29ff",
        paddingTop: "32px",
        paddingBottom: "20px",
      }}
    >
      <div className="container">
        {/* Main Row */}
        <div
          className="td_footer_row"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "32px",
            paddingBottom: "16px",
            paddingTop: "10px",
            borderBottom: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          {/* Logo & Social */}
          <div
            className="td_footer_col"
            style={{
              flex: "1 1 100%",
              maxWidth: "100%",
              textAlign: "center",
            }}
          >
            <img
              src={footerLogo}
              alt="Logo"
              style={{
                marginBottom: "12px",
                maxWidth: "120px",
              }}
            />
            <h3 style={{ color: "#fff", marginBottom: "6px" }}>Codeschool</h3>
            <p
              style={{
                color: "#fff",
                fontSize: "14px",
                lineHeight: "1.4",
                marginBottom: "8px",
              }}
            >
              Learn. Code. Build. <br /> Empowering future developers.
            </p>
            <div
              className="td_footer_social_btns td_fs_20"
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "14px",
                marginTop: "10px",
                flexWrap: "wrap",
              }}
            >
              <a href="#" className="td_center" style={{ color: "#fff" }}>
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="td_center" style={{ color: "#fff" }}>
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="#" className="td_center" style={{ color: "#fff" }}>
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              {/* <a href="#" className="td_center" style={{ color: "#fff" }}>
                <i className="fa-brands fa-tiktok"></i>
              </a> */}
            </div>
          </div>

          {/* Columns Section */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "32px",
              width: "100%",
            }}
          >
            {[ 
              {
                title: "Products",
                links: [
                  { href: "/course-details", text: "Consulting" },
                  { href: "/course-details", text: "Live Learning" },
                ],
              },
              {
                title: "Legal",
                links: [
                  { href: "/refund", text: "Refund Policy" },
                  { href: "/privacy", text: "Privacy Policy" },
                  { href: "/terms", text: "Terms Of Service" },
                ],
              },
              {
                title: "Company",
                links: [
                  { href: "/about", text: "About Us" },
                  { href: "/careers", text: "Careers" },
                  { href: "/contact", text: "Contact Us" },
                ],
              },
            ].map((column, index) => (
              <div
                className="td_footer_col"
                key={index}
                style={{
                  minWidth: "140px",
                  textAlign: "center",
                  flex: "1 1 120px",
                }}
              >
                <h4
                  className="td_footer_widget_title td_fs_18 td_white_color td_medium"
                  style={{ marginBottom: "10px" }}
                >
                  {column.title}
                </h4>
                <ul
                  className="td_footer_widget_menu"
                  style={{
                    listStyle: "none",
                    padding: 0,
                    fontSize: "14px",
                    lineHeight: "1.8",
                  }}
                >
                  {column.links.map((link, i) => (
                    <li key={i}>
                      <Link href={link.href}>{link.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div
          className="td_footer_bottom td_fs_16"
          style={{
            paddingTop: "14px",
            textAlign: "center",
            fontSize: "13px",
            color: "#fff",
            marginTop: "16px",
          }}
        >
          <p className="td_copyright mb-0">
            © 2025 CodeSchool LK. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
