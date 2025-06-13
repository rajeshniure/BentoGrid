import img1 from './assets/images/1.webp';
import img2 from './assets/images/2.webp';
import img3 from './assets/images/3.webp';
import img4 from './assets/images/4.webp';
import img5 from './assets/images/5.webp';
import img6 from './assets/images/6.webp';
import img7 from './assets/images/7.webp';
import img8 from './assets/images/8.webp';

function App() {
  return (
    <div className="h-screen w-full overflow-hidden bg-gray-100">
      <div className="h-full w-full overflow-auto p-4 md:p-6 lg:p-8">
        <div className="mx-auto h-[90%] max-w-5xl">
          
          <div className="grid h-full grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-10 lg:gap-4">
            
            {/* Box 1 */}
            <div className="flex item-center justify-center flex-col gap-3 rounded-2xl bg-orange-100 p-4 lg:col-span-1 lg:row-span-5 lg:gap-4 lg:p-6">
              <h1 className="text-xl leading-none md:text-2xl lg:text-4xl ">
                Create and schedule content{' '}
                <i className="text-purple-600">quicker.</i>
              </h1>
              <div className="">
                <img className="h-full w-full object-contain pt-4" src={img4} alt="Content creation" />
              </div>
            </div>

            {/* BOx 2 */}
            <div className="flex flex-col gap-3 rounded-2xl bg-purple-500 p-4 text-white lg:col-span-2 lg:row-span-4 lg:gap-4 lg:p-8">
              <h1 className="text-center text-2xl leading-tight md:text-3xl lg:text-6xl">
                Social Media <span className="text-yellow-400">10x</span>{' '}
                <span className="block"> <i>Faster </i> with AI</span>
              </h1>
              <div className="">
                <img className="mx-auto h-full w-[35%] object-contain" src={img5} alt="Social media growth" />
              </div>
              <p className="text-center text-xl">Over 4,000 5-star reviews</p>
            </div>

            {/* Box 3 */}
            <div className="flex flex-col gap-3 rounded-2xl bg-purple-200 p-4 lg:col-span-1 lg:row-span-7 lg:gap-4 ">
              <h1 className="text-xl leading-none md:text-2xl lg:text-3xl lg:pl-3 lg:pt-5">
                Schedule to Social media.
              </h1>
              <div className="overflow-hidden ">
                <img className="h-full max-w-85 object-contain lg:pl-3" src={img8} alt="Social media scheduling" />
              </div>
              <p className="text-md leading-tight lg:pl-3">
                Optimize post timings to publish content at the perfect time for your audience
              </p>
            </div>

            {/* Box 4 */}
            <div className="flex flex-col gap-3 rounded-2xl bg-white p-4 lg:col-span-1 lg:row-span-3 lg:gap-4 lg:p-6">
              <div className="">
                <img className="h-full w-full object-contain" src={img7} alt="Account management" />
              </div>
              <h1 className="text-lg leading-none md:text-xl lg:text-3xl">
                Manage multiple accounts and platforms
              </h1>
            </div>

            {/* Box 5 */}
            <div className="flex flex-col gap-3 rounded-2xl bg-yellow-400 p-4 lg:col-span-1 lg:row-span-3 lg:gap-3 lg:p-5">
              <h1 className="text-lg leading-none md:text-xl lg:text-3xl">
                Maintain a consistent posting schedule
              </h1>
              <div className="">
                <img className="h-full w-full object-contain" src={img3} alt="Posting schedule" />
              </div>
            </div>

            {/* Box 6 */}
            <div className="flex flex-col gap-3 rounded-2xl bg-yellow-400 p-4 lg:col-span-1 lg:row-span-5 lg:gap-4 lg:p-6">
              <h1 className="text-lg font-bold leading-none md:text-xl lg:text-4xl">
                Write your content using AI
              </h1>
              <div className="flex-grow">
                <img className="h-full w-full object-contain" src={img1} alt="AI writing" />
              </div>
            </div>

            {/* Box 7 */}
            <div className="flex flex-col gap-3 rounded-2xl bg-white p-4 lg:col-span-1 lg:row-span-3 lg:gap-4 lg:p-7">
              <h1 className="text-3xl md:text-4xl lg:text-6xl">&gt;56%</h1>
              <p className="text-gray-600">faster audience growth</p>
              <div className="flex-grow">
                <img className="h-full w-[75%] object-contain" src={img2} alt="Growth statistics" />
              </div>
            </div>

            {/* Box 8 */}
            <div className="rounded-2xl bg-purple-500 p-4 lg:col-span-2 lg:row-span-3 lg:p-6">
              <div className="flex h-full items-center gap-4 lg:gap-6">
                <div className="">
                  <img className="h-full w-full object-contain" src={img6} alt="Follower growth" />
                </div>
                <h1 className="text-lg  leading-none text-white md:text-xl lg:text-4xl">
                  Grow followers with non-stop content
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;