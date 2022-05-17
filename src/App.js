import logo from './logo.svg';
import './App.css';
import React from 'react';
import styles from './App.module.css';
function App() {
  return (
    <div className ={styles.system}>
     <h1>Mobile Operating System</h1>
     <ul> <li>Android</li>
        <li>Blackberry</li>
        <li>I Phone</li>
        <li>Window's Phone</li>
        </ul> 
       
     <h1> Mobile Manufacturers</h1>
     <ul><li>Samsung</li>
     <li>HTC</li>
     <li>Micromax</li>
     <li>Apple</li>
     </ul>
    </div>
  );
}

export default App;
