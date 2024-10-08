import React from 'react'
import Image from 'next/image'
import { Layout } from '@components/ui'
import { EvelopeOutlined, FacebookOutlined, InstagramOutlined, LinkedinOutlined, TwitterOutlined } from '@components/icons'

export default function Footer() {
    return (
        <Layout.Footer className='pt-28 pb-20'>
            <div className="container mx-auto">
                <div className='flex flex-row items-start'>
                    <div className='basis-4/12 px-3'>
                        <div className='mb-7'>
                            <Image src="/images/default-logo.png" alt='Footer Logo' width={160} height={36} />
                        </div>
                        <p className='text-lg'>2024 © All rights reserved. Developed by <a href='#' className='font-semibold hover:text-primary duration-300'>Kiennt</a></p>
                    </div>
                    <div className='basis-3/12 px-3'>
                        <h4 className='text-3xl font-semibold mb-7 mt-2'>Newsletter</h4>
                        <form className='w-full'>
                            <label className="input input-lg input-bordered flex items-center gap-2">
                                <input type='email' className='w-full grow text-lg rounded-md border-gray-300 focus:outline-none focus:border-primary' placeholder='Your Email Address' />
                                <EvelopeOutlined />
                            </label>
                        </form>
                    </div>
                    <div className='basis-3/12 ml-auto px-3'>
                        <h4 className='text-3xl font-semibold mb-7 mt-2'>Follow Me</h4>
                        <ul className='flex flex-row items-center justify-start gap-2'>
                            <li className='group'>
                                <a href='#' aria-label='Facebook Icon' className='inline-flex items-center justify-center size-11 text-neutral-50 rounded-full bg-blue-600 rotate-y-0 group-hover:rotate-y-360 duration-500 ease-out'>
                                    <FacebookOutlined className='size-5' />
                                </a>
                            </li>
                            <li className='group'>
                                <a href='#' aria-label='Twitter Icon' className='inline-flex items-center justify-center size-11 text-neutral-50 rounded-full bg-sky-500 rotate-y-0 group-hover:rotate-y-360 duration-500 ease-out'>
                                    <TwitterOutlined className='size-5' />
                                </a>
                            </li>
                            <li className='group'>
                                <a href='#' aria-label='Linkedin Icon' className='inline-flex items-center justify-center size-11 text-neutral-50 rounded-full bg-sky-600 rotate-y-0 group-hover:rotate-y-360 duration-500 ease-out'>
                                    <LinkedinOutlined className='size-5' />
                                </a>
                            </li>
                            <li className='group'>
                                <a href='#' aria-label='Instagram Icon' className='inline-flex items-center justify-center size-11 text-neutral-50 rounded-full bg-indigo-600 rotate-y-0 group-hover:rotate-y-360 duration-500 ease-out'>
                                    <InstagramOutlined className='size-5' />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout.Footer>
    )
}
