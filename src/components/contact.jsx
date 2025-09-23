import styled from 'styled-components';
import emailjs from 'emailjs-com';
import { Mail, Phone, MapPin } from './container';
import { useState } from 'react';

const Section = styled.section`
  padding: 5rem 1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.label`
  font-weight: 500;
  font-size: 0.875rem;
  color: #374151;
`;

const Input = styled.input`
  width: auto;
  height: 2.5rem;
  padding: 0 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid #d1d5db;
  background-color: #ffffff;
  font-size: 1rem;
  color: #111827;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
  }
`;

const Textarea = styled.textarea`
  width: auto;
  min-height: 6rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid #d1d5db;
  background-color: #ffffff;
  font-size: 1rem;
  color: #111827;
  resize: vertical;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
  }
`;

const Button = styled.button`
  background-color: #3b82f6;
  color: white;
  height: 3rem;
  border-radius: 0.375rem;
  font-weight: 600;
  font-size: 1.125rem;
  cursor: pointer;
  border: none;
  transition: background-color 0.2s ease;
  margin-top: 1rem;

  &:hover {
    background-color: #2563eb;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  color: #374151;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;


const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSending(true);
    emailjs.send(
      'service_49ga4kl',          // seu Service ID
      'template_v75iclb',         // seu Template ID (substitua)
      formData,
      'ul6RmSaBn5623Wvqk'              // sua Public Key (User  ID) (substitua)
    )
      .then(() => {
        alert('Email enviado com sucesso!');
        setFormData({ name: '', email: '', message: '' });
        setSending(false);
      })
      .catch((error) => {
        alert('Erro ao enviar email: ' + error.text);
        setSending(false);
      });
  };

  return (
    <Section id="contact">
      <SectionTitle>Contato</SectionTitle>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">Nome</Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Seu nome"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={sending}
        />

        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="seu@email.com"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={sending}
        />

        <Label htmlFor="message">Mensagem</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Escreva sua mensagem aqui..."
          value={formData.message}
          onChange={handleChange}
          required
          disabled={sending}
        />

        <Button type="submit" disabled={sending}>
          {sending ? 'Enviando...' : 'Enviar'}
        </Button>
      </Form>

      <ContactInfo>
        <InfoItem><Mail size={20} /> romulo.marroso@gmail.com</InfoItem>
        <InfoItem><Phone size={20} /> +55 22 99774-5172</InfoItem>
        <InfoItem><MapPin size={20} /> Rio das ostras - RJ - Brasil</InfoItem>
      </ContactInfo>
    </Section>
  );
};

export default Contact;