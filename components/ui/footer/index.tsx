import { MainLogoIcon } from "@/components/svg";
import { Button } from "@/components/ui";

export const Footer = () => {
	return(
  <div className="flex justify-center w-full">
    <div className="footer-container flex flex-col w-11/12">
      <div className="go-up-logo-container flex justify-between items-center p-3 border-y-2">
        <Button className="go-up" variant='outline'>
          go to top
        </Button>
        <MainLogoIcon/>
      </div>
      <div className="info-user-service-container flex flex-row justify-end p-3 border-b-2">
        <div className="user-service-container p-3">
          <div className="title mb-3">
            User Service
          </div>
          <div className="policy px-4 pb-3">
            Policy
          </div>
          <div className="tarif-delivery px-4 pb-3">
            Methods of delivery
          </div>
        </div>
        <div className="info-container p-3">
          <div className="title mb-3">
            information
          </div>
          <div className="contact-with-us px-4 pb-3">
            Contact with us
          </div>
          <div className="social media px-4 pb-3">
            Instegram@
          </div>
        </div>
      </div>
      <div className="about-us flex flex-col items-end p-3">
        <div className="title mb-1">
          Top Store The Only loyal One!
        </div>
        <div className="desc wrap-break-word w-96">
          we are desc we are desc 
          we are desc we are desc 
          we are desc we are desc 
          we are desc we are desc 
          we are desc we are desc 
          we are desc we are desc 
          we are desc we are desc 
          we are desc we are desc 
          we are desc we are desc 
          we are desc we are desc 
          we are desc we are desc 
          we are desc we are desc 
          indeed we are
        </div>
      </div>
    </div>
  </div>

	);
};