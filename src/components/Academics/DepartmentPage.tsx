import { notFound } from "next/navigation";
import AcademicsLayout from "@/components/Academics/AcademicsLayout";
import { getDepartment } from "@/lib/academics-data";

export default function DepartmentPage({ slug }: { slug: string }) {
  const dept = getDepartment(slug);
  if (!dept) notFound();

  const ruled = dept.style === "ruled";

  return (
    <AcademicsLayout title={dept.label} active={dept.slug}>
      <p className="mb-10 text-[13px] text-neutral-700">{dept.intro}</p>

      {dept.faculty.length === 0 ? (
        <p className="text-[14px] text-neutral-500">
          The faculty list for this department will be updated soon.
        </p>
      ) : (
        <div
          className={`text-[13.5px] text-neutral-900 ${
            ruled ? "border-t border-neutral-200" : ""
          }`}
        >
          {dept.faculty.map((f, i) => (
            <div
              key={`${f.name}-${i}`}
              className={`grid gap-4 py-[11px] ${
                ruled
                  ? "grid-cols-[48px_190px_1fr] border-b border-neutral-200 px-3"
                  : "grid-cols-[48px_1fr_1fr] sm:grid-cols-[70px_180px_150px_1fr]"
              }`}
            >
              <span>{ruled ? `${i + 1}.` : i + 1}</span>
              <span>{f.name}</span>
              {ruled ? (
                <span>
                  {f.role ? `${f.role}, ` : ""}
                  {f.qualification}
                </span>
              ) : (
                <>
                  <span className="hidden sm:block">{f.role ?? ""}</span>
                  <span>
                    {f.role && (
                      <span className="sm:hidden">{f.role}, </span>
                    )}
                    {f.qualification}
                  </span>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </AcademicsLayout>
  );
}
