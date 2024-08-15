import React, { memo } from 'react'

const AlbumCommonHeader = () => {
  return (
    <div className="relative w-full flex justify-between items-center">
      <div className="absolute translate-center-xy">
        <h1>Album</h1>
      </div>
    </div>
  )
}

export default memo(AlbumCommonHeader)
