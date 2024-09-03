"use client";

import CheckoutPage from "@/components/CheckoutPage";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import convertToSubcurrency from "@/lib/convertToSubcurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSearchParams } from "next/navigation";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function Home() {
  // const searchParams = useSearchParams()
  // const amount = parseInt(searchParams.get('price') || '0', 10);
  const amount = 10

  return (
    <div>
      <MaxWidthWrapper>
        <div className="max-w-6xl mx-auto p-10 text-center border m-10 rounded-md bg-zinc-100 ">
        <div className="min-h-[calc(100vh-18.5rem-1px)]">
          <div className="mb-10 ">
            <h1 className="text-4xl font-extrabold mb-2 text-blue-500"><span className="text-black">case</span>shark</h1>
            <h2 className="text-2xl">
              has requested
              <span className="font-bold"> {amount}€</span>
            </h2>
          </div>

          <Elements
            stripe={stripePromise}
            options={{
              mode: "payment",
              amount: convertToSubcurrency(amount),
              currency: "eur",
            }}
          >
            <CheckoutPage amount={amount} />
          </Elements>
        </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}