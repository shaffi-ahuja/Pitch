import { auth } from '@/auth';
import { StartupCardSkeleton } from '@/components/StartupCard';
import UserStartups from '@/components/UserStartups';
import { client } from '@/sanity/lib/client';
import { AUTHOR_BY_ID_QUERY } from '@/sanity/lib/queries';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React, { Suspense } from 'react'

export const experimental_ppr = true;

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = (await params).id;
    const session = await auth();

    const user = await client.fetch(AUTHOR_BY_ID_QUERY, { id })
    if (!user)
        return notFound();


    return (
        <>
            <section className='profile_container'>
                <div className='profile_card'>
                    <div className='profile_title'>
                        <h3 className='text-24-black uppercase text-center line-clamp-1'>
                            {user.name}
                        </h3>
                    </div>
                    <Image
                        src={user.image}
                        alt={user.name}
                        width={220}
                        height={220}
                        className='profile_image' />
                    <p className='text-20-bold mt-7 text-center'>
                        @{user.username}
                    </p>
                    <p className='mt-1 text-center text-16-normal'>
                        {user?.bio}
                    </p>
                    <Link href={`mailto:${user?.email}`} className='mt-1 text-center text-14-normal flex justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope mr-1 mt-[2px]" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                        </svg>
                        {user?.email}
                    </Link>
                </div>
                <div className='flex-1 flex flex-col gap-5 lg:-mt-5'>
                    <p className='text-30-bold'>
                        {session?.id === id ? 'Your' : 'All'} Startups
                    </p>
                    <ul className='card_grid-sm'>
                        <Suspense fallback={<StartupCardSkeleton />}>
                            <UserStartups id={id} />
                        </Suspense>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default page;