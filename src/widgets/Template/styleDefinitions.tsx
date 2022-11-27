import TemplateStyle, { StyleLibraryInterface } from "./types";

// Keys are the ref names for the elements to style
// Values are the classnames to apply to the elements
const DefaultStyle: TemplateStyle = {
    quotesRoot: ["quotes"],
    quote1: ["quote-holder"],
    quote2: ["quote-holder"],
    text: ["text"],
    author: ["author"],
};
export default DefaultStyle;

export const StyleLibrary: StyleLibraryInterface = {
    minimalist: {
        defaultStyleObject: DefaultStyle,
        quotesRoot: ["diagonal-right"],
        text: ["line-height-large"],
    },
    minimalist2: {
        defaultStyleObject: DefaultStyle,
        quotesRoot: ["diagonal-left"],
        text: ["line-height-small"],
    },
};