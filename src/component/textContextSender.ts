import {useContext} from "react";
import {TextContext} from "./TotalProvider";


// 隠蔽している
export function TextSender(){
  return useContext(TextContext)
}
