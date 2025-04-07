
const ResultBox=({value,onChange})=>{
    return(
        <input type="text" onChange={onChange} className="bg-white w-full h-[70px] px-[15px] py-[10px] text-5xl mb-[20px] "
value={value}
        />
    )
}
export default ResultBox;