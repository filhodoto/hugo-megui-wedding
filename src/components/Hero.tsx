import CountDown from '@/components/CountDown';

const quintaImgUrl = new URL(
  '../assets/images/quinta_aguarela.png',
  import.meta.url
).href;

export default function Hero() {
  return (
    <div id="initial" className="pt-20 md:pt-32 text-center relative">
      <div className="z-10 px-6 py-6 md:py-12">
        <h1 className="text-5xl font-bold leading-tight sm:text-7xl py-5">
          Margarida & Hugo
        </h1>
        <p className="text-3xl max-w-3xl mx-auto sm:text-5xl ">
          27 de Julho de 2024
        </p>
      </div>
      {/* TODO:: Clean this. Probably no need for image and div */}
      <img
        src={quintaImgUrl}
        alt="Quinta Aquarela"
        className="lg:hidden md:max-w-4xl mx-auto z-0 w-full"
      />
      <div
        className="hidden lg:block border bg-contain bg-no-repeat bg-center h-full min-h-lvh md:min-h-[50vh] lg:min-h-lvh"
        style={{ backgroundImage: `url(${quintaImgUrl})` }}
      ></div>
      <CountDown />
    </div>
  );
}
