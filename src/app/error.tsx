'use client'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: Readonly<{
  error: Error & { digest?: string }
  reset: () => void
}>) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <h2 className="text-2xl font-semibold text-red-600 mb-2">Something went wrong</h2>
      <p className="text-sm text-gray-600 mb-6">
          {!navigator.onLine
    ? "Please check your internet connection and try again."
    : error.message || "An unexpected error occurred. Please try again."}
      </p>
      <div className="">
        <button
          onClick={reset}
          className='mt-8 cursor-pointer bg-primary text-white px-6 py-3 uppercase tracking-widest text-sm hover:bg-primary-light transition'
        >
          Try again
        </button>
      </div>
     
    </div>
  )
}
