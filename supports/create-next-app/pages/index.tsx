import type { NextPage } from 'next'

import { useBarcode } from 'next-barcode'

const Home: NextPage = () => {
  const { inputRef } = useBarcode({
    value: 'next-barcode',
  });

  return (
    <>
      <img ref={inputRef} />
    </>
  )
}

export default Home
