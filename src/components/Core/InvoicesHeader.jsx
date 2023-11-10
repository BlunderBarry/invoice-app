function InvoicesHeader() {
  return (
    <div className="bg-#1E2139 self-stretch flex w-full items-stretch justify-between gap-5 pr-6 max-md:pr-5">
      <div className="flex-col overflow-hidden relative flex aspect-square w-[72px] items-stretch">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7bea59be-80da-4d91-bd9f-1aef707aec58?apiKey=ffb5fd319503459fb08bc43aaed51cd1&"
          className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f50c34a8-c797-4c4f-94d8-a6ef0c418b7a?apiKey=ffb5fd319503459fb08bc43aaed51cd1&"
          className="aspect-square object-contain object-center w-full overflow-hidden"
        />
      </div>
      <div className="flex items-stretch justify-between gap-5 max-md:justify-center">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/38e90bbb-6615-4933-8cda-6a310167e23f?apiKey=ffb5fd319503459fb08bc43aaed51cd1&"
          className="aspect-square object-contain object-center w-2.5 fill-slate-400 overflow-hidden self-center shrink-0 max-w-full my-auto"
        />
        {/* doesnt show up */}
        <div className="flex w-px shrink-0 h-[72px] flex-col bg-#494E6E" />
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0dfaf69a-4f80-4c58-8961-8d707ae2b608?apiKey=ffb5fd319503459fb08bc43aaed51cd1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0dfaf69a-4f80-4c58-8961-8d707ae2b608?apiKey=ffb5fd319503459fb08bc43aaed51cd1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0dfaf69a-4f80-4c58-8961-8d707ae2b608?apiKey=ffb5fd319503459fb08bc43aaed51cd1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0dfaf69a-4f80-4c58-8961-8d707ae2b608?apiKey=ffb5fd319503459fb08bc43aaed51cd1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0dfaf69a-4f80-4c58-8961-8d707ae2b608?apiKey=ffb5fd319503459fb08bc43aaed51cd1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0dfaf69a-4f80-4c58-8961-8d707ae2b608?apiKey=ffb5fd319503459fb08bc43aaed51cd1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0dfaf69a-4f80-4c58-8961-8d707ae2b608?apiKey=ffb5fd319503459fb08bc43aaed51cd1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0dfaf69a-4f80-4c58-8961-8d707ae2b608?apiKey=ffb5fd319503459fb08bc43aaed51cd1&"
          className="aspect-square object-contain object-center w-8 overflow-hidden self-center shrink-0 max-w-full my-auto rounded-[50%]"
        />
      </div>
    </div>
  );
}

export default InvoicesHeader;
