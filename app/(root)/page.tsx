import { auth } from "@/auth";
import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {

  //on every single nextjs page we have access to search params
  const query = (await searchParams).query;
  const params = { search: query || null };

  const session = await auth();

  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY , params})
  // this will revalidate whenever new changes are made

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch your startup,
          <br />
          Connect with Enterprenuers
        </h1>
        {/* exclamation mark for overriding */}
        <p className="sub-heading !max-w-3xl">
          Submit your pitches, and Get noticed in Virtual Competitions.</p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}` : `All Startups`}
        </p>

        <ul className="mt-7 card_grid ">
          {posts?.length > 0
            ?
            (posts.map((post: StartupTypeCard, index: number) =>
              <StartupCard key={post?._id} post={post} />
            ))
            : (<p className="no-results">No startups found !</p>)}

        </ul>
      </section>
      <SanityLive />
    </>
  );
}
