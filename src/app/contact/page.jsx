import { Layout } from "@/layouts/Layout";

const contactImg = "/others/contact.png";

export default function About() {
  return (
    <Layout breadcrumbTitle={"Contact"} breadcrumbSubtitle={"Contact"}>
      <section>
        <div className="td_height_120 td_height_lg_80" />
        <div className="container">
          <div className="row">
            <div className="col-xxl-10 offset-xxl-1">
              <div className="row align-items-center td_gap_y_40">
                <div className="col-lg-7">
                  <img src={contactImg} alt="Contact" className="w-100" />
                </div>
                <div className="col-xl-4 offset-xl-1 col-lg-5">
                  <div className="td_contact_info">
                    <div className="td_section_heading td_style_2 td_mb_20">
                      <h2 className="td_contact_info_title td_fs_36 mb-0">
                        Our Office Address
                      </h2>
                    </div>
                    <div className="td_mb_40">
                      <h2 className="td_fs_24 td_semibold td_mb_20">
                        CodeSchool LK
                      </h2>
                      <p className="td_fs_18 td_heading_color td_medium td_mb_10">
                        Hatch Works, 14 Sir Baron Jayathilake Mawatha, Colombo 00100, Sri Lanka
                      </p>
                      <p className="td_fs_18 td_heading_color td_medium td_mb_10 td_opacity_7">
                        <a href="tel:+94771234567">Pasindu Sampath</a>
                      </p>
                      <p className="td_fs_18 td_heading_color td_medium mb-0 td_opacity_7">
                        <a href="mailto:pasindusampth@gmail.com">pasindusampth@gmail.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="td_height_120 td_height_lg_80" />

        <div className="td_map">
          <iframe
            id="map"
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63359.60760447306!2d79.83800521990956!3d6.927078384991398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2592c08b340c1%3A0xdf947b7fd9b0b0f4!2sHatch%20Works!5e0!3m2!1sen!2slk!4v1714453534673!5m2!1sen!2slk"
            allowFullScreen
            style={{ width: "100%", height: "450px", border: 0 }}
            loading="lazy"
          />
        </div>
      </section>
    </Layout>
  );
}
