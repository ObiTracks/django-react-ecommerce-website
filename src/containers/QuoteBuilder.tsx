import React from "react";
import { useRef, useState, useEffect } from "react";
import { Stepper, Button, Group, Input, Chip, Checkbox } from "@mantine/core";
import {
    SimpleGrid,
    Skeleton,
    Container,
    Stack,
    useMantineTheme,
} from "@mantine/core";
import OCRProcessor from "../widgets/OCRWidget";
import { quotes_list, getQuotes } from "../store/quotes";
import Template from "../widgets/Template";
import TemplateGallery from "../widgets/Template/templateGallery";
import TemplateStyle from "../widgets/Template/types";
import DefaultStyle, {
    StyleLibrary,
} from "../widgets/Template/styleDefinitions";
import $ from "../assets/jquery-3.6.1";

const getChild = (height: number) => (
    <Skeleton height={height} radius="md" animate={false} />
);
const BASE_HEIGHT = 360;
const getSubHeight = (children: number, spacing: number) =>
    BASE_HEIGHT / children - spacing * ((children - 1) / children);

export default function QuoteBuilder() {
    const [active, setActive] = useState(0);
    const nextStep = () =>
        setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () =>
        setActive((current) => (current > 0 ? current - 1 : current));
    const [formScaffold, setFormData] = useState({
        step1: {
            title: "What's the quote?",
            quote: "Identify the essential. Eliminate the rest.",
            author: undefined,
            finished: false,
        },
        step2: {
            title: "Pick a template",
            selected_template_id: undefined,
            finished: false,
        },
        step3: {
            title: "Gifting?",
            gifting: false,
            recipient_name: undefined,
            recipient_address: undefined,
            special_message: undefined,
            finished: false,
        },
        step4: {
            title: "Review",
            finished: false,
        },
    });

    const [previewStyle, setPreviewStyle] = useState<TemplateStyle>();
    const hidePage = () => {
        document
            .getElementById("quote-builder-root")!
            .classList.toggle("closed");
    };

    return (
        <div className="QuoteBuilder closed" id="quote-builder-root">
            <a onClick={hidePage}>Hide page</a>
            <Stepper
                size="sm"
                active={active}
                onStepClick={setActive}
                breakpoint="sm"
                id="stepper"
                color="yellow"
            >
                <Stepper.Step label="Quote" allowStepSelect={active > 0}>
                    <div className="step half-width">
                        <h2 className="font-white">Whats the Quote?</h2>

                        <span>
                            <h3 className="font-regular font-white" id="quote">
                                Identify the essential. Eliminate the rest.
                            </h3>
                        </span>

                        <div className="quote-selector">
                            <div className="choice-area">
                                <h4>Pick a Quote</h4>
                                <Input
                                    component="select"
                                    variant="filled"
                                    size="md"
                                    onChange={(e) => {
                                        document.querySelector(
                                            "#quote"
                                        )!.innerHTML = e.currentTarget.value;
                                        setFormData({
                                            ...formScaffold,
                                            step1: {
                                                ...formScaffold.step1,
                                                quote: e.currentTarget.value,
                                            },
                                        });
                                    }}
                                >
                                    <option>
                                        Identify the essential. Eliminate the
                                        rest.
                                    </option>
                                    {getQuotes()}
                                </Input>
                            </div>
                            <hr />
                            <div className="upload-area">
                                <h4>Upload a Screenshot</h4>
                                <OCRProcessor />
                            </div>
                        </div>
                    </div>
                </Stepper.Step>
                <Stepper.Step label="Template" allowStepSelect={active > 1}>
                    <div className="step full-width">
                        <h2 className="font-white">Whats the Quote?</h2>
                        <div className="template-selector">
                            <div className="template-gallery">
                                <div className="filter-chips">
                                    <Chip.Group
                                        multiple={true}
                                        position="center"
                                    >
                                        <Chip
                                            color="white"
                                            // onChange={() => setChecked((v) => !v)}
                                        >
                                            portrait
                                        </Chip>
                                        <Chip>landscape</Chip>
                                    </Chip.Group>
                                    <Checkbox label="Author" />
                                </div>
                                <div className="templates">
                                    {TemplateGallery(
                                        {
                                            text: formScaffold.step1?.quote
                                                ? formScaffold.step1.quote
                                                : "Identify the essential. Eliminate the rest.",
                                            author: formScaffold.step1?.author
                                                ? formScaffold.step1.author
                                                : "Bruce Lee",
                                        },
                                        previewStyle!,
                                        (style: TemplateStyle) => {
                                            setPreviewStyle(style);
                                        }
                                    )}

                                    {/* <div className="template-gallery-card">
                                        <div className="title">
                                            <h4>Style Name</h4>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div className="preview">
                                <Template
                                    style={previewStyle}
                                    text={formScaffold.step1?.quote}
                                    author={formScaffold.step1?.author}
                                    id="template-preview"
                                />

                                {/* {previewTemplate} */}
                            </div>
                            {/* {JSON.stringify(previewStyle)} */}
                        </div>
                    </div>
                </Stepper.Step>
                <Stepper.Step label="Review" allowStepSelect={active > 2}>
                    <div className="step half-width" id="review">
                        <div className="review-panel">
                            <h2 className="font-white">Review</h2>
                            <h4 className="font-white">Quote</h4>
                            <hr />
                            <h4 className="font-white">
                                {formScaffold.step1.quote
                                    ? formScaffold.step1.quote != null
                                    : "bumbaclot"}
                            </h4>
                            <Template
                                style={previewStyle}
                                text={formScaffold.step1?.quote}
                                author={formScaffold.step1?.author}
                                id="template-preview"
                            />
                        </div>
                    </div>
                </Stepper.Step>
                <Stepper.Completed>
                    Completed, click back button to get to previous step
                </Stepper.Completed>
            </Stepper>

            <div className="stepper-buttons">
                <button className="back" onClick={prevStep}>
                    <h4>Back</h4>
                </button>
                <button className="next" onClick={nextStep}>
                    <h4>Next</h4>
                </button>
            </div>

            {/* <Group position="center" mt="xl">
                <Button variant="default" onClick={prevStep}>
                    Back
                </Button>
                <Button onClick={nextStep}>Next step</Button>
            </Group> */}
        </div>
    );
}
