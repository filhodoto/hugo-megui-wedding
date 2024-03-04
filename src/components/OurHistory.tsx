const foto = new URL('../assets/images/o_dia.jpg', import.meta.url).href;

export default function OurHistory() {
  return (
    <div
      id="our_history"
      className="grid lg:grid-cols-2 lg:grid-flow-col gap-x-8 py-20 md:py-26 px-6 relative container max-w-7xl m-auto min-h-lvh"
    >
      <article className="text-pretty">
        <h2 className="text-3xl font-bold leading-tight sm:text-5xl py-5">
          A nossa história
        </h2>
        <p className="py-2">
          Como casal do século XXI que somos, as redes sociais apresentaram-nos
          em dezembro de 2018 e rapidamente nos tornamos inseparáveis. Juntos,
          criámos bonitas memórias desde muito cedo, num forte compromisso que
          pretendemos perpetuar seja de que forma for: um convívio com a família
          ou com os amigos; um pôr-do-sol na praia ou no alto de uma montanha;
          cantorias e longas conversas numa viagem de carro; uma fatia de pizza
          à beira-mar; ou através das viagens, que começaram numa escapadinha a
          Londres e desde aí nunca mais pararam. Em outubro de 2020 demos o
          primeiro grande passo na nossa relação, ao passarmos a viver juntos
          naquela que ainda hoje é a nossa casa, em Algés. Dois anos depois,
          adotamos o nosso cão Ollie, que deu outro brilho às nossas vidas. E em
          março de 2023, decidimos dar o segundo grande passo na nossa vida a
          dois, através de um pedido de casamento sob o olhar atento e a
          aprovação de uma bonita aurora boreal que iluminava os escuros céus de
          uma praia no norte da Noruega.
        </p>
        <p className="py-2">
          Estamos unidos por um grande amor, alicerçado na confiança, no apoio
          mútuo e nos nossos valores. Une-nos o amor pelas nossas profissões,
          pelo sentido de missão e de contributo para uma sociedade melhor.
          Unem-nos os nossos espíritos inquietos, sedentos de conhecimento e de
          novas experiências. E, tão ou mais importante que tudo o que nos une,
          vemos nas nossas diferenças uma oportunidade para crescer, aceitar e
          aprender.
        </p>
        <p className="py-2">Megui e Hugo</p>
      </article>
      {/* For landscape */}
      <div className="border min-h-96 md:min-h-[50vh] lg:min-h-[10vh]">
        <div
          className="bg-cover bg-no-repeat bg-center h-full w-full"
          style={{ backgroundImage: `url(${foto})` }}
        ></div>
      </div>
    </div>
  );
}
