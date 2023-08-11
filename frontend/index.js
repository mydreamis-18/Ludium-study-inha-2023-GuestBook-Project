// React
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// ===============================================
import Router from './router';
import { BrowserRouter } from 'react-router-dom';
// ===============================================

// NEAR
import { Wallet } from './near-wallet';

// ##### contract/neardev/dev-account.env 파일에 담긴 컨트랙트 주소
const CONTRACT_ADDRESS = process.env.CONTRACT_NAME

// When creating the wallet you can optionally ask to create an access key
// Having the key enables to call non-payable methods without interrupting the user to sign
// ##### 번역하자면 지갑 생성 시 액세스 키 생성 요청 가능?
// ##### 키가 있으면 페이어블 아닌 함수 호출 가능?
const wallet = new Wallet({ createAccessKeyFor: CONTRACT_ADDRESS })

// ====================================================================
// ##### 로그인된 니어 지갑 정보 확인 가능
console.log(wallet)

// ##### 이거 콘솔 안 찍히는데 accountId는 어디에 들어 있는 거야?
console.log(wallet.accountId)
// ====================================================================

// Setup on page load
window.onload = async () => {

  // ##### 페이지 창 로드 시 로그인 여부 확인하면서
  // ##### 로그인이 되어 있을 경우 accountId랑 wallet() 객체를 담음 
  const isSignedIn = await wallet.startUp()

  // ##### 로그인 여부, 컨트랙트 주소, 로그인된 지갑 정보를 App 컴포넌트에 props 값으로 전달하면서 렌더링 진행
  ReactDOM.render(
    <BrowserRouter>
      <App isSignedIn={isSignedIn} contractId={CONTRACT_ADDRESS} wallet={wallet} />
      <Router />
    </BrowserRouter>,
    document.getElementById('root'),
  );
}