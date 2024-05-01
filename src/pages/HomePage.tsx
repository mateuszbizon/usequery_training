import React from 'react'
import RootLayout from '../components/layouts/RootLayout'

function HomePage() {
  return (
    <RootLayout>
        <header className='py-24'>
            <h1 className='text-4xl sm:text-5xl lg:text-7xl text-center font-medium'>DummyJSONApi <br /> reaveled <br /> with useQuery</h1>
        </header>
    </RootLayout>
  )
}

export default HomePage