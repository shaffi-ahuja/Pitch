import SearchForm from "@/components/SearchForm";
import Image from "next/image";


export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {

  //on every single nextjs page we have access to search params

  const query = (await searchParams).query;

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch your startup,
          <br />
          Connect with Enterprenuers
        </h1>
        {/* exclamation mark for overriding */}
        <p className="sub-heading !max-w-3xl">
          Submit your pitches, Cote on Pitches , and Get noticed in Virtual Competitions.</p>
        <SearchForm query={query} />
      </section>
    </>
  );
}
