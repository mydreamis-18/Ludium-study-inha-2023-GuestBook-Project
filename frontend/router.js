// ========================================================================
import React from 'react'
import { useRoutes } from 'react-router-dom'

import GuestBook_list from './guestBook-components/guestBook_list';
import GuestBook_jiwon from './guestBook-components/guestBook_jiwon';

// ##### 1. 여기에 복사한 컴포넌트 가져오고
// ##### 2. 아래에 경로 및 렌더링할 컴포넌트로 추가하세요.

const Router = ({ isSignedIn, contractId, wallet }) => {
  //
  // ##### 로그인이 안 되어 있을 경우 안 보이기
  if (isSignedIn === false) return useRoutes([{ path: "/", element: <></> }]);

  return useRoutes([
    {
      path: "/",
      element: <GuestBook_list />,
      // // ##### 중첩 라우팅, children 속성은 둘 다 표시하고 싶을 때 사용하면 됨
      // // ##### 다만 부모 컴포넌트 원하는 위치에 <Oultet /> 추가 해야 됨
      // children: [
      //   { }
      // ]
    },
    {
      path: "/jiwon",
      element: <GuestBook_jiwon contractId={contractId} wallet={wallet} />
    },
    // {
    //   path:
    //   element:
    // },
    // {
    //   path:
    //   element:
    // },
  ])
}

export default Router
// ========================================================================