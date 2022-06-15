import android from "../images/android.svg";
import iOS from "../images/iOS.svg";
/*
Made by: Mohammed Khaled, T#6.
*/
export default function Home4() {
    return (
      <div className="mt-32 mx-16 relative bg-PGrey rounded-3xl">
        <div className="flex flex-1">
            <div className="w-1/2 ml-12 lg:ml-16 mt-12 lg:mt-16 mr-4 flex flex-col">
            <div className="text-Gold text-sm">DOWNLOAD OUR APP</div>
            <div className="text-PWhite text-3xl lg:text-4xl mt-2 lg:mt-4">Download our app to start your banking journey today!</div>
            <div className="text-PWhite text-sm lg:text-base mt-2 lg:mt-4">Features like bank loans and credit unions can help you get a home, car or pay for your education more easily.</div>
            <div className="flex w-3/4 h-auto mt-4 lg:mt-8 mb-4 justify-around">
            <a href="#" title="Download on App Store!">
            <img src={iOS} alt="App Store Download Button"/>
            </a>
            <a href="#" title="Download on Play Store!">
            <img src={android} alt="Play Store Download Button"/>
            </a>
            </div>
            </div>
            <img
          className="h-full w-1/2"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt="Our phone app features!"/>
        </div>
      </div>
    )
  }