import React from "react";

export default function Creaction(){
    return (
        <div className=" flex flex-col">
            <div className=" flex flex-1 flex-row justify-between p-4 ">
                <div className=" flex justify-start ">
                    <svg width="18" height="20" viewBox="0 -3 24 24" data-new-api="UserPencilFill24" data-old-api="Creator" class="Zi Zi--Creator CreatorEntrance-creatorIcon" fill="currentColor"><path d="M6.5 7.5A5.5 5.5 0 0112 2a5.5 5.5 0 015.5 5.5A5.5 5.5 0 0112 13a5.5 5.5 0 01-5.5-5.5zm8.11 9.498c.404-.408.91-1 1.17-1.51.067-.133.13-.284.165-.442.034-.15.058-.373-.033-.602a.872.872 0 00-.545-.509 1.37 1.37 0 00-.604-.043c-.657.082-1.518.184-2.373.24-.867.055-1.68.058-2.254-.041-1.189-.204-2.045-.19-2.781.087-.722.272-1.25.773-1.804 1.302-1.533 1.462-2.434 3.311-2.65 4.831-.11.78.535 1.339 1.199 1.339h8.1a.96.96 0 00.955-.929c.06-1.767.7-2.96 1.456-3.723zm6.504-1.568a.75.75 0 10-1.228-.86l-2.903 4.146a.75.75 0 001.229.86l2.902-4.146zm-4.227 6.099a.75.75 0 10-1.241-.842l-.267.392a.75.75 0 001.242.842l.266-.392z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                <div className=" font-normal mx-3">创作中心</div>
                </div>
                <div className=" text-sm text-gray-500">草稿箱(0)</div>
            </div>
            <div className=" flex flex-1 flex-row justify-between p-4">
                <div className=" flex flex-col w-1/4 items-center cursor-pointer ">
                    <div className=" rounded-full bg-blue-200 text-blue-500 h-14 w-14 flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>
                    </div>
                    <div className=" text-sm my-2">回答问题</div>
                </div>
                <div className=" flex flex-col w-1/4 items-center cursor-pointer ">
                    <div className=" rounded-full bg-orange-200 text-orange-500 h-14 w-14 flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <div className=" text-sm my-2">发视频</div>
                </div>
                <div className=" flex flex-col w-1/4 items-center cursor-pointer ">
                    <div className=" rounded-full bg-amber-200 text-amber-500 h-14 w-14 flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                    </div>
                    <div className=" text-sm my-2">写文章</div>
                </div>
                <div className=" flex flex-col w-1/4 items-center cursor-pointer ">
                    <div className=" rounded-full bg-emerald-200 text-emerald-500 h-14 w-14 flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                    </div>
                    <div className=" text-sm my-2">写想法</div>
                </div>
            </div>
            <div className=" flex flex-1 flex-row p-4 justify-between">
                <div className=" flex flex-col w-full h-full p-4 rounded-md bg-gray-100">
                    <div className=" text-gray-700">
                        开启你的知乎创作之旅
                    </div>
                    <div className=" text-sm pt-2 text-gray-400">
                        发布首篇内容，开通创作中心 快来成为知乎创作者吧～
                    </div>
                </div>
                <div className=" flex items-center bg-gray-100 pr-8">
                    <img src="https://static.zhihu.com/heifetz/assets/kanshan.7de41a9a.png" alt="" width="61" height="60"></img>
                </div>
            </div>
            <a href="/">
                <div className=" flex justify-center mb-4 border border-blue-500 mx-4 py-4 rounded-md">
                    <span className=" text-blue-600 mr-1">
                        <svg width="16" height="22" viewBox="0 0 24 24" data-new-api="PlusFill24" data-old-api="Plus" class="Zi Zi--Plus css-1qkvt8e" fill="currentColor"><path d="M13.25 3.25a1.25 1.25 0 10-2.5 0v7.5h-7.5a1.25 1.25 0 100 2.5h7.5v7.5a1.25 1.25 0 102.5 0v-7.5h7.5a1.25 1.25 0 000-2.5h-7.5v-7.5z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                    </span>
                    <button className=" w-max text-blue-500 font-sans ">开始创作</button>
                </div>
            </a>
        </div>
    )
}