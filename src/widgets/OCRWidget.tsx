import React, { useEffect, useRef, useState } from "react";
import { Group, Stack, Text, Image, Progress, Button } from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { createWorker } from "tesseract.js";

export default function OCRWidget() {
    const [imageData, setImageData] = useState<null | string>(null);
    const loadFile = (file: File) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            const imageDataUri = reader.result;
            setImageData(imageDataUri as string);
        };
        reader.readAsDataURL(file);
    };

    const [progress, setProgress] = useState(0);
    const [progressLabel, setProgressLabel] = useState("Not started");
    const [ocrResult, setOcrResult] = useState("");

    const workerRef = useRef<Tesseract.Worker | null>(null);
    useEffect(() => {
        workerRef.current = createWorker({
            logger: (message) => {
                if ("progress" in message) {
                    setProgress(message.progress);
                    setProgressLabel(
                        message.progress == 1 ? "Done" : message.status
                    );
                }
            },
        });
        return () => {
            workerRef.current?.terminate();
            workerRef.current = null;
        };
    }, []);

    const handleExtract = async () => {
        setProgress(0);
        setProgressLabel("starting");

        const worker = workerRef.current!;
        await worker.load();
        await worker.loadLanguage("eng");
        await worker.initialize("eng");

        const response = await worker.recognize(imageData!);

        setOcrResult(response.data.text);
        console.log(response.data);

        document.querySelector("#quote")!.innerHTML = response.data.text;
    };

    return (
        <>
            <Stack style={{ flex: "1" }}>
                <Dropzone
                    onDrop={(files) => {
                        loadFile(files[0]);
                    }}
                    accept={IMAGE_MIME_TYPE}
                    multiple={false}
                    style={{ minHeight: 220 }}
                    id="dropzone"
                >
                    <Group
                        position="center"
                        spacing="xl"
                        style={{ minHeight: 220, pointerEvents: "none" }}
                    >
                        <Dropzone.Accept>
                            Accept
                            {/* <IconUpload
                                size={50}
                                stroke={1.5}
                                color={
                                    theme.colors[theme.primaryColor][
                                        theme.colorScheme === "dark" ? 4 : 6
                                    ]
                                }
                            /> */}
                            accept
                        </Dropzone.Accept>
                        <Dropzone.Reject>
                            Reject
                            {/* <IconX
                                size={50}
                                stroke={1.5}
                                color={
                                    theme.colors.red[
                                        theme.colorScheme === "dark" ? 4 : 6
                                    ]
                                }
                            /> */}
                        </Dropzone.Reject>
                        <Dropzone.Idle>
                            Idle
                            {/* <IconPhoto size={50} stroke={1.5} /> */}
                        </Dropzone.Idle>
                        <div>
                            <h3>Upload a screenshot of a quote you like</h3>
                            <p>We'll grab the text from it for you :)</p>
                        </div>
                    </Group>
                    <Text size="md" inline></Text>
                </Dropzone>

                <Text>{progressLabel.toUpperCase()}</Text>
                <Progress value={progress * 100} />
                {ocrResult}

                {!!imageData && (
                    <Image src={imageData} style={{ width: "100%" }} />
                )}
            </Stack>

            <Stack style={{ flex: "1" }}>
                <Button
                    disabled={!imageData || !workerRef.current}
                    onClick={handleExtract}
                >
                    Extract
                </Button>

                {!!ocrResult && (
                    <Stack>
                        <Text size="xl">RESULT</Text>
                        <Text
                            style={{
                                fontFamily: "monospace",
                                background: "white",
                                padding: "10px",
                            }}
                        >
                            {ocrResult}
                        </Text>
                    </Stack>
                )}
            </Stack>
        </>
    );
}
