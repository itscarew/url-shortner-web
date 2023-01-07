import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import AppContext from './AppContext';
import React, { useContext } from "react";

export enum NotifyType {
    error = "error",
    success = "success",
    info = "info",
    question = "question"
}

type NotifyProps = {
    title?: string;
    message: any;
    type?: NotifyType;
    theme: boolean
};

export const Alert = ({ title, type = NotifyType.success, message, theme }: Partial<NotifyProps>) => {
    const MySwal = withReactContent(Swal)
    return type === NotifyType.info ? MySwal.fire({
        title: <p className='text-xl' >{title}</p>,
        html: <i>{message}</i>,
        icon: 'info',
        confirmButtonColor: "#2d9c4d",
        showConfirmButton: false,
        background: `${theme && "black"}`
    }) : type === NotifyType.question ? MySwal.fire({
        title: <p className='text-xl' >{title}</p>,
        html: <i>{message}</i>,
        icon: 'question',
        confirmButtonColor: "#2d9c4d",
        showCancelButton: true,
        confirmButtonText: 'Yes',
        background: `${theme && "black"}`
    }) : MySwal.fire({
        title: <p className='text-xl' >{title}</p>,
        html: <i>{message}</i>,
        icon: 'success',
        confirmButtonColor: "#2d9c4d",
        background: `${theme && "black"}`
    })
}

