import React from 'react'
import RootLayout from '../components/layouts/RootLayout'
import HomeGradient from '../components/HomeGradient'

function HomePage() {
  return (
    <RootLayout>
        <HomeGradient />
        <header className='min-h-screen flex flex-col items-center py-24'>
            <h1 className='text-4xl sm:text-5xl lg:text-7xl text-center font-medium mb-10'>DummyJSONApi <br /> reaveled <br /> with useQuery</h1>
            <p className='text-dark-2 mb-7 text-center sm:text-lg lg:text-xl'>In the DummyJSONApi you can get a different types of data starting with user things like users, posts, recipes, quotes and even generate images on the fly. </p>
            <a href='#' className='py-1 px-4 rounded-full bg-primary-1 text-light-1 w-fit hover:bg-dark-2 transition cursor-pointer'>Start now</a>
        </header>
    </RootLayout>
  )
}

export default HomePage