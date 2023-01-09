import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import FileViewer from './components/FileViewer';
import FilePath from './components/FilePath';

function App() {
  return (
   <div>
    <FileViewer filePath='www.co'/>
    <FilePath filePath={["fff", "ggg"]} />
   </div>
  );
}

export default App;
