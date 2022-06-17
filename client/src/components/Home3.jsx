/*
Made by: Mohammed Khaled, T#6.
*/

export default function Home3() {
  return (
    <div className="mt-32 relative">
      <div className="flex flex-1 justify-center">
        <img
          className="sm:block hidden h-56 w-1/2 sm:h-72 md:h-96 lg:h-full"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt="Our phone app features!"/>

        <div className="relative sm:w-1/2 w-3/4 sm:ml-16 lg:pb-28 xl:pb-32">
          <div className="text-Gold text-base">KEY FEATURES</div>
          <div className="text-PWhite text-3xl">Our main features include</div>
          <div className="text-PWhite text-xl divide-y divide-Midnight border-b border-Midnight">
            <div className="pt-1 pb-1">Wireless Payments</div>
            <div className="pt-1 pb-1">Quick Account Access</div>
            <div className="pt-1 pb-1">Hassle-Free Payment</div>
            <div className="pt-1 pb-1">Online credit services</div>
            <div className="pt-1 pb-1">Simple Order Submit</div>
          </div>
        </div>
      </div>
    </div>
  )
}