'use client';
import Paragraph from '@/components/appear/Paragraph';
import Word from '@/components/appear/Word';

const paragraph = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."

export default function Home() {

  const words = paragraph.split(" ")
  return (
    <main>
        <div style={{height: "100vh"}}></div>
        <Paragraph paragraph={paragraph}/>
        <div style={{height: "100vh"}}></div>
        <Word paragraph={paragraph}/>
        <div style={{height: "100vh"}}></div>

    </main>
  )
}