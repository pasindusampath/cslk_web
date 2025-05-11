import { CoursesAllContainer } from "@/components/courses/CoursesAllContainer";
import { CoursesAllGrid } from "@/components/courses/CoursesAllGrid";
import { Layout } from "@/layouts/Layout";

export default function CoursesGridView() {
  return (
    <Layout
      breadcrumbTitle={"Courses"}
      breadcrumbSubtitle={"Courses"}
    >
      <CoursesAllContainer isGrid>
        <CoursesAllGrid />
      </CoursesAllContainer>
    </Layout>
  );
}
