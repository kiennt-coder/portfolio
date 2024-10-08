import { ActivitySummaryBoxItemProps, ActivitySummaryBoxProps } from "@/types/props";
import { cloneElement } from "react";


const ActivitySummaryBoxItem = ({ icon, name, address, date, description }: ActivitySummaryBoxItemProps) => {
    return (
        <li className="group mb-8 flex flex-row items-start">
            <div>
                <div className="size-20 flex items-center justify-center mt-2 mr-7 text-base-100 dark:text-primary bg-primary dark:bg-transparent border border-primary rounded-lg group-hover:text-primary group-hover:bg-transparent dark:group-hover:text-base-100 dark:group-hover:bg-primary duration-300">
                    {cloneElement(icon as JSX.Element, {
                        className: "size-12 flex-shrink-0 rotate-y-0 group-hover:rotate-y-360 duration-500 ease-out"
                    })}
                </div>
            </div>
            <div>
                <h3 className="text-3xl font-semibold mb-2 dark:text-neutral-50">{name}</h3>
                <h4 className="text-lg font-semibold dark:text-neutral-50">{address} <span className="text-base font-normal text-gray-400 dark:text-base-content">({date})</span></h4>
                <p className="text-lg text-justify mt-4">{description}</p>
            </div>
        </li>
    )
}

const ActivitySummaryBox = ({ children }: ActivitySummaryBoxProps) => {
    return (
        <ul className="mt-10">
            {children}
        </ul>
    )
}

ActivitySummaryBox.Item = ActivitySummaryBoxItem;
export default ActivitySummaryBox;
