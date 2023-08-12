import 'regenerator-runtime/runtime';
import React from 'react';

import './assets/global.css';

import { EducationalText, SignInPrompt, SignOutButton } from './ui-components';


export default function App({ isSignedIn, contractId, wallet }) {
  //
  // ##### 컨트랙트의 상태 값에 대한 state 값
  const [valueFromBlockchain, setValueFromBlockchain] = React.useState();

  const [uiPleaseWait, setUiPleaseWait] = React.useState(true);

  // ##### 해당 컴포넌트 최초 렌더링 시 컨트랙트의 상태 값을 불러와서 valueFromBlockchain에 저장
  // Get blockchian state once on component load
  React.useEffect(() => {
    //
    // // ##### 디폴트 코드
    // getGreeting()
    // .then(setValueFromBlockchain)
    // .catch(alert)
    // .finally(() => {
    //   setUiPleaseWait(false);
    // });

    // ======================================
    // getGreeting()
    //   .then((returnData) => {
    //     // ##### Hello
    //     console.log(returnData)
    //     setValueFromBlockchain(returnData)
    //   })
    //   .catch(alert)
    //   .finally(() => {
    //     setUiPleaseWait(false);
    //   });
    // ======================================

    
  }, []);

  // ##### 로그인이 안 되어 있을 때 <SignInPrompt /> 컴포넌트 렌더링
  /// If user not signed-in with wallet - show prompt
  if (!isSignedIn) {
    // Sign-in flow will reload the page later
    return <SignInPrompt greeting={valueFromBlockchain} onClick={() => wallet.signIn()} />;
  }

  function changeGreeting(e) {
    e.preventDefault();
    setUiPleaseWait(true);
    const { greetingInput } = e.target.elements;

    // use the wallet to send the greeting to the contract
    wallet.callMethod({ method: 'set_greeting', args: { message: greetingInput.value }, contractId })
      .then(async () => { return getGreeting(); })
      .then(setValueFromBlockchain)
      .finally(() => {
        setUiPleaseWait(false);
      });
  }

  // ##### 컨트랙트의 get_greeting() 함수를 호출하는 함수
  function getGreeting() {
    // use the wallet to query the contract's greeting
    return wallet.viewMethod({ method: 'get_greeting', contractId })
  }

  // ===============================================================================
  return (
    <SignOutButton accountId={wallet.accountId} onClick={() => wallet.signOut()} />
  );
  // ===============================================================================

  // // ##### 디폴트 코드
  // return (
  //   <>
  //     <SignOutButton accountId={wallet.accountId} onClick={() => wallet.signOut()} />
  //     <main className={uiPleaseWait ? 'please-wait' : ''}>
  //       <h1>
  //         The contract says: <span className="greeting">{valueFromBlockchain}</span>
  //       </h1>
  //       <form onSubmit={changeGreeting} className="change">
  //         <label>Change greeting:</label>
  //         <div>
  //           <input
  //             autoComplete="off"
  //             defaultValue={valueFromBlockchain}
  //             id="greetingInput"
  //           />
  //           <button>
  //             <span>Save</span>
  //             <div className="loader"></div>
  //           </button>
  //         </div>
  //       </form>
  //       <EducationalText />
  //     </main>
  //   </>
  // );
}