import { ChangeEvent, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormProps {
  name: string;
  attendance: 'sim' | 'nao';
  people: number;
  kids: string;
  foodRestrictions: string;
}

const Form = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<FormProps>();

  const [isAttending, setIsAttending] = useState(false);

  const onSubmit: SubmitHandler<FormProps> = (data) => {
    console.log('isAttending on submit >>> ', isAttending);

    console.log(data);
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    // Tell form if user as selected that they're going
    setIsAttending(e.target.value === 'sim');

    // Clear attendance error
    clearErrors('attendance');
  };

  return (
    <div className="mx-auto mt-16 max-w-xl px-6 sm:mt-20 border">
      <h2 className="text-xl font-semibold max-w-3xl mx-auto sm:text-3xl">
        RSVP
      </h2>
      <p className="text-lg max-w-xl mx-auto sm:text-xl ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum alias
        sequi natus tempora adipisci eum hic dicta.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto mt-8 max-w-xl sm:mt-12"
      >
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
                {...register('name', {
                  required: true,
                })}
                type="text"
                name="name"
                id="name"
                autoComplete="given-name"
                className="form-input"
              />
              {errors.name && (
                <p className="text-red-500 text-xs italic mt-2 ml-1">
                  Por favor preencha o nome
                </p>
              )}
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
                {...register('attendance', {
                  required: true,
                })}
                id="attendance"
                className="form-input h-10"
                name="attendance"
                onChange={handleSelectChange}
              >
                <option value="">Selecione uma opção</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
              </select>
              {errors.attendance && (
                <p className="text-red-500 text-xs italic mt-2 ml-1">
                  Por favor escolha uma opção.
                </p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="people"
              className="block text-sm font-semibold leading-6 text-primary-700"
            >
              Numero de pessoas
            </label>
            <div className="relative mt-2.5">
              <input
                {...register('people', {
                  required: isAttending,
                  min: 0,
                  disabled: !isAttending,
                })}
                type="number"
                name="people"
                id="people"
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
                {...register('kids', {
                  disabled: !isAttending,
                })}
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
                {...register('foodRestrictions', {
                  disabled: !isAttending,
                })}
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
