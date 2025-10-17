// import { useEffect, useRef, useState } from 'react';
import '../../../styles/Main_Block_1/styles.css'

export function Main_Block_4() {
    // const itemsRefs = useRef([]);
    // const containerRef = useRef(null);
    // const [lines, setLines] = useState([]);

    // useEffect(() => {
    //     const updateLines = () => {
    //         const container = containerRef.current;
    //         if (!container) return;
    //         const containerRect = container.getBoundingClientRect();

    //         // пары индексов кружков, которые нужно соединить
    //         const pairs = [
    //             [0, 1, "left", "right"], // 2 → 4
    //             [1, 2, "right", "left"], // 4 → 6
    //             [2, 3, "left", "right"], // 6 → 8
    //         ];

    //         const newLines = pairs.map(([a, b, sideA, sideB]) => {
    //             const elA = itemsRefs.current[a];
    //             const elB = itemsRefs.current[b];
    //             if (!elA || !elB) return null;

    //             const rectA = elA.getBoundingClientRect();
    //             const rectB = elB.getBoundingClientRect();

    //             // const x1 = rectA.left + rectA.width - containerRect.left;
    //             // const y1 = rectA.top + rectA.height / 2 - containerRect.top;
    //             // const x2 = rectB.left + rectB.width - containerRect.left;
    //             // const y2 = rectB.top + rectB.height / 2 - containerRect.top;

    //             const x1 = (sideA === "right" ? rectA.left + rectA.width + 50 : rectA.left - 50) - containerRect.left;
    //             const y1 = rectA.top + rectA.height / 2 - containerRect.top;
    //             const x2 = (sideB === "right" ? rectB.left + rectB.width + 50 : rectB.left - 50) - containerRect.left;
    //             const y2 = rectB.top + rectB.height / 2 - containerRect.top;

    //             return { x1, y1, x2, y2 };
    //         });

    //         setLines(newLines.filter(Boolean));
    //     };

    //     updateLines();
    //     window.addEventListener("resize", updateLines);
    //     window.addEventListener("scroll", updateLines, { passive: true });
    //     return () => {
    //         window.removeEventListener("resize", updateLines);
    //         window.removeEventListener("scroll", updateLines);
    //     };
    // }, []);

    return (
        <section className='main-block-container'>
            <div className='block-container'>
                <div className='block-text-header'>
                    <h2>Designed for Modern Enterprises</h2>
                </div>
                <div
                    className='block-cases'
                    // ref={containerRef}
                >
                    {/* SVG слой для линий */}
                    {/* <svg
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
                        {lines.map((line, i) => (
                            <line
                                key={i}
                                x1={line.x1}
                                y1={line.y1}
                                x2={line.x2}
                                y2={line.y2}
                                stroke="#5653FF80"
                                strokeOpacity={0.25}
                                strokeWidth="1"
                            // color="linear-gradient(0deg, #5653FF, #D252FF)"
                            // style={{
                            //     background: "linear-gradient(0deg, #5653FF, #D252FF)",
                            //     boxShadow: "0 0 10rem 5rem #6653ff",
                            // }}
                            />
                        ))}
                    </svg> */}
                    {/* Элементы списка */}
                    <div className='cases-list'>
                        <div className='cases-item'>
                            <div>
                                <h3>Banking & Finance</h3>
                                <p>Prevent fraud and protect transactions with secure voice login.</p>
                                {/* <button>Learn more</button> */}
                            </div>
                        </div>
                        {/* {["2", "4"].map((num, i) => (
                            <div
                                key={i}
                                ref={(el) => (itemsRefs.current[i] = el)}
                                className="works-item w-item"
                            />
                        ))} */}
                        <div className='cases-item'>
                            <div>
                                <h3>Customer Support Platforms</h3>
                                <p>Automate identity verification and reduce handling time with voice authentication.</p>
                                {/* <button>Learn more</button> */}
                            </div>
                        </div>
                        <div className='cases-item'>
                            <div>
                                <h3>Healthcare</h3>
                                <p>Enable compliant patient access to sensitive information.</p>
                                {/* <button>Learn more</button> */}
                            </div>
                        </div>
                        {/* {["6", "8"].map((num, i) => (
                            <div
                                key={i + 2}
                                ref={(el) => (itemsRefs.current[i + 2] = el)}
                                className="works-item w-item"
                            />
                        ))} */}
                        <div className='cases-item'>
                            <div>
                                <h3>Telecom & IoT</h3>
                                <p>Verify users across devices and connected environments.</p>
                                {/* <button>Learn more</button> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='layout' /> */}
            </div>
        </section >
    )
}