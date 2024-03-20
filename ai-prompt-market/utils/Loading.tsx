import React from 'react'
import './Loading.css'
type Props = {}

export default function Loading({ }: Props) {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="border-4 border-solid border-blue-600 border-t-blue-700 rounded-full w-12 h-12 animate-spin duration-1000 ease-linear infinite"></div>
        </div>
    )
}