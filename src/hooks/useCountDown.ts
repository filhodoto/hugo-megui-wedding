import { useEffect, useState } from 'react';

export interface Time {
  timeIsUp: boolean;
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
}

const useCountDown = (targetDate: number): Time => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown: number) => {
  // calculate time left
  const dias = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const horas = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutos = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((countDown % (1000 * 60)) / 1000);
  const timeIsUp = segundos <= 0;

  return { dias, horas, minutos, segundos, timeIsUp };
};

export default useCountDown;
