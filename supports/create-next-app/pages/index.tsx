import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useBarcode } from 'next-barcode';

const Home: NextPage = () => {
  const { inputRef } = useBarcode({
    value: 'next-barcode',
    // options: {
    //   background: '#ccffff',
    // }
  })

  return <svg ref={inputRef} />
}

export default Home
