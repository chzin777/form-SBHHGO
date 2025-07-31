// HOME PAGE CORRIGIDA
'use client';
import Link from 'next/link';
import Image from 'next/image';
import Form from '../components/Form';

export default function Home() {
  return (
    <>
      {/* HEADER */}
      <header
        className="
          fixed top-0 left-0 w-full z-50
          px-8 py-4
          flex justify-center items-center
          bg-black/15 backdrop-blur-sm
        "
      >
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={40}
            height={40}
            style={{ display: 'inline-block' }}
            priority
          />
          <span className="text-xl font-semibold text-white">
            Workshop
          </span>
        </Link>
      </header>

      {/* MAIN */}
      <main className="relative pt-28 min-h-screen">
        {/* Fundo borrado */}
        <div
          className="
            fixed inset-0 
            bg-[url('/images/bg1.png')] bg-cover bg-center 
            filter blur-xs scale-105
            -z-10
          "
        />
        {/* Conteúdo */}
        <div className="relative flex flex-col md:flex-row items-center justify-between h-full px-4 sm:px-6 md:px-20 gap-8 pb-10 max-w-[100vw]">
          {/* TEXTO */}
          <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0 text-shadow">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl mb-4 font-bold">
              WORKSHOP{' - '}
              INOVAÇÃO{' '}
              &{' '}
              EFICIÊNCIA
              <br />
              <span className="text-4xl text-lime-300 md:text-6xl">EM HOTELARIA</span>
            </h1>
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl mb-4 text-shadow">
              DIA {' '}
              <span className="text-lime-300">20.08</span>{' '}
              | DAS{' '}
              <span className="text-lime-300">09H ÀS 12H</span>
            </h2>
            <p className='text-white/90 text-base sm:text-lg md:text-2xl mt-[-15px]'>
              Local: Palladium  Eventos e Festas, <span className='text-lime-300 font-bold'>Caldas Novas - GO</span>
            </p>
            <br />
            <p className="text-white/90 text-base sm:text-lg md:text-2xl">
              <span className='text-lime-300 font-bold underline'>Inscreva-se</span> no nosso simpósio e descubra como transformar seus processos.
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
