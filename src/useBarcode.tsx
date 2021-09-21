import React from 'react';
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

export function useBarcode<
  T extends SVGElement | HTMLCanvasElement | HTMLImageElement,
>({ ...props }: Props): any {
  const inputRef = React.useRef<T>(null);
  const { value, options } = props;

  React.useEffect(
    function () {
      if (inputRef) {
        JsBarcode(inputRef.current, value, options);
      }
    },
    [value, options],
  );

  return { inputRef };
}
