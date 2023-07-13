"use client";

import { useBarcode } from 'next-barcode'

export default function Home() {
  const { inputRef } = useBarcode({
    value: 'next-barcode',
    options: {
      background: '#ccffff',
    }
  });

  return <svg ref={inputRef} />
}
