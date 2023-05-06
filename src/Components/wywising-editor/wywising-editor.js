import * as React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditorInspector from '@ckeditor/ckeditor5-inspector';
 import "./style.css"
export default function WywisingEditor(props) {
  return (
    <div className="App">
      <CKEditor
        style={{height:"100vh"}}
        editor={ClassicEditor}
        data={props.content?props.content:  `<p style="text-align:center; font-weight:bold">Push content</p>`}
        onReady={(editor) => {
          console.log('CKEditor React Component is ready to use!', editor);
          CKEditorInspector.attach(editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
      />
    </div>
  );
}

