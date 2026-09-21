<<<<<<< HEAD
import AcademicDepartment from "@/components/Academics/AcademicDepartment";

export default function Page() {
  return <AcademicDepartment slug="health-physical-education-department" />;
}
=======
import DepartmentPage from "@/components/Academics/DepartmentPage";

// Next.js requires this file to be named "page.tsx" so the App Router can
// find the /academics/health-physical-education-department route. Keep this file to exactly this:
// render the shared department page with this route's slug.
export default function Page() {
  return <DepartmentPage slug="health-physical-education-department" />;
}
>>>>>>> f238de886d48e20a38f258baef05dd59a0ab26bf
