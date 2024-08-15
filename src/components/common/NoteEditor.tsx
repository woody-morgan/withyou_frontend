import React, { useEffect, useState } from 'react'
import cx from 'classnames'
import dynamic from 'next/dynamic'

const NoteEditor = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // use React Query? to get the note
    setIsLoading(false)
  }, [])

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className="relative w-full h-full space-y-2">
      <input
        className={cx('w-full', 'bg-transparent', 'no-border-outline', 'h1')}
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className={cx('z-10', 'w-full h-full', 'bg-transparent', 'no-border-outline')}
        value={note}
        placeholder={'Write your note here'}
        onChange={(e) => setNote(e.target.value)}
      />
      <div className="absolute -z-0 translate-center-xy">
        <h2 className="text-gray-400/50">{process.env.NEXT_PUBLIC_APP_NAME}</h2>
      </div>
    </div>
  )
}

// should turn off ssr for text editor
export default dynamic(() => Promise.resolve(NoteEditor), {
  ssr: false,
})
