"use client";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Spinner from "../ui/spinner";
import { useOrder } from "@/hooks/useOrder";

function OrderConfirmationContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const view = searchParams.get("view");
    const isOpen = view?.includes("order");

    const orderId = view?.split('-')[1] ?? ''
    const { order, isLoading, error } = useOrder(orderId);
    console.log(order);


    if ((isLoading) && isOpen) return <div className="w-screen fixed inset-0 z-50 flex items-start justify-content sm:justify-end bg-black/50 pt-24 px-5 md:px-10 md:p-10 overflow-hidden" ><Spinner /></div>;
    if (error && isOpen) return <div className="w-screen fixed inset-0 z-50 flex items-start justify-content sm:justify-end bg-black/50 pt-24 px-5 md:px-10 md:p-10 overflow-hidden">
        <p className="w-full h-[75vh] flex justify-center items-center text-center py-10 text-red-500">{error}</p>
    </div>;

    if (isOpen)
        return (
            <div className=" w-screen fixed inset-0 z-50 flex items-center justify-center bg-black/50 pt-24 px-5 md:px-10 md:p-10 overflow-hidden">
                <div className="bg-white rounded-md shadow-lg max-w-lg w-full p-8 sm:p-14 text-left">

                    <div className="flex justify-start mb-6">
                        <FaCheckCircle className="text-primary w-16 h-16" />
                    </div>

                    <h1 className="text-[32px] sm:text-3xl font-semibold uppercase tracking-wide">
                        Thank you<br />for your order
                    </h1>

                    <p className="text-black/50 mt-3 mb-8 text-sm">
                        You will receive an email confirmation shortly.
                    </p>

                    {/* Order Summary */}
                    <div className="flex flex-col sm:flex-row overflow-hidden rounded-md shadow-md">

                        <div className="bg-gray-light flex-1 p-3 px-5 text-left">
                            <div className="flex justify-between">

                                <div className="flex items-center gap-3">

                                    <div className="w-12 h-12 relative">
                                        <Image
                                            fill
                                            src={order?.items[0].image ?? ''}
                                            alt="XX99 MK II"
                                            className="rounded-md object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-black">{order?.items[0].name}</p>
                                        <p className="text-gray-500 font-sm">$ {order?.items[0].price}</p>
                                    </div>
                                </div>

                                <span className="text-gray-600 font-semibold">x{order?.items[0].quantity}</span>
                            </div>
                            {
                                (order?.items.length && order?.items.length > 1) &&
                                <>
                                    <hr className="my-4 border-gray-300" />

                                    <p className="text-gray-500 text-sm text-center">
                                        {`and ${(order?.items.length) - 1} other item(s)`}
                                    </p>
                                </>
                            }
                        </div>

                        <div className="bg-black text-white flex flex-col justify-center items-start sm:items-start px-8 py-3">
                            <p className="text-sm uppercase text-gray-400 tracking-wide">Grand Total</p>
                            <p className="text-xl sm:text-2xl font-bold mt-2">$ {order?.grandTotal}</p>
                        </div>
                    </div>

                    <button
                        onClick={() => router.push("/")}
                        className="w-full bg-primary text-white mt-10 py-3 uppercase tracking-wide font-semibold hover:bg-primary-light transition"
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        );
}

export default function OrderConfirmationPage() {
    return (
        <Suspense fallback={<div className="w-screen fixed inset-0 z-50 flex items-start justify-content sm:justify-end bg-black/50 pt-24 px-5 md:px-10 md:p-10 overflow-hidden" ><Spinner /></div>}>
            <OrderConfirmationContent />
        </Suspense>
    );
}
