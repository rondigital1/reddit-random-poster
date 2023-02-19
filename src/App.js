import './App.css';
import { useEffect, useState } from 'react';
// import ButtonPanel from './components/ButtonPanel.js';
// import SearchPanel from './components/SearchPanel.js';
import RandomPost from './components/RandomPost';
// import CategoryButton from './components/CategoryButton';

function App() {
  const [button, setButton] = useState('Active');

  // const buttonList = BUTTON_NAMES.map((name) => (
  //   <CategoryButton key={name} name={name} isPressed={name === button} onClick={setButton} />
  // ));

  return (
    <div className="App">
      <header className="App-header">
        {/* <ButtonPanel />
        <SearchPanel /> */}
      {/* <button onClick={RandomPost}>Fetch Users</button> */}
        <RandomPost />
      </header>
    </div>
  );
}

export default App;
