import Form from '@components/Form';
const photo = new URL('../assets/images/rsvp.jpg', import.meta.url).href;

export default function RSVP() {
  return (
    <div
      id="rsvp"
      className="grid lg:grid-cols-2 lg:grid-flow-col gap-x-11 lg:pt-40 relative m-auto min-h-lvh"
    >
      {/* For landscape */}
      <img src={photo} alt="rsvp" className="min-w-full lg:hidden" />
      <div
        className="hidden lg:block px-6 md:px-8 xl:pl-20 bg-cover bg-no-repeat bg-top h-full w-full"
        style={{ backgroundImage: `url(${photo})` }}
      ></div>

      <div className="px-6 md:px-8 lg:pl-0 xl:pr-20">
        <h2 className="heading-2">RSVP</h2>
        <p className="text-lg max-w-xl sm:text-xl ">
          Queremos muito contar convosco neste nosso dia! Esperamos as vossas
          confirmações até ao dia{' '}
          <span className="sm:text-2xl font-bold text-action-400">
            1 de Junho de 2024
          </span>
          , utilizando o formulário abaixo, ou através dos nossos contactos.
        </p>
        <Form />
      </div>
    </div>
  );
}
