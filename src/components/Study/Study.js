import React from 'react'

const Study = () => {
  // return 안에 있는 문법이 React 문법!
  /*
  JSX문법
  1. class ==> className
  2. 부모 div가 있어야 한다.
  3. JSX 에는 if 문이 없다. (아주 골치가 아픔...웩)
  4. 인라인 css(태그에 바로 적용!)는 카메로 표현한다.
  5. 무조건 태그는 닫는다!!!🎇

  react 는 let 아니면 const 만 활용! var 는 이제 안녕....🖐

  if가 아닌 삼항 연산자로 표현한다.
  */
  const name = '메시';
  const style={
    fontSize : '32px',
    backgroundColor : 'red'
  };
  return (
    <>
    <div>{ name === '메시' ? <h2>메시!</h2> : <h2>호날두!</h2>}</div>
    <div style={style}>인라인 css</div>
    <input value='Hello World!'></input>
    </>
  )
}

export default Study