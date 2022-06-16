import { UsersIcon, LockClosedIcon, FolderOpenIcon } from '@heroicons/react/outline';
/*
Made by: Mohammed Khaled, T#6.
*/

export default function Home2() {
  return (
    <div className="mt-32 relative">
          <main className="text-center w-screem flex content-center justify-center flex-col">
              <span className="text-3xl font-bold text-PWhite inline-block mb-4">Awesome App Features</span>
              <span className="text-base text-PWhite inline-block">A Private Limited is the most popular type of partnership Malta.<br />The limited liability is, in fact, the only type of company allowed.</span>
              <div className="mt-5 sm:mt-8 flex sm:flex-row flex-col flex-1 justify-center content-center">
                  <div className="flex flex-col mx-8 sm:mr-0 mb-4 justify-center py-3 border border-Midnight rounded-3xl text-base font-semibold text-PWhite md:py-4 md:text-lg md:px-10">
                    <UsersIcon className="sm:h-16 h-8 w-8 sm:w-16 text-Gold block"/>
                      <span className="font-semibold mb-2">User Friendly!</span>
                      <span className="text-sm">From Design to usability, these apps have proven their worth to our experts and have captured their interest.</span>
                      </div>
                  <div className="flex flex-col mx-8 sm:mr-0 mb-4 justify-center py-3 border border-transparent rounded-3xl text-base font-semibold text-PWhite bg-PGrey md:py-4 md:text-lg md:px-10">
                    <LockClosedIcon className="sm:h-16 h-8 w-8 sm:w-16 text-Gold block"/>
                    <span className="font-semibold mb-2">Privacy Protected</span>
                    <span className="text-sm">On most iOS devices you don't have to sign in with your Google account, although some services may be limited.</span>
                  </div>
                  <div className="flex flex-col mx-8 mb-4 justify-center py-3 border border-Midnight rounded-3xl text-base font-semibold text-PWhite md:py-4 md:text-lg md:px-10">
                  <FolderOpenIcon className="sm:h-16 h-8 w-8 sm:w-16 text-Gold block"/>
                  <span className="font-semibold mb-2">Lifetime Updates</span>
                  <span className="text-sm">We always update our app to fulfil all your banking needs, if you need any help you are encouraged to message support!</span>
                  </div>
              </div>
          </main>
    </div>
  )
}