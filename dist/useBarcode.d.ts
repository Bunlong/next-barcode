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
export declare function useBarcode({ ...props }: Props): any;
export {};
