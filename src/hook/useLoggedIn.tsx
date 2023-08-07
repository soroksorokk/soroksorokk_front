import React, { useEffect } from 'react';
import userState from '../store/isLoggedInState';
import { RecoilState, useRecoilState } from 'recoil';
import { redirect, useNavigate } from 'react-router-dom';

const useLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(userState);

  useEffect(() => {
    const getAccessToken = localStorage.getItem('userToken');

    if (getAccessToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [setIsLoggedIn]);

  return isLoggedIn;
};

export default useLoggedIn;

/**
 * 1. 리코일 스테이트 만들기
 *   - isToken, isLoggedIn
 * 2. 로그인 시 잘 들어오는 지 확인
 * 3. 메인에 토큰이 있으면 로그인드가 true가 되고 아니면 false가 되어서 글쓰기에 접근X
 * 4. 만약 3이 된다면 리액트 라우터 돔에도 적용하기
 * 5. 인터셉트 해올 때 에러 시(엑세스 토큰이 만료되거나 리프레쉬 토큰이 만료 되었을 때)
 * 다시 서버에 요청해서 가져오는 로직을 짜기
 */
