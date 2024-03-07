import Parking from '@/assets/Icons/Parking';
import { HomeIcon, MapIcon } from '@heroicons/react/24/outline';
const photo = new URL('../assets/images/day_1.jpg', import.meta.url).href;
const photo_two = new URL('../assets/images/day_2.jpg', import.meta.url).href;

const mapsLink = 'https://maps.app.goo.gl/P8mh7THzE61Nva4V9';

const hotels = [
  {
    name: 'Hotel Vila Galé Sintra',
    code: 'Ana&Hugo',
    description:
      'Código para 10% de desconto (apenas para a noite de 27/28 de julho)',
    link: 'https://www.vilagale.com/br/hoteis/costa-de-lisboa/vila-gale-sintra',
  },
  {
    name: 'NH Sintra Centro',
    code: 'NHTSINWED',
    description:
      'Código para 15% de desconto (mínimo 2 noites entre 25 e 29 de julho)',
    link: 'https://www.nh-hotels.com/pt/hotel/nh-sintra',
  },
  {
    name: 'Pestana Sintra Golf',
    code: 'SJRO12FKL3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    link: 'https://www.pestana.com/pt/hotel/pestana-sintra',
  },
  {
    name: 'Sintra Boutique Hotel',
    code: 'SJRO12FK',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    link: 'https://sintraboutiquehotel.com/',
  },
];

const Day = () => {
  return (
    <div id="day" className="py-20 md:py-26 relative min-h-lvh">
      <article className="text-pretty sm:text-center px-6 md:px-8 ">
        <h2 className="heading-2 ">O Dia</h2>
        <p className="text-lg sm:text-xl ">
          Para que estejam o mais relaxados possível num dia que tem tudo para
          ser único
        </p>
      </article>
      <img src={photo} alt="rsvp" className="mt-12 min-w-full lg:hidden" />

      {/* Info Grid */}
      <div className="grid grid-cols-2 gap-8 lg:gap-12 lg:grid-cols-3 min-h-[60vh] px-8 py-12 lg:mt-12 bg-action-50/75">
        {/* Parking */}
        <div className="bg-white p-10 col-span-full	 sm:col-span-1">
          <div className="flex flex-col items-center  mb-5 sm:mb-8">
            <Parking className="h-20 w-20 mb-2 fill-current text-action-400" />
            <h3 className="text-2xl font-semibold leading-7 ">
              Estacionamento
            </h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            alias sequi natus tempora adipisci eum hic dicta.
          </p>
        </div>
        {/* Location */}
        <div className="bg-white p-10 col-span-full	 text-center flex flex-col items-center sm:col-span-1">
          <div className="flex flex-col items-center mb-5 sm:mb-8">
            <MapIcon className="h-20 w-20 mb-2 text-action-400" />
            <h3 className="text-2xl font-semibold leading-7 ">Localização</h3>
          </div>
          <p className="text-3xl">Quinta de São Tadeu</p>
          <a href={mapsLink} target="_blank" className="mt-3 italic">
            R. Carlos Massett, 2710-221 Sintra
          </a>
          <hr className="border border-primary-200 w-full max-w-12 mt-6 mb-5" />
          <p className="text-xl pb-1">
            27 de Julho de 2024 <br />
            14h
          </p>
          <a className="inline-block" target="_blank" href={mapsLink}>
            <button className="block rounded-md bg-action-400 px-3.5 py-2.5 mt-8 text-center font-semibold text-white shadow-sm hover:bg-action-500 ">
              Ver no Maps
            </button>
          </a>
        </div>
        {/* Alojamento */}
        <div className="bg-white p-10 col-span-full lg:col-span-1">
          <div className="flex flex-col items-center t mb-5 sm:mb-8">
            <HomeIcon className="h-20 w-20 mb-2 text-action-400" />
            <h3 className="text-2xl font-semibold leading-7 ">Alojamento</h3>
          </div>
          <p>
            Deixamos aqui as nossas sugestões de hotéis com código de desconto
            que poderão utilizar ao fazer a reserva.
          </p>

          <ul className="grid divide-y mt-8">
            {hotels.map(({ name, link, code, description }) => {
              return (
                <li
                  key={code}
                  className="flex items-center justify-between py-5"
                >
                  <div className="pr-3">
                    <a href={link} className="inline-block text-lg pb-1">
                      {name}
                    </a>
                    <p className="text-sm">{description}</p>
                  </div>
                  <span className="inline-block p-2 rounded border text-action-400 border-action-400">
                    {code}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* Bottom Image Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[60vh]">
        <div
          className="hidden lg:block bg-cover bg-no-repeat bg-top h-full w-full"
          style={{ backgroundImage: `url(${photo})` }}
        ></div>
        <img src={photo_two} alt="rsvp" className="min-w-full lg:hidden" />
        <div
          className="hidden lg:block bg-cover bg-no-repeat bg-top h-full w-full"
          style={{ backgroundImage: `url(${photo_two})` }}
        ></div>
      </div>
    </div>
  );
};

export default Day;
