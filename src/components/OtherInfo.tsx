import Suite from '@/assets/Icons/Suit';
import { GiftIcon } from '@heroicons/react/24/outline';

const foto = new URL('../assets/images/outra.jpg', import.meta.url).href;

const OtherInfo = () => {
  return (
    <div
      id="other_info"
      className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 py-20 md:py-26 m-auto"
    >
      {/* Cell 1 */}
      <div className="px-6 md:px-8 md:pr-0 xl:pl-20">
        <h2 className="heading-2 sm:text-center mb-8 sm:mb-16">
          Outras Informações
        </h2>
        <div className="grid grid-cols-1 gap-12 sm:gap-6 md:grid-cols-2 mb-6 sm:text-center">
          <div className="flex flex-col sm:items-center sm:content-center">
            <GiftIcon
              className="h-20 w-20 mb-6 text-action-400"
              aria-hidden="true"
            />
            <div className="text-2xl font-semibold leading-7">
              Presente de Casamento
            </div>
            <p className="mt-2 text-lg leading-7">
              Caso queiram contribuir para continuarmos as nossas aventuras por
              esse mundo fora, podem fazê-lo através deste IBAN.
            </p>
            <p className="mt-2 text-lg leading-7">Muito obrigado!</p>
            <p className="mt-4 text-xl font-bold leading-7 tracking-wide text-action-400">
              PT50003300000007273370505
            </p>
          </div>
          <div className="flex flex-col sm:items-center sm:content-center">
            <Suite className="h-20 w-20 mb-6 text-action-400 fill-current" />
            <div className="text-2xl font-semibold leading-7">Dress Code</div>
            <p className="mt-2 text-lg leading-7">Formal</p>
          </div>
        </div>
      </div>

      {/* For landscape */}
      <img src={foto} alt="other info" className="pt-9 min-w-full lg:hidden" />
      <div className="hidden min-h-96 lg:block ">
        <div
          className="bg-cover bg-no-repeat h-full w-full"
          style={{ backgroundImage: `url(${foto})` }}
        ></div>
      </div>
    </div>
  );
};

export default OtherInfo;
