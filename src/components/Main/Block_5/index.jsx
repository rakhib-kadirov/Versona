// import { useEffect, useRef, useState } from 'react';
import '../../../styles/Main_Block_1/styles.css'
import CPU from '../../../styles/images/voiceCPU.png'

export function Main_Block_5() {
    return (
        <section className='main-block-container'>
            <div className='block-container'>
                <div className='block-text-header'>
                    <h2>Built with Security at the Core</h2>
                    <p>&#10077;Your users’ voices are unique — and so is our protection.&#10078;</p>
                </div>
                <div className='block-cases-security'>
                    <div class="render">
                        {/* image */}
                        <img src={CPU} alt="photoVoiceCPU" />
                    </div>
                    {/* Элементы списка */}
                    <div class="features">
                        <div class="feature-card">
                            {/* <span class="icon">🔐</span> */}
                            <h3>AES-256 Encryption</h3>
                            <p>Enterprise-grade voiceprint encryption ensuring maximum data security.</p>
                        </div>
                        <div class="feature-card">
                            {/* <span class="icon">🧠</span> */}
                            <h3>Deepfake Detection</h3>
                            <p>AI-powered anti-spoofing algorithms that prevent synthetic voice attacks.</p>
                        </div>
                        <div class="feature-card">
                            {/* <span class="icon">☁️</span> */}
                            <h3>Training</h3>
                            <p>Continuous AI model training for accuracy improvement</p>
                        </div>
                    </div>
                </div>
                {/* <div className='layout' /> */}
            </div>
        </section >
    )
}