/*
Made by: Mohammed Khaled, T#6.
*/

export default function Home() {
  return (
    <div className="relative mt-24 flex">
      <div className="w-7/12 mx-auto">
            <div className="relative px-4 sm:px-6 lg:px-8 text-left">
              <h1 className="text-4xl font-bold text-PWhite sm:text-5xl md:text-6xl w-2/3">
                <span>The next generation of</span>{' '}
                <span className="text-Gold">easy</span>{' '}
                <span>online payments</span>
              </h1>
              <div className="mt-16 flex justify-start">
                <div className="rounded-md">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-md text-primary bg-Gold md:py-4 md:text-lg md:px-10"
                  >
                    Join now!
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-Midnight text-base font-semibold rounded-md text-PWhite md:py-4 md:text-lg md:px-10"
                  >
                    Download App
                  </a>
                </div>
              </div>
              <div className="text-PWhite text-lg mt-16 flex">
              <span className="ml-4 font-semibold">Trusted by More than <br /> <span className="text-Gold font-bold lg:text-2xl">120,000</span> Companies </span>
              <span className="border-dashed border-l font-bold ml-4 pl-4">120k <p className="font-normal">Customers</p></span>
              <span className="border-dashed border-l font-bold ml-4 pl-4">40k <p className="font-normal">Total Downloads</p></span>
              </div>
            </div>


      </div>
      <div className="w-5/12">
        <img
          className="w-full h-full"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
        />
      </div>
    </div>
  )
}