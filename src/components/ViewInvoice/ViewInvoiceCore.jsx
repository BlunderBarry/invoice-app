import InvoicesHeader from "../Core/InvoicesHeader";
import Status from "./Status";
import GoBack from "../global/GoBack";
import Edit from "./Edit";
import Delete from "./Delete";
import MarkAsPaid from "./MarkAsPaid";

function ViewInvoiceCore() {
  // some styling problem + more comp needed
  return (
    <div className="bg-mainBg flex flex-col items-stretch">
      <InvoicesHeader />
      <div className="flex w-full flex-col mt-9 px-6 max-md:px-5">
        <GoBack />
        <Status />
        <div className="shadow-sm bg-#1E2139 self-stretch flex w-full flex-col items-stretch mt-4 px-6 py-6 rounded-lg max-md:px-5">
          <div className="flex items-stretch justify-between gap-4">
            <div className="flex grow basis-[0%] flex-col items-stretch">
              <div className="text-white text-base font-bold leading-4 tracking-tight whitespace-nowrap">
                <span className="#888EB0#888EB0">#</span>
                <span className="text-white">XM9141</span>
              </div>
              <div className="text-#DFE3FA text-sm font-medium leading-4 tracking-normal whitespace-nowrap mt-2">
                Graphic Design
              </div>
              <div className="text-#DFE3FA text-sm font-medium leading-4 tracking-normal mt-7">
                19 Union Terrace
                <br />
                London
                <br />
                E1 3EZ
                <br />
                United Kingdom
              </div>
              <div className="text-#DFE3FA text-sm font-medium leading-4 tracking-normal whitespace-nowrap mt-9">
                Invoice Date
              </div>
              <div className="text-white text-base font-bold leading-5 tracking-tight whitespace-nowrap mt-4">
                21 Aug 2021
              </div>
              <div className="text-#DFE3FA text-sm font-medium leading-4 tracking-normal whitespace-nowrap mt-9">
                Payment Due
              </div>
              <div className="text-white text-base font-bold leading-5 tracking-tight whitespace-nowrap mt-3.5">
                20 Sep 2021
              </div>
              <div className="text-#DFE3FA text-sm font-medium leading-4 tracking-normal whitespace-nowrap mt-10">
                Sent to
              </div>
              <div className="text-white text-base font-bold leading-5 tracking-tight whitespace-nowrap mt-4">
                alexgrim@mail.com
              </div>
            </div>
            <div className="flex grow basis-[0%] flex-col items-stretch mt-44 self-end max-md:mt-10">
              <div className="text-#DFE3FA text-sm font-medium leading-4 tracking-normal whitespace-nowrap">
                Bill To
              </div>
              <div className="text-white text-base font-bold leading-5 tracking-tight whitespace-nowrap mt-4">
                Alex Grim
              </div>
              <div className="text-#DFE3FA text-sm font-medium leading-4 tracking-normal mt-3">
                84 Church Way
                <br />
                Bradford
                <br />
                BD1 9PB
                <br />
                United Kingdom
              </div>
            </div>
          </div>
          <div className="bg-#252945 flex w-full flex-col items-stretch mt-10 px-6 py-7 rounded-t-lg max-md:mt-10 max-md:px-5">
            <div className="flex items-stretch justify-between gap-5">
              <div className="flex grow basis-[0%] flex-col items-stretch">
                <div className="text-white text-base font-bold leading-4 tracking-tight whitespace-nowrap">
                  Banner Design
                </div>
                <div className="text-#888EB0 text-base font-bold leading-4 tracking-tight whitespace-nowrap mt-2.5">
                  1 x £ 156.00
                </div>
              </div>
              <div className="text-white text-right text-base font-bold leading-4 tracking-tight self-center whitespace-nowrap my-auto">
                £ 156.00
              </div>
            </div>
            <div className="flex items-stretch justify-between gap-5 mt-7">
              <div className="flex grow basis-[0%] flex-col items-stretch">
                <div className="text-white text-base font-bold leading-4 tracking-tight whitespace-nowrap">
                  Email Design
                </div>
                <div className="text-#888EB0 text-base font-bold leading-4 tracking-tight whitespace-nowrap mt-2.5">
                  2 x £ 200.00
                </div>
              </div>
              <div className="text-white text-right text-base font-bold leading-4 tracking-tight self-center whitespace-nowrap my-auto">
                £ 400.00
              </div>
            </div>
          </div>
          <div className="bg-black flex items-center justify-between gap-5 px-6 py-8 rounded-b-lg rounded-none max-md:px-5 ">
            <div className="text-white text-sm font-medium leading-4 tracking-normal my-auto">
              Amount Due
            </div>
            <div className="text-white text-right text-2xl font-bold leading-8 tracking-tight self-stretch whitespace-nowrap">
              £ 556.00
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-sm bg-#1E2139 flex w-full items-stretch gap-2 mt-14 px-6 py-6 max-md:justify-center max-md:mt-10 max-md:px-5">
        <Edit />
        <Delete />
        <MarkAsPaid />
      </div>
    </div>
  );
}

export default ViewInvoiceCore;
