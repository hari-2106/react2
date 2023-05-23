import { useState,
  //  useRef
 } from "react";
import "./App.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import parse from 'html-react-parser';

function App() {
  const [text, setText] = useState("");
  // const editorRef = useRef(null);
  const [show, setShow] = useState(false);

  function handleChange(value) {
    setText(value);
    console.log("val: ", value);
  }

  // function focusEditor() {
  //   editorRef.current.focus();
  // }

  const toolbar = [
    [{ header: [1, 2, 3, 4, false] }],
    ["bold", "italic", "underline"],
    // [{ 'color': [] }, { 'background': [] }],
    [{ align: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }],
    // [{ 'script': 'sub' }],
    // ['blockquote', 'code-block'],
    // ['image', 'video'],
    // ['clean']
  ]

  // const formats = [
  //   'underline', 'header',
  //   'bold', 'italic', 'strike',
  //   'list', 'bullet', 'indent',
   
  // ]
  return (
    <div>
      <button onClick={() => setShow(!show)}>Focus Editor</button>
      {show ? (
        <ReactQuill
          // ref={editorRef}
          value={text}
          onChange={handleChange}
          modules={{ toolbar }}
          // formats={{formats}}
          theme="snow"
          
        />
      ) : (
        <div>{parse(text)}</div>
      )}

    </div>
  );
}

export default App;
