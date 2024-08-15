import cx from 'classnames'
import dynamic from 'next/dynamic'
import React, { useEffect, useRef, useState } from 'react'

const NoteEditor = () => {
  const titleRef = useRef<HTMLInputElement>(null)
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // use React Query? to get the note
    setIsLoading(false)
  }, [])

  const handleTitleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      textAreaRef.current?.focus()
    }
  }

  const handleTextEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    console.log(e.target.value)
    if (e.key === 'Backspace' && e.target.value === '') {
      e.preventDefault()
      titleRef.current?.focus()
    }
  }

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className="relative w-full h-full space-y-2">
      <input
        ref={titleRef}
        className={cx('w-full h-8', 'bg-transparent', 'no-border-outline', 'h1')}
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={handleTitleEnter}
      />
      <textarea
        ref={textAreaRef}
        className={cx(
          'z-10 relative',
          'w-full h-full pb-8',
          'bg-transparent',
          'no-border-outline',
          'overflow-scroll'
        )}
        value={note}
        placeholder={'Write your note here'}
        onChange={(e) => setNote(e.target.value)}
        onKeyDown={handleTextEnter}
      />
      <div className="absolute -z-0 translate-center-xy">
        <h2 className="text-gray-400/50 select-none">{process.env.NEXT_PUBLIC_APP_NAME}</h2>
      </div>
    </div>
  )
}

// should turn off ssr for text editor
export default dynamic(() => Promise.resolve(NoteEditor), {
  ssr: false,
})
