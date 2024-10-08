import React from 'react'
import { Layout } from '@components/ui'
import { Check, Mark } from '@components/icons'
import ContentBox from '@components/home/ContentBox'

export default function Pricing() {
    return (
        <Layout.Section className='pt-40 pb-36'>
            <div className='container mx-auto px-3'>
                <ContentBox title='Pricing Plans' subTitle="Let's start working" className='text-center' />
                <div className='grid grid-cols-3 gap-6'>
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1200">
                        <div className='card bg-base-100 dark:bg-neutral-900/45 hover:shadow-lg relative top-0 hover:-top-3 duration-300'>
                            <div className='card-body p-11 pb-12'>
                                <h3 className='card-title text-3xl font-semibold dark:text-neutral-50 pb-6 border-b border-gray-300 dark:border-gray-600'>Hourly</h3>
                                <p className='text-lg font-semibold mt-5 mb-2'>
                                    <span className='text-6xl text-primary'>$99</span>
                                    &nbsp;&nbsp;/ Per Hour
                                </p>
                                <ul>
                                    <li className='flex flex-row items-center gap-5 mb-2'>
                                        <Check className='flex-shrink-0 size-5 text-primary' />
                                        <p className='text-lg'>One time contract</p>
                                    </li>
                                    <li className='flex flex-row items-center gap-5 mb-2'>
                                        <Check className='flex-shrink-0 size-5 text-primary' />
                                        <p className='text-lg'>Flexible contract</p>
                                    </li>
                                    <li className='flex flex-row items-center gap-5 mb-2'>
                                        <Check className='flex-shrink-0 size-5 text-primary' />
                                        <p className='text-lg'>Source Files</p>
                                    </li>
                                    <li className='flex flex-row items-center gap-5 mb-2'>
                                        <Mark className='flex-shrink-0 size-5 text-gray-400' />
                                        <p className='text-lg'>Support</p>
                                    </li>
                                    <li className='flex flex-row items-center gap-5 mb-2'>
                                        <Mark className='flex-shrink-0 size-5 text-gray-400' />
                                        <p className='text-lg'>Updates</p>
                                    </li>
                                </ul>
                                <button className='btn btn-primary text-base self-start uppercase mt-6 px-8 text-base-100 relative z-0 overflow-hidden after:content-[""] after:absolute after:z-[1] after:-top-12 after:-left-20 after:w-12 after:h-40 after:bg-neutral-50/20 after:rotate-[35deg] hover:after:left-[120%] after:duration-500'>Start now</button>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1400">
                        <div className='card bg-base-100 dark:bg-neutral-900/45 hover:shadow-lg relative top-0 hover:-top-3 duration-300'>
                            <div className='card-body p-11 pb-12'>
                                <h3 className='card-title text-3xl font-semibold dark:text-neutral-50 pb-6 border-b border-gray-300 dark:border-gray-600'>Project Basis</h3>
                                <p className='text-lg font-semibold mt-5 mb-2'>
                                    <span className='text-6xl text-primary'>$69</span>
                                    &nbsp;&nbsp;/ Per Hour
                                </p>
                                <ul>
                                    <li className='flex flex-row items-center gap-5 mb-2'>
                                        <Check className='flex-shrink-0 size-5 text-primary' />
                                        <p className='text-lg'>One time contract</p>
                                    </li>
                                    <li className='flex flex-row items-center gap-5 mb-2'>
                                        <Check className='flex-shrink-0 size-5 text-primary' />
                                        <p className='text-lg'>Flexible contract</p>
                                    </li>
                                    <li className='flex flex-row items-center gap-5 mb-2'>
                                        <Check className='flex-shrink-0 size-5 text-primary' />
                                        <p className='text-lg'>Source Files</p>
                                    </li>
                                    <li className='flex flex-row items-center gap-5 mb-2'>
                                        <Check className='flex-shrink-0 size-5 text-primary' />
                                        <p className='text-lg'>Support</p>
                                    </li>
                                    <li className='flex flex-row items-center gap-5 mb-2'>
                                        <Mark className='flex-shrink-0 size-5 text-gray-400' />
                                        <p className='text-lg'>Updates</p>
                                    </li>
                                </ul>
                                <button className='btn btn-primary text-base self-start uppercase mt-6 px-8 text-base-100 relative z-0 overflow-hidden after:content-[""] after:absolute after:z-[1] after:-top-12 after:-left-20 after:w-12 after:h-40 after:bg-neutral-50/20 after:rotate-[35deg] hover:after:left-[120%] after:duration-500'>Start now</button>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1600">
                        <div className='card bg-base-100 dark:bg-neutral-900/45 hover:shadow-lg relative top-0 hover:-top-3 duration-300'>
                            <div className='card-body p-11 pb-12'>
                                <h3 className='card-title text-3xl font-semibold dark:text-neutral-50 pb-6 border-b border-gray-300 dark:border-gray-600'>Monthly</h3>
                                <p className='text-lg font-semibold mt-5 mb-2'>
                                    <span className='text-6xl text-primary'>$39</span>
                                    &nbsp;&nbsp;/ Per Hour
                                </p>
                                <ul>
                                    <li className='flex flex-row items-center gap-5 mb-2'>
                                        <Check className='flex-shrink-0 size-5 text-primary' />
                                        <p className='text-lg'>One time contract</p>
                                    </li>
                                    <li className='flex flex-row items-center gap-5 mb-2'>
                                        <Check className='flex-shrink-0 size-5 text-primary' />
                                        <p className='text-lg'>Flexible contract</p>
                                    </li>
                                    <li className='flex flex-row items-center gap-5 mb-2'>
                                        <Check className='flex-shrink-0 size-5 text-primary' />
                                        <p className='text-lg'>Source Files</p>
                                    </li>
                                    <li className='flex flex-row items-center gap-5 mb-2'>
                                        <Check className='flex-shrink-0 size-5 text-primary' />
                                        <p className='text-lg'>Support</p>
                                    </li>
                                    <li className='flex flex-row items-center gap-5 mb-2'>
                                        <Check className='flex-shrink-0 size-5 text-primary' />
                                        <p className='text-lg'>Updates</p>
                                    </li>
                                </ul>
                                <button className='btn btn-primary text-base self-start uppercase mt-6 px-8 text-base-100 relative z-0 overflow-hidden after:content-[""] after:absolute after:z-[1] after:-top-12 after:-left-20 after:w-12 after:h-40 after:bg-neutral-50/20 after:rotate-[35deg] hover:after:left-[120%] after:duration-500'>Start now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout.Section>
    )
}
