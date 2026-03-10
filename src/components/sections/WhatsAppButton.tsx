'use client';

// Número do WhatsApp (trocar pelo número real)
const WHATSAPP_NUMBER = '5511915983957';
const WHATSAPP_MESSAGE = 'Olá! Gostaria de saber mais sobre o Festival Parental 2026.';

export default function WhatsAppButton() {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fale conosco pelo WhatsApp"
            className="fixed bottom-24 right-6 z-[998] group"
        >
            <div className="bg-[#25D366] w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.3)] border-2 border-[#191919] transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_24px_rgba(0,0,0,0.4)]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="white"
                    className="w-[34px] h-[34px]"
                >
                    <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.502 1.14 6.744 3.072 9.378L1.062 31.16l5.964-1.97A15.914 15.914 0 0016.004 32C24.826 32 32 24.824 32 16.004 32 7.176 24.826 0 16.004 0zm9.318 22.59c-.39 1.102-1.936 2.016-3.178 2.282-.852.18-1.964.324-5.708-1.226-4.792-1.984-7.872-6.848-8.114-7.166-.23-.318-1.948-2.596-1.948-4.95 0-2.356 1.234-3.514 1.672-3.992.39-.426 1.026-.638 1.636-.638.198 0 .374.01.534.018.478.02.718.048 1.034.8.392.936 1.348 3.292 1.466 3.532.12.24.24.558.08.876-.148.326-.278.47-.518.744-.24.274-.468.484-.708.778-.218.258-.464.534-.198 1.012.266.47 1.184 1.952 2.542 3.162 1.746 1.556 3.218 2.038 3.674 2.264.358.18.784.148 1.06-.148.352-.376.786-.998 1.228-1.612.314-.438.712-.494 1.104-.328.398.16 2.524 1.19 2.958 1.408.434.218.724.326.832.506.106.18.106 1.044-.284 2.148z" />
                </svg>
            </div>
        </a>
    );
}
