
const ResultBox=({value,onChange})=>{
    return(
        <input onChange={onChange} type="text" className="bg-white text-right w-full h-[70px] px-[15px] py-[10px] text-5xl mb-[20px] "
value={value}
        />
    )
}
export default ResultBox;