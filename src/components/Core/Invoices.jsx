function Invoices() {
  return (
    // base model for an invoices
    // create component to fetch data and map for this comp
    <section className="flex items-stretch justify-between gap-x-5 w-full">
      <div className="flex grow basis-[0%] flex-col items-stretch">
        <div className="text-white text-base font-bold leading-4 tracking-tight whitespace-nowrap">
          <span className="text-slate-400">#</span>
          <span className="text-white">RT3080</span>
        </div>
        <div className="text-ghostWhite text-sm font-medium leading-4 tracking-normal whitespace-nowrap mt-7">
          Due 19 Aug 2021
        </div>
        <div className="text-white text-base font-bold leading-6 tracking-tight whitespace-nowrap mt-2">
          £ 1,800.90
        </div>
      </div>
      <div className="flex grow basis-[0%] flex-col">
        <div className="text-white text-right text-sm font-medium leading-4 tracking-normal whitespace-nowrap">
          Jensen Huang
        </div>
        <div className="bg-#33D69F bg-opacity-10 self-stretch flex justify-center items-center gap-2 mt-7 pl-8 pr-8 py-4 rounded-md max-md:px-5">
          <div className="flex w-2 shrink-0 h-2 flex-col rounded-[50%] bg-#33D69F" />
          <div className="text-#33D69F text-base font-bold leading-4 tracking-tight self-stretch whitespace-nowrap">
            Paid
          </div>
        </div>
      </div>
    </section>
  );
}

export default Invoices;
