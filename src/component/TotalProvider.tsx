import React, {useContext, useState} from "react";

export type TextType = {
  text: string;
}
type PropsType ={
  children: React.ReactNode
}

const defaultVal: TextType= {
  text: ''
}

// Contextの作成とuseStateの型を設定している。
// 初期値の入れ方はジェネリクスに対応するよう、Arrayにするらしい
export const TextContext = React.createContext<
  [TextType, React.Dispatch<React.SetStateAction<TextType>>]
  >([defaultVal, ()=>{}]);
export const TextProvider = TextContext.Provider;

export const TitleContext = React.createContext<
  [string, React.Dispatch<React.SetStateAction<string>>]
  >(['', ()=>{}]);
export const TitleProvider = TitleContext.Provider;

export const TotalProvider = ({children}: PropsType) =>{
  
  const [textData, setTextData] = useState<TextType>({text:'test comment'})
  const [title, setTitle] = useState<string>('No title')
  
  return (
    <TextProvider value={[textData, setTextData]}>
      <TitleProvider value={[title, setTitle]}>
        {children}
      </TitleProvider>
    </TextProvider>
  )
}
