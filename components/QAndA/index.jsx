import { useState } from "react";
function QAndA(props) {
    const [show, setShow] = useState(false)
    const data = props.data
    return ( <div className='my-4'>
        <span onClick={() => {
            setShow(!show)}} className='text-[24px] font-[600] text-[#cacaca] block mb-4 cursor-pointer'>{data.question}</span>
        {show && <span className={`text-[16px]  transition-all duration-100 ease-in font-[400] text-[#cacaca]`}>{data.answer||'answer undefined'}</span>}
      </div> );
}

export default QAndA;