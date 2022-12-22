import React from 'react';
import './header.css'; // css 불러오는 방법
import userImg from '../../images/user.png'

// import, export 는 js version.
// 지금까지 배운 js 는 version4 or 5!
// react 를 원한다면 JS version 6 문법을 공부하시오!
// 검색 ? ES6 문법
const Header = () => {
  return (
      // react 문법(JSX) : className  
      // JSX = Javascript Syntax Extension
      // 부모 dic가 무조권 있어야 함(react 문법)
      // a 태그는 내일!
    <div className='header'>
       <div className='logo'>
          수정의 MOVIE TIME
       </div>
       <div className='user-image'>
          <img src={userImg} alt='유저사진'></img>
       </div>
    </div>
  )
}
// 자바에서 Gradle, maven 이 react 는 npm, yarn
export default Header