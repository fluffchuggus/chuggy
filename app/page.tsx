import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-12 text-black">
      <div className="text-4xl py-12">
        Washington Redskins Startup Company
      </div>
      <div className="w-full bg-white rounded-xl shadow-lg p-4">
        <div className="flex flex-row">
          <div className="flex flex-col grow-1 gap-3">
            <div className="w-[40rem] min-h-96 bg-black">
            </div>
            <div className="flex flex-row gap-3 font-semibold self-end">
              <div>
                Share:
              </div>
              <div>
                Facebook
              </div>
              <div>
                |
              </div>
              <div>
                Twitter
              </div>
              <div>
                |
              </div>
              <div>
                Pinterest
              </div>
            </div>
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
                For any questions and comments please contact us
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 px-3 w-full">
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

            <div className="bg-blue-400 w-full h-10 rounded-md p-2">
              <div className="text-white font-bold">
                Back this project
              </div>
            </div>

          </div>
        </div>
      </div>

    </main>
  );
}
