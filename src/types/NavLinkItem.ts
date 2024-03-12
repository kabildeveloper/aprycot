import {IconType} from "react-icons";

export interface NavLinkItemProps {
    open?: boolean,
    path?: string,
    active?: boolean
    icon: IconType,
    title: string
}