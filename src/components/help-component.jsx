import Layout from "../layouts/layout-component";
import "../styles/help.css";
import { BsTelephone, BsGeoAlt } from "react-icons/bs";
import { TfiEmail} from "react-icons/tfi";

function Help() {
  return (
    <Layout>
      <div className="px-32 max-sm:px-0 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="@container">
            <div className="@[480px]:p-4">
              <div className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10 img__help">
                <div className="flex flex-col gap-2 text-left">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                    Request Assistance
                  </h1>
                  <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                    We are here to help you. Please fill in the information
                    below and we will contact you as soon as possible.
                  </h2>
                </div>
                <label className="flex flex-col min-w-40 h-14 w-full max-w-[480px] @[480px]:h-16">
                  <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                    <div
                      className="text-[#974e73] flex border border-[#e7d0db] bg-[#fcf8fa] items-center justify-center pl-[15px] rounded-l-xl border-r-0"
                      data-icon="MagnifyingGlass"
                      data-size="20px"
                      data-weight="regular"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                      </svg>
                    </div>
                    <input
                      placeholder="What do you need help with?"
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1b0e14] focus:outline-0 focus:ring-0 border border-[#e7d0db] bg-[#fcf8fa] focus:border-[#e7d0db] h-full placeholder:text-[#974e73] px-[15px] rounded-r-none border-r-0 pr-2 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"
                      
                    />
                    <div className="flex items-center justify-center rounded-r-xl border-l-0 border border-[#e7d0db] bg-[#fcf8fa] pr-[7px]">
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#e61980] text-[#fcf8fa] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                        <span className="truncate">Next</span>
                      </button>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <h2 className="text-[#1b0e14] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Other ways to get in touch
          </h2>
          <div className="flex items-center gap-4 bg-[#fcf8fa] px-4 min-h-[72px] py-2">
            <div
              className="text-[#1b0e14] flex items-center justify-center rounded-lg bg-[#f3e7ed] shrink-0 size-12"
              data-icon="Envelope"
              data-size="24px"
              data-weight="regular"
            >
             <TfiEmail/>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[#1b0e14] text-base font-medium leading-normal line-clamp-1">
                Email
              </p>
              <p className="text-[#974e73] text-sm font-normal leading-normal line-clamp-2">
                Email us at support@empowerwomen.org
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-[#fcf8fa] px-4 min-h-[72px] py-2">
            <div
              className="text-[#1b0e14] flex items-center justify-center rounded-lg bg-[#f3e7ed] shrink-0 size-12"
              data-icon="Phone"
              data-size="24px"
              data-weight="regular"
            >
              <BsTelephone/>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[#1b0e14] text-base font-medium leading-normal line-clamp-1">
                Phone
              </p>
              <p className="text-[#974e73] text-sm font-normal leading-normal line-clamp-2">
                Call us at 1-800-123-4567
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-[#fcf8fa] px-4 min-h-[72px] py-2">
            <div
              className="text-[#1b0e14] flex items-center justify-center rounded-lg bg-[#f3e7ed] shrink-0 size-12"
              data-icon="MapPin"
              data-size="24px"
              data-weight="regular"
            >
              <BsGeoAlt/>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[#1b0e14] text-base font-medium leading-normal line-clamp-1">
                In person
              </p>
              <p className="text-[#974e73] text-sm font-normal leading-normal line-clamp-2">
                Visit us at 1234 Women St, San Francisco, CA
              </p>
            </div>
          </div>
          <p className="text-[#974e73] text-sm font-normal leading-normal pt-1 px-4">
            If you are in immediate danger or need urgent assistance, please
            call 911 or your local emergency services number.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Help;
