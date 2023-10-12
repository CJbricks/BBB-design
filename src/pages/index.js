import Head from 'next/head'
import Body from './Body.js'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bricks Design House</title>
        <meta name="description" content="Modern Web Development and Design | Build Better Brick By Brick." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content= "Bricks Design House"/>
        <meta property="og:description" content="Modern Web Development, Web Design, and Graphic Design." />
        <meta property="og:image" content="https://live.staticflickr.com/65535/53252114650_f0ae94d8d3_m.jpg" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      
      <Body />
      
    </>
  )
}