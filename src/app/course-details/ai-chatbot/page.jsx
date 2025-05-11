import { CouresesNine } from "@/components/courses/CouresesNine";
import CourseCard from "@/app/course-details/ai-chatbot/CourseCard";
import { Layout } from "@/layouts/Layout";

export default function CourseDetails() {
  return (
    <Layout
      breadcrumbTitle={"Course Details"}
      breadcrumbSubtitle={"Course Details"}
    >
      {/* details */}
      <CourseCard />

      {/* popular */}
      {/* <CouresesNine /> */}
    </Layout>
  );
}
