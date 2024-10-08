import { ContentProps, FooterProps, HeaderProps, LayoutProps, NavProps, SectionProps, SidebarProps } from "@/types/props"

export const Layout = ({ children, ...props }: LayoutProps) => {
    return (
        <main {...props}>
            {children}
        </main>
    )
}

const Header = ({ children, ...props }: HeaderProps) => {
    return (
        <header {...props}>
            {children}
        </header>
    )
}

const Nav = ({ children, ...props }: NavProps) => {
    return (
        <nav {...props}>
            {children}
        </nav>
    )
}

const Sidebar = ({ children, ...props }: SidebarProps) => {
    return (
        <aside {...props}>
            {children}
        </aside>
    )
}

const Section = ({ children, ...props }: SectionProps) => {
    return (
        <section {...props}>
            {children}
        </section>
    )
}

const Content = ({ children, ...props }: ContentProps) => {
    return (
        <article {...props}>
            {children}
        </article>
    )
}

const Footer = ({ children, ...props }: FooterProps) => {
    return (
        <footer {...props}>
            {children}
        </footer>
    )
}

Layout.Header = Header;
Layout.Nav = Nav;
Layout.Sidebar = Sidebar;
Layout.Section = Section;
Layout.Content = Content;
Layout.Footer = Footer;