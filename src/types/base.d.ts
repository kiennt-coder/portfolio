import { TRIGGER } from "@enums/common";
import { ButtonHTMLAttributes, SVGProps } from "react";

// ====================================== Props ======================================
export interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: JSX.Element | ReactNode;
    className?: string;
}

export interface BaseIconProps extends Omit<SVGProps<SVGSVGElement>, "children"> {
    size?: number;
    color?: string;
    children?: JSX.Element | ReactNode;
}

export interface BaseDropdownProps<T = unknown> {
    children?: JSX.Element | ReactNode;
    trigger?: Array<TRIGGER>;
    items?: Array<JSX.Element | ReactNode | Record<string, T>>;
}

// ====================================== End Props ======================================

// ====================================== Provider ======================================
export interface BaseProviderProps {
    children?: JSX.Element | ReactNode;
}

// ====================================== End Provider ======================================