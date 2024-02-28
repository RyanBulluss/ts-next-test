import React from 'react'

interface Props {
    obj: any;
  }

const GameCell: React.FC<Props> = ({ obj }) => {
  return (
    <div>
        {obj.type === "path" && <div className='bg-gray-500 h-full'></div>}
    </div>
  )
}

export default GameCell