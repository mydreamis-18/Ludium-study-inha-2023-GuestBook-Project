
// ================================================================================================
// ##### ES7+ React/Redux/React-Native snippets 확장 프로그램 설치 시 단축키 rafce로 생성 가능합니다.

// ##### 1. 이 파일 복사해서
// ##### 2. 'guestBook_자기이름.js' 으로 파일명 변경하고
// ##### 3. 아래 컴포넌트명을 'GuestBook_자기이름'으로 변경하고
// ##### 4. guestBook_list.js 파일에서 자기이름의 방명록 페이지에 대한 엘리먼트를 추가하고
// ##### 5. router.js 파일에서 경로 및 렌더링할 컴포넌트로 지정해주면 됩니다.

import React from 'react'
import { useNavigate } from 'react-router'

const GuestBook_default = () => {
  //
  const nav = useNavigate();
  //
  return (
    <>
    {/* ##### 해당 엘리먼트를 클릭하면 "/" 경로로 이동하는 기능 */}
      <button onClick={() => nav("/")}>목록 페이지로 돌아가기</button>
      <div>GuestBook_default</div>
    </>
  )
}

export default GuestBook_default
// ================================================================================================