// HOME PAGE CORRIGIDA
'use client';


import Form from '../components/Form';
import Image from 'next/image';

export default function Home() {
  const scrollToForm = () => {
    const formSection = document.getElementById('formulario');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Mensagem padrão para WhatsApp quando não há dados do formulário
  const defaultWhatsappMsg = encodeURIComponent(
    `Olá, gostaria de saber mais sobre o Workshop de Inovação & Eficiência em Hotelaria.`
  );

  return (
    <main className="min-h-screen w-full p-0 m-0">
      {/* Section da imagem de fundo com altura reduzida */}
      <section className="relative w-full h-[420px] md:h-[640px] flex items-center justify-center overflow-hidden">
        {/* Imagem de fundo escurecida */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/bg1.png"
            alt="Fundo"
            fill
            style={{ objectFit: 'cover', zIndex: 0 }}
            priority
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
        </div>
        {/* Conteúdo central */}
        <div className="relative z-20 flex items-center justify-center gap-4">
          <Image
            src="/images/logo.png"
            alt="Logo Workshop"
            width={100}
            height={100}
            className="drop-shadow-lg"
            priority
          />
          <h1 className="text-white text-4xl md:text-5xl font-bold font-[Montserrat] tracking-wide drop-shadow-lg">Workshop</h1>
        </div>
      </section>
      {/* Section colorida com texto e quebras de linha, layout similar à imagem enviada */}
      <section className="w-full py-16 px-4 flex items-center justify-center bg-[#263165]">
        <div className="max-w-4xl w-full text-left">
          <h2 className="text-white font-extrabold text-2xl sm:text-3xl md:text-6xl leading-tight font-[Montserrat] mb-2">
            WORKSHOP - INOVAÇÃO<br />E EFICIÊNCIA EM
          </h2>
          <h3 className="font-extrabold text-2xl sm:text-4xl md:text-6xl leading-tight font-[Montserrat] mb-6">
            <span className="bg-[#009FE3] text-white rounded-xlpx-6 pr-1 inline-block">
              HIGIENE&nbsp;PROFISSIONAL
            </span>
          </h3>
          <div className="text-white font-bold text-base sm:text-lg md:text-2xl mb-1 font-[Montserrat]">
            DIA 20.08 | DAS 09H ÀS 12H
          </div>
          <div className="text-white font-bold text-base sm:text-lg md:text-2xl font-[Montserrat] mb-8">
            Local: Palladium Eventos e Festas, Caldas Novas - GO
          </div>

          {/* Botão de inscrição */}
          <div className="inline-block mb-10 w-full sm:w-auto">
            <button
              onClick={scrollToForm}
              className="bg-white text-[#263165] font-bold text-base sm:text-xl md:text-2xl rounded-full px-6 sm:px-10 py-4 sm:py-5 shadow-lg transition hover:bg-[#f0f0f0] tracking-widest font-[Montserrat] w-full sm:w-auto hover:cursor-pointer"
            >
              INSCREVA-SE
            </button>
          </div>

          {/* Frase final */}
          <p className="text-white text-base sm:text-lg md:text-2xl font-[Montserrat] mt-6">
            Descubra como transformar seus processos de forma <span className="font-bold">eficiente</span> e <span className="font-bold text-[#009FE3]">econômica</span>.
          </p>
        </div>
      </section>
      {/* Section informativa sobre o workshop e marcas destacadas */}
      <section className="w-full py-8 md:py-12 px-4 flex items-center justify-center bg-white">
        <div className="w-full max-w-6xl flex flex-col items-center">
          <p className="text-[#263165] text-base sm:text-xl md:text-2xl font-[Montserrat] mb-16 text-justify max-w-4xl">
            O evento contará com palestras técnicas, demonstrações de produtos e condições exclusivas para os participantes. Será uma oportunidade única para conhecer as últimas tendências e soluções em higiene profissional, promovendo a eficiência operacional e a sustentabilidade no setor hoteleiro. As marcas destacadas <span className="font-bold text-[#009FE3]">Rubbermaid, Spartan, Kärcher, Bomlixo e Essity Tork Brasil</span> apresentarão inovações que podem transformar a rotina dos hotéis, tornando-a mais econômica e eficaz.
          </p>
          <div className="w-full flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-center">
            <div className="flex-1 min-w-[220px] sm:min-w-[260px] bg-white border-2 border-[#263165] rounded-xl flex items-center justify-center h-[150px] min-h-[150px] shadow-sm">
              <span className="text-[#263165] text-base sm:text-2xl md:text-3xl font-bold font-[Montserrat] text-center">Palestras Técnicas</span>
            </div>
            <div className="flex-1 min-w-[220px] sm:min-w-[260px] bg-white border-2 border-[#263165] rounded-xl flex items-center justify-center h-[150px] min-h-[150px] shadow-sm">
              <span className="text-[#263165] text-base sm:text-2xl md:text-3xl font-bold font-[Montserrat] text-center">Demonstrações</span>
            </div>
            <div className="flex-1 min-w-[220px] sm:min-w-[260px] bg-white border-2 border-[#263165] rounded-xl flex items-center justify-center h-[150px] min-h-[150px] shadow-sm">
              <span className="text-[#263165] text-base sm:text-2xl md:text-3xl font-bold font-[Montserrat] text-center">Condições Exclusivas</span>
            </div>
          </div>
          {/* Row de logos das marcas */}
          <div className="w-full flex flex-row flex-wrap justify-center items-center gap-8 mt-10">
            <div className="bg-[#eaeaea] rounded-3xl flex justify-center items-center min-w-[180px] max-w-[240px] h-[130px]">
              <Image src="/images/karcher.png" alt="Kärcher" width={200} height={90} className="object-contain w-full h-full" />
            </div>
            <div className="bg-[#eaeaea] rounded-3xl flex justify-center items-center min-w-[180px] max-w-[240px] h-[130px]">
              <Image src="/images/rubbermaid.png" alt="Rubbermaid" width={200} height={90} className="object-contain w-full h-full" />
            </div>
            <div className="bg-[#eaeaea] rounded-3xl flex justify-center items-center min-w-[180px] max-w-[240px] h-[130px]">
              <Image src="/images/lixo.png" alt="Bomlixo" width={200} height={90} className="object-contain w-full h-full" />
            </div>
            <div className="bg-[#eaeaea] rounded-3xl flex justify-center items-center min-w-[180px] max-w-[240px] h-[130px]">
              <Image src="/images/tork.png" alt="Tork" width={200} height={90} className="object-contain w-full h-full" />
            </div>
            <div className="bg-[#eaeaea] rounded-3xl flex justify-center items-center min-w-[180px] max-w-[240px] h-[130px]">
              <Image src="/images/spartan.png" alt="Spartan" width={90} height={50} className="object-contain w-full h-full" />
            </div>
          </div>
        </div>
      </section>


      <section id="formulario" className="bg-[#f5f7fa] py-8">
        <Form />
      </section>

      {/* Section Palestras Confirmadas */}
      <section className="w-full py-16 px-4 flex items-center justify-center bg-[#263165]">
        <div className="max-w-6xl w-full">
          <h2 className="text-white text-4xl md:text-5xl font-bold font-[Montserrat] text-center mb-16">
            PALESTRAS CONFIRMADAS
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Imagem do palestrante */}
            <div className="flex-shrink-0">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/images/herberth.png"
                  alt="Herberth Lima"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Informações do palestrante */}
            <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-[#263165] text-2xl md:text-3xl font-bold font-[Montserrat] mb-4">
                Como a higiene superior melhora a experiência e reduz custos?
              </h3>
              <div className="text-[#263165] mb-2">
                <p className="text-xl font-bold font-[Montserrat]">Herberth Lima</p>
                <p className="text-lg font-[Montserrat]">
                  Executivo de desenvolvimento de negócios <span className='font-bold'>ESSITY/Tork Brasil</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Palestrante Marcelo */}
      <section className="w-full py-16 px-4 flex items-center justify-center bg-white">
        <div className="max-w-6xl w-full">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Informações do palestrante - à esquerda */}
            <div className="flex-1 bg-[#263165] rounded-2xl p-8 shadow-lg order-2 md:order-1">
              <h3 className="text-white text-2xl md:text-3xl font-bold font-[Montserrat] mb-4">
                Gestão inteligente de resíduos em
                Hotéis
              </h3>
              <div className="text-white mb-2">
                <p className="text-xl font-bold font-[Montserrat]">Marcelo Carneiro</p>
                <p className="text-lg font-[Montserrat]">
                  Diretor Geral da <span className='font-bold'>BomLixo</span>
                </p>
              </div>
            </div>

            {/* Imagem do palestrante - à direita */}
            <div className="flex-shrink-0 order-1 md:order-2">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-[#263165] shadow-lg">
                <Image
                  src="/images/marcelo.png"
                  alt="Marcelo Silva"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Palestrante Paulo */}
      <section className="w-full py-16 px-4 flex items-center justify-center bg-[#263165]">
        <div className="max-w-6xl w-full">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Imagem do palestrante */}
            <div className="flex-shrink-0">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/images/Paulo.png"
                  alt="Paulo Santos"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Informações do palestrante */}
            <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-[#263165] text-2xl md:text-3xl font-bold font-[Montserrat] mb-4">
                Evolução e gestão de processos
                de higienização
              </h3>
              <div className="text-[#263165] mb-2">
                <p className="text-xl font-bold font-[Montserrat]">Paulo Zanini</p>
                <p className="text-lg font-[Montserrat]">
                  Gerente Nacional de vendas da <span className='font-bold'>Spartan</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Equipe Karcher - 3 palestrantes */}
      <section className="w-full py-16 px-4 flex items-center justify-center bg-[#263165]">
        <div className="max-w-6xl w-full">
          <div className="flex flex-col items-center">
            {/* Três fotos circulares no topo */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/images/eduardo.jpg"
                  alt="Eduardo Ataide"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/images/stephanie.jpeg"
                  alt="Stephanie Aoki"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/images/magno.png"
                  alt="Magno Lima"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Card com informações */}
            <div className="w-full max-w-4xl bg-white rounded-2xl p-8 shadow-lg text-center">
              <h3 className="text-[#263165] text-2xl md:text-3xl font-bold font-[Montserrat] mb-6">
                Limpeza Industrial em ambiente hoteleiro
              </h3>
              <div className="text-[#263165]">
                <p className="text-xl font-bold font-[Montserrat] mb-2">
                  Eduardo Ataide, Stephanie Aoki e Magno Lima
                </p>
                <p className="text-lg font-[Montserrat]">
                  Karcher Brasil
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Call to Action - Garanta sua vaga */}
      <section className="w-full py-16 px-4 flex items-center justify-center bg-white">
        <div className="max-w-4xl w-full text-left">
          <h2 className="text-[#263165] font-bold text-4xl md:text-5xl lg:text-6xl leading-tight font-[Montserrat] mb-6">
            Garanta sua vaga gratuitamente!
          </h2>
          
          <p className="text-[#263165] text-lg md:text-xl font-[Montserrat] mb-2">
            Vagas limitadas – não perca a chance de
          </p>
          <p className="text-[#263165] text-lg md:text-xl font-[Montserrat] mb-6">
            participar desse evento exclusivo para o setor hoteleiro.
          </p>
          
          <div className="flex items-center gap-2 mb-8">
            <svg className="w-6 h-6 text-[#263165]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
            <span className="text-[#263165] text-lg md:text-xl font-[Montserrat]">
              Informações: 
              <a 
                href={`https://wa.me/556239462100?text=${defaultWhatsappMsg}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:text-[#009FE3] transition-colors duration-200 ml-1"
              >
                (62) 3946-2100
              </a>
            </span>
          </div>
          
          <div className="inline-block">
            <button 
              onClick={scrollToForm}
              className="bg-[#009FE3] hover:bg-[#007BB5] hover:cursor-pointer text-white font-bold text-lg md:text-xl rounded-full px-8 py-4 shadow-lg transition-colors duration-200 font-[Montserrat] tracking-wide"
            >
              INSCREVA-SE AGORA
            </button>
          </div>
        </div>
      </section>

      {/* Rodapé com redes sociais */}
      <footer className="w-full py-8 px-4 bg-[#263165] border-t border-[#263165]/20">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          {/* Ícones das redes sociais */}
          <div className="flex gap-6 mb-4">
            {/* Facebook */}
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-[#263165]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-[#263165]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-[#263165]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>

          {/* Texto de copyright */}
          <p className="text-white text-sm font-[Montserrat] text-center">
            © 2024 R3 Suprimentos. Todos os direitos reservados.
          </p>
          <p className="text-white text-sm font-[Montserrat] text-center">
            Desenvolvido por{' '}
            <a 
              href="https://www.linkedin.com/in/christofer-henrique-43366725b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-[#009FE3] transition-colors duration-200"
            >
              Christofer Henrique
            </a>
          </p>
        </div>
      </footer>

    </main>
  );
}
