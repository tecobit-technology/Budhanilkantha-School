import AcademicsLayout from "@/components/Academics/AcademicsLayout";
import { academicDepartments } from "@/lib/academics-data";

export default function AcademicDepartment({ slug }: { slug: string }) {
  const dept = academicDepartments[slug];

  return (
    <AcademicsLayout title={dept.active} active={dept.active}>
      <div className="space-y-5 text-[15px] leading-[1.9] text-neutral-700">
        {dept.description.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}

        <div>
          {dept.faculty.length > 0 ? (
            <>
              <p className="mb-3">
                Faculty members of {dept.active} are listed below:
              </p>
              <div className="border border-neutral-100 rounded overflow-hidden">
                {dept.faculty.map((f, i) => (
                  <div
                    key={f.name}
                    className={`grid grid-cols-[48px_200px_1fr] gap-4 px-4 py-3 ${
                      i % 2 === 1 ? "bg-neutral-50" : ""
                    }`}
                  >
                    <span>{i + 1}.</span>
                    <span>{f.name}</span>
                    <span>{f.qualification}</span>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p className="italic text-neutral-500">
              The list of faculty members of {dept.active} will be updated
              shortly.
            </p>
          )}
        </div>
      </div>
    </AcademicsLayout>
  );
}