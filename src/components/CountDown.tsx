import useCountDown from '@/hooks/useCountDown';

// Data em Milisegundos
const finalDate = 1722045600000;
// const finalDate = new Date().getMilliseconds();

const CountDown: FC = (): JSX.Element => {
  const { days, hours, minutes, seconds, timeIsUp } = useCountDown(finalDate);

  return (
    <div>
      {timeIsUp
        ? 'Acabou o tempo'
        : `${days} Dias : ${hours} Horas : ${minutes} Minutos : ${seconds} Segundos`}
    </div>
  );
};
export default CountDown;
