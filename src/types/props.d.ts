import { i18n } from "i18next";
import { TiltOptions } from "vanilla-tilt";
import { HTMLAttributes, MouseEventHandler, ReactNode } from "react";
import { Award, IntroFeature, Service } from "@/types/models";
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

export interface MenuDrawerProps extends BaseComponentProps {
    lng?: string;
}

export interface HeaderMenuItemProps extends BaseComponentProps {
    href: string;
    isActive?: boolean;
    onClick: MouseEventHandler<HTMLAnchorElement>;
}

// ====================================== Intro Feature ======================================
export interface IntroFreatureCardProps extends BaseComponentProps {
    data: IntroFeature;
}

// ====================================== End Intro Feature ======================================

// ====================================== Content Box ======================================
export interface ContentBoxProps extends BaseComponentProps {
    title: string;
    subTitle: string;
}

// ====================================== End Content Box ======================================

// ====================================== Activity Summary Box ======================================
export interface ActivitySummaryBoxItemProps extends BaseComponentProps {
    icon: ReactNode;
    name: string;
    address: string;
    date: string;
    description: string;
}

export interface ActivitySummaryBoxProps extends BaseComponentProps {

}

// ====================================== End Activity Summary Box ======================================

// ====================================== Marquee ======================================
export interface MarqueeItemProps extends BaseComponentProps {
    label: string;
    repeat?: number;
    outline?: boolean;
    startFrom?: "left" | "right";
}

export interface MarqueeProps extends BaseComponentProps {

}

// ====================================== End Marquee ======================================

// ====================================== Wrapper ======================================
export interface TiltWrapperProps extends BaseWrapperProps {
    options?: TiltOptions;
}

export interface AosWrapperProps extends BaseWrapperProps {

}

// ====================================== End Wrapper ======================================

// ====================================== FunFact ======================================
export interface FunFactStatProps extends BaseComponentProps {
    value: number;
    description: string;
    suffix?: string;
}

// ====================================== End FunFact ======================================

// ====================================== Award ======================================
export interface AwardItemProps extends BaseComponentProps {
    data: Award;
}

// ====================================== End Award ======================================


// ====================================== Skill ======================================
export interface SkillProgressProps extends BaseComponentProps {
    label: string;
    value: number;
}

// ====================================== End Skill ======================================

// ====================================== Service ======================================
export interface ServiceCardProps extends BaseComponentProps {
    data: Service
}

// ====================================== End Service ======================================

// ====================================== Pricing ======================================
export interface PricingCardProps extends BaseComponentProps {

}

// ====================================== End Pricing ======================================


// ====================================== Follow Me ======================================
export interface FollowMeProps extends BaseComponentProps {

}

// ====================================== End Follow Me ======================================