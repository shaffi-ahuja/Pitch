import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import Image from "next/image";


export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {

  //on every single nextjs page we have access to search params

  const query = (await searchParams).query;

  const posts = [{
    _id: 1,
    _createdAt: new Date(),
    views: 55,
    author: {
      _id: 1,
      name:'Shaffi Ahuja'
    },
    image: 'https://plus.unsplash.com/premium_photo-1677094310899-02303289cadf?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'This is description',
    category: 'Robots',
    title: 'We Robots'
  }]

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
            : (<p className="no-results">No startups found</p>)}

        </ul>
      </section>
    </>
  );
}
