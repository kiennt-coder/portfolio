import { ImageProps } from "next/image";
import { SHAPE, TRIGGER } from "@enums/common";
import { ButtonHTMLAttributes, CSSProperties, ReactNode, SVGProps } from "react";

export interface BaseLayoutProps {
    children: ReactNode;
    params: {
        lng: string;
    }
}

export interface BasePageProps extends Omit<BaseLayoutProps, 'children'> {

}

export interface BaseComponentProps {
    children?: JSX.Element | ReactNode;
    className?: string;
    style?: CSSProperties;
    disabled?: boolean;
}

// ====================================== Props ======================================
export interface BaseButtonProps extends BaseComponentProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
    className?: string;
    htmlType?: string;
    type?: "primary" | "secondary" | "ghost" | "link" | "info" | "success" | "warning" | "error";
    outline?: boolean;
    shape?: "circle" | "square";
}

export interface BaseIconProps extends BaseComponentProps, SVGProps<SVGSVGElement> {
    size?: number;
    color?: string;
    children: JSX.Element;
}

export interface BaseImageProps extends BaseComponentProps, Omit<ImageProps, 'src'> {
    src?: ImageProps['src'];
}

export interface BaseAvatarProps extends BaseComponentProps {
    url?: ImageProps['src'];
    size?: number;
    shape?: SHAPE;
    ring?: boolean;
}

export interface BaseDropdownProps<T> extends BaseComponentProps {
    trigger?: Array<TRIGGER>;
    items?: Array<JSX.Element | ReactNode | Record<string, T>>;
}

export interface BaseMenuItemProps extends BaseComponentProps {
    key: string;
    label?: JSX.Element | ReactNode;
    icon?: JSX.Element | ReactNode;
    href?: string;
    tooltip?: {
        content: string;
        position?: "top" | "right" | "bottom" | "left";
    };
    isGroup?: boolean;
    children?: Array<BaseMenuItemProps>;
}

export interface BaseMenuProps<T> extends BaseComponentProps {
    items: Array<T>;
    collapsible?: boolean;
}

// ====================================== End Props ======================================

// ====================================== Provider ======================================
export interface BaseProviderProps extends BaseComponentProps {
    
}

// ====================================== End Provider ======================================

// ====================================== Wrapper ======================================
export interface BaseWrapperProps extends BaseComponentProps {
    
}

// ====================================== End Wrapper ======================================