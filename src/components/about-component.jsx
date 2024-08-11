import Layout from "../layouts/layout-component";
import "./../styles/about.css";

const TimelineItem = ({ year, event }) => (
  <li>
    <div className="timeline-start">{year}</div>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className="timeline-end timeline-box text-white">{event}</div>
  </li>
);

const About = () => {
  const events = [
    { year: 1984, event: "First Macintosh computer" },
    { year: 1998, event: "iMac" },
    { year: 2001, event: "iPod" },
    { year: 2007, event: "iPhone" },
    { year: 2015, event: "Apple Watch" },
  ];
  return (
    <Layout>
      <div className="px-32 max-sm:px-0 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="@[480px]:p-4">
            <div className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10 img__load">
              <div className="flex flex-col gap-2 text-left  pl-10 pb-14">
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                  About us
                </h1>
                <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                  We are a global champion for women and girls. Our mission is
                  to empower women and girls to achieve their full economic
                  potential.
                </h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 px-4 py-10 @container">
            <div className="flex flex-col gap-4">
              <h1 className="text-[#1b0e14] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                Our journey
              </h1>
              <p className="text-[#1b0e14] text-base font-normal leading-normal max-w-[720px]">
                Since our founding in 2007, we've invested in programs that
                support women's economic empowerment around the world. We've
                worked with thousands of women to help them start or grow
                businesses, and improved the policies and practices that affect
                women in the workplace. We believe that when women are empowered
                to earn their own money, they can lift themselves, their
                families, and their communities out of poverty.
              </p>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
              <div className="flex flex-1 gap-3 rounded-lg border border-[#e7d0db] bg-[#fcf8fa] p-4 flex-col">
                <div
                  className="text-[#1b0e14]"
                  data-icon="GlobeStand"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M128,176A80,80,0,1,0,48,96,80.09,80.09,0,0,0,128,176Zm0-144A64,64,0,1,1,64,96,64.07,64.07,0,0,1,128,32Zm77.77,133.5a8,8,0,0,1-.23,11.32A111.24,111.24,0,0,1,136,207.72V224h24a8,8,0,0,1,0,16H96a8,8,0,0,1,0-16h24V207.71A112,112,0,0,1,47.18,18.46,8,8,0,1,1,58.72,29.54,96,96,0,0,0,194.46,165.28,8,8,0,0,1,205.77,165.5Z"></path>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#1b0e14] text-base font-bold leading-tight">
                    Our Vision
                  </h2>
                  <p className="text-[#974e73] text-sm font-normal leading-normal">
                    A world where women have the resources they need to thrive
                    and make their full contribution.
                  </p>
                </div>
              </div>
              <div className="flex flex-1 gap-3 rounded-lg border border-[#e7d0db] bg-[#fcf8fa] p-4 flex-col">
                <div
                  className="text-[#1b0e14]"
                  data-icon="Handshake"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M119.76,217.94A8,8,0,0,1,112,224a8.13,8.13,0,0,1-2-.24l-32-8a8,8,0,0,1-2.5-1.11l-24-16a8,8,0,1,1,8.88-13.31l22.84,15.23,30.66,7.67A8,8,0,0,1,119.76,217.94Zm132.69-96.46a15.89,15.89,0,0,1-8,9.25l-23.68,11.84-55.08,55.09a8,8,0,0,1-7.6,2.1l-64-16a8.06,8.06,0,0,1-2.71-1.25L35.86,142.87,11.58,130.73a16,16,0,0,1-7.16-21.46L29.27,59.58h0a16,16,0,0,1,21.46-7.16l22.06,11,53-15.14a8,8,0,0,1,4.4,0l53,15.14,22.06-11a16,16,0,0,1,21.46,7.16l24.85,49.69A15.9,15.9,0,0,1,252.45,121.48Zm-46.18,12.94L179.06,80H147.24L104,122c12.66,8.09,32.51,10.32,50.32-7.63a8,8,0,0,1,10.68-.61l34.41,27.57Zm-187.54-18,17.69,8.85L61.27,75.58,43.58,66.73ZM188,152.66l-27.71-22.19c-19.54,16-44.35,18.11-64.91,5a16,16,0,0,1-2.72-24.82.6.6,0,0,1,.08-.08L137.6,67.06,128,64.32,77.58,78.73,50.21,133.46l49.2,35.15,58.14,14.53Zm49.24-36.24L212.42,66.73l-17.69,8.85,24.85,49.69Z"></path>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#1b0e14] text-base font-bold leading-tight">
                    Our Approach
                  </h2>
                  <p className="text-[#974e73] text-sm font-normal leading-normal">
                    We work with partners to identify and address the unique
                    barriers women face in the economy.
                  </p>
                </div>
              </div>
              <div className="flex flex-1 gap-3 rounded-lg border border-[#e7d0db] bg-[#fcf8fa] p-4 flex-col">
                <div
                  className="text-[#1b0e14]"
                  data-icon="Wallet"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M216,72H56a8,8,0,0,1,0-16H192a8,8,0,0,0,0-16H56A24,24,0,0,0,32,64V192a24,24,0,0,0,24,24H216a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72Zm0,128H56a8,8,0,0,1-8-8V86.63A23.84,23.84,0,0,0,56,88H216Zm-48-60a12,12,0,1,1,12,12A12,12,0,0,1,168,140Z"></path>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#1b0e14] text-base font-bold leading-tight">
                    Our Impact
                  </h2>
                  <p className="text-[#974e73] text-sm font-normal leading-normal">
                    We've helped women start or grow over 70,000 businesses and
                    created or improved over 1 million jobs.
                  </p>
                </div>
              </div>
              <div className="flex flex-1 gap-3 rounded-lg border border-[#e7d0db] bg-[#fcf8fa] p-4 flex-col">
                <div
                  className="text-[#1b0e14]"
                  data-icon="Users"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#1b0e14] text-base font-bold leading-tight">
                    Our Community
                  </h2>
                  <p className="text-[#974e73] text-sm font-normal leading-normal">
                    Our community of supporters and partners includes leading
                    companies, foundations and governments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <ul className="timeline max-sm:timeline-vertical max-sm:pr-[25%]">
          {events.map((item, index) => (
            <TimelineItem key={index} year={item.year} event={item.event} />
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default About;
