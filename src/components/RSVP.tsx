import Form from '@components/Form';
const foto = new URL('../assets/images/rsvp.jpg', import.meta.url).href;

export default function RSVP() {
  return (
    <div
      id="rsvp"
      className="grid lg:grid-cols-2 lg:grid-flow-col gap-x-11 py-20 md:py-26 relative m-auto"
    >
      {/* For landscape */}
      <img src={foto} alt="our history" className="pt-9 min-w-full lg:hidden" />
      <div
        className="text-pretty text-lg px-6 md:px-8 xl:pl-20 border bg-cover bg-no-repeat bg-top h-full w-full"
        style={{ backgroundImage: `url(${foto})` }}
      ></div>

      <div className="px-6 md:px-8 md:pl-0 xl:pr-20">
        <h2 className="heading-2">RSVP</h2>
        <p className="text-lg max-w-xl sm:text-xl ">
          Queremos muito contar convosco neste nosso dia, esperamos as vossas
          confirmações até dia{' '}
          <span className="sm:text-2xl font-bold text-action-400">
            1 de Junho de 2024
          </span>
          .
        </p>
        <Form />
      </div>
    </div>
  );
}
