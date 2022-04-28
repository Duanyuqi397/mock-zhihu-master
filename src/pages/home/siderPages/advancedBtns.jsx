import React from "react";

export default function AdvancedBtns(){
    return (
        <div className=" flex flex-col p-4">
            <div className=" flex flex-row justify-between p-4 mx-4 ">
                <div className=" text-yellow-300 ">
                    <div className=" flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>                    
                    <div className=" text-gray-400 ">Live</div>
                    </div>
                </div>
                <div className=" text-green-400 ">
                    <div className=" flex flex-col items-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" data-new-api="Ebook24" data-old-api="Ebook" class="Zi Zi--Ebook" fill="currentColor" ><path d="M16 17.649V2.931a.92.92 0 00-.044-.283.943.943 0 00-1.183-.604L4.655 5.235A.932.932 0 004 6.122v14.947c0 .514.421.931.941.931H19.06c.52 0 .941-.417.941-.93V7.292a.936.936 0 00-.941-.931h-.773v12.834a.935.935 0 01-.83.924L6.464 21.416c-.02.002 2.94-.958 8.883-2.881a.932.932 0 00.653-.886z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                        <div className=" text-gray-400 ">书店</div>
                    </div>
                </div>
                <div className=" text-blue-500">
                    <div className=" flex flex-col items-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" data-new-api="Org24" data-old-api="Org" class="Zi Zi--Org" fill="currentColor"><path d="M10.786 8.41a8.938 8.938 0 00-3.968-2.528c-.305-1.719.814-3.337 2.442-3.741 1.221-.405 2.646.101 3.46 1.011 1.045 1.38.915 3.64.814 4.348-.102 1.315-1.221 3.034-1.323 3.135-.305-.809-.814-1.517-1.425-2.225zm-2.442 2.832c-1.526.202-3.052 1.01-4.171 2.123-1.12-.404-1.934-1.314-2.137-2.427-.316-2.427 1.526-3.64 2.849-3.842 1.628-.372 2.849.505 4.07 1.415 1.146 1.012 2.035 2.63 2.035 2.73-.916-.202-1.832-.1-2.646 0zm4.986.303c.509-.607.931-1.585 1.12-2.225.318-1.039.61-3.134.203-4.651 1.323-1.011 3.154-1.011 4.477.303 1.235 1.146 1.018 2.933.814 3.438-.663 1.581-1.933 2.326-3.256 2.832-1.221.404-3.256.303-3.358.303zm-2.645 1.011c-.51.607-.916 1.416-1.221 2.326-.407 1.314-.643 3.06-.102 4.55-1.323 1.011-3.256 1.011-4.477-.202-1.198-1.124-1.018-2.933-.814-3.438.599-1.605 1.933-2.326 3.256-2.831.916-.304 3.256-.405 3.358-.405zm9.259-1.82c1.018.404 1.933 1.315 2.035 2.427.233 2.57-1.526 3.64-2.849 3.842-1.526 0-2.85-.505-4.07-1.415-1.018-.81-2.035-2.528-2.035-2.63.916.203 1.831.102 2.645 0 1.628-.404 3.053-1.112 4.274-2.224zm-6.716 4.854c1.065 1.08 2.442 2.022 4.07 2.528.306 1.719-.814 3.235-2.442 3.741-1.22.404-2.645-.101-3.46-1.011-1.1-1.481-1.017-3.54-.915-4.247.102-1.315 1.221-3.034 1.323-3.135.305.708.721 1.44 1.424 2.124z"></path></svg>
                        <div className=" text-gray-400">圆桌</div>
                    </div>
                </div>
            </div>
            <div className=" flex flex-row justify-between p-4 mx-4">
                <div className=" text-blue-400">
                    <div className=" flex flex-col items-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" data-new-api="PencilFill24" data-old-api="Edit" class="Zi Zi--Edit" fill="currentColor"><path d="M7.841 20.043l-4.328 1.18a.6.6 0 01-.737-.736l1.18-4.324a1.2 1.2 0 01.314-.539l8.094-7.995a.9.9 0 011.268.003l2.736 2.736a.9.9 0 01.004 1.268l-7.196 7.296-.802.802a1.2 1.2 0 01-.533.31zM19.703 4.81l-.514-.513a2.542 2.542 0 00-3.595 0l-.999 1.067a.9.9 0 00.02 1.252l2.77 2.768a.9.9 0 001.25.02l1.068-.999a2.542 2.542 0 000-3.594z"></path></svg>                    
                        <div className=" text-gray-400">专栏</div>
                    </div>
                </div>
                <div className=" text-blue-600">
                    <div className=" flex flex-col items-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" data-new-api="CurrencyBubbleFill24" data-old-api="Infinity" class="Zi Zi--Infinity" fill="currentColor"><path d="M2 5.4A2.4 2.4 0 014.4 3h15.2A2.4 2.4 0 0122 5.4v10.5a2.4 2.4 0 01-2.4 2.4h-2.208l-.24 2.878a.8.8 0 01-1.387.475L12.692 18.3H4.4A2.4 2.4 0 012 15.9V5.4zm8.758 1.849a.75.75 0 00-1.115 1.003l1.607 1.786v.462h-1.5a.75.75 0 000 1.5h1.5v1.75a.75.75 0 001.5 0V12h1.5a.75.75 0 000-1.5h-1.5v-.462l1.607-1.786a.75.75 0 00-1.115-1.003L12 8.629l-1.242-1.38z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>                   
                        <div className=" text-gray-400">付费咨询</div>
                    </div>
                </div>
                <div className=" text-blue-700">
                    <div className=" flex flex-col items-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" data-new-api="KnowledgeBase24" data-old-api="KnowledgeBase" class="Zi Zi--KnowledgeBase" fill="currentColor"><path d="M21 9.749v9.91c0 .74-.604 1.341-1.35 1.341H4.35C3.604 21 3 20.4 3 19.659V9.319c0-.503.283-.963.733-1.193l4.892-2.5V3.341c0-.74.604-1.341 1.35-1.341.267 0 .527.078.749.225l9.675 6.408c.375.249.601.668.601 1.116zM8.297 8.307L5.372 9.802A.223.223 0 005.25 10v8.54c0 .124.1.224.225.224h8.586a.223.223 0 00.124-.41l-4.959-3.259a1.339 1.339 0 01-.601-1.116V8.506a.224.224 0 00-.328-.199z"></path></svg>                    
                        <div className=" text-gray-400">百科</div>
                    </div>
                </div>
            </div>
        </div>
    )
}