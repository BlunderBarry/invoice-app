function Status() {
  return (
    <div className="shadow-sm bg-#1E2139 self-stretch flex w-full items-center justify-between gap-5 mt-9 px-6 py-7 rounded-lg max-md:px-5">
      <div className="text-#DFE3FA text-sm font-medium leading-4 tracking-normal my-auto">
        Status
      </div>
      <div className="bg-#FF8F00 bg-opacity-10 flex gap-2 pl-5 pr-5 py-3.5 rounded-md self-start max-md:pr-5">
        <div className="flex w-2 shrink-0 h-2 flex-col rounded-[50%] bg-#FF8F00" />
        <div className="text-#FF8F00 text-base font-bold leading-4 tracking-tight whitespace-nowrap">
          Pending
        </div>
      </div>
    </div>
  );
}

export default Status;
