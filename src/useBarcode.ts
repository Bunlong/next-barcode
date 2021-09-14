import { useRef, useEffect } from 'react';
import JsBarcode from 'jsbarcode';

interface Props {
  value: string;
  options?: Options;
}

interface Options {
  format?: string;
  width?: number;
  height?: number;
  displayValue?: boolean;
  text?: string;
  fontOptions?: string;
  font?: string;
  textAlign?: string;
  textPosition?: string;
  textMargin?: number;
  fontSize?: number;
  background?: string;
  lineColor?: string;
  margin?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  flat?: boolean;
  valid?: (valid: boolean) => void;
}

export function useBarcode({ ...props }: Props): any {
  const inputRef = useRef();
  const { value, options } = props;

  useEffect(
    function () {
      if (inputRef) {
        const ref = inputRef as any;
        JsBarcode(ref.current, value, options);
      }
    },
    [value, options],
  );

  return { inputRef };
}
