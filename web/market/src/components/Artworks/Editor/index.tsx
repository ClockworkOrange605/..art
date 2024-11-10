'use client'

import { useEffect, useRef } from 'react'

import { Card } from '@nextui-org/card'

import * as monaco from 'monaco-editor'

import './index.css'

const Editor = () => {
  // TODO: proper typization
  const editorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (editorRef.current)
      monaco.editor.create(editorRef.current, {
        theme: 'vs-dark',
        minimap: { enabled: false },
        tabSize: 2,
        scrollBeyondLastLine: false,
        rulers: [60, 90, 120]
      })
  }, [editorRef.current])

  return (
    <div className='EditorContainer'>
      <div className='EditorWrapper'>
        <div className='EditorInstance' ref={editorRef} />
      </div>
    </div>
  )
}

export { Editor }
