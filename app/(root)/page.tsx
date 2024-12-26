import Image from "next/image";

export default function Home() {
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
      </section>
    </>
  );
}
