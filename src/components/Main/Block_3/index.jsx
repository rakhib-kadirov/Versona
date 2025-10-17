import { useEffect, useRef, useState } from 'react';
import '../../../styles/Main_Block_1/styles.css'

function getLinePoints(rectA, rectB, direction, containerRect) {
    switch (direction) {
        case "right":
            return {
                x1: rectA.left + rectA.width - containerRect.left,
                y1: rectA.top + rectA.height / 2 - containerRect.top,
                x2: rectB.left - 7.5 - containerRect.left,
                y2: rectB.top + rectB.height / 2 - containerRect.top,
            };
        case "down":
            return {
                x1: rectA.left + rectA.width / 2 - containerRect.left,
                y1: rectA.top + rectA.height - containerRect.top,
                x2: rectB.left + rectB.width / 2 - containerRect.left,
                y2: rectB.top - 7.5 - containerRect.top,
            };
        case "left":
            return {
                x1: rectB.left - containerRect.left,
                y1: rectB.top + rectB.height / 2 - containerRect.top,
                x2: rectA.right + 7.5 - containerRect.left,
                y2: rectA.top + rectA.height / 2 - containerRect.top,
            };
        default:
            return null;
    }
}

export function Main_Block_3() {
    const itemsRefs = useRef([]);
    const containerRef = useRef(null);
    const [lines, setLines] = useState([]);

    useEffect(() => {
        const updateLines = () => {
            const container = containerRef.current;
            if (!container) return;
            const containerRect = container.getBoundingClientRect();

            // пары индексов кружков, которые нужно соединить
            const pairs = [
                [0, 1, "right"], // 2 → 4
                [1, 2, "down"], // 4 → 6
                [3, 2, "left"], // 6 → 8
            ];

            const newLines = pairs.map(([a, b, sideA]) => {
                const elA = itemsRefs.current[a];
                const elB = itemsRefs.current[b];
                if (!elA || !elB) return null;

                const rectA = elA.getBoundingClientRect();
                const rectB = elB.getBoundingClientRect();

                return getLinePoints(rectA, rectB, sideA, containerRect);
            });

            setLines(newLines.filter(Boolean));
        };

        updateLines();
        window.addEventListener("resize", updateLines);
        window.addEventListener("scroll", updateLines, { passive: true });
        return () => {
            window.removeEventListener("resize", updateLines);
            window.removeEventListener("scroll", updateLines);
        };
    }, []);

    return (
        <section className='main-block-container'>
            <div className='block-container'>
                <div className='block-text-header'>
                    <h2>How Voice Authentication Works?</h2>
                </div>
                <div
                    className='block-works'
                    ref={containerRef}
                >
                    {/* SVG слой для линий */}
                    <svg
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            pointerEvents: "none",
                            overflow: "visible",
                        }}
                    >
                        <defs>
                            <marker
                                id="arrow"
                                markerWidth="6"
                                markerHeight="6"
                                refX="5"
                                refY="3"
                                orient="auto"
                                markerUnits="strokeWidth"
                            >
                                <path d='M0,1 L0,5 L7,3 Z' bor fill="#5653FF" />
                            </marker>
                        </defs>
                        {lines.map((line, i) => (
                            <>
                                <line
                                    key={i}
                                    x1={line.x1}
                                    y1={line.y1}
                                    x2={line.x2}
                                    y2={line.y2}
                                    stroke="#5653FF"
                                    // strokeOpacity={0.25}
                                    strokeWidth="6"
                                    markerEnd='url(#arrow)'
                                />
                            </>
                        ))}
                    </svg>
                    {/* Элементы списка */}
                    <div className='works-list'>
                        {["1"].map((num, i) => (
                            <>
                                <div className='works-item' key={i}
                                    ref={(el) => (itemsRefs.current[i] = el)}>
                                    <div>
                                        <span>STEP 1</span>
                                        <h3>Capture</h3>
                                        <p>User speaks a short verification phrase.</p>
                                        {/* <button>Learn more</button> */}
                                    </div>
                                </div>
                                {/* <div
                            key={i}
                            ref={(el) => (itemsRefs.current[i] = el)}
                            className="works-item w-item"
                            /> */}
                                < div className='works-item' key={i + 1}
                                    ref={(el) => (itemsRefs.current[i + 1] = el)}>
                                    <div>
                                        <span>STEP 2</span>
                                        <h3>Analyze</h3>
                                        <p>AI extracts unique vocal characteristics and creates a voiceprint.</p>
                                        {/* <button>Learn more</button> */}
                                    </div>
                                </div>
                                {/* </> */}
                                {/* ))} */}
                                {/* {["2"].map((num, i) => ( */}
                                {/* <> */}
                                <div className='works-item' key={i + 3}
                                    ref={(el) => (itemsRefs.current[i + 3] = el)}>
                                    <div>
                                        <span>STEP 4</span>
                                        <h3>Verify</h3>
                                        <p>Identity confirmed — instantly and securely.</p>
                                        {/* <button>Learn more</button> */}
                                    </div>
                                </div>
                                {/* // <div
                            //     key={i + 2}
                            //     ref={(el) => (itemsRefs.current[i + 2] = el)}
                            //     className="works-item w-item"
                            // /> */}
                                <div className='works-item' key={i + 2}
                                    ref={(el) => (itemsRefs.current[i + 2] = el)}>
                                    <div>
                                        <span>STEP 3</span>
                                        <h3>Match</h3>
                                        <p>System compares the new sample with the stored template in milliseconds.</p>
                                        {/* <button>Learn more</button> */}
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
                {/* <div className='layout' /> */}
            </div>
        </section >
    )
}