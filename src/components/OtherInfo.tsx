import Suite from '@/assets/Icons/Suit';
import { CloudArrowUpIcon, GiftIcon } from '@heroicons/react/24/outline';

const foto = new URL('../assets/images/other_info.jpg', import.meta.url).href;

const features = [
  {
    name: 'Presente de Casamento',
    description:
      'Caso queiram contribuir para continuarmos as nossas aventuras por esse mundo fora, podem fazê-lo através deste IBAN. Muito obrigado! PT50003300000007273370505',
    icon: GiftIcon,
  },
  {
    name: 'Dress code',
    description: 'Formal',
    icon: CloudArrowUpIcon,
  },
];

const OtherInfo = () => {
  return (
    <div
      id="other_info"
      className="flex-col py-20 md:py-26 relative m-auto px-6 md:px-8"
    >
      <h2 className="heading-2">Outras Informações</h2>

      <div className="grid md:grid-flow-col gap-x-8 py-20 md:py-26 px-6 relative md:px-10 m-auto border-red-500 border">
        <div className="mb-6">
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
          <p className="mt-4 text-xl font-bold leading-7 px-4 py-2 inline-block rounded-lg text-action-400 border border-action-200">
            PT50003300000007273370505
          </p>
        </div>
        <div className="mb-8">
          <Suite className="h-20 w-20 mb-6 text-action-400" />
          <div className="text-2xl font-semibold leading-7">Dress Code</div>
          <p className="mt-2 text-lg leading-7">Formal</p>
        </div>
      </div>

      {/* <img src={foto} alt="other info" /> */}
      {/* <div
        className="flex-1 bg-cover bg-no-repeat bg-top h-full w-full min-h-[50vh]"
        style={{ backgroundImage: `url(${foto})` }}
      ></div> */}
    </div>
  );
};

export default OtherInfo;
