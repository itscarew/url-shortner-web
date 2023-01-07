import { BsArrowRightShort } from "react-icons/bs"
import Link from 'next/link'

type Data = {
    children: React.ReactNode;
    title: string;
    showIcon: React.ReactNode
    url: string
};

export default function TitleBanner({ title, showIcon, url = "/", children }: Partial<Data>) {
    return (
        <>
            <div>
                <Link href={url} className='flex items-center text-xl py-3' > <h1>{title} </h1> <h1>{children}</h1> {showIcon && <BsArrowRightShort />}  </Link>
            </div>
        </>
    )
}









