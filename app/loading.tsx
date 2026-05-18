export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black">
      <div className="flex flex-col items-center">
        <div className="relative h-24 w-24 animate-pulse">
          <img
            src="/images/logo.png"
            alt="GAMI"
            className="h-full w-full object-contain"
          />
        </div>

        <p className="mt-8 text-xs tracking-[0.35em] text-amber-300">
          GAMI INC.
        </p>

        <h1 className="mt-3 text-2xl font-semibold tracking-[0.08em] text-white">
          未来より先に動く。
        </h1>

        <div className="mt-8 h-[2px] w-40 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-amber-400" />
        </div>
      </div>
    </main>
  )
}
