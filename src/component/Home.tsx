import React, {useContext, useState} from 'react';
import {TextContext, TextType} from "./TotalProvider";

// 【useState】stateの型情報を作る
type Message = {
  body: string;
  title: string;
  tag: string[];
}


const Home = () => {

  // 【useState】ジェネリクスでstateの型情報を設定する
  const [message, setMessage] = useState<Message>({body: 'this is initial message', title: '', tag: []});

  // 【useState】オブジェクトの更新は分割代入で行う（＝全体をコピーして上書きをマージする）
  const updateTitle = (newTitle: string): void => setMessage({...message, title: newTitle});
  
  // 【useContext】データの受け渡し（非バケツリレー）
  const text = useContext<TextType>(TextContext);
  text.changeText('great!');
  
  // 【JSX基本】返せるブロックは1ブロックのみ。無駄なタグ生成を避けるなら<></>で囲う
  return (
    <div>
      {/* 【if文パターン】falseの時は非表示 */}
      {message.title && <h1>{message.title}</h1>}

      {/* 【イベントの実行】関数オブジェクトで設定する。でないとonClickのMouseEventHandlerの型にvoid型は適応できない */}
      <button onClick={() => updateTitle('updated!')}>update title</button>

      {/* 【JSX基本】値の引用には{}*/}
      <p>{message.body}</p>

      {/* 【if文パターン】三項演算子 */}
      {/* 【配列表示】ユニーク番号を必ず添える。indexは最終手段 */}
      {message.tag.length
        ? message.tag.map((value, index) => <span key={index}>{value}</span>)
        : <span>No tag</span>
      }
      
      <h2>{text.message}</h2>
    </div>
  )
}

export default Home;
