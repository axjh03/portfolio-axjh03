import React from 'react'

export default function SplitScreen({
  left,
  right,
  leftWidth = 50,
  rightWidth = 50,
}) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div
        className={`md:w-${leftWidth}/100 p-4`}
        style={{ flex: leftWidth }}
      >
        {left}
      </div>
      <div
        className={`md:w-${rightWidth}/100 p-4`}
        style={{ flex: rightWidth }}
      >
        {right}
      </div>
    </div>
  )
}

