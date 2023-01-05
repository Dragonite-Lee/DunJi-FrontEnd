import { ChangeEvent, useState, useCallback } from 'react';
import Image from 'next/image';
import Router from 'next/router';
import useLoginRedux from 'hooks/useLoginRedux';
import { dispatchEmail, dispatchSchool, dispatchAuthNumber, dispatchAuthNumberOpen } from 'store/modules/login';
import { studentAuthApi } from '_api';
import useInterval from 'hooks/useInterval';

function StudentAuth() {
  const [state, dispatch] = useLoginRedux();
  const [school, setSchool] = useState<string>('');
  const [email1, setEmail1] = useState<string>('');
  const [email2, setEmail2] = useState<string>('');
  const [inputAuthNumber, setInputAuthNumber] = useState('');
  const [authTime, setAuthTime] = useState<number>(180);
  const [timePlay, setTimePlay] = useState<boolean>(false);

  useInterval(()=>{
    if(timePlay) {
      setAuthTime((authTime)=>authTime-1)
      if(authTime === 1) {
        setTimePlay(false)
        dispatch(dispatchAuthNumber(0))
        alert('인증시간이 종료되었습니다. 재전송 후 인증바랍니다.')
      }
    }
  },1000);

  const schoolOnchangeHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setSchool(e.target.value)
  },[]);
  const emailOnchangeHandler1 = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail1(e.target.value)
  },[]);
  const emailOnchangeHandler2 = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setEmail2(e.target.value)
  },[]);
  const authNumberOnchangeHanlder = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputAuthNumber(e.target.value)
  },[]);
  const studentAuth = async () => {
    dispatch(dispatchSchool(school))
    dispatch(dispatchEmail(email1 + email2))
    if(school !== '' && email1 !== '' && email2 !== '') {
      dispatch(dispatchAuthNumberOpen(true))
      setTimePlay(true)
    } else if(school === '') {
      alert('학교를 입력해주세요.')
    } else if(email1 === '' || email2 === '') {
      alert('메일을 입력해주세요.')
    }
    
    // try {
    //   await studentAuthApi.postEmail(state.email).then((res) => {
    //     dispatch(dispatchAuthNumber(res.content.authNumber))
    //   });
    // } catch (e) {
    //   alert(e)
    // };
  };
  const studentAuthIsSuccess = () => {
    if(inputAuthNumber.length > 5 && inputAuthNumber === state.authNumber) {
      Router.push('/')
      //유저의 학교정보나 데이터등 저장할 것 같음
    } else {
      alert('인증번호가 틀렸습니다.')
    }
  };
  const studentAuthAgain = async () => {
    dispatch(dispatchSchool(school))
    dispatch(dispatchEmail(email1 + email2))
    dispatch(dispatchAuthNumberOpen(true))
    setAuthTime(180)
    setTimePlay(true)
    // try {
    //   await studentAuthApi.postEmail(state.email).then((res) => {
    //     dispatch(dispatchAuthNumber(res.content.authNumber))
    //   });
    // } catch (e) {
    //   alert(e)
    // };
  };
  const authTimeMin = parseInt(String(authTime / 60));
  const authTimeSec = String(authTime%60).length===1 ? "0"+authTime%60 : authTime%60
  
  return (
    <div className="bg-background_beige sm:w-[375px] sm:m-auto min-h-screen">
      {/* *로고 및 text */}
      <div className="flex items-center flex-col pt-56">
        <div className="flex flex-col items-center">
          <div className="px-52">
            <Image
              alt="둥지로고"
              src={require('../../assets/icon/logo/logo_main.png')}
            />
          </div>

          <div className="text-center mt-12 text-[14px] Pretendard-Regular leading-7">
            간편하게 로그인하고 <br />
            <span className="Pretendard-SemiBold">
              둥지의 다양한 서비스를
            </span>
            이용하세요
          </div>
        </div>
      </div>
      {/* *학교 메일 입력란 */}
      <div className='px-[18px] mt-24'>
        <div className='flex items-center'>
          <div className='w-1/4 Pretendard-SemiBold text-2xl'>학교 선택 : </div>
          <select name="usermail" defaultValue='0' className='Pretendard-Regular text-xl pl-4 w-3/4 h-[50px] rounded-standard_rounded' onChange={(e) => schoolOnchangeHandler(e)}>
            <option value="0">선택</option>
            <option value="한양대Erica">한양대Erica(@hanyang.ac.kr)</option>
          </select>
        </div>
        <div className='flex items-center mt-3'>
          <div className='w-1/5 Pretendard-SemiBold text-2xl'>이메일 : </div>
          <input type="text" placeholder='이메일 주소' className='Pretendard-Regular text-xl pl-4 w-2/5 h-[50px] rounded-standard_rounded mr-[10px]' onChange={(e) => emailOnchangeHandler1(e)}/>
          <select name="usermail" defaultValue='0' className='Pretendard-Regular text-xl pl-4 w-2/5 h-[50px] rounded-standard_rounded' onChange={(e) => emailOnchangeHandler2(e)}>
            <option value="0">선택</option>
            <option value="@hanyang.ac.kr">@hanyang.ac.kr</option>
          </select>
        </div>
        {state.AUTHNUMBER_OPEN &&
          <div>
            <div className='flex items-center mt-12'>
              <input type="text" placeholder='인증번호 6자리를 입력하세요' className='Pretendard-Regular text-xl pl-4 w-3/5 h-[50px] rounded-standard_rounded' onChange={(e) => authNumberOnchangeHanlder(e)} />
              <div className='Pretendard-SemiBold text-xl pl-3'>{authTimeMin}:{authTimeSec}</div>
              <div className='w-2/5 Pretendard-SemiBold text-2xl text-center underline' onClick={studentAuthAgain}>재전송</div>
            </div>
            <ul className='Pretendard-Regular list-disc px-[18px] mt-4'>
              <li>3분 이내로 인증번호(6자리)를 입력해주세요.</li>
              <li>인증번호가 전송되지 않을경우 "재전송" 버튼을 눌러주세요.</li>
            </ul>
          </div>
        }
      </div>
      {state.AUTHNUMBER_OPEN ? (
        <div className="sm:w-[375px] Pretendard-SemiBold sm:m-auto bg-main absolute bottom-0 w-screen flex flex-col items-center h-[8rem] justify-around" onClick={studentAuthIsSuccess}>
          <div className="text-[17px] text-white">확인</div>
          <div className="bg-white rounded-standard_rounded w-[15rem] h-3" />
        </div>
      ) : (
        <div className="sm:w-[375px] Pretendard-SemiBold sm:m-auto bg-main absolute bottom-0 w-screen flex flex-col items-center h-[8rem] justify-around" onClick={studentAuth}>
          <div className="text-[17px] text-white">학교 인증하기</div>
          <div className="bg-white rounded-standard_rounded w-[15rem] h-3" />
        </div>
      )}
    </div>
  );
}

export default StudentAuth;
