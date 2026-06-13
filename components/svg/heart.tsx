"use client";

const HeartIcon = ({height, width}:{height?: number; width?: number,})=>{
	return(
  <div>
    <svg 
      fill="none"
      height={height || 24} 
      stroke="#000000" 
      strokeLinecap="round"
      strokeLinejoin="round" 
      strokeWidth="2" 
      viewBox="0 0 24 24" 
      width={width || 24} 
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z">
      </path>
    </svg>
  </div>);
};
export { HeartIcon };

