import { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import useWeb3Forms from '@web3forms/react';
import Loader from '@/assets/Icons/Loader';
interface FormProps {
  name: string;
  attendance: 'sim' | 'nao';
  people: number;
  kids: string;
  'food-restrictions': string;
}

// TODO:: HIDE this in env file
const WEB_3_FORM_KEY_GONCALO = '71edb852-a85e-4fdd-b2b5-8722ee478217';

const Form = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<FormProps>();

  const [senderName, setSenderName] = useState('');
  const [isAttending, setIsAttending] = useState<boolean>();
  const [isSuccess, setIsSuccess] = useState<boolean>();
  const [formResult, setFormResult] = useState<string>();

  const { submit: onSubmit } = useWeb3Forms({
    access_key: WEB_3_FORM_KEY_GONCALO,
    // access_key: 'WEB_3_FORM_KEY_GONCALO',
    settings: {
      from_name: `RSVP Casamento - ${senderName}`,
      subject: 'Resposta RSVP Casamento',
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setFormResult(msg);
      console.log('msg ', msg);
      console.log('data ', data);
      console.log('Success');
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setFormResult(msg);
      console.log('msg error ', msg);
    },
  });

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    // Tell form if user as selected that they're going
    setIsAttending(e.target.value === 'sim');

    // Clear attendance error
    clearErrors('attendance');
  };

  return (
    <div className="mx-auto mt-16 max-w-xl px-6 sm:mt-20">
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
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mb-6">
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
                onChange={(e) => setSenderName(e.target.value)}
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
            <div className="mt-2.5">
              <div className="relative">
                <select
                  {...register('attendance', {
                    required: true,
                  })}
                  id="attendance"
                  className="form-input h-10 appearance-none"
                  onChange={handleSelectChange}
                >
                  <option value="">Selecione uma opção</option>
                  <option value="sim">Sim</option>
                  <option value="nao">Não</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-primary-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
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
              Numero de pessoas <span className="text-xs">(adultos)</span>
            </label>
            <div className="relative mt-2.5">
              <input
                {...register('people', {
                  required: isAttending,
                  min: 1,
                  disabled: !isAttending,
                })}
                min="1"
                type="number"
                name="people"
                id="people"
                className="form-input"
              />
              {errors.people && (
                <p className="text-red-500 text-xs italic mt-2 ml-1">
                  Coloque o numero de pessoas
                </p>
              )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="kids"
              className="block text-sm font-semibold leading-6 text-primary-700"
            >
              Levo crianças{' '}
              <span className="text-xs">
                (Se sim por favor dizer quantas e idade)
              </span>
            </label>
            <div className="mt-2.5">
              <input
                {...register('kids', {
                  disabled: !isAttending,
                })}
                type="text"
                name="Crianças"
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
              Restrições alimentares{' '}
              <span className="text-xs">
                (Vegan, Vegetariano, Celíaco, alergias e intolerancias, outros)
              </span>
            </label>
            <div className="mt-2.5">
              <textarea
                {...register('food-restrictions', {
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

        {/* Show alert after submitting form */}
        {isSubmitSuccessful && (
          <div
            className={`mb-6 px-4 py-3 rounded relative text-xs  ${
              isSuccess
                ? 'bg-green-100  text-green-600'
                : 'bg-red-100  text-red-600'
            }`}
            role="alert"
          >
            <span className="block sm:inline">
              {formResult ||
                (isSuccess
                  ? 'Message sent successfully'
                  : 'Something went wrong. Please try later.')}
            </span>
          </div>
        )}

        <div>
          <button
            type="submit"
            className="block w-full rounded-md bg-action-400 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-action-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            {isSubmitting ? <Loader /> : 'Enviar RSVP'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;