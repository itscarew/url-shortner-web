import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

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
};

export const Alert = ({ title, type = NotifyType.success, message }: Partial<NotifyProps>) => {
    const MySwal = withReactContent(Swal)
    return type === NotifyType.info ? MySwal.fire({
        title: <p className='text-xl' >{title}</p>,
        html: <i>{message}</i>,
        icon: 'info',
        confirmButtonColor: "#2d9c4d",
        showConfirmButton: false
    }) : type === NotifyType.question ? MySwal.fire({
        title: <p className='text-xl' >{title}</p>,
        html: <i>{message}</i>,
        icon: 'question',
        confirmButtonColor: "#2d9c4d",
        showCancelButton: true,
        confirmButtonText: 'Yes',
    }) : MySwal.fire({
        title: <p className='text-xl' >{title}</p>,
        html: <i>{message}</i>,
        icon: 'success',
        confirmButtonColor: "#2d9c4d"

    })
}

