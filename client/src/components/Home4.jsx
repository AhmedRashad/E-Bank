import android from "../images/android.svg";
import iOS from "../images/iOS.svg";
import phoneImage from "../images/phone.jpg";
/*
Made by: Mohammed Khaled, T#6.
*/
export default function Home4() {
    return (
      <div id="App"className="mt-32 mx-2 sm:mx-16 relative bg-PGrey rounded-3xl">
        <div className="flex flex-1">
            <div className="w-1/2 ml-2 sm:ml-12 lg:ml-16 mt-2 sm:mt-12 lg:mt-16 mr-2 sm:mr-4 flex flex-col">
            <div className="text-Gold text-xs sm:text-sm">DOWNLOAD OUR APP</div>
            <div className="text-PWhite sm:text-3xl lg:text-4xl mt-2 lg:mt-4">Download our app to start your banking journey today!</div>
            <span className="hidden sm:block text-PWhite text-sm lg:text-base mt-2 lg:mt-4">Features like bank loans and credit unions can help you get a home, car or pay for your education more easily.<span className="hidden lg:block"> eBank is the safer way to pay because we keep your financial information private. It isn’t shared with anyone else when you shop, so you don't have to worry about paying businesses and people you don't know. On top of that, we've got your back.</span></span>
            </div>
            <img
          className="h-full w-1/2 rounded-r-3xl"
          src={phoneImage}
          alt="Our phone app features!"/>
        </div>
        <div className="flex sm:ml-12 lg:ml-16 mt-2 pb-2 justify-around">
            <a href="#" title="Download on App Store!">
            <img src={iOS} alt="App Store Download Button"/>
            </a>
            <a href="#" title="Download on Play Store!">
            <img src={android} alt="Play Store Download Button"/>
            </a>
            </div>
      </div>
    )
  }