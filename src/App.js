import React from 'react';
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Contact 
      name="Claudia Chambers"
      avatar="https://randomuser.me/api/portraits/women/67.jpg"
      isOnline />

      <Contact 
      name="Margie Spencer"
      avatar="https://randomuser.me/api/portraits/women/79.jpg"
      isOnline />

      <Contact 
      name="Steven Vargas"
      avatar="https://randomuser.me/api/portraits/men/83.jpg" />
    </div>
  );
}

export default App;