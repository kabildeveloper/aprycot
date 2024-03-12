import "./Button.css";
import {ButtonHTMLAttributes} from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    variant?: "pill" | "outlined",
    color?: "secondary" | "primary",
    size?: "sm" | "lg"
}

export default function Button (props: IProps) {

    const styles = `btn ${props.variant || 'normal'} ${props.color || ''} ${props.size || ''} ${props.className || ''}`;

    return(
        <button onClick={props.onClick} className={styles}>
            {props.children}
        </button>
    )
}