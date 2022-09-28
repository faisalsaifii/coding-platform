import React from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml' // HTML
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import { Controlled as ControlledEditor } from 'react-codemirror2'

function Editor(props) {
    const { 
        displayName,
        language,
        value,
        onChange
    } = props;

    function handleChange ( editor, data, value ) {
        onChange(value)
    }

    return (
        <div className='editor-container'>
            <div className='editor-title'>
                {displayName}
                <button>
                    O/C
                </button>
            </div>
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                className='code-mirror-wrapper'
                options={{
                    // From Codemirror Library
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    lineNumbers: true,
                    theme: 'material'
                }}
            />
        </div>
    )
}

export default Editor