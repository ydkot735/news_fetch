
import React from 'react';
import ClockDisplay from './components/ClockDisplay';
import NewsList from './components/NewsList';
import './styles.css';

const App = () => {
  return (
    <div className="dashboard">
      <ClockDisplay />
      <NewsList /> 
    </div>
  );
};

export default App;
