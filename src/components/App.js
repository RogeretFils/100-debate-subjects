import '../styles/App.css';
import SubjectList from './SubjectList.js';
import { useState } from 'react';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (e) => {
      const { scrollTop, scrollHeight, clientHeight } = e.target;
      const position = Math.ceil(
          (scrollTop / (scrollHeight - clientHeight)) * 100
      );
      setScrollPosition(position);
  };

  return (
    <div className="App">
      <h1 className="MainTitle">100 Sujets de Débat</h1>
      <SubjectList />
    </div>
  );
}

export default App;
