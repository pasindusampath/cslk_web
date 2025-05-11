import { AboutOne } from "@/components/about/AboutOne";
import { BlogOne } from "@/components/blogs/BlogOne";
import { CampusOne } from "@/components/campus/CampusOne";
import { DepartmentOne } from "@/components/departments/DepartmentOne";
import { VideoOne } from "@/components/videos/VideoOne";
import { Layout } from "@/layouts/Layout";

export default function About() {
  return (
    <Layout breadcrumbTitle={"About Us"} breadcrumbSubtitle={"About Us"}>
      {/* about */}
      <AboutOne />

      {/* campus */}
      <CampusOne />

      {/* departments */}
      <DepartmentOne />

      {/* video */}
      {/* <VideoOne /> */}

      {/* blog */}
      {/* <BlogOne /> */}
    </Layout>
  );
}
