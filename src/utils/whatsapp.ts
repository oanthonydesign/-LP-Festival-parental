// ponytail: número provisório (WhatsApp geral) até o Leo enviar o link de grupos da Cris — trocar só aqui.
const WHATSAPP_GRUPOS_NUMBER = '5511915983957';

const MENSAGENS_GRUPO = {
    card: 'Olá! Quero comprar o Passaporte Profissional do Festival Parental 2026 para grupos.',
    faq: 'Olá! Vi no site a condição para grupos. Quero mais informações.',
} as const;

export const waGrupoUrl = (origem: keyof typeof MENSAGENS_GRUPO) =>
    `https://wa.me/${WHATSAPP_GRUPOS_NUMBER}?text=${encodeURIComponent(MENSAGENS_GRUPO[origem])}`;

