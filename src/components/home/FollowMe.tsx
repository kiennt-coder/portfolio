import { cn } from "@/helpers/common";
import { FollowMeProps } from "@/types/props";
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, TwitterOutlined } from "@components/icons";


export default function FollowMe({ className }: FollowMeProps) {
    return (
        <div className={cn(className)}>
            <h4 className='xl:text-3xl text-2xl font-semibold mb-7 mt-2'>Follow Me</h4>
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
    )
}
