import Layout from "../layouts/layout-component";

function Exhibition() {
  return (
    <Layout>
      <div className="px-32 max-sm:px-0 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="@container">
            <div className="@[480px]:p-4">
              <div
                className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4 img__load"
              >
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] text-center">
                  Immerse yourself in art, culture, and history
                </h1>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1980e6] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                  <span className="truncate">Start your tour</span>
                </button>
              </div>
            </div>
          </div>
          <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Exhibition
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl img__load"
              ></div>
              <p className="text-[#0e141b] text-base font-medium leading-normal">
                The Future of Work
              </p>
            </div>
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl img__load"
              ></div>
              <p className="text-[#0e141b] text-base font-medium leading-normal">
                African American Art: Harlem Renaissance
              </p>
            </div>
          </div>
          <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Events
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl img__load"
              ></div>
              <div>
                <p className="text-[#0e141b] text-base font-medium leading-normal">
                  Future of Work
                </p>
                <p className="text-[#4e7397] text-sm font-normal leading-normal">
                  July 14, 2023
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl img__load"
              ></div>
              <div>
                <p className="text-[#0e141b] text-base font-medium leading-normal">
                  African American Art: Harlem Renaissance
                </p>
                <p className="text-[#4e7397] text-sm font-normal leading-normal">
                  July 15, 2023
                </p>
              </div>
            </div>
          </div>
          <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Education
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl img__load"
              ></div>
              <div>
                <p className="text-[#0e141b] text-base font-medium leading-normal">
                  The Future of Work
                </p>
                <p className="text-[#4e7397] text-sm font-normal leading-normal">
                  July 14, 2023
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl img__load"
              ></div>
              <div>
                <p className="text-[#0e141b] text-base font-medium leading-normal">
                  African American Art: Harlem Renaissance
                </p>
                <p className="text-[#4e7397] text-sm font-normal leading-normal">
                  July 15, 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Exhibition;
