import Logo from '@/assets/logo.png';
function App() {
  const [count, setCount] = useState(0)

  return (

      <>
      <GlobalStyle />
      <div>
        <h2>불필요한 코드 삭제 후 App 화면</h2>
        <h2>Complete!</h2>
        <img src={Logo} alt="로고" width={100} />
      </div>
    </>
  );
}

export default App;
