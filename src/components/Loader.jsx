import { useEffect, useRef } from 'react';
import './loader.css'
import MiniLoader from './MiniLoader';


const Loader = () => {
    const svgRef = useRef(null)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (svgRef.current) {
        svgRef.current.classList.add("final-fill");
      }
    }, 2000); // 4s matches animation duration

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="title h-screen flex flex-col  gap-4 justify-center items-center w-screen bg-black">
    <svg  viewBox="0 0 441 454" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_304_16)">
<path d="M4 325.124L137.774 4L268 338.094L220.369 446L137.774 238.488L102.81 325.124H4Z" fill="white"/>
</g>
<g filter="url(#filter1_d_304_16)">
<path d="M256 122.5L309 0L437 309.5H335L256 122.5Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_304_16" x="0" y="4" width="272" height="450" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_304_16"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_304_16" result="shape"/>
</filter>
<filter id="filter1_d_304_16" x="252" y="0" width="189" height="317.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_304_16"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_304_16" result="shape"/>
</filter>
</defs>
</svg>

    <div className='sm:mt-2'> 
    <MiniLoader/>
    </div>
  </div>
  )
}

export default Loader