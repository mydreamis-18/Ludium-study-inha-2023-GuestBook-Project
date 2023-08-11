// ==================================================================
import React from 'react'
import { useNavigate } from 'react-router'

const GuestBook_jiwon = () => {
  //
  const nav = useNavigate();
  //
  return (
    <>
      <button onClick={() => nav("/")}>목록 페이지로 돌아 가기</button>
      <div>
        <h1>
          GuestBook_jiwon
        </h1>
      </div>
    </>
  )
}

export default GuestBook_jiwon
// ==================================================================