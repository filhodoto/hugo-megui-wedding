import CountDown from '@/components/CountDown';

const quintaImgUrl = new URL(
  '../assets/images/quinta_aguarela.jpg',
  import.meta.url
).href;
const headingText = new URL('../assets/images/megs_hugo.svg', import.meta.url)
  .href;

export default function Hero() {
  return (
    <div
      id="initial"
      className="pt-20 md:pt-32 md:pb-20 text-center relative border"
    >
      <div className="z-10 px-6 py-6 md:py-12 text-center">
        <img
          src={headingText}
          alt="Margarida & Hugo"
          className="md:max-w-7xl mx-auto z-0 w-full"
        />
        <p className="text-2xl sm:text-4xl md:text-5xl pt-5 pb-2 md:pb-6 text-headings">
          27 de Julho de 2024
        </p>
        <p className="text-lg md:text-2xl text-headings">Quinta de São Tadeu</p>
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
