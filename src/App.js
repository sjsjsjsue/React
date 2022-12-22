import './App.css';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Footer from './components/Footer/Footer';

// react 에서는 App() 가  main 함수
// react 는 명령어를 이용해서 실행한다.
// npm start
function App() {
  return (
    <div className="container">
      <Header></Header>
      <Section></Section>
      <Footer></Footer>
    </div>
  );
}

export default App;
