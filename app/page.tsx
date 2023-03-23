/* eslint-disable react/no-unescaped-entities */
import { BoltIcon, ExclamationTriangleIcon, SunIcon } from "@heroicons/react/24/outline";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="md:text-5xl text-2xl font-bold md:mb-20 mb-3">ChatGPT</h1>

      <div className="flex md:flex-row flex-col md:space-x-2 space-x-0 space-y-2 md:space-y-0 text-center">
        <div>
          <div className="flex flex-col items-center jsutify-center mb-2">
            <SunIcon className="h-8 w-8" />
            <h2>Example</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText md:text-md text-xs">"Explain something to me"</p>
            <p className="infoText md:text-md text-xs">
              "What is the difference between a dog and a cat?"
            </p>
            <p className="infoText md:text-md text-xs">"What is the color of the sun?"</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center jsutify-center mb-2">
            <BoltIcon className="h-8 w-8" />
            <h2>Capabilities</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText md:text-md text-xs">
              Change the ChatGPT Model to use
            </p>
            <p className="infoText md:text-md text-xs">
              Messages are stored in Firebase's Firestore
            </p>
            <p className="infoText md:text-md text-xs">
              Hot Toast Notifications when ChatGPT is thinking!
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center jsutify-center mb-2">
            <ExclamationTriangleIcon className="h-8 w-8" />
            <h2>Limitations</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText md:text-md text-xs">
              May occasionally generate incorrect information
            </p>
            <p className="infoText md:text-md text-xs">
              May occasionally produce harmful instructions or biased content
            </p>
            <p className="infoText md:text-md text-xs">
              Limited knowledge of world and events after 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
