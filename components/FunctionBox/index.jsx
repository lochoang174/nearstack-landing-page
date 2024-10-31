function FunctionBox(props) {
    const data = props?.data;
    if(!data) return null;
    return ( <>
    <div className="flex flex-col items-center py-6 mt-10 mb-2">
                <span className="text-[var(--primary)] text-[32px] font-[700]">{data.title || 'Title is not defined'}</span>
                <span className="text-white text-[20px] font-[500] pt-2">{data.description || ''}</span>
           </div>
            <video autoPlay={true} loop preload="auto" playsInline muted={true} src={data.src || 'https://framerusercontent.com/assets/Sijo8uPEuwPBpBKSBNweaOSEj4.mp4'} className='w-[80%] h-full rounded-sm'></video>
            
            {data.button&&<div
                onClick={() =>  window.location.href = 'http://13.212.244.67:3003/'}
            className="mt-6 bg-[var(--primary)] p-4 cursor-pointer hover:scale-[1.05] duration-100 ease-in transition-all hover:shadow-[var(--primary)] hover:shadow-sm rounded-[4px]">
                <span className='text-white uppercase font-[700]' >Try it out</span>
                </div>}</> );
}

export default FunctionBox;