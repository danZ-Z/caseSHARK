import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function PaymentSuccess({
    searchParams: { amount },
  }: {
    searchParams: { amount: string };
  }) {
    return (
      <main className="p-10">
        <MaxWidthWrapper>
        <div className="flex flex-col justify-center text-center p-2 md:p-20 bg-zinc-100 rounded-sm min-h-[calc(100vh-13.5em-1px)]">
          <h1 className="text-4xl font-extrabold mb-2">Thank you for your purchase!</h1>
          <h2 className="text-2xl">Your just paid</h2>
  
          <div className=" p-2 rounded-md text-blue-500 text-4xl font-bold">
            {amount}€
          </div>
        </div>
        </MaxWidthWrapper>
      </main>
    );
  }