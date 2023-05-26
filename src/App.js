// import logo from "./logo.svg";
// import "./App.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./pages/css/jobdetail.css";

function App() {
  return (
    <div className="App">
      <h1>웹 개발자 모집</h1>
      <hr />
      <br />
      <div>
        <div>저희 회사에서는 웹 개발자를 모집합니다.</div>
        <div>
          주요 업무는 웹사이트 및 어플리케이션 개발이며, 프론트엔드와 백엔드
          개발 모두 가능한 분을 우대합니다. <br />
          아래의 <strong>'지원하기'</strong>
          버튼을 클릭하여 지원 페이지로 이동하십시오.
        </div>
        <br />
        <button>지원하기</button>
      </div>
    </div>
  );
}

export default App;
