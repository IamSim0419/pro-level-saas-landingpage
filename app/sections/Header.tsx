export default function Header() {
  return (
    <header className="sticky top-0 bg-zinc-900/50 backdrop-blur-lg">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-24 md:h-28">
          <div>
            <img src="/assets/icons/logo.svg" alt="Blockforge Logo" />
          </div>

          <div className="flex items-center gap-4">
            <button className="relative bg-fuchsia-500/20 px-4 py-2 font-extrabold uppercase text-sm tracking-wide font-heading hidden md:block">
              <div className="absolute inset-0 outline outline-2 -outline-offset-2 outline-fuchsia-500 "
              style={{
                WebkitMaskImage: 'linear-gradient(225deg, transparent, transparent 10px, black 10px)',
              }}
              />
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 right-0 text-fuchsia-500"
              >
                <path
                  d="M0 1H12.2667L23 11.7333V24"
                  stroke="currentColor"
                  strokeWidth="2"
                ></path>
              </svg>
              <span className="leading-6">Get Started</span>
            </button>

            <div className="size-10 relative">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-5 h-0.5 bg-zinc-300 -translate-y-1" />
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-5 h-0.5 bg-zinc-300 translate-y-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
