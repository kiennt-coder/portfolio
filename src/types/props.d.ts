import { BaseButtonProps, BaseDropdownProps, BaseIconProps, BaseProviderProps } from "@/types/base";

// ====================================== Button ======================================
export interface ButtonProps extends BaseButtonProps {

}

// ====================================== End Props ======================================

// ====================================== Dropdown ======================================
export interface DropdownProps<T = unknown> extends BaseDropdownProps<T> {

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