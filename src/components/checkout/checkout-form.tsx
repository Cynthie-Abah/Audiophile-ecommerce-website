"use client"
import { Controller, useForm } from "react-hook-form"
import Summary from "./summary"
import { AlertCircle } from "lucide-react";
import { StyledRadioGroup } from "../ui/StyledRadioGroup";
import { NewOrder } from "../../../types";
import { v4 as uuidv4 } from "uuid";
import { useCart } from "@/hooks/cart/useCart";
import Spinner from "../ui/spinner";
import { useCreateOrder } from "@/hooks/useCreateOrders";

export const CheckoutForm = () => {
    const { cart, isLoading, error } = useCart();
    const {handleCreateOrder} = useCreateOrder()
    const { handleSubmit, formState: { errors, isSubmitting }, register, reset, control, watch } = useForm<NewOrder>();
    const paymentMethod = watch('shippingInfo.paymentMethod')

    const subTotal = cart?.items.reduce((sum, item) => sum + item.price * item.quantity, 0) || 0;
    const shipping = 50 * (cart?.items.length ?? 0) || 0
    const grandTotal = subTotal && subTotal + shipping || 0
    const tax = Math.round(subTotal * 0.07);

    const onsubmit = (data: NewOrder)=>{
        if(cart) {
        const orderId = uuidv4().slice(0, 6);
        const newOrder  ={
            ...data, 
            userId: cart?.userId,
            items: cart?.items, 
            orderId,
            shipping,
            grandTotal,
            tax,
            subTotal,
        }
        console.log( newOrder, 'DONE!');
        handleCreateOrder(newOrder)
        reset();
        }
    }
    
    if (!cart || isLoading) return <div className="w-screen h-screen fixed inset-0 z-50 flex items-start justify-content sm:justify-end bg-black/50 pt-24 px-5 md:px-10 md:p-10 overflow-hidden" ><Spinner /></div>;
    if (error) return <p className="w-full h-screen flex justify-center items-center text-center py-10 text-red-500">{error}</p>;
  return (
    <>
    <form onSubmit={handleSubmit(onsubmit)} id={'checkout-form'} className="w-full md:max-w-4xl mx-auto space-y-8 bg-white flex-2 rounded-md p-6 md:p-5 lg:p-12">
            {/* Checkout Header */}
            <h1 className="tracking-wide text-h3 font-semibold">CHECKOUT</h1>

            {/* Billing Details */}
            <section className="space-y-4">
                <h2 className="text-subtitle font-semibold text-primary">Billing Details</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div className="flex flex-col">
                    <label htmlFor="name" className="text-[12px] font-semibold">Name</label>
                    <input
                    type="text"
                    id="name"
                    {...register('shippingInfo.name', {
                        required: "This field is required",
                        minLength: { value: 3, message: 'Name must be at least 3 characters' }
                        })}
                    placeholder="Alexei Ward"
                    aria-invalid={errors.shippingInfo?.name ? "true" : "false"}
                    aria-describedby="name-error" 
                    className="placeholder:font-semibold placeholder:text-black/40 mt-1 p-3 md:p-5 border border-[#CFCFCF] rounded-md focus:ring-primary focus:border-primary outline-none"
                    
                    />
                    {errors.shippingInfo?.name && (
                        <div
                            className="flex items-center gap-1 mt-2 text-red-600 "
                            id="name-error"
                            role="alert"
                        >
                            <AlertCircle className="w-3 h-3" />
                            <p className="text-xs">Name is required</p>
                        </div>
                    )}
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email" className="text-[12px] font-semibold">Email Address</label>
                    <input
                    type="email"
                    id="email"
                    {...register('shippingInfo.email', { 
                required: 'Email is required', 
                pattern: { 
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
                message: 'Please enter a valid email address' 
                } 
                })}
                aria-invalid={errors.shippingInfo?.email ? "true" : "false"}
                aria-describedby="email-error" 
                placeholder="alexei@mail.com"
                className="placeholder:font-semibold placeholder:text-black/40 mt-1 p-3 md:p-5 border border-[#CFCFCF] rounded-md focus:ring-primary focus:border-primary outline-none"
                    />
                    {errors.shippingInfo?.email && (
                        <div
                            className="flex items-center gap-1 mt-2 text-red-600 "
                            id="email-error"
                            role="alert"
                        >
                            <AlertCircle className="w-3 h-3" />
                            <p className="text-xs">Email is required. pls enter a valid email</p>
                        </div>
                    )}
                </div>

                <div className="flex flex-col">
                    <label htmlFor="phone" className="text-[12px] font-semibold">Phone Number</label>
                    <input
                    id="phone"
                    type="tel"
                    placeholder="+1 202-555-0136"
                    {...register('shippingInfo.phone', {
                        required: true,})}
                    aria-invalid={errors.shippingInfo?.phone ? "true" : "false"}
                    aria-describedby="phone-error" 
                    className="placeholder:font-semibold placeholder:text-black/40 mt-1 p-3 md:p-5 border border-[#CFCFCF] rounded-md focus:ring-primary focus:border-primary outline-none"
                    />
                    {errors.shippingInfo?.phone && (
                        <div
                            className="flex items-center gap-1 mt-2 text-red-600 "
                            id="phone-error"
                            role="alert"
                        >
                            <AlertCircle className="w-3 h-3" />
                            <p className="text-xs">Name is required</p>
                        </div>
                    )}
                </div>

                </div>

            </section>

            {/* Shipping Info */}
            <section className="space-y-4">
                <h2 className="text-subtitle font-semibold text-primary">Shipping Info</h2>

                <div className="flex flex-col">
                    <label htmlFor="address" className="text-[12px] font-semibold">Address</label>
                    <input
                    {...register('shippingInfo.address', {
                        required: true,
                        })}
                    type="text"
                    placeholder="1137 Williams Avenue"
                    aria-invalid={errors.shippingInfo?.address ? "true" : "false"}
                    aria-describedby="address-error"
                    className=" placeholder:font-semibold placeholder:text-black/40 mt-1 p-3 md:p-5 border border-[#CFCFCF] rounded-md focus:ring-primary focus:border-primary outline-none"
                    />
                    {errors.shippingInfo?.address && (
                        <div
                            className="flex items-center gap-1 mt-2 text-red-600 "
                            id="address-error"
                            role="alert"
                        >
                            <AlertCircle className="w-3 h-3" />
                            <p className="text-xs">Your Address is required</p>
                        </div>
                    )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div className="flex flex-col">
                    <label htmlFor="zipCode" className="text-[12px] font-semibold">ZIP Code</label>
                    <input
                    id="zipCode"
                    {...register('shippingInfo.zip')}
                    type="text"
                    placeholder="10001"
                    aria-invalid={errors.shippingInfo?.zip ? "true" : "false"}
                    aria-describedby="zipCode-error"
                    className="placeholder:font-semibold placeholder:text-black/40 mt-1 p-3 md:p-5 border border-[#CFCFCF] rounded-md focus:ring-primary focus:border-primary outline-none"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="city" className="text-[12px] font-semibold">City</label>
                    <input
                    id="city"
                    {...register('shippingInfo.city', {
                        required: true,
                        })}
                    type="text"
                    placeholder="New York"
                    aria-invalid={errors.shippingInfo?.city ? "true" : "false"}
                    aria-describedby="city-error"
                    className="placeholder:font-semibold placeholder:text-black/40 mt-1 p-3 md:p-5 border border-[#CFCFCF] rounded-md focus:ring-primary focus:border-primary outline-none"
                    />
                    {errors.shippingInfo?.city && (
                        <div
                            className="flex items-center gap-1 mt-2 text-red-600 "
                            id="city-error"
                            role="alert"
                        >
                            <AlertCircle className="w-3 h-3" />
                            <p className="text-xs">Your City is required</p>
                        </div>
                    )}
                </div>

                <div className="flex flex-col">
                    <label htmlFor="country" className="text-[12px] font-semibold">Country</label>
                    <input
                    type="text"
                    id="country"
                    {...register('shippingInfo.country', {
                        required: true,
                        })}
                    aria-invalid={errors.shippingInfo?.country ? "true" : "false"}
                    aria-describedby="country-error"
                    placeholder="United States"
                    className="placeholder:font-semibold placeholder:text-black/40 mt-1 p-3 md:p-5 border border-[#CFCFCF] rounded-md focus:ring-primary focus:border-primary outline-none"
                    />
                    {errors.shippingInfo?.country && (
                        <div
                            className="flex items-center gap-1 mt-2 text-red-600 "
                            id="country-error"
                            role="alert"
                        >
                            <AlertCircle className="w-3 h-3" />
                            <p className="text-xs">country is required</p>
                        </div>
                    )}
                </div>

                </div>
            </section>

            {/* Payment Details */}
            <section className="space-y-4">
                <h2 className="text-subtitle font-semibold text-primary">Payment Details</h2>

                <div className=" flex-col sm:flex-row md:items-center grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="">
                        <label htmlFor="paymentMethod" className="text-[12px] font-semibold">Payment Method</label>
                        {errors.shippingInfo?.paymentMethod && (
                        <div
                            className="flex items-center gap-1 mt-2 text-red-600 "
                            id="city-error"
                            role="alert"
                        >
                            <AlertCircle className="w-3 h-3" />
                            <p className="text-xs">Please select a payment method</p>
                        </div>
                    )}
                    </div>
                    <Controller
                    name='shippingInfo.paymentMethod'
                    rules={{
                    required: 'This field is required',
                    }}
                    control={control} 
                    render={({ field }) => (
                    <StyledRadioGroup
                        {...field}
                        name="paymentMethod"
                        value={field.value}
                        onChange={field.onChange}
                        options={[
                        { value: "eMoney", label: "e-Money" },
                        { value: "CashOnDelivery", label: "Cash on Delivery" },
                        ]}
                    />
                    )} 
                    />
                </div>
                { paymentMethod === 'eMoney' &&

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                    <label htmlFor="emoneyNumber" className="text-[12px] font-semibold">e-Money Number</label>
                    <input
                    id="emoneyNumber"
                    {...register('shippingInfo.emoneyNumber', {
                        required: true, // this should only be true if the radio selected is emoney
                        })}
                    type="text"
                    placeholder="238521993"
                    aria-invalid={errors.shippingInfo?.emoneyNumber ? "true" : "false"}
                    aria-describedby="emoneyNumber-error"
                    className="placeholder:font-semibold placeholder:text-black/40 mt-1  p-3 md:p-5 border border-[#CFCFCF] rounded-md focus:ring-primary focus:border-primary outline-none"
                    />
                    {errors.shippingInfo?.emoneyNumber && (
                        <div
                            className="flex items-center gap-1 mt-2 text-red-600 "
                            id="emoneyNumber-error"
                            role="alert"
                        >
                            <AlertCircle className="w-3 h-3" />
                            <p className="text-xs">Your e-money Number is required</p>
                        </div>
                    )}
                </div>

                <div className="flex flex-col">
                    <label htmlFor="emoneyPin" className="text-[12px] font-semibold">e-Money PIN</label>
                    <input
                    id={'emoneyPin'}
                    {...register('shippingInfo.emoneyPin', {
                        required: true,
                        })}
                    type="number"
                    placeholder="6891"
                    aria-invalid={errors.shippingInfo?.emoneyPin ? "true" : "false"}
                    aria-describedby="emoneyPin-error"
                    className="placeholder:font-semibold placeholder:text-black/40 mt-1 p-3 md:p-5 border border-[#CFCFCF] rounded-md focus:ring-primary focus:border-primary outline-none"
                    />
                    {errors.shippingInfo?.emoneyPin && (
                        <div
                            className="flex items-center gap-1 mt-2 text-red-600 "
                            id="emoneyPin-error"
                            role="alert"
                        >
                            <AlertCircle className="w-3 h-3" />
                            <p className="text-xs">Your e-money Pin is required</p>
                        </div>
                    )}
                </div>
                </div>
                }
            </section>
    </form>

    <Summary
    tax={tax}
    shipping={shipping}
    cart={cart} 
    isSubmitting={isSubmitting}
     />
    </>
    
)
}