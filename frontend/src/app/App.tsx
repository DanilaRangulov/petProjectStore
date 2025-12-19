import React from 'react';
import './styles/index.scss'
import {Navbar} from "widgets/Navbar";
import {MainPage} from "pages/MainPage";
function App() {
  return (
    <div className='app'>
          <Navbar/>
        <main>
            <MainPage/>
        </main>
    </div>
  );
}

export default App;
