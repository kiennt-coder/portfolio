"use client";

import { useEffect } from "react";

export default function Error({
  error,
  // reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="h-screen w-full bg-[url('/images/internal-server-error.jpg')] bg-no-repeat bg-center bg-contain">
      {/* <button
        className="btn btn-primary"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button> */}
    </div>
  )
}
