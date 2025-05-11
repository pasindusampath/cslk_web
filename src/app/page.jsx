import { Layout } from "@/layouts/Layout";
import { HeroFour } from "@/components/hero/HeroFour";
import { AboutOne } from "@/components/about/AboutOne";
import { BlogOne } from "@/components/blogs/BlogOne";
import { CampusOne } from "@/components/campus/CampusOne";
import { CoursesOne } from "@/components/courses/CoursesOne";
import { DepartmentOne } from "@/components/departments/DepartmentOne";
import { EventOne } from "@/components/events/EventOne";
import { FeatureOne } from "@/components/features/FeatureOne";
import { TestimonialTwo } from "@/components/testimonials/TestimonialTwo";
import { VideoOne } from "@/components/videos/VideoOne";
import { HeroTwo } from "@/components/hero/HeroTwo";
import { CategoryTwo } from "@/components/category/CategoryTwo";
import { CertificateOne } from "@/components/certificates/CertificateOne";
import { CoursesFour } from "@/components/courses/CoursesFour";
import { RateOne } from "@/components/rates/RateOne";

export default function Home() {
  return (
    <Layout header={1} footer={1}>
      <div style={{ width: "100%", margin: "0 auto" }}>
        {/* hero */}
        <HeroTwo />
        {/* <CertificateOne /> */}
        
        
        <CategoryTwo />
        {/* about */}
        
        <RateOne />
        {/* popular */}
        <CoursesFour />
        
        {/* feature */}
        

        {/* campus */}
        <CampusOne />

        {/* departments */}
        
        {/* video */}
        {/* <VideoOne /> */}

        {/* event schedule */}
        {/* <EventOne /> */}

        {/* testimonial */}
        <TestimonialTwo />

        {/* blog */}
        {/* <BlogOne /> */}
      </div>
    </Layout>
  );
}
