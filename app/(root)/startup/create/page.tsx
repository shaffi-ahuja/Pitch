import { auth } from '@/auth';
import StartupForm from '@/components/StartupForm'
import { redirect } from 'next/navigation';
import React from 'react'

const page = async () => {
    //visit this page only if we are logged in

    const session = await auth();

    if(!session) redirect('/')

    return (
        <>
            <section className='pink_container !min-h-[230px]'>
                <h1 className='heading'> Submit your startup pitch</h1>
            </section>
            <StartupForm/>
        </>
    )
}

export default page