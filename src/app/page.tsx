import Image from "next/image";
import demo from './images/demo.png'

export default function Home() {
  return (
    <section className="w-full max-w-[1200px] px-[30px] mx-auto py-[7rem]">
      <h1 className="text-[56px] font-bold text-center mb-[4rem]">Brutalism Portfolio</h1>

      <div className="flex flex-wrap justify-center gap-[23px]">

        <div className="border-[4px] border-black w-auto">
          <Image width={500} height={600} className="w-[500px] border-b-[4px] border-black" alt="static demo" src={demo} />
          <a href="https://brutalism-portfolio.vercel.app/" target="_blank" className="flex py-[10px] px-[30px] text-[23px] font-medium">Static Demo</a>
        </div>

        <div className="border-[4px] border-black w-auto">
          <Image width={500} height={600} className="w-[500px] border-b-[4px] border-black" alt="Aos animation demo" src={demo} />
          <a href="https://brutalism-portfolio.vercel.app/" target="_blank" className="flex py-[10px] px-[30px] text-[23px] font-medium">AOS Animation Demo</a>
        </div>
      </div>
    </section>
  );
} 