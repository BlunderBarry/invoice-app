import InvoicesHeader from "../Core/InvoicesHeader";

function EditOrNew() {
  // styling + create more components
  return (
    <div className="bg-mainBg flex flex-col">
      <InvoicesHeader />
      <div className="flex w-20 max-w-full items-stretch justify-between gap-5 ml-6 mt-9 px-5 self-start max-md:ml-2.5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cee8b918-e0a9-48e6-87f2-8a3aab403d36?apiKey=ffb5fd319503459fb08bc43aaed51cd1&"
          className="aspect-[0.5] object-contain object-center w-[5px] stroke-[2px] stroke-violet-500 overflow-hidden shrink-0 max-w-full"
        />
        <div className="text-white text-base font-bold leading-4 tracking-tight whitespace-nowrap">
          Go back
        </div>
      </div>
      <div className="self-stretch flex w-full items-stretch justify-between gap-4 mt-9 pr-px">
        <div className="flex grow basis-[0%] flex-col items-stretch px-5">
          <div className="text-#777F98 text-2xl font-bold leading-8 tracking-tight whitespace-nowrap -mr-5">
            <span className="text-white">Edit </span>
            <span className="text-#777F98">#</span>
            <span className="text-white">XM9141</span>
          </div>
          <div className="text-#7C5DFA text-base font-bold leading-4 tracking-tight whitespace-nowrap -mr-5 mt-8">
            Bill From
          </div>
          <div className="text-#888EB0 text-sm font-medium leading-4 tracking-normal whitespace-nowrap -mr-5 mt-7">
            Street Address
          </div>
          <div className="text-white text-base font-bold leading-4 tracking-tight rounded border border-[color:var(--04,#252945)] bg-#252945 -mr-5 mt-3.5 px-5 py-5 border-solid">
            19 Union Terrace
          </div>
        </div>
        <div className="rounded bg-#252945 flex w-2 shrink-0 h-28 flex-col mt-1 self-start" />
      </div>
      <div className="self-stretch flex w-full flex-col items-stretch mt-7 px-6 max-md:px-5">
        <div className="flex items-stretch justify-between gap-5">
          <div className="flex grow basis-[0%] flex-col items-stretch">
            <div className="text-#888EB0 text-sm font-medium leading-4 tracking-normal whitespace-nowrap">
              City
            </div>
            <div className="text-white text-base font-bold leading-4 tracking-tight whitespace-nowrap rounded border border-[color:var(--04,#252945)] bg-#252945 mt-2.5 px-5 py-5 border-solid">
              London
            </div>
          </div>
          <div className="flex grow basis-[0%] flex-col items-stretch">
            <div className="text-#888EB0 text-sm font-medium leading-4 tracking-normal whitespace-nowrap">
              Post Code
            </div>
            <div className="text-white text-base font-bold leading-4 tracking-tight whitespace-nowrap rounded border border-[color:var(--04,#252945)] bg-#252945 mt-3.5 px-5 py-5 border-solid">
              E1 3EZ
            </div>
          </div>
        </div>
        <div className="text-#888EB0 text-sm font-medium leading-4 tracking-normal whitespace-nowrap mt-6">
          Country
        </div>
        <div className="text-white text-base font-bold leading-4 tracking-tight rounded border border-[color:var(--04,#252945)] bg-#252945 mt-2.5 px-5 py-5 border-solid">
          United Kingdom
        </div>
        <div className="text-#7C5DFA text-base font-bold leading-4 tracking-tight whitespace-nowrap mt-11 max-md:mt-10">
          Bill To
        </div>
        <div className="text-#888EB0 text-sm font-medium leading-4 tracking-normal whitespace-nowrap mt-7">
          Client’s Name
        </div>
        <div className="text-white text-base font-bold leading-4 tracking-tight rounded border border-[color:var(--04,#252945)] bg-#252945 mt-3.5 px-5 py-5 border-solid">
          Alex Grim
        </div>
        <div className="text-#888EB0 text-sm font-medium leading-4 tracking-normal whitespace-nowrap mt-6">
          Client’s Email
        </div>
        <div className="text-white text-base font-bold leading-4 tracking-tight rounded border border-[color:var(--04,#252945)] bg-#252945 mt-3.5 px-5 py-5 border-solid">
          alexgrim@mail.com
        </div>
        <div className="text-#888EB0 text-sm font-medium leading-4 tracking-normal whitespace-nowrap mt-6">
          Street Address
        </div>
        <div className="text-white text-base font-bold leading-4 tracking-tight rounded border border-[color:var(--04,#252945)] bg-#252945 mt-3.5 px-5 py-5 border-solid">
          84 Church Way
        </div>
        <div className="flex items-stretch justify-between gap-5 mt-7">
          <div className="flex grow basis-[0%] flex-col items-stretch">
            <div className="text-#888EB0 text-sm font-medium leading-4 tracking-normal whitespace-nowrap">
              City
            </div>
            <div className="text-white text-base font-bold leading-4 tracking-tight whitespace-nowrap rounded border border-[color:var(--04,#252945)] bg-#252945 mt-2.5 px-5 py-5 border-solid">
              Bradford
            </div>
          </div>
          <div className="flex grow basis-[0%] flex-col items-stretch">
            <div className="text-#888EB0 text-sm font-medium leading-4 tracking-normal whitespace-nowrap">
              Post Code
            </div>
            <div className="text-white text-base font-bold leading-4 tracking-tight whitespace-nowrap rounded border border-[color:var(--04,#252945)] bg-#252945 mt-3.5 px-5 py-5 border-solid">
              BD1 9PB
            </div>
          </div>
        </div>
        <div className="text-#888EB0 text-sm font-medium leading-4 tracking-normal whitespace-nowrap mt-6">
          Country
        </div>
        <div className="text-white text-base font-bold leading-4 tracking-tight rounded border border-[color:var(--04,#252945)] bg-#252945 mt-2.5 px-5 py-5 border-solid">
          United Kingdom
        </div>
        <div className="text-#888EB0 text-sm font-medium leading-4 tracking-normal mt-10 max-md:mt-10">
          Invoice Date
        </div>
        <div className="rounded border border-[color:var(--04,#252945)] bg-#252945 flex justify-between gap-5 mt-3.5 pl-5 pr-4 py-4 border-solid">
          <div className="text-white text-base font-bold leading-4 tracking-tight">
            21 Aug 2021
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f432fa6b-8e63-43f4-9754-37c8abfc82d9?apiKey=ffb5fd319503459fb08bc43aaed51cd1&"
            className="aspect-square object-contain object-center w-4 fill-slate-400 overflow-hidden self-stretch shrink-0 max-w-full"
          />
        </div>
        <div className="text-#888EB0 text-sm font-medium leading-4 tracking-normal mt-6">
          Payment Terms
        </div>
        <div className="rounded border border-[color:var(--04,#252945)] bg-#252945 flex justify-between gap-5 mt-2.5 pl-5 pr-4 py-5 border-solid">
          <div className="text-white text-base font-bold leading-4 tracking-tight">
            Net 30 Days
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7f19f79-9513-4711-924d-973af1c14ffc?apiKey=ffb5fd319503459fb08bc43aaed51cd1&"
            className="aspect-[1.43] object-contain object-center w-2.5 stroke-[2px] stroke-violet-500 overflow-hidden self-center shrink-0 max-w-full my-auto"
          />
        </div>
        <div className="text-#888EB0 text-sm font-medium leading-4 tracking-normal whitespace-nowrap mt-6">
          Project / Description
        </div>
        <div className="text-white text-base font-bold leading-4 tracking-tight rounded border border-[color:var(--04,#252945)] bg-#252945 mt-2.5 px-5 py-5 border-solid">
          Graphic Design
        </div>
        <div className="text-#777F98 text-lg font-bold leading-8 tracking-tight whitespace-nowrap mt-16 max-md:mt-10">
          Item List
        </div>
        <div className="text-#888EB0 text-sm font-medium leading-4 tracking-normal mt-9">
          Item Name
        </div>
        <div className="text-white text-base font-bold leading-4 tracking-tight rounded border border-[color:var(--04,#252945)] bg-#252945 mt-5 px-5 py-5 border-solid">
          Banner Design
        </div>
        <div className="flex w-full items-stretch justify-between gap-5 mt-7">
          <div className="flex items-stretch justify-between gap-5">
            <div className="text-#888EB0 text-sm font-medium leading-4 tracking-normal">
              Qty.
            </div>
            <div className="text-#888EB0 text-sm font-medium leading-4 tracking-normal whitespace-nowrap self-start">
              Price
            </div>
          </div>
          <div className="text-#888EB0 text-sm font-medium leading-4 tracking-normal self-start">
            Total
          </div>
        </div>
        <div className="flex items-stretch justify-between gap-4 mt-2.5 max-md:justify-center">
          <div className="text-white text-base font-bold leading-4 tracking-tight whitespace-nowrap rounded border border-[color:var(--04,#252945)] bg-#252945 aspect-[1.3333333333333333] px-5 py-5 border-solid">
            1
          </div>
          <div className="text-white text-base font-bold leading-4 tracking-tight whitespace-nowrap rounded border border-[color:var(--04,#252945)] bg-#252945 grow px-5 py-5 border-solid">
            156.00
          </div>
          <div className="text-#888EB0 text-base font-bold leading-4 tracking-tight self-center my-auto">
            156.00
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7f99eba-82ad-4f11-bffb-7a6fee3332ba?apiKey=ffb5fd319503459fb08bc43aaed51cd1&"
            className="aspect-[0.75] object-contain object-center w-3 fill-slate-400 overflow-hidden self-center shrink-0 max-w-full my-auto"
          />
        </div>
        <div className="text-#888EB0 text-sm font-medium leading-4 tracking-normal mt-12 max-md:mt-10">
          Item Name
        </div>
        <div className="text-white text-base font-bold leading-4 tracking-tight rounded border border-[color:var(--04,#252945)] bg-#252945 mt-5 px-5 py-5 border-solid">
          Email Design
        </div>
        <div className="flex w-full items-stretch justify-between gap-5 mt-7">
          <div className="flex items-stretch justify-between gap-5">
            <div className="text-#888EB0 text-sm font-medium leading-4 tracking-normal">
              Qty.
            </div>
            <div className="text-#888EB0 text-sm font-medium leading-4 tracking-normal whitespace-nowrap self-start">
              Price
            </div>
          </div>
          <div className="text-#888EB0 text-sm font-medium leading-4 tracking-normal self-start">
            Total
          </div>
        </div>
        <div className="flex items-stretch justify-between gap-4 mt-2.5 max-md:justify-center">
          <div className="text-white text-base font-bold leading-4 tracking-tight whitespace-nowrap rounded border border-[color:var(--04,#252945)] bg-#252945 aspect-[1.3333333333333333] px-5 py-5 border-solid">
            2
          </div>
          <div className="text-white text-base font-bold leading-4 tracking-tight whitespace-nowrap rounded border border-[color:var(--04,#252945)] bg-#252945 grow px-5 py-5 border-solid">
            200.00
          </div>
          <div className="text-#888EB0 text-base font-bold leading-4 tracking-tight self-center my-auto">
            400.00
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc584104-3fa2-4ca6-bf77-347c6fd0ef5b?apiKey=ffb5fd319503459fb08bc43aaed51cd1&"
            className="aspect-[0.75] object-contain object-center w-3 fill-slate-400 overflow-hidden self-center shrink-0 max-w-full my-auto"
          />
        </div>
        <div className="text-#888EB0 text-center text-base font-bold leading-4 tracking-tight bg-#252945 items-center mt-12 px-5 py-5 rounded-3xl max-md:mt-10">
          + Add New Item
        </div>
      </div>
      <div className="self-stretch flex min-h-[64px] w-full flex-col mt-6" />
      <div className="shadow-sm bg-#1E2139 self-stretch flex w-full items-stretch justify-between gap-2 pl-28 pr-6 py-6 max-md:px-5">
        <div className="text-ghostWhite text-center text-base font-bold leading-4 tracking-tight whitespace-nowrap bg-#252945 grow items-center px-5 py-5 rounded-3xl">
          Cancel
        </div>
        <div className="text-white text-base font-bold leading-4 tracking-tight whitespace-nowrap bg-#7C5DFA grow items-center px-5 py-5 rounded-3xl">
          Save Changes
        </div>
      </div>
    </div>
  );
}

export default EditOrNew;
