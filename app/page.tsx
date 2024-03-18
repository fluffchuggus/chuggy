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
        <div className="grid sm:grid-cols-2 grid-cols-1">
            <div className="w-full">
              <div className="w-full h-96 relative">
                {/* <Image src={RedskinsBanner} fill alt="project banner" className="object-cover rounded-md" /> */}
                <div className="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/924447524?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style={{
                  position:"absolute",
                  top:0,
                  left:0,
                  width:"100%",
                  height:"100%"
                  }} title="redskins-trailer"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
              </div>
              <div className="flex flex-row sm:gap-3 gap-1 font-semibold justify-end">
                <div>
                  Share:
                </div>
                <a href="https://twitter.com" className="cursor-pointer">
                <div className="underline">
                  Twitter
                </div>
                </a>
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

              <div className="flex flex-col w-full">
                <a href="https://x.com/SolRedkins" className="self-end underline" target="_blank">
                  Twitter
                </a>
                <a href="https://pump.fun">
                  <div className="text-white font-bold bg-blue-400/80 w-full h-20 rounded-md p-2 m-auto hover:bg-blue-400 transition-all duration-500 cursor-pointer flex flex-col items-center justify-center">
                    <div className="text-2xl">
                      Back this project
                    </div>
                  </div>
                </a>
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
