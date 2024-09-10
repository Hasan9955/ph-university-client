import { ReactNode } from "react";

export type TSidebarItem = {
    key: string;
    label: ReactNode,
    children?: TSidebarItem[]
}

export type TProps = {
    name: string,
    path?: string,
    element?: ReactNode;
    children?: TProps[]
}
