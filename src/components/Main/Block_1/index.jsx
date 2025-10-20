import '../../../styles/Main_Block_1/styles.css'
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { scrollToElement } from '../scrollToElement/scrollToElement';

export function Main_Block_1() {
    const controls = useAnimation();
    const [recognized, setRecognized] = useState(false);
    let toCheck, toRestart;

    useEffect(() => {
        const runCycle = () => {
            // 1. запускаем анимацию волн
            setRecognized(false);
            controls.start("wave");

            // 2. через 3 секунды показываем галочку
            toCheck = setTimeout(() => {
                setRecognized(true);
                controls.start("check");
            }, 16000);

            // 3. через 4 секунды начинаем заново
            toRestart = setTimeout(() => {
                setRecognized(false);
                controls.start("wave");
                runCycle();
            }, 16000);
        };
        runCycle()

        return () => {
            clearTimeout(toCheck);
            clearTimeout(toRestart);
        };
        // const cleanup = runCycle();
        // return cleanup;
    }, [controls]);

    // const bars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
    let bars;
    let widthWave, heightWave, gapWave, widthWaveGeneral, displayWave;
    if (window.innerWidth <= 1430) {
        bars = Array.from({ length: 16 }, (_, i) => i);
        widthWaveGeneral = 0 + 'px'
        widthWave = 2 + 'px'
        heightWave = 30 + 'px'
        gapWave = 2 + 'px'
        // wave display none
        displayWave = "none"
    }
    else {
        bars = Array.from({ length: 41 }, (_, i) => i);
        widthWaveGeneral = 800 + 'px'
        widthWave = 8 + 'px'
        gapWave = 6 + 'px'
        heightWave = 100 + 'px'
        displayWave = "flex"
    }

    return (
        <section className='main-block-1'>
            <section className='main-block-container'>
                <div className='block-container'>
                    <div className='block-text-header'>
                        <h2 className='nth-1'>Try voice biometrics</h2>
                        <div className='block-text-header-line'>
                            <h2 className='linear-color'>Make system access</h2>
                            <div className='block-text-header-line-g'>
                                <h2 className='linear-color'>secure and interestin</h2><h2 style={{ color: '#D252FF', marginBlockStart: '0', marginBlockEnd: '0', lineHeight: '1' }}>g</h2>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button onClick={scrollToElement}>Get Started</button>
                    </div>
                </div>
            </section>
            {/* <section className='main-block-column-2'> */}
            <div className='container-wave' style={{
                // height: "100%",
                // background: "#f3f4f6",
                display: `${displayWave}`,
                justifyContent: "center",
                alignItems: "center",
                width: '75%',
            }}>
                <div
                    style={{
                        width: `${widthWaveGeneral}`,
                        height: "200px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {!recognized ? (
                        // 🎵 ВОЛНЫ
                        <div>
                            {/* Верхние и нижние волны */}
                            <div style={{
                                display: "flex",
                                alignItems: "flex-end",
                                height: `${heightWave}`,
                                gap: `${gapWave}`,
                                marginBottom: "-5px"
                            }}>
                                {bars.map((i) => (
                                    <motion.div
                                        key={i}
                                        style={{
                                            width: `${widthWave}`,
                                            // background: "#4F46E5",
                                            background: "linear-gradient(0deg, white)",
                                            transformOrigin: "center",
                                            borderRadius: "6px",
                                        }}
                                        variants={{
                                            wave: {
                                                height: [
                                                    "20%",
                                                    "80%",
                                                    "30%",
                                                    "90%",
                                                    "40%",
                                                    "60%",
                                                    "20%",
                                                ],
                                                transition: {
                                                    repeat: Infinity,
                                                    duration: 2.5,
                                                    delay: i * 0.2,
                                                    ease: "easeInOut",
                                                },
                                            },
                                            check: { height: "0%" },
                                        }}
                                        initial={{ height: "20%" }}
                                        animate={controls}
                                    />
                                ))}
                            </div>
                            <div style={{
                                display: "flex",
                                alignItems: "flex-end",
                                height: `${heightWave}`,
                                gap: `${gapWave}`,
                                transform: "rotate(180deg) scaleX(-1)",
                                marginTop: "-5px",
                            }}>
                                {bars.map((i) => (
                                    <motion.div
                                        key={i}
                                        style={{
                                            width: `${widthWave}`,
                                            // background: "#4F46E5",
                                            background: "linear-gradient(0deg, white)",
                                            transformOrigin: "center",
                                            borderRadius: "6px",
                                        }}
                                        variants={{
                                            wave: {
                                                height: [
                                                    "20%",
                                                    "80%",
                                                    "30%",
                                                    "90%",
                                                    "40%",
                                                    "60%",
                                                    "20%",
                                                ],
                                                transition: {
                                                    repeat: Infinity,
                                                    duration: 2.5,
                                                    delay: i * 0.2,
                                                    ease: "easeInOut",
                                                },
                                            },
                                            check: { height: "0%" },
                                        }}
                                        initial={{ height: "20%" }}
                                        animate={controls}
                                    />
                                ))}
                            </div>
                        </div>
                    ) : (
                        // ✅ ГАЛОЧКА
                        <motion.svg
                            viewBox="0 0 100 100"
                            width="240"
                            height="240"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <motion.path
                                d="M25 55 L45 75 L75 30"
                                stroke="#10B981"
                                strokeWidth="8"
                                fill="transparent"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{
                                    pathLength: 1,
                                    opacity: 1,
                                    transition: { duration: 1 },
                                }}
                            />
                        </motion.svg>
                    )}
                </div>
            </div>
            {/* </section> */}
        </section >
    )
}