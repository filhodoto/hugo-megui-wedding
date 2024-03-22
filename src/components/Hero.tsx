import CountDown from '@/components/CountDown';

const quintaImgUrl = new URL(
  '../assets/images/quinta_aguarela.jpg',
  import.meta.url
).href;
const headingText = new URL('../assets/images/megs_hugo.svg', import.meta.url)
  .href;

export default function Hero() {
  return (
    <div id="initial" className="pt-20 md:pt-32 md:pb-20 text-center relative">
      <div className="z-10 px-6 py-6 md:py-12 text-center">
        <img
          src={headingText}
          alt="Margarida & Hugo"
          className="md:max-w-7xl mx-auto z-0 w-full"
        />
        <p className="font-heading pt-5 text-xl md:text-3xl xl:text-4xl text-headings">
          27 de Julho de 2024
        </p>
        <span className="max-w-20 sm:max-w-60 h-px sm:h-0.5 my-5 sm:my-10 block m-auto bg-headings opacity-55"></span>
        <p className="font-heading pb-2 font-medium text-2xl sm:text-4xl md:text-4xl xl:text-5xl text-headings">
          QUINTA DE SÃO TADEU
        </p>
      </div>
      {/* TODO:: Clean this. Probably no need for image and div */}
      <img
        src={quintaImgUrl}
        alt="Quinta Aquarela"
        className="lg:hidden md:max-w-4xl mx-auto z-0 w-full"
      />
      <div
        className="hidden lg:block bg-contain bg-no-repeat bg-center h-full min-h-lvh md:min-h-[50vh] lg:min-h-lvh"
        style={{ backgroundImage: `url(${quintaImgUrl})` }}
      ></div>
      <CountDown />
    </div>
  );
}
