
import Link from "next/link";
import Navbar from "@/components/HomePage/Navbar";
import Footer from "@/components/HomePage/Footer";
import Reveal from "@/components/Reveal";
import { navItems } from "@/lib/site-data";

type SearchPageProps = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function SearchPage({
  searchParams,
}: SearchPageProps) {
  const params = await searchParams;
  const query = params.q?.trim() || "";

  // Create one searchable list containing
  // main navigation pages + their child pages
  const searchablePages = navItems.flatMap((item) => [
    {
      label: item.label.trim(),
      href: item.href,
      parent: null,
    },
    ...(item.children || []).map((child) => ({
      label: child.label.trim(),
      href: child.href,
      parent: item.label.trim(),
    })),
  ]);

  // Search by page name
  const results = query
    ? searchablePages.filter((page) =>
        page.label.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f8f7f4] pt-32">
      <section className="mx-auto max-w-[1200px] px-5 py-12 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#B7012C]">
            Search
          </p>

          <h1 className="font-display text-4xl font-bold uppercase tracking-wide text-[#00224A] sm:text-5xl">
            Search Results
          </h1>
        </div>

        {/* Search box */}
        <form
          action="/search"
          method="get"
          className="mb-10 flex max-w-2xl border-b-2 border-[#00224A]"
        >
          <input
            type="text"
            name="q"
            defaultValue={query}
            placeholder="Search..."
            className="w-full bg-transparent px-1 py-4 text-lg text-[#00224A] placeholder:text-gray-400 focus:outline-none"
          />

          <button
            type="submit"
            className="bg-[#B7012C] px-7 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#7A0620]"
          >
            Search
          </button>
        </form>

        {/* No search keyword */}
        {!query && (
          <div className="border border-[#ddd] bg-white p-8">
            <h2 className="ca-subheading mb-1">
              Search the website
            </h2>

            <p className="text-[#666]">
              Enter a keyword above to find pages on the Crestwood
              Academy website.
            </p>
          </div>
        )}

        {/* Results */}
        {query && (
          <>
            <p className="mb-6 text-sm text-[#666]">
              {results.length}{" "}
              {results.length === 1 ? "result" : "results"} found for{" "}
              <span className="font-semibold text-[#00224A]">
                &quot;{query}&quot;
              </span>
            </p>

            {results.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {results.map((page, i) => (
                  <Reveal key={`${page.href}-${page.label}`} delay={Math.min(i, 8) * 60}>
                    <Link
                      href={page.href}
                      className="group block h-full border border-[#ddd] bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#B7012C] hover:shadow-md"
                    >
                      {/* Parent category */}
                      {page.parent && (
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#B7012C]">
                          {page.parent}
                        </p>
                      )}

                      {/* Page name */}
                      <h2 className="text-lg font-semibold text-[#00224A] transition-colors group-hover:text-[#B7012C]">
                        {page.label}
                      </h2>

                      {/* Arrow */}
                      <span className="mt-4 inline-block text-sm font-medium text-[#666] transition-transform group-hover:translate-x-1">
                        Visit page →
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            ) : (
              <div className="border border-[#ddd] bg-white p-8">
                <h2 className="ca-subheading mb-1">
                  No results found
                </h2>

                <p className="text-[#666]">
                  We couldn&apos;t find a page matching{" "}
                  <span className="font-semibold">&quot;{query}&quot;</span>.
                  Try another keyword such as History, Physics, Gallery,
                  Notice, or Contact.
                </p>
              </div>
            )}
          </>
        )}
      </section>
    </main>
      <Footer />
    </>
  );
}

