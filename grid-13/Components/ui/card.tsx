import React from 'react'

const Card = () => {
    return (
        <div className='flex gap-2' >
            <div
                className={
                    "relative card flex h-20 w-[10rem] -skew-y-[9deg] select-none flex-col justify-between rounded-xl border-2  backdrop-blur-sm px-4 py-3 transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[0%] after:w-[20rem]  after:content-[''] hover:border-white/20 hover:bg-muted [&>*]:flex [&>*]:items-center [&>*]:gap-2"
                }
            >
                <div>
                    <p className={("text-lg font-medium")}>hello</p>
                </div>
            </div>
            <div
                className={
                    "relative card flex h-20 w-[10rem] -skew-y-[9deg] select-none flex-col justify-between rounded-xl border-2  backdrop-blur-sm px-4 py-3 transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[0%] after:w-[20rem]  after:content-[''] hover:border-white/20 hover:bg-muted [&>*]:flex [&>*]:items-center [&>*]:gap-2"
                }
            >
                <div>
                    <p className={("text-lg font-medium")}>hello</p>
                </div>
            </div>
            <div
                className={
                    "relative card flex h-20 w-[10rem] -skew-y-[9deg] select-none flex-col justify-between rounded-xl border-2  backdrop-blur-sm px-4 py-3 transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[0%] after:w-[20rem]  after:content-[''] hover:border-white/20 hover:bg-muted [&>*]:flex [&>*]:items-center [&>*]:gap-2"
                }
            >
                <div>
                    <p className={("text-lg font-medium")}>hello</p>
                </div>
            </div>
        </div>
    )
}

export default Card