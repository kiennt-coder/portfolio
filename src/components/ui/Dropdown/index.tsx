import { DropdownProps } from "@/types/props";
// import { generateKey } from "@helpers/common";


export const Dropdown = ({ items }: DropdownProps<unknown>) => {
    const renderItems = () => {
        if (!items) return null;

        // return items.map((item) => (
        //     <li key={generateKey()}>
        //         <a>{item}</a>
        //     </li>
        // ));
    }

    return (
        <details className="dropdown">
            <summary className="btn m-1">open or close</summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                {renderItems()}
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
            </ul>
        </details>
    )
}
