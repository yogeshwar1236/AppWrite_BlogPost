import React, { useState } from 'react'
import {Editor } from '@tinymce/tinymce-react';
import {Controller } from 'react-hook-form';


export default function RTE({name, control, label, defaultValue =""}) {
  const [editorLoadFailed, setEditorLoadFailed] = useState(false)
  const tinyMceApiKey = import.meta.env.VITE_TINYMCE_API_KEY
  const canLoadTinyMce = Boolean(tinyMceApiKey) && !editorLoadFailed

  return (
    <div className='w-full'> 
    {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

    <Controller
    name={name || "content"}
    control={control}
    defaultValue={defaultValue}
    render={({field: {onChange, value}}) => (
      canLoadTinyMce ? (
        <Editor
        apiKey={tinyMceApiKey}
        value={value || ""}
        init={{
            height: 500,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={onChange}
        onScriptsLoadError={() => setEditorLoadFailed(true)}
        />
      ) : (
        <textarea
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          className="min-h-96 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-black outline-none duration-200 focus:bg-gray-50"
        />
      )
    )}
    />

     </div>
  )
}
