import React from 'react';
import './App.css';

function App() {
  return (
    <div className="m-3 h-full w-full bg-beige underline">
      베이지 부분은 커스텀 theme이랑 일반 tailwind 적용한거임
      <button className="btn-purple">
        보라 부분은 커스텀 클래스 적용한거임
      </button>
    </div>
  );
}

export default App;
