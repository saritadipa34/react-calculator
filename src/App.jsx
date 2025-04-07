
import { useState } from "react";
import NumberBox from "./components/NumberBox";
import ResultBox from "./components/ResultBox";

const App=()=>{
const [boxValue,setBoxValue]=useState('');

const handleResult=(value)=>{

}

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
  setBoxValue(eval(boxValue));
  break;
  default :
  setBoxValue(boxValue+value);
  // setBoxValue(value);

  }
  console.log(value,"clicked")
}

  const signs=["AC","DE",".","/","7","8","9","*","4","5","6","+","1","2","3","-","00","0","="];
  return(
    <div className="h-[520px] w-[350px] py-[20px] px-[20px] bg-gray-400">
      <ResultBox value={boxValue} onChange={handleResult}/>
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