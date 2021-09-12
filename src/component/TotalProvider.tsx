import React, {useContext} from "react";

export type TextType = {
  text: string;
  changeText: (text:string) => void
}
type PropsType ={
  children: React.ReactNode
}

const defaultVal: TextType= {
  text: '',
  changeText: (text) =>{ defaultVal.text = text }
}

export const TextContext = React.createContext<TextType>(defaultVal);
export const TextProvider = TextContext.Provider;

export const TotalProvider = ({children}: PropsType) =>{
  
  return (
    <TextProvider value={defaultVal}>
      {children}
    </TextProvider>
  )
}
