import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';

import SearchMovies from './components/SearchMovies';

import GlobalStyles from './styles/createGlobalStyle';

import { themes } from './styles/themes';

function App() {
  const [themeName, setThemeName] = useState('light');
  const currentTheme = themes[themeName];

  const toggleThemeColor = () => {
    setThemeName(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <button className="icon" onClick={toggleThemeColor}>
        {themeName === 'light' ? 
          (
            <HiOutlineMoon size={25} />
          )
          : (
            <HiOutlineSun size={25} color="#ddd" />
          )}
      </button>
      <div className="container">
        <h1 className="title">React Movie Search</h1>
        <SearchMovies />
      </div>

      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
