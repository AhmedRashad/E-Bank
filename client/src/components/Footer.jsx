import logo from "../logo.png";
/*
Made by: Mohammed Khaled, T#6.
*/


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Footer() {
  return (
    <footer className="p-4 bg-primary shadow md:px-6 md:py-8">
    <div className="sm:flex sm:items-center sm:justify-between">
        <span className="flex items-center mb-4 sm:mb-0">
            <img src={logo} className="mr-3 h-8" alt="eBank Logo" />
        </span>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-PWhite sm:mb-0">
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
            </li>
            <li>
                <a href="#" className="hover:underline">Contact</a>
            </li>
        </ul>
    </div>
    <hr className="my-6 border-Gold sm:mx-auto lg:my-8" />
    <span className="block text-sm text-PWhite sm:text-center">© 2022 eBank™. All Rights Reserved.
    </span>
</footer>
  )
}