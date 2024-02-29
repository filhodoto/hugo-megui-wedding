const Form = (): JSX.Element => {
  return (
    <div className="mx-auto mt-16 max-w-xl px-6 sm:mt-20 border">
      <h2 className="text-xl font-semibold max-w-3xl mx-auto sm:text-3xl">
        RSVP
      </h2>
      <p className="text-lg max-w-xl mx-auto sm:text-xl ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum alias
        sequi natus tempora adipisci eum hic dicta.
      </p>
      <form action="#" method="POST" className="mx-auto mt-8 max-w-xl sm:mt-12">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="name"
              className="block text-sm font-semibold leading-6 text-primary-700"
            >
              Nome
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="given-name"
                className="form-input"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="attendance"
              className="block text-sm font-semibold leading-6 text-primary-700"
            >
              Confirmo presença
            </label>
            <div className="relative mt-2.5">
              <select
                id="attendance"
                className="form-input h-10"
                name="attendance"
                required
              >
                <option value={undefined}>Selecione uma opção</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
              </select>
            </div>
          </div>
          <div>
            <label
              htmlFor="number-people"
              className="block text-sm font-semibold leading-6 text-primary-700"
            >
              Numero de pessoas
            </label>
            <div className="relative mt-2.5">
              <input
                type="number"
                name="number-people"
                id="number-people"
                className="form-input"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="kids"
              className="block text-sm font-semibold leading-6 text-primary-700"
            >
              Levo crianças (Se sim por favor dizer quantas e idade)
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="kids"
                id="kids"
                autoComplete="organization"
                className="form-input"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="food-restrictions"
              className="block text-sm font-semibold leading-6 text-primary-700"
            >
              Restrições alimentares (Vegan, Vegetariano, Celíaco, alergias e
              intolerancias, outros)
            </label>
            <div className="mt-2.5">
              <textarea
                name="food-restrictions"
                id="food-restrictions"
                rows={2}
                className="form-input"
                defaultValue={''}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-action-400 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-action-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Enviar RSVP
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
