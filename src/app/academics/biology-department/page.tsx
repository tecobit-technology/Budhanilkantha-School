import DepartmentPage from "@/components/Academics/DepartmentPage";

// Next.js requires this file to be named "page.tsx" so the App Router can
// find the /academics/biology-department route. Keep this file to exactly this:
// render the shared department page with this route's slug.
export default function Page() {
  return <DepartmentPage slug="biology-department" />;
}