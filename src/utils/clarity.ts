// Evento customizado no Microsoft Clarity (script carregado no layout).
// Se o Clarity ainda não carregou ou foi bloqueado, o clique segue normal.
export function trackClarity(name: string) {
    (window as unknown as { clarity?: (...args: unknown[]) => void }).clarity?.('event', name);
}
