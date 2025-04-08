
import { useState } from "react";
import NumberBox from "./components/NumberBox";
import ResultBox from "./components/ResultBox";

const App=()=>{
const [boxValue,setBoxValue]=useState('');

const handleBox=(value)=>{
  console.log(value,"clicked")
  switch (value){
    case "AC":
      setBoxValue('');
      break;
      case "DE":
        setBoxValue(boxValue.slice(0,-1))
break;
case "=":
  try{
    const result=eval(boxValue).toString();
  setBoxValue(result);
  } catch (error){
    console.error(error)
    setBoxValue('');
  }
  const lastChar=["+","-","*","/","."]
  if(lastChar.some((char)=> boxValue.slice(0,-1) === char)){
    setBoxValue(eval(boxValue))
  }
  break;
  default :
    setBoxValue(boxValue+value)
  }

  }


  const signs=["AC","DE",".","%","7","8","9","*","4","5","6","+","1","2","3","-","00","0",".","="];
  return(
    <div className="h-[520px] w-[350px] py-[20px] px-[20px] bg-gray-400">
      <ResultBox value={boxValue}/>
      <div  className="flex flex-wrap gap-[10px]">
      {
        signs.map((sign,index)=>{
         return  <NumberBox  value={sign} key={index} onClick={()=>handleBox(sign)}/>
        })
      }
      </div>
    </div>
  )
}
export default App;