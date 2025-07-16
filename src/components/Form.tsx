'use client';

import React, { useState } from 'react';
import SelectArea from './SelectArea';
import '../app/globals.css';

// Webhook da n8n
const WEBHOOK_URL = 'https://r3suprimentos.app.n8n.cloud/webhook/482345e7-09d6-460d-b7ab-17a176b73f0f';
const WHATSAPP_NUM = '556299144217'; // Número do WhatsApp

function formatTelefone(value: string) {
  value = value.replace(/\D/g, '');

  if (value.length > 11) value = value.slice(0, 11);

  if (value.length > 10) {
    value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  } else if (value.length > 6) {
    value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
  } else if (value.length > 2) {
    value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
  } else {
    value = value.replace(/(\d*)/, '($1');
  }

  return value;
}

export default function Form() {
  const [nome, setNome] = useState<string>('');
  const [cargo, setCargo] = useState<string>('');
  const [empresa, setEmpresa] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [telefone, setTelefone] = useState<string>('');
  const [area, setArea] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const whatsappMsg = encodeURIComponent(
    `Olá, Meu nome é ${nome}, acabei de enviar meus dados pelo formulário e gostaria de confirmar minha presença no *Workshop de Inovação & Eficiência em Hotelaria*.`
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Payload correto para o n8n/HubSpot
    const payload = {
      firstName: nome,           // nome do campo, vai para "First Name"
      lastName: " - WORKSHOP",      // fixo, vai para "Last Name"
      cargo,
      empresa,
      email,
      phone: telefone,           // telefone para "Phone Number"
      area,
      comment,
      dataEnvio: new Date().toISOString(),
    };

    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      // Redireciona para o WhatsApp após o envio
      window.open(`https://wa.me/${WHATSAPP_NUM}?text=${whatsappMsg}`, "_blank");
    } catch (error) {
      alert('Erro ao enviar! Tente novamente.');
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={
        'backdrop-blur-md bg-white/5 border border-white/20 rounded-2xl ' +
        'p-4 sm:p-6 text-white w-full max-w-xl space-y-4 mx-auto pt-20'
      }
    >
      <div className="flex flex-col md:flex-row md:gap-4 w-full">
        <label className="flex flex-col flex-1">
          <span className="mb-1 text-sm sm:text-base font-medium">
            Nome:<span className="text-red-400 ml-1">*</span>
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
        <label className="flex flex-col flex-1 mt-4 md:mt-0">
          <span className="mb-1 text-sm sm:text-base font-medium">
            Empresa:<span className="text-red-400 ml-1">*</span>
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
      <label className="flex flex-col">
        <span className="mb-1 text-sm sm:text-base font-medium">Cargo/Função:</span>
        <input
          type="text"
          value={cargo}
          onChange={e => setCargo(e.target.value)}
          placeholder="Digite seu cargo/função"
          className="px-3 py-2 rounded-md bg-white/10 text-white border border-white/20 placeholder-white text-sm sm:text-base outline-none focus:ring-2 focus:ring-white/30 transition"
        />
      </label>
      <label className="flex flex-col">
        <span className="mb-1 text-sm sm:text-base font-medium">
          E-mail:<span className="text-red-400 ml-1">*</span>
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
      <label className="flex flex-col">
        <span className="mb-1 text-sm sm:text-base font-medium">
          Telefone (Whatsapp):<span className="text-red-400 ml-1">*</span>
        </span>
        <input
          type="tel"
          value={telefone}
          onChange={e => setTelefone(formatTelefone(e.target.value))}
          placeholder="Digite seu telefone"
          required
          maxLength={15}
          className="px-3 py-2 rounded-md bg-white/10 text-white border border-white/20 placeholder-white text-sm sm:text-base outline-none focus:ring-2 focus:ring-white/30 transition"
        />
      </label>
      <SelectArea area={area} setArea={setArea} />
      <label className="flex flex-col">
        <span className="mb-1 text-sm sm:text-base font-medium">Comentário (opcional):</span>
        <textarea
          value={comment}
          onChange={e => setComment(e.target.value)}
          rows={2}
          placeholder="Deixe uma observação ou sugestão"
          className="px-3 py-2 rounded-md bg-white/10 text-white border border-white/20 placeholder-white text-sm sm:text-base outline-none focus:ring-2 focus:ring-white/30 transition resize-none"
        />
      </label>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-2 rounded-md border border-white/20 transition-colors duration-200 text-sm sm:text-base cursor-pointer"
      >
        {loading ? 'Enviando...' : 'Enviar'}
      </button>
    </form>
  );
}
