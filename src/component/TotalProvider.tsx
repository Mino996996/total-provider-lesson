import React from "react";

export type TextType = {
  message: string;
  changeText: (text:string) => void
}

const defaultVal: TextType= {
  message: '',
  changeText: (text) =>{ defaultVal.message = text }
}
export const TextContext = React.createContext<TextType>(defaultVal);
