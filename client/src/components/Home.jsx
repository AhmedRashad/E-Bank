import heroImage from "../images/hero.jpg";

/*
Made by: Mohammed Khaled, T#6.
*/

export default function Home() {
  return (
    <div id="About"className="relative mt-24 flex flex-col sm:flex-row-reverse">
      <div className="sm:w-5/12">
        <img
          className="w-full h-full"
          src={heroImage}
          alt=""
        />
      </div>
      <div className="sm:w-7/12">
            <div className="relative px-4 sm:px-6 lg:px-8 text-left">
              <h1 className="text-4xl font-semibold text-PWhite sm:text-5xl lg:text-7xl w-11/12 sm:w-2/3">
                <span>The next generation of</span>{' '}
                <span className="text-Gold">easy</span>{' '}
                <span>online payments</span>
              </h1>
              <div className="mt-16 flex justify-center">

                  <a
                    href="/signup"
                    className="px-8 py-3 border border-transparent text-base font-semibold rounded-md text-primary bg-Gold md:py-4 md:text-lg md:px-10"
                  >
                    Join now!
                  </a>

                  <a
                    href="#"
                    className="ml-2 sm:ml-4 px-8 py-3 border border-Midnight text-base font-semibold rounded-md text-PWhite md:py-4 md:text-lg md:px-10"
                  >
                    Download App
                  </a>
              </div>
              <div id="Features" className="text-PWhite text-lg mt-16 flex">
              <span className="ml-4 font-semibold">Trusted by More than <br /> <span className="text-Gold font-bold lg:text-2xl">120,000</span> Companies </span>
              <span className="border-dashed border-l font-bold ml-4 pl-4">120k <p className="font-normal">Customers</p></span>
              <span className="border-dashed border-l font-bold ml-4 pl-4">40k <p className="font-normal">Total Downloads</p></span>
              </div>
            </div>


      </div>
    </div>
  )
}