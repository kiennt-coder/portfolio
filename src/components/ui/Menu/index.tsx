import { cn } from "@/helpers/common";
import { MenuItemProps, MenuProps } from "@/types/props"

const renderMenuItems = (items?: MenuProps["items"], collapsible?: boolean): JSX.Element[] | undefined => {
    const isExists: boolean = !!items && items.length > 0;

    if (!isExists) return undefined;

    const elements = items?.map(({ key, isGroup, ...item }) => {
        if (!isGroup)
            return (
                <Item key={key} {...item} />
            )

        if (collapsible)
            return <ItemCollapse key={key} collapsible {...item} />

        return <ItemSubmenu key={key} collapsible {...item} />
    })

    return elements;
}

const Item = ({ label, icon, tooltip, className, ...item }: MenuItemProps) => {
    return (
        <li>
            <a {...item} className={cn("menu-title", tooltip && `tooltip tooltip-${tooltip.position}`, className)} data-tip={tooltip?.content} rel="nofollow">{icon}{label}</a>
        </li>
    )
}

const ItemSubmenu = ({ label, children, collapsible }: MenuItemProps & { collapsible?: boolean }) => {

    return (
        <li>
            <a>{label}</a>
            <ul>
                {renderMenuItems(children, collapsible)}
            </ul>
        </li>
    )
}

const ItemCollapse = ({ label, icon, tooltip, className, children, collapsible }: MenuItemProps & { collapsible?: boolean }) => {

    return (
        <li>
            <details open>
                <summary className={cn(tooltip && "tooltip tooltip-right", className)} data-tip={tooltip}>{icon}{label}</summary>
                <ul>
                    {renderMenuItems(children, collapsible)}
                </ul>
            </details>
        </li>
    )
}

export const Menu = ({ items, collapsible, className, ...props }: MenuProps) => {
    return (
        <ul className={cn("menu", className)} {...props}>
            {renderMenuItems(items, collapsible)}
        </ul>
    )
}
