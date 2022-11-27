import React, {
    ForwardedRef,
    MutableRefObject,
    useEffect,
    useRef,
} from "react";
// import textFit from "textfit";
import { StyleLibrary } from "../Template/styleDefinitions";
import Template from ".";
import TemplateStyle from "../Template/types";

interface TemplateGalleryProps {
    text?: string;
    author?: string;
    ref?: React.MutableRefObject<undefined>;
}

function TemplateGallery(
    props: TemplateGalleryProps,
    previewStyle: TemplateStyle,
    setPreviewStyle: any
) {
    useEffect(() => {
        // console.log("Style updated");
        console.log(JSON.stringify(previewStyle));
    }, [previewStyle]);

    const Templates = Object.keys(StyleLibrary).map((style, i) => {
        return (
            <div
                className="template-gallery-card"
                // onClick={() => {
                //     // previewRef.current.style = templateStyles[style];
                //     previewStyle;
                //     console.log(previewStyle);
                //     setPreviewStyle(StyleLibrary[style]);
                // }}
                key={i}
            >
                <Template
                    style={StyleLibrary[style]}
                    text={props.text}
                    author={props.author}
                    scale={0.4}
                />

                <div className="title">
                    <h4>{style}</h4>
                </div>
            </div>
        );
    });

    return <>{Templates}</>;
}

export default TemplateGallery;
