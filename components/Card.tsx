import Button from './Button'
import { BsTrash } from "react-icons/bs"
import { FiMoreVertical } from "react-icons/fi"
import moment from 'moment'
import Image from 'next/image'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'

export default function Card({ watchlist, search, data, onClick, chooseSimilarMovies, watchList }: any) {
    const titleLength = (text: string) => {
        if (text?.length > 24) {
            return `${text?.slice(0, 24)}....`
        }
        else {
            return text
        }
    }

    const list = [
        {
            id: 1, text: "Similar Movies",
            action: () => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                chooseSimilarMovies()
            }
        },
        { id: 2, text: "Watchlist", action: () => watchList() }
    ]

    return (
        <>
            <div className={`${search ? "  w-1/6" : "w-1/4"}  p-2`} >
                <div className='flex flex-col mb-4' >
                    <div className='relative rounded-lg  overflow-hidden' style={{ height: "17rem" }}>
                        <Image
                            style={{ objectFit: "cover" }}
                            className='transform transition duration-300 hover:scale-105'
                            src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
                            alt={data?.title}
                            fill
                        />

                        {!watchlist &&
                            <div className='absolute top-2 right-2 z-40' >
                                <div>
                                    <Menu as="div" className="relative inline-block text-left">
                                        <div>
                                            <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-60 px-3 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                                <FiMoreVertical size={20} />
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <div className="px-1 py-1 ">

                                                    {list.map((list) => {
                                                        return (
                                                            <Menu.Item key={list.id} >
                                                                {({ active }) => (
                                                                    <button
                                                                        className={`${active ? 'bg-fern-400 text-white' : 'text-gray-900'
                                                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                                        onClick={list.action}
                                                                    >
                                                                        {list.text}
                                                                    </button>
                                                                )}
                                                            </Menu.Item>)
                                                    })}
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </div>

                        }

                    </div>

                    <div className='flex flex-col h-40 justify-between'>
                        <div className='py-0'>
                            <div className='flex justify-between items-baseline ' >
                                <h3 className='text-xl font-black'> {titleLength(data?.title)} </h3>
                                <h4 className='text-sm font-semibold text-yellow-700'> {data?.vote_average} </h4>
                            </div>
                            <h4 className='text-sm'> {moment(data?.release_date).format("ll")} </h4>
                        </div>
                        <Button className={`${watchlist ? "bg-red-500" : "bg-fern-500"} h-10 my-2`} onClick={onClick} > {watchlist ? <BsTrash /> : "More Details"}  </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

// {!watchlist &&
//     <div className='absolute top-2 right-2' >
//         {/* <Button className='h-10 ml-3 text-2xl' style={{ background: `rgba(255,255,255, 0.6)` }}> + </Button> */}

//     </div>}
