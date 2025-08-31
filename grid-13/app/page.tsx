import { DisplayCardsDemo } from '@/Components/page'
import Card from '@/Components/ui/card'
import React from 'react'

const Page = () => {
  return (
    <div className='w-full h-screen'>
      {/* <DisplayCardsDemo /> */}
      <div className="flex min-h-[400px] w-full items-center justify-center py-20">
        <div className="w-full max-w-3xl">
          <Card />
        </div>
      </div>
    </div>
  )
}

export default Page