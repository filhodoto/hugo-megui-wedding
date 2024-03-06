import {
  CalendarDaysIcon,
  HomeIcon,
  MapIcon,
} from '@heroicons/react/24/outline';

const Day = () => {
  return (
    <div id="day" className="py-20 md:py-26 relative bg-action-50/75 min-h-lvh">
      <article className="text-pretty text-center md:px-10 ">
        <h2 className="heading-2">O dia</h2>
        <p className="text-lg sm:text-xl ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum alias
          sequi natus tempora adipisci eum hic dicta.
        </p>
      </article>
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 min-h-[50vh] mt-12 px-8">
        <div className="bg-white p-10">
          <div className="flex flex-col items-center text-action-400 mb-5">
            <MapIcon className="h-20 w-20 mb-1" />
            <h3 className="text-2xl font-semibold leading-7">Estacionamento</h3>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            alias sequi natus tempora adipisci eum hic dicta.
          </p>
        </div>
        <div className="bg-white p-10 text-center">
          <div className="flex flex-col items-center text-action-400 mb-5">
            <MapIcon className="h-20 w-20 mb-1" />
            <h3 className="text-2xl font-semibold leading-7">Localização</h3>
          </div>
          <p className="text-xl">Quinta de São Tadeu</p>
          <a
            href="https://www.google.com/maps/place//data=!4m2!3m1!1s0xd1edae1b0a0dd59:0xda89e4256178f75c?sa=X&ved=2ahUKEwiyk5zbzd-EAxUSUqQEHXLLC8gQ4kB6BAgQEAA"
            className="href"
          >
            R. Carlos Massett, 2710-221 Sintra
          </a>
          <p className="text-2xl mt-5">14h</p>
        </div>
        <div className="bg-white p-10">
          <div className="flex flex-col items-center text-action-400 mb-5">
            <HomeIcon className="h-20 w-20 mb-1" />
            <h3 className="text-2xl font-semibold leading-7">Alojamento</h3>
          </div>

          <p>
            Temos algumas opções de Hoteis. Cada um tem um código de desconto
            que poderão utilizar
          </p>
        </div>
      </div>
    </div>
  );
};

export default Day;
