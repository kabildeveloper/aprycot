import {IconType} from 'react-icons';

export interface AccordionProps {
    open?: boolean,
    subMenu: AccordionOption[],
    icon: IconType,
    title: string
}

export interface AccordionOption {
    title: string,
    link: string
}