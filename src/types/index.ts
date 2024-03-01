import type { ReactNode } from "react"
import type React from "react"
import type { MenuProps } from 'antd';

export declare interface ChildrenProp {
    children?: ReactNode
}

export declare interface NavbarProps extends ChildrenProp {
    //News: React.ElementType,
}

export declare type MenuItem = Required<MenuProps>['items'][number];

export declare type ResponsiveProps = {
    Mobile: React.ElementType
    Desktop: React.ElementType
}

export declare type PanelProps = {
    Menu: React.ElementType
    Appointment: React.ElementType
}
export declare type MenuProps = {
    mode: 'horizontal' | 'vertical' | 'inline'
    current: string
    onSelectItem: (e: any) => void
    items?: MenuItem[]
}