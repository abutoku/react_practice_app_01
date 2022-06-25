import { Avatar, Button } from '@mui/material'
import React, { useState } from 'react';
import "./TweetBox.css";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db from "../../firebase";

function TweetBox() {
  const [tweetMessage,setTweetMessage] = useState("");
  const [tweetImage,setTweetImage] = useState("");
  // const [変数,関数] = useState(初期値);

  const sendTweet = (e) => {
    // firebaseのデータベースにデータを追加する
    e.preventDefault();//ツイートボタンを押しても画面がリロードされない
    addDoc(collection(db, "posts"), {
      avatar:"http://shincode.info/wp-content/uploads/2021/12/icon.png",
      displayName:"プログラミングチュートリアル",
      username:"Shin_Engineer",
      verified:true,
      text: tweetMessage,
      image: tweetImage,
      timestamp: serverTimestamp(),
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox_Input'>
          <Avatar />
          <input placeholder="いまどうしてる？" type="text"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}></input>
        </div>
        <input className='tweetBox_imageInput' 
            placeholder="画像のURLを入力してください" type="text"
            value={tweetImage}
            onChange={(e) => setTweetImage(e.target.value)} ></input>
        <Button className='tweetBox_tweetButton' type="submit"
          onClick={sendTweet}>ツイートする</Button>
      </form>      
    </div>
  )
}

export default TweetBox
