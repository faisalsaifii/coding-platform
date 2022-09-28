import { useState } from 'react';
import './App.css';
import Editor from './screens/Editor';

function App() {
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')

  return (
    <>
    <div className="top-pane">
      <Editor language="xml" displayName="HTML" value={html} onChange={setHtml}/>
      <Editor language="css" displayName="CSS" value={css} onChange={setCss}/>
      <Editor language="javascript" displayName="JS" value={js} onChange={setJs}/>
    </div>
    <div>
      <iframe
        title='output'
        sandbox='allow-scripts'
        width='100%'
        height='100%'
        frameBorder='0'
      />
    </div>
    </>
  );
}

export default App;
