import React from 'react'
import Image from 'next/image'
import { Layout } from '@components/ui'
import FollowMe from '@components/home/FollowMe'
import { EvelopeOutlined } from '@components/icons'

export default function Footer() {
    return (
        <Layout.Footer className='lg:pt-28 lg:pb-12 md:pt-24 md:pb-12 pt-16 pb-6'>
            <div className="container mx-auto">
                <div className='flex flex-row flex-wrap items-start'>
                    <div className='xl:basis-4/12 lg:basis-5/12 md:basis-7/12 basis-full pb-8 px-3'>
                        <div className='mb-7'>
                            <Image src="/images/default-logo.png" alt='Footer Logo' width={160} height={36} />
                        </div>
                        <p className='text-lg'>2024 © All rights reserved. Developed by <a href='#' className='font-semibold hover:text-primary duration-300'>Kiennt</a></p>
                    </div>
                    <div className='xl:basis-3/12 lg:basis-4/12 md:basis-full basis-full lg:order-none md:order-1 pb-8 px-3'>
                        <h4 className='xl:text-3xl text-2xl font-semibold mb-7 mt-2'>Newsletter</h4>
                        <form className='w-full'>
                            <label className="input input-lg input-bordered flex items-center gap-2">
                                <input type='email' className='w-full grow xl:text-lg text-base rounded-md border-gray-300 focus:outline-none focus:border-primary' placeholder='Your Email Address' />
                                <EvelopeOutlined />
                            </label>
                        </form>
                    </div>
                    <div className='xl:basis-3/12 lg:basis-3/12 md:basis-5/12 basis-full pb-8 ml-auto px-3'>
                        <FollowMe />
                    </div>
                </div>
            </div>
        </Layout.Footer>
    )
}
