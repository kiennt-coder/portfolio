import { i18n } from "i18next";
import { HTMLAttributes, ReactNode } from "react";
import { TiltOptions } from "vanilla-tilt";
import { IntroFeature } from "@/types/models";
import { BaseAvatarProps, BaseButtonProps, BaseComponentProps, BaseDropdownProps, BaseIconProps, BaseMenuItemProps, BaseMenuProps, BaseProviderProps, BaseWrapperProps } from "@/types/base";

// ====================================== Button ======================================
export interface ButtonProps extends BaseButtonProps {

}

// ====================================== End Props ======================================

// ====================================== Avatar ======================================
export interface AvatarProps extends BaseAvatarProps {

}

// ====================================== End Avatar ======================================

// ====================================== Menu ======================================
export interface MenuItemProps extends BaseMenuItemProps {

}

export interface MenuProps extends BaseMenuProps<MenuItemProps> {

}

// ====================================== End Menu ======================================

// ====================================== Dropdown ======================================
export interface DropdownProps<T> extends BaseDropdownProps<T> {

}

export interface DropdownLanguageProps extends DropdownProps<unknown> {
    i18n: i18n;
    lng: string;
}

export interface DropdownThemeProps extends DropdownProps<unknown> {
   
}

// ====================================== End Dropdown ======================================

// ====================================== Icon ======================================
export interface IconProps extends BaseIconProps {

}

// ====================================== End Icon ======================================

// ====================================== App ======================================
export interface AppProviderProps extends BaseProviderProps {
    
}

// ====================================== End App ======================================

// ====================================== Layout ======================================
export interface LayoutProps extends BaseComponentProps {

}

export interface HeaderProps extends BaseComponentProps {

}

export interface NavProps extends BaseComponentProps {

}

export interface SidebarProps extends BaseComponentProps {

}

export interface SectionProps extends BaseComponentProps, HTMLAttributes<HTMLElement> {

}

export interface ContentProps extends BaseComponentProps {

}

export interface FooterProps extends BaseComponentProps {

}

// ====================================== End Layout ======================================

// ====================================== Intro Feature ======================================
export interface IntroFreatureCardProps extends BaseComponentProps {
    data: IntroFeature;
}

// ====================================== End Intro Feature ======================================

// ====================================== Content Box Wrapper ======================================
export interface ContentBoxProps extends BaseComponentProps {
    title: string;
    subTitle: string;
}

// ====================================== End Content Box Wrapper ======================================

// ====================================== Activity Summary Box Wrapper ======================================
export interface ActivitySummaryBoxItemProps extends BaseComponentProps {
    icon: ReactNode;
    name: string;
    address: string;
    date: string;
    description: string;
}

export interface ActivitySummaryBoxProps extends BaseComponentProps {

}

// ====================================== End Activity Summary Box Wrapper ======================================

// ====================================== Marquee Wrapper ======================================
export interface MarqueeItemProps extends BaseComponentProps {
    label: string;
    repeat?: number;
    outline?: boolean;
    startFrom?: "left" | "right";
}

export interface MarqueeProps extends BaseComponentProps {

}

// ====================================== End Marquee Wrapper ======================================

// ====================================== Wrapper ======================================
export interface TiltWrapperProps extends BaseWrapperProps {
    options?: TiltOptions;
}

export interface AosWrapperProps extends BaseWrapperProps {

}

// ====================================== End Wrapper ======================================