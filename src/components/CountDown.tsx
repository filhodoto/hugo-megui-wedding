import useCountDown from '@/hooks/useCountDown';

// Data em Milisegundos
const finalDate = 1722085200000;
// const finalDate = new Date().getMilliseconds();

const CountDown = (): JSX.Element => {
  const { timeIsUp, ...rest } = useCountDown(finalDate);

  return (
    <div className="flex justify-center gap-3 sm:gap-8">
      {Object.keys(rest).map((measure) => {
        // Make sure typescript accourns for all keys in rest o
        const count = rest[measure as keyof typeof rest];
        return (
          <div
            key={`${count}-${measure}`}
            className="flex flex-col gap-5 relative"
          >
            <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-white"></div>
              <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
                {count}
              </span>
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-white"></div>
            </div>
            <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
              {measure.toUpperCase()}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default CountDown;
