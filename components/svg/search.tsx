"use client";

const SearchIcon = ({height, width}:{height?: number; width?: number,})=>{
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
      <circle 
        cx="11" 
        cy="11" 
        r="8">
      </circle>
      <path 
        d="m21 21-4.3-4.3">
      </path>
    </svg>
  </div>);
};
export { SearchIcon };

