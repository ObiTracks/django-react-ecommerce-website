import React, { useEffect, useRef } from "react";
// import textFit from "textfit";
// import {default as QuoteIcon} from "/quoteicon.svg";
import QuoteIcon from "../../assets/quoteicon.svg";
// import TemplateStyles from "./styleDefinitions.client";
// import styleApplier from "./styleMethods.client";
import DefaultStyle, { StyleLibrary } from "./styleDefinitions";
import TemplateStyle from "./types";

// interface TemplateProps {
//     id?: string;
//     style?: TemplateStyle | null;
//     text?: string;
//     author?: string;
//     scale?: number;
//     ref?: React.RefObject<HTMLDivElement>;
// }

export default function Template(props) {
    const style = props.style;
    const quoteText = props.text;
    const authorText = props.author;
    const scale = props.scale;

    const refs = {
        root: useRef(),
        quotesRoot: useRef(),
        quote1: useRef(),
        quote2: useRef(),
        text: useRef(),
        author: useRef(),
    };

    const scaleSelf = (scale) => {
        refs.root.current.style.transform = `scale(${scale})`;
        // console.log(template.current.clientWidth);
    };

    const applyStyles = (style, reset) => {
        refs.quotesRoot.current.className = "";
        refs.quote1.current.className = "";
        refs.quote1.current.className = "";
        refs.text.current.className = "";
        refs.author.current.className = "";

        refs.quotesRoot.current.classList.add(...DefaultStyle.quotesRoot);
        refs.quote1.current.classList.add(...DefaultStyle.quote1);
        refs.quote1.current.classList.add(...DefaultStyle.quote2);
        refs.text.current.classList.add(...DefaultStyle.text);
        refs.author.current.classList.add(...DefaultStyle.author);

        Object.keys(style).forEach((key) => {
            if (key != "defaultStyleObject") {
                refs[key].current.classList.add(...style[key]);
            }
        });
    };
    // const resetStyles = (style) => {
    //     Object.keys(DefaultStyle).forEach((key) => {
    //         refs[key].current.className = "";
    //     });
    //     applyStyles(DefaultStyle);
    // };

    useEffect(() => {
        scaleSelf(1.0);
        if (style != null) {
            applyStyles(style);
        }
    }, [style]);
    // textFit(document.querySelector(".text"));

    const setQuoteStyle = () => {};

    return (
        <div ref={refs.root} className="template">
            {/* <QuoteIcon/> */}
            <div ref={refs.quotesRoot} className="quotes" id="quotesRoot">
                <div ref={refs.quote1} className="quote-holder" id="quote1">
                    <img src={QuoteIcon} alt="" />
                </div>
                <div ref={refs.quote1} className="quote-holder" id="quote2">
                    <img src={QuoteIcon} alt="" />
                </div>
            </div>
            {/* <QuoteIcon id=""first-quote/> */}
            <div ref={refs.text} className="text">
                {quoteText}
            </div>
            {/* <ReactFitText>

                <div className="text large-line-height">
                    Identify the essential. Eliminate the rest.
                    Identify the essential. Eliminate the rest.
                    Identify the essential. Eliminate the rest.
                    Identify the essential. Eliminate the rest.</div>
            </ReactFitText> */}
            <div ref={refs.author} className="author">
                {authorText}
            </div>
            {/* <div className="quotation-a">"</div>
            <div className="quotation-b">"</div> */}
        </div>
    );
}
