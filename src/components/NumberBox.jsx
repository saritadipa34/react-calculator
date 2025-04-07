
const NumberBox=({value,onClick})=>{
    return(
        <button onClick={()=>onClick(value)} type="text" className="border cursor-pointer text-4xl h-[70px] w-[70px] bg-white text-center">
        {value}
        </button>
    )
}
export default NumberBox;