import Image from "next/image";
import CartmanBanner from "/public/cartman-banner.png"
import ThePlan from "/public/plan.png"
import RedskinsBanner from "/public/redskins-banner.jpeg"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between sm:p-12 p-4 text-black">
      <div className="text-4xl sm:py-12 py-6">
        Washington Redskins Startup Company
      </div>
      <div className="w-full bg-white rounded-xl shadow-lg px-4 py-6">
        {/* <div className="flex sm:flex-row flex-col"> */}
        <div className="grid sm:grid-cols-2 grid-cols-1">
            <div className="w-full">
              <div className="w-full h-96 relative">
                <Image src={RedskinsBanner} fill alt="project banner" className="object-cover rounded-md" />
              </div>
              <div className="flex flex-row sm:gap-3 gap-1 font-semibold justify-end">
                <div>
                  Share:
                </div>
                <div>
                  Twitter
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:px-3 w-full py-2 sm:py-0 row-span-2">
              <div className="flex flex-col">
                <div className="text-3xl">
                  2254
                </div>
                <div>
                  backers
                </div>
              </div>

              <div className="flex flex-col">
                <div className="text-3xl">
                  $23,672
                </div>
                <div>
                  pledged of $1000 goal
                </div>
              </div>

              <div className="flex flex-col">
                <div className="text-3xl">
                  14
                </div>
                <div>
                  days to go
                </div>
              </div>

              <div className="bg-blue-400 w-full h-10 rounded-md p-2 m-auto">
                <div className="text-white font-bold">
                  Back this project
                </div>
              </div>

              <div>
                <div className="max-w-96 h-64 relative m-auto">
                  <Image src={CartmanBanner} fill alt="cartman banner call us" />
                </div>
                <div className="max-w-96 h-64 relative m-auto">
                  <Image src={ThePlan} fill alt="cartman banner call us" />
                </div>
              </div>


            </div>
            <div className="flex flex-col grow-1 gap-3">

              <div>
                The Washington Redskins we will do absolutely NOTHING for you! Read to find out how!
              </div>
              <div className="text-3xl">
                Mission Statement
              </div>
              <div>
                <p>
                  Here with the Washington Redskins we will do absolutely nothing for you.
                </p>
                <br />
                <p>
                By pledging us the money to do absolutely nothing, we will give you exactly what we promise. Nothing. We will even tell you to go screw yourselves. Tis is our commitment.
                </p>
              </div>
              <div className="text-3xl">
                Rewards
              </div>
              <div>
                <p>
                  You can take a look at some of our reward levels to see and choose what is a good fit for you
                </p>
              </div>
              <div className="text-3xl">
                Risks
              </div>
              <div>
                <p>
                  Absolutely nothing.
                </p>
              </div>
              <div className="text-3xl">
                FAQ
              </div>
              <div>
                <p>
                  For any questions and comments please contact us at 555-5467
                </p>
              </div>
            </div>
        </div>
      </div>

    </main>
  );
}
