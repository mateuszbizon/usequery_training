import React from 'react'

type Props = {
    children: React.ReactNode;
}

function RootLayout({ children }: Props) {
  return (
    <>
        <main className='w-full sm:w-[90%] md:w-[85%] lg:w-[80%] mx-auto px-5'>
            {children}
        </main>
    </>
  )
}

export default RootLayout