'use client';

import React, { useState } from 'react';
import SelectArea from './SelectArea';
import '../app/globals.css';

export default function Form() {
  const [nome, setNome] = useState<string>('');
  const [cargo, setCargo] = useState<string>('');
  const [empresa, setEmpresa] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [telefone, setTelefone] = useState<string>('');
  const [area, setArea] = useState<string>('');
  const [comment, setComment] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Enviado: ${nome} — ${email} — ${area}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={
        'backdrop-blur-md bg-white/5 border border-white/20 rounded-2xl ' +
        'p-4 sm:p-6 text-white w-full max-w-xl space-y-4 mx-auto pt-20'
      }
    >
      {/* Nome e Empresa lado a lado no desktop */}
      <div className="flex flex-col md:flex-row md:gap-4 w-full">
        {/* Nome */}
        <label className="flex flex-col flex-1">
          <span className="mb-1 text-sm sm:text-base font-medium">
            Nome<span className="text-red-400 ml-1">*</span>
          </span>
          <input
            type="text"
            value={nome}
            onChange={e => setNome(e.target.value)}
            placeholder="Digite seu nome"
            required
            className="px-3 py-2 rounded-md bg-white/10 text-white border border-white/20 placeholder-white text-sm sm:text-base outline-none focus:ring-2 focus:ring-white/30 transition"
          />
        </label>

        {/* Empresa */}
        <label className="flex flex-col flex-1 mt-4 md:mt-0">
          <span className="mb-1 text-sm sm:text-base font-medium">
            Empresa<span className="text-red-400 ml-1">*</span>
          </span>
          <input
            type="text"
            value={empresa}
            onChange={e => setEmpresa(e.target.value)}
            placeholder="Digite o nome da empresa"
            required
            className="px-3 py-2 rounded-md bg-white/10 text-white border border-white/20 placeholder-white text-sm sm:text-base outline-none focus:ring-2 focus:ring-white/30 transition"
          />
        </label>
      </div>

      {/* Cargo/Função */}
      <label className="flex flex-col">
        <span className="mb-1 text-sm sm:text-base font-medium">Cargo/Função</span>
        <input
          type="text"
          value={cargo}
          onChange={e => setCargo(e.target.value)}
          placeholder="Digite seu cargo/função"
          className="px-3 py-2 rounded-md bg-white/10 text-white border border-white/20 placeholder-white text-sm sm:text-base outline-none focus:ring-2 focus:ring-white/30 transition"
        />
      </label>

      {/* E-mail */}
      <label className="flex flex-col">
        <span className="mb-1 text-sm sm:text-base font-medium">
          E-mail<span className="text-red-400 ml-1">*</span>
        </span>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Digite seu e-mail"
          required
          className="px-3 py-2 rounded-md bg-white/10 text-white border border-white/20 placeholder-white text-sm sm:text-base outline-none focus:ring-2 focus:ring-white/30 transition"
        />
      </label>

      {/* Telefone/Whatsapp */}
      <label className="flex flex-col">
        <span className="mb-1 text-sm sm:text-base font-medium">
          Telefone/Whatsapp<span className="text-red-400 ml-1">*</span>
        </span>
        <input
          type="tel"
          value={telefone}
          onChange={e => setTelefone(e.target.value)}
          placeholder="Digite seu telefone"
          required
          className="px-3 py-2 rounded-md bg-white/10 text-white border border-white/20 placeholder-white text-sm sm:text-base outline-none focus:ring-2 focus:ring-white/30 transition"
        />
      </label>

      {/* Select de Área */}
      <SelectArea area={area} setArea={setArea} />

      {/* Comentário */}
      <label className="flex flex-col">
        <span className="mb-1 text-sm sm:text-base font-medium">Comentário (opcional)</span>
        <textarea
          value={comment}
          onChange={e => setComment(e.target.value)}
          rows={2}
          placeholder="Deixe uma observação ou sugestão"
          className="px-3 py-2 rounded-md bg-white/10 text-white border border-white/20 placeholder-white text-sm sm:text-base outline-none focus:ring-2 focus:ring-white/30 transition resize-none"
        />
      </label>

      {/* Botão Enviar */}
      <button
        type="submit"
        className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-2 rounded-md border border-white/20 transition-colors duration-200 text-sm sm:text-base"
      >
        Enviar
      </button>
    </form>
  );
}
