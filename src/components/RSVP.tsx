import Form from '@components/Form';

export default function RSVP() {
  return (
    <div
      id="rsvp"
      className="grid md:grid-flow-col gap-x-8 py-20 md:py-26 px-6 relative md:px-10 m-auto max-w-[90rem]"
    >
      <article className="text-pretty">
        <h2 className="heading-2">RSVP</h2>
        <p className="text-lg max-w-xl sm:text-xl ">
          Queremos muito contar convosco neste nosso dia, esperamos as vossas
          confirmações até dia{' '}
          <span className="sm:text-2xl font-bold text-action-400">
            1 de Junho de 2024
          </span>
          .
        </p>
      </article>
      <Form />
    </div>
  );
}
