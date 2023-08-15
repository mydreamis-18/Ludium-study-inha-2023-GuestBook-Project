// =====================================================================
import React from 'react'
import { useNavigate } from 'react-router';

const GuestBook_list = () => {
    //
    const nav = useNavigate();
    //
    return (
        <>
            <div>
                <h1>
                    방명록 목록 페이지
                </h1>
                <div onClick={() => nav('/jiwon')}>
                    <h5 style={{ textAlign: 'center' }}>
                        지원의 방명록 페이지
                    </h5>
                </div>
                {/* ##### 여기에 자기이름의 방명록 페이지엔 대한 엘리먼트를 추가하세요. */}
                <div onClick={() => nav('/daehun')}>
                    <h5 style={{ textAlign: 'center' }}>
                        대훈의 방명록 페이지
                    </h5>
                </div>
            </div>
        </>
    )
}

export default GuestBook_list
// =====================================================================