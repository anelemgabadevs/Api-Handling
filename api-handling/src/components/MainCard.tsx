import React, {useState,useEffect} from "react";


const MainCard = ({
title,
errorText,
CtaText,
onClickFunction,
responseStatus,
responseDescription,
textColor,

}:
{
title:string,
errorText:string,
CtaText:string,
onClickFunction:(val:any)=>(void),
responseStatus:string,
responseDescription:string,
textColor:string;

}) => {

    return(

        <div className="min-w-[218px] min-h-[240px] max-w-[218px] max-h-[240px]  flex flex-col w-full rounded-2xl bg-green-100 ring-2 ring-blue-900 py-6 px-6 gap-4 justify-center items-center"
        >

            <div className="flex flex-col text-[18px] line-[14px] text-blue-400 text-center"> {title}</div>
            
            <div className="flex flex-col text-blue-600 text-[14px] text-center"> 
            <div className={` flex flex-col justify-center text-center`}>Response status:<span className={`${textColor}`}>{responseStatus}</span> </div> 
            <div className={` flex flex-col justify-center text-center`}>Response description:<span className={`${textColor}`}> {responseDescription}</span></div>
            </div>

            <div>

                <button className="flex bg-blue-500 text-[12px] text-white p-2 rounded-2xl ring-4 ring-teal-200"
                    onClick={(val)=>{onClickFunction(val)}}
                >
                    {CtaText}

                </button>

            </div>

        </div>
    )
}

export default MainCard;