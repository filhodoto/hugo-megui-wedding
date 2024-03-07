import Church from '@/assets/icons/Church';
import Parking from '@/assets/icons/Parking';
import Party from '@/assets/icons/Party';
import { HomeIcon, MapIcon, MapPinIcon } from '@heroicons/react/24/outline';
const photo = new URL('../assets/images/day_1.jpg', import.meta.url).href;
const photo_two = new URL('../assets/images/day_2.jpg', import.meta.url).href;

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

interface Location {
  event: string;
  location: string;
  time?: string;
  link: string;
  address: string;
  icon: typeof Parking;
}

const locations: Location[] = [
  {
    event: 'Cerimónia',
    location: 'Igreja Matriz / Paroquial de Colares',
    address: 'Largo Dr. Carlos França, 2705-192 Colares',
    time: '14h',
    link: 'https://maps.app.goo.gl/iMd3UH8TwJaSgtHJ9',
    icon: Church,
  },
  {
    event: 'Cocktail e Jantar',
    location: 'Quinta de São Tadeu',
    address: 'Rua Carlos Massett, 2710-221 Sintra',
    link: 'https://maps.app.goo.gl/P8mh7THzE61Nva4V9',
    icon: Party,
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
        <div className="bg-white p-10 col-span-full flex flex-col items-center sm:col-span-1">
          <div className="flex flex-col text-center items-center mb-5 sm:mb-5">
            <MapIcon className="h-20 w-20 mb-2 text-action-400" />
            <h3 className="text-2xl font-semibold leading-7 ">Localização</h3>
          </div>
          <ul className="divide-y w-full xl:w-auto">
            {locations.map((item) => {
              const { event, location, time, link, address } = item;
              return (
                <li key={event} className="py-7">
                  <div className="flex items-end pb-3">
                    <item.icon className="h-12 w-12 fill-current mr-2 text-action-400" />
                    <p className="text-2xl">{event}</p>
                  </div>
                  <p className="text-xl">{location}</p>
                  {time && <p className="text-lg pt-1">Horas: {time}</p>}
                  <a href={link} target="_blank" className="mt-2 flex">
                    <MapPinIcon className="h-5 w-5 mr-1" />
                    {address}
                  </a>
                </li>
              );
            })}
          </ul>
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
