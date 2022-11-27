import { ReactDOM } from "react";

export default interface TemplateStyle {
    defaultStyleObject?: TemplateStyle;
    quotesRoot?: Array<"quotes" | "diagonal-left" | "diagonal-right">;
    quote1?: Array<"quote-holder" | "invisible" | "">;
    quote2?: Array<"quote-holder" | "invisible" | "">;
    text?: Array<
        "text" | "text-align-left" | "text-align-right" | "line-height-large" |"line-height-small"
    >;
    author?: Array<"author" | "text-align-left" | "text-align-right">;
}

export interface StyleLibraryInterface {
    defaultStyle?: any;
    [key: string]: TemplateStyle;
}
