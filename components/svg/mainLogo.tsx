import Image from "next/image";

import MainLogo from "./MainLogo.jpg";
const MainLogoIcon = ()=>{
	return(
  <>
    <Image alt='TopStoreMainLogo' height={57}  src={MainLogo}  width={170}/>
  </>
	);
};

export { MainLogoIcon };

