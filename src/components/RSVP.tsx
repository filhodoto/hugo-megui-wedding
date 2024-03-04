import Form from '@components/Form';

export default function RSVP() {
  return (
    <div
      id="rsvp"
      className="grid md:grid-flow-col gap-x-8 py-20 md:py-26 px-6 relative md:px-10 m-auto max-w-[90rem]"
    >
      <article className="text-pretty">
        <h2 className="text-3xl font-bold leading-tight sm:text-5xl py-5">
          RSVP
        </h2>
        <p className="text-lg max-w-xl sm:text-xl ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum alias
          sequi natus tempora adipisci eum hic dicta.
        </p>
      </article>
      <Form />
    </div>
  );
}
