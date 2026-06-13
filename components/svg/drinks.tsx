"use client";

const DrinksIcon = ({height, width}:{height?: number; width?: number,})=>{
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
      <path d="m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8">
      </path>
      <path d="M5 8h14">
      </path>
      <path d="M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0">
      </path>
      <path d="m12 8 1-6h2">
      </path>
    </svg>
  </div>);
};
export { DrinksIcon };

