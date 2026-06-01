import { useState } from 'react';
import './style.css';

export default function CadastroForm() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    alert(`
      Nome: ${form.nome}
      Email: ${form.email}
      Telefone: ${form.telefone}
    `);

    setForm({
      nome: '',
      email: '',
      telefone: '',
    });
  }

  return (
    <section className="cadastro-container">
      <h2>Cadastre-se para receber ofertas</h2>

      <form onSubmit={handleSubmit} className="cadastro-form">
        <input
          type="text"
          name="nome"
          placeholder="Seu nome"
          value={form.nome}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Seu e-mail"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="telefone"
          placeholder="Seu telefone"
          value={form.telefone}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Cadastrar
        </button>
      </form>
    </section>
  );
}