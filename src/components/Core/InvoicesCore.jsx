import InvoicesHeader from "./InvoicesHeader";
import InvoicesNumber from "./InvoicesNumber";
import InvoicesFilter from "./InvoicesFilter";
import InvoicesNew from "./InvoicesNew";
import Invoices from "./Invoices";
// import NoInvoices from "./NoInvoices";

function InvoicesCore() {
  return (
    <div className="bg-mainBg flex flex-col h-screen">
      <InvoicesHeader />
      <div className="self-center flex w-full max-w-[327px] items-center justify-between gap-5 mt-8">
        <InvoicesNumber />
        {/* comment separer cette partie end deux diff */}
        <div className="self-stretch flex items-stretch justify-between gap-3 px-5 max-md:justify-center">
          <InvoicesFilter />
          <InvoicesNew />
        </div>
      </div>
      <div className="shadow-sm bg-#1E2139 self-center flex w-full max-w-[327px] items-stretch justify-between gap-5 mt-8 px-6 py-7 rounded-lg max-md:px-5">
        <Invoices />
      </div>
      {/* <NoInvoices /> */}
    </div>
  );
}

export default InvoicesCore;
