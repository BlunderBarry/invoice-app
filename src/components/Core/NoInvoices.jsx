function NoInvoices() {
  return (
    <div className="flex flex-col items-stretch justify-center px-5 flex-grow">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/348b2947-517b-4eb0-bc3f-a7f551777eb4?apiKey=ffb5fd319503459fb08bc43aaed51cd1&"
        className="aspect-[1.21] object-contain object-center w-[193px] overflow-hidden self-center"
      />
      <div className="text-white text-2xl text-center font-bold tracking-tighter w-full -mr-5 mt-11 max-md:mt-10">
        There is nothing here
      </div>
      <div className="text-ghostWhite text-center text-sm font-bold leading-4 tracking-normal self-center mt-6">
        <span className="font-medium">
          Create an invoice by clicking the
          <br />
        </span>
        <span className="font-bold">New</span>
        <span className="font-medium"> button and get started</span>
      </div>
    </div>
  );
}

export default NoInvoices;
