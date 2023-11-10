function GoBack() {
  return (
    <div className="flex w-20 max-w-full items-stretch justify-between gap-5">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1bba22b2-5611-4857-a118-e32e92591586?apiKey=ffb5fd319503459fb08bc43aaed51cd1&"
        className="aspect-[0.5] object-contain object-center w-[5px] stroke-[2px] stroke-violet-500 overflow-hidden shrink-0 max-w-full"
      />
      <div className="text-white text-base font-bold leading-4 tracking-tight whitespace-nowrap">
        Go back
      </div>
    </div>
  );
}

export default GoBack;
