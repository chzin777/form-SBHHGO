'use client';
import Form from '../components/Form';

export default function Home() {
  return (
    <>
      {/* HEADER DIRETO NO PAGE */}
      <header
        className="
          fixed top-0 left-0 w-full z-50
          px-8 py-4
          flex justify-center items-center
          bg-black/30 backdrop-blur-sm
        "
      >
        <a href="/" className="flex items-center gap-2">
          <img
            src="/images/logo.png"
            alt="Logo"
            width={40}
            height={40}
            style={{ display: 'inline-block' }}
          />
          <span className="text-xl font-semibold text-white">
            Workshop
          </span>
        </a>
      </header>

      {/* MAIN */}
      <main className="relative pt-28 md:pt-28 min-h-screen overflow-y-auto md:h-screen md:overflow-hidden">
        {/* Fundo borrado sem overlay */}
        <div
          className="
            absolute inset-0 
            bg-[url('/images/bg1.png')] bg-cover bg-center 
            filter blur-sm scale-105
            -z-10
          "
        />

        {/* Conteúdo */}
        <div className="relative flex flex-col md:flex-row items-center justify-between h-full px-4 sm:px-6 md:px-20 gap-8 pb-10 max-w-[100vw]">
          {/* TEXTO */}
          <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl mb-4 text-shadow font-bold">
              <span className="text-blue-200">WORK</span>
              <span className='text-lime-300'>SHOP</span>{' - '}
              <span className="text-blue-200">INOVAÇÃO</span>{' '}
              <span className="text-lime-300">&</span>{' '}
              <span className="text-blue-200">EFICIÊNCIA</span> EM HOTELARIA
            </h1>
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl mb-4 text-shadow">
              <span className="text-blue-200">DIA</span>{' '}
              <span className="text-lime-300">20.08</span>{' '}
              <span className="text-blue-200"> | DAS 08H30 ÀS 12H</span>
            </h2>
            <p className="text-white/90 text-base sm:text-lg md:text-2xl">
              Inscreva-se no nosso simpósio e descubra como transformar seus processos.
            </p>
          </div>

          {/* FORMULÁRIO */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end md:mb-4">
            <Form />
          </div>
        </div>
      </main>
    </>
  );
}
