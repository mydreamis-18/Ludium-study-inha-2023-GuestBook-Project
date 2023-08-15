// ==================================================================
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import HFactory from '../components/h_factory';
import { write } from 'fs';
import VisitingBox from '../components/visiting_box';

const GuestBook_daehun = ({ contractId, wallet }) => {
  //
  const nav = useNavigate(); //전페이지로 돌아가기 위해 만든 navigation 변수.
  const inputMessage = useRef(); 
  const [isLoading, setIsLoading] = useState(true);
  const [postedMessages, setPostedMessages] = useState([]);

  useEffect(() => {
    //
    console.log("rendering");
    
    getPostedMessages()
      .then((messages) => setPostedMessages(messages.reverse()));
  }, []);

  useEffect(() => {
    //
    setTimeout(() => {
      //
      setIsLoading(false);
    }, 2000);
  }, [postedMessages])

  async function getPostedMessages() {
    return await wallet.viewMethod({ method: "get_posted_messages", contractId });
  }

  function writeMessage(e) {
    //
    // console.log("button clicked");
    const message = inputMessage.current.value;
    if (message === "") {
      alert("메세지를 작성해주세요.");
      return;
    }

    setIsLoading(true);

    wallet.callMethod({ method: "add_posted_message", args: { message }, contractId })
      .then((result) => {
        alert(`컨트랙트 함수 호출 결과입니다.\n\n${JSON.stringify(result)}`)
      })
      .then(getPostedMessages)
      .then((messages) => setPostedMessages(messages.reverse()));
  }
  
  return (
    <>
      {/*  */}
      <button onClick={() => nav("/")}>목록 페이지로 돌아가기</button>
      {/* ##### ㅜ 페이지 제목과 방명록 입력 창 및 버튼 */}
      {isLoading === true ? <h1>잠시만 기다려주세요.</h1> :
        <>
          <div>
            <h1>
              GuestBook_daehun
            </h1>
          </div>
          {/* ##### ㅜ 등록된 방명록 조회 */}
          {/* <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ fontWeight: "bolder", margin: "5px" }}>등록된 방명록 개수 : {postedMessages.length}개</div>
            {postedMessages.map((v, i) => <div key={i} style={{ margin: "5px" }}>{JSON.stringify(v)}</div>)}
          </div> */}
          <div className='hcontainer' styles= {{display:"flex", flexDirection: "column", alignItems: "center"}}>
            <HFactory message = {inputMessage} transaction = {writeMessage}/>
                <div style = {{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    {postedMessages.map((v, i) => (
                        <VisitingBox
                            style={{margin:"5px"}}
                            key={i}
                            boxObject={v}
                        />
                    ))}
                </div>
          </div>
        </>
      }
    </>
  )
}

export default GuestBook_daehun;
// ==================================================================