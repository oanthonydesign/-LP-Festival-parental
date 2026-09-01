export type EventType = 'named' | 'placeholder' | 'interval' | 'system' | 'special' | 'info';

export type ScheduleEvent = {
    time: string;
    title: string;
    speakers?: string;
    description?: string;
    type: EventType;
};

export type Stage = {
    id: string;
    label: string;
    fullTitle?: string;
    events: ScheduleEvent[];
};

export type DayData = {
    id: number;
    date: string;
    dayLabel: string;
    weekday: string;
    access: 'professional' | 'all';
    accessLabel: string;
    themeColor: string;
    dayTitle?: string;
    daySubTitle?: string;
    credenciamento: { time: string; note?: string }[];
    overviewHighlights: string[];
    stages: Stage[];
};

export const scheduleFullData: DayData[] = [
    {
        id: 0,
        date: '19 Novembro',
        dayLabel: 'Dia 1',
        weekday: 'quinta-feira',
        access: 'professional',
        accessLabel: 'Exclusivo para profissionais',
        themeColor: '#3399CC',
        dayTitle: 'DIA 1 — 19/11 — COMPREENDER',
        daySubTitle: 'O que aconteceu com a infância, a adolescência e as famílias nos últimos anos? Entenda o mundo que mudou — e por que educar nunca foi tão desafiador.',
        credenciamento: [
            { time: '07h00', note: 'exclusivo para embaixadores' },
            { time: '08h00' },
        ],
        overviewHighlights: ['Telma Abrahão', 'Gordon Neufeld', 'Izabella Camargo', 'Roberta & Thaís Bento'],
        stages: [
            {
                id: 'palco1',
                label: 'Palco 1',
                fullTitle: 'PALCO 1 — VISÃO CONTEMPORÂNEA DA INFÂNCIA E DAS FAMÍLIAS',
                events: [
                    {
                        time: '09h00',
                        title: 'Abertura do 7º Congresso Internacional de Educação Parental',
                        type: 'system',
                    },
                    {
                        time: '09h30',
                        title: 'A nova infância: por que educar nunca foi tão difícil?',
                        speakers: 'Roberta Bento e Thaís Bento',
                        description: 'Ansiedade, excesso de estímulos, hiperconectividade, insegurança e mudanças culturais desafiam diariamente pais, professores e profissionais. O que realmente mudou — e o que continua sendo essencial?',
                        type: 'named',
                    },
                    {
                        time: '10h30',
                        title: 'Intervalo',
                        type: 'interval',
                    },
                    {
                        time: '11h00',
                        title: 'Depois das telas: quem está educando nossas crianças?',
                        speakers: 'Vanessa Cavalieri',
                        description: 'As maiores transformações da infância aconteceram em menos de duas décadas. Redes sociais, algoritmos, inteligência artificial e economia da atenção estão mudando a forma como crianças crescem, aprendem e constroem vínculos.',
                        type: 'named',
                    },
                    {
                        time: '12h30',
                        title: 'Almoço',
                        type: 'interval',
                    },
                    {
                        time: '14h00',
                        title: 'Relações: a "tecnologia" mais poderosa para transformar uma vida',
                        speakers: 'Telma Abrahão e Gordon Neufeld (online, ao vivo)',
                        description: 'Num mundo em que tudo parece disputar a atenção das crianças, o vínculo continua sendo o maior fator de proteção para o desenvolvimento humano. O que a ciência do apego nos ensina sobre construir relações fortes em tempos de tantas distrações?',
                        type: 'named',
                    },
                    {
                        time: '15h30',
                        title: 'Saúde Mental dos Cuidadores: O que a NR-1 trouxe de importante',
                        speakers: 'Izabella Camargo',
                        description: 'A qualidade das relações depende diretamente da disponibilidade emocional dos adultos ao seu redor. Como cuidar da saúde mental de quem sustenta o desenvolvimento infantil? Como anda a saúde mental dos profissionais? O que a NR-1 trouxe?',
                        type: 'named',
                    },
                    {
                        time: '16h30',
                        title: 'Intervalo',
                        type: 'interval',
                    },
                    {
                        time: '17h00',
                        title: 'Neurodivergências: o que mudou na forma de compreender o desenvolvimento infantil',
                        speakers: 'Paula Fratti e Lucelmo Lacerda de Brito',
                        description: 'TEA, TDAH, altas habilidades e outros perfis de desenvolvimento desafiam antigas certezas sobre infância, aprendizagem e inclusão. O que os profissionais precisam atualizar?',
                        type: 'named',
                    },
                    {
                        time: '18h30',
                        title: 'Encerramento',
                        type: 'system',
                    },
                ],
            },
            {
                id: 'palco2',
                label: 'Palco 2',
                fullTitle: 'PALCO 2 — SAÚDE MENTAL, DESENVOLVIMENTO E NEURODIVERGÊNCIAS',
                events: [
                    {
                        time: '09h00',
                        title: 'Não há programação neste horário - todos estarão na abertura',
                        type: 'info',
                    },
                    {
                        time: '09h30',
                        title: 'Não há programação neste horário - todos estarão na abertura',
                        type: 'info',
                    },
                    {
                        time: '10h30',
                        title: 'Intervalo',
                        type: 'interval',
                    },
                    {
                        time: '11h00',
                        title: 'A epidemia silenciosa da ansiedade infantil e juvenil',
                        speakers: 'Wimer Bottura Júnior',
                        description: 'Ansiedade e depressão não fazem parte do escopo de atuação do educador parental, mas estão cada vez mais presentes nas famílias atendidas. Qual é o papel desse profissional diante desse cenário? O que ele pode observar, como orientar pais e educadores e quais sinais indicam a necessidade de encaminhamento para psicólogos, médicos ou psiquiatras?',
                        type: 'named',
                    },
                    {
                        time: '12h30',
                        title: 'Almoço',
                        type: 'interval',
                    },
                    {
                        time: '14h00',
                        title: 'A adolescência mudou. Nós mudamos com ela? Como atuar com adolescentes diante das novas demandas.',
                        speakers: 'Jacqueline Vilela',
                        description: 'Saúde mental, pertencimento, identidade, sexualidade, redes sociais e projeto de vida atravessam a adolescência atual. Como o educador parental pode conduzir conversas, orientar famílias e reconhecer os limites de sua atuação diante dessas demandas?',
                        type: 'named',
                    },
                    {
                        time: '15h30',
                        title: 'Trauma, apego e desenvolvimento: o papel e os limites do educador parental',
                        speakers: 'Cecília Laureano',
                        description: 'Famílias marcadas por experiências traumáticas podem chegar ao educador parental com dificuldades de vínculo, comportamento e regulação emocional. O que esse profissional pode acolher e orientar, quais cuidados precisa ter em sua atuação e quando o encaminhamento clínico é necessário?',
                        type: 'named',
                    },
                    {
                        time: '16h30',
                        title: 'Intervalo',
                        type: 'interval',
                    },
                    {
                        time: '17h00',
                        title: 'Neurociência ou "neuro-mito"? O que o educador parental precisa saber para não cair em armadilhas',
                        speakers: 'A confirmar',
                        description: 'Dopamina, córtex pré-frontal, cérebro emocional, autorregulação e neuroplasticidade aparecem cada vez mais in cursos, conteúdos e explicações sobre o comportamento de crianças e adolescentes. Mas nem tudo o que usa a linguagem da neurociência é sustentado pela ciência. O que o educador parental realmente precisa compreender para qualificar sua atuação? Quais conceitos são úteis e quais simplificações, neuromitos e explicações sedutoras precisam ser questionados?',
                        type: 'named',
                    },
                    {
                        time: '18h30',
                        title: 'Encerramento',
                        type: 'system',
                    },
                ],
            },
            {
                id: 'palco3',
                label: 'Palco 3',
                fullTitle: 'PALCO 3 — RELAÇÕES, PROTEÇÃO E PRÁTICAS PARENTAIS',
                events: [
                    {
                        time: '09h00',
                        title: 'Não há programação neste horário - todos estarão na abertura',
                        type: 'info',
                    },
                    {
                        time: '09h30',
                        title: 'Não há programação neste horário - todos estarão na abertura',
                        type: 'info',
                    },
                    {
                        time: '10h30',
                        title: 'Intervalo',
                        type: 'interval',
                    },
                    {
                        time: '11h00',
                        title: 'Limites, frustração e coragem: como orientar pais a preparar os filhos para a vida',
                        speakers: 'Bete P. Rodrigues e Aline Cestarolli',
                        description: 'Quando os pais evitam toda frustração, cedem diante dos conflitos ou resolvem constantemente as dificuldades dos filhos, podem acabar interferindo no desenvolvimento da autonomia e da confiança. Como o educador parental pode ajudá-los a sustentar limites, diferenciar proteção de superproteção e encorajar crianças e adolescentes a enfrentar desafios de maneira compatível com cada fase do desenvolvimento?',
                        type: 'named',
                    },
                    {
                        time: '12h30',
                        title: 'Almoço',
                        type: 'interval',
                    },
                    {
                        time: '14h00',
                        title: 'O comportamento infantil está sempre dizendo alguma coisa',
                        speakers: 'Iara Mastine e Glaucia Marini',
                        description: 'Birras, agressividade, oposição, choro e desregulação emocional podem comunicar necessidades, dificuldades e sobrecarga. Como compreender o que está por trás desses comportamentos e ajudar os pais a responder com mais clareza, segurança e consciência?',
                        type: 'named',
                    },
                    {
                        time: '15h30',
                        title: 'Educação Sexual e Rede de Proteção: Como lidar com os perigos, acionar responsáveis e agir em cada situação',
                        speakers: 'Kênnya Gralha',
                        description: 'Educação sexual, consentimento e prevenção do abuso continuam sendo fundamentais, mas o que o educador parental deve fazer quando uma criança ou adolescente revela uma situação de violência? Como acolher sem investigar, orientar a família, respeitar os limites da atuação profissional e cumprir sua responsabilidade ética e legal?',
                        type: 'named',
                    },
                    {
                        time: '16h30',
                        title: 'Intervalo',
                        type: 'interval',
                    },
                    {
                        time: '17h00',
                        title: 'Quando o casal termina, a parentalidade continua: como atravessar o divórcio sem colocar os filhos no conflito',
                        speakers: 'Cris Rayes e Michele Gorin',
                        description: 'A separação não começa no dia em que o divórcio é formalizado, e os conflitos entre os adultos podem rapidamente atravessar a relação com os filhos. Como orientar pais antes, durante e depois da ruptura para reduzir disputas, preservar a relação parental e impedir que as crianças sejam colocadas no centro do conflito? Um olhar sobre coparentalidade, comunicação e decisões que ajudam a proteger os filhos quando o casal deixa de existir, mas a família precisa se reorganizar.',
                        type: 'named',
                    },
                    {
                        time: '18h30',
                        title: 'Encerramento',
                        type: 'system',
                    },
                ],
            },
            {
                id: 'arena',
                label: 'Arena Ciranda Cultural',
                fullTitle: 'ARENA CIRANDA CULTURAL',
                events: [
                    { time: '10h30', title: 'Roda de conversa com autor convidado', type: 'named' },
                    { time: '12h30', title: 'Roda de conversa com autor convidado', type: 'named' },
                    { time: '16h30', title: 'Roda de conversa com autor convidado', type: 'named' },
                ],
            },
        ],
    },
    {
        id: 1,
        date: '20 Novembro',
        dayLabel: 'Dia 2',
        weekday: 'sexta-feira',
        access: 'professional',
        accessLabel: 'Exclusivo para profissionais',
        themeColor: '#3399CC',
        dayTitle: 'DIA 2 — 20/11 — AGIR',
        daySubTitle: 'Como respondemos aos desafios da atualidade? Descubra caminhos práticos para fortalecer vínculos, proteger crianças e transformar sua atuação profissional.',
        credenciamento: [
            { time: '08h00' },
        ],
        overviewHighlights: ['Ana Luíza Meireles', 'Elisa Altafim', 'Dani Junco', 'Fechamento do 7º Congresso'],
        stages: [
            {
                id: 'palco1',
                label: 'Palco 1',
                fullTitle: 'PALCO 1 — EDUCAÇÃO PARENTAL COMO CAUSA SOCIAL',
                events: [
                    {
                        time: '09h00',
                        title: 'Da casa para o mundo: por que a educação parental é uma causa de toda a sociedade?',
                        speakers: 'Rodolfo Canônico e Thaís Ferreira',
                        description: 'Violência, aprendizagem, saúde mental, produtividade e desenvolvimento humano são influenciados pelas relações familiares. Como tirar a educação parental da esfera exclusivamente privada e transformá-la em pauta social, institucional e política?',
                        type: 'named',
                    },
                    { time: '10h30', title: 'Intervalo', type: 'interval' },
                    { time: '11h00', title: 'A DEFINIR', type: 'placeholder' },
                    { time: '12h30', title: 'Almoço', type: 'interval' },
                    {
                        time: '14h00',
                        title: 'Famílias apoiadas, organizações mais fortes',
                        speakers: 'Ana Luíza Meireles, Luciana Catonny e Luíza Gottschalk',
                        description: 'Cada vez mais organizações compreendem que apoiar pais e cuidadores é também uma estratégia de saúde, retenção e desenvolvimento humano. O que as empresas podem fazer para fortalecer quem educa?',
                        type: 'named',
                    },
                    {
                        time: '15h30',
                        title: 'Educar sem excluir: o que o educador parental precisa saber sobre diversidade, preconceito e pertencimento',
                        speakers: 'Magda Figueiredo',
                        description: 'Racismo, homofobia, transfobia e outras formas de discriminação atravessam a infância, a adolescência e as relações familiares, mesmo quando não aparecem como a queixa principal de uma família. Como o educador parental reconhece seus próprios pontos cegos, conduz conversas difíceis e orienta famílias sem reproduzir preconceitos ou simplificar experiências que exigem conhecimento específico?',
                        type: 'named',
                    },
                    { time: '16h30', title: 'Intervalo', type: 'interval' },
                    {
                        time: '17h00',
                        title: 'Fechamento do 7º Congresso Internacional de Educação Parental com convidado especial',
                        type: 'system',
                    },
                    {
                        time: '18h30',
                        title: 'Coquetel exclusivo para Embaixadores',
                        type: 'special',
                    },
                ],
            },
            {
                id: 'palco2',
                label: 'Palco 2',
                fullTitle: 'PALCO 2 — IMPLEMENTAÇÃO EM ESCOLAS, CLÍNICAS E INSTITUIÇÕES',
                events: [
                    {
                        time: '09h00',
                        title: 'Da teoria à prática: como implementar programas de educação parental nas escolas',
                        speakers: 'Daniela Hoppe',
                        description: 'Muito além das palestras para pais: caminhos para construir programas permanentes de fortalecimento das famílias dentro das instituições de ensino.',
                        type: 'named',
                    },
                    { time: '10h30', title: 'Intervalo', type: 'interval' },
                    {
                        time: '11h00',
                        title: 'Educação parental na prática clínica: quando a família também precisa entrar no cuidado',
                        speakers: 'Patrícia Noleto (a confirmar)',
                        description: 'Psicólogos, médicos, terapeutas e outros profissionais descobrem que cuidar apenas da criança muitas vezes não basta. Como envolver os pais e cuidadores no processo do cuidado?',
                        type: 'named',
                    },
                    { time: '12h30', title: 'Almoço', type: 'interval' },
                    {
                        time: '14h00',
                        title: 'Quando escola e família deixam de ser adversárias',
                        speakers: 'Aline Castro',
                        description: 'Conflitos, expectativas e comunicação ainda desafiam a relação entre famílias e instituições de ensino. Como construir alianças que favoreçam o desenvolvimento das crianças?',
                        type: 'named',
                    },
                    {
                        time: '15h30',
                        title: 'Muito além do certificado: o profissional que o futuro vai exigir',
                        speakers: 'Carol Bueno',
                        description: 'Formação técnica é o ponto de partida, mas a atuação também exige escuta, comunicação, ética, capacidade de trabalhar em rede, atualização e clareza sobre os próprios limites.',
                        type: 'named',
                    },
                    { time: '16h30', title: 'Intervalo', type: 'interval' },
                    { time: '17h00', title: 'Não há programação neste horário', type: 'info' },
                    {
                        time: '18h30',
                        title: 'Coquetel exclusivo para Embaixadores',
                        type: 'special',
                    },
                ],
            },
            {
                id: 'palco3',
                label: 'Palco 3',
                fullTitle: 'PALCO 3 — CARREIRA, AUTORIDADE E NEGÓCIOS PARA EDUCADORES PARENTAIS',
                events: [
                    {
                        time: '09h00',
                        title: 'Ciência sem distorção: como pesquisar, interpretar e comunicar evidências',
                        speakers: 'Elisa Altafim e Priscila Xavier',
                        description: 'Como produzir conteúdo de qualidade, combater a desinformação e construir autoridade sem abrir mão do rigor científico.',
                        type: 'named',
                    },
                    { time: '10h30', title: 'Intervalo', type: 'interval' },
                    {
                        time: '11h00',
                        title: 'O educador parental empreendedor: como construir um trabalho sustentável em educação parental',
                        speakers: 'Larissa Dorneles',
                        description: 'Consultório, cursos, escolas, empresas, grupos, produtos digitais e comunidades. Como construir um modelo de atuação sustentável sem perder de vista o propósito.',
                        type: 'named',
                    },
                    { time: '12h30', title: 'Almoço', type: 'interval' },
                    {
                        time: '14h00',
                        title: 'Como produzir conteúdo sem perder a própria voz',
                        speakers: 'Nathália Garrote',
                        description: 'Produzir conteúdo pode gerar insegurança, comparação e a sensação de precisar representar um personagem nas redes. Como transformar conhecimento e experiências profissionais em narrativas claras, éticas e coerentes com a própria forma de trabalhar?',
                        type: 'named',
                    },
                    {
                        time: '15h30',
                        title: 'A coragem de se posicionar profissionalmente: Decisão, risco e reinvenção na construção de uma carreira.',
                        speakers: 'Dani Junco',
                        description: 'Muitas decisões profissionais que tomamos dependem da decisão de agir, de correr riscos, de se reinventar.',
                        type: 'named',
                    },
                    { time: '16h30', title: 'Intervalo', type: 'interval' },
                    { time: '17h00', title: 'Não há programação neste horário', type: 'info' },
                    {
                        time: '18h30',
                        title: 'Coquetel exclusivo para Embaixadores',
                        type: 'special',
                    },
                ],
            },
            {
                id: 'arena',
                label: 'Arena Ciranda Cultural',
                fullTitle: 'ARENA CIRANDA CULTURAL',
                events: [
                    { time: '10h30', title: 'Roda de conversa com autor convidado', type: 'named' },
                    { time: '12h30', title: 'Roda de conversa com autor convidado', type: 'named' },
                    { time: '16h30', title: 'Roda de conversa com autor convidado', type: 'named' },
                ],
            },
        ],
    },
    {
        id: 2,
        date: '21 Novembro',
        dayLabel: 'Dia 3',
        weekday: 'sábado',
        access: 'all',
        accessLabel: 'Aberto também para pais e cuidadores',
        themeColor: '#ED9F8C',
        dayTitle: 'DIA 3 — 21/11 — CONVERSAR',
        daySubTitle: 'As conversas que toda família precisa ter — e que todo profissional precisa saber conduzir.',
        credenciamento: [
            { time: '07h30' },
        ],
        overviewHighlights: ['Maya Eigenmann', 'Daniel Becker e Flávia Reis', 'Elisama Santos', 'Telma Abrahão'],
        stages: [
            {
                id: 'palco1',
                label: 'Palco 1',
                fullTitle: 'PALCO 1 — GRANDES CONVERSAS SOBRE VÍNCULO E AUTONOMIA',
                events: [
                    {
                        time: '09h00',
                        title: 'Como continuar sendo importante na vida dos nossos filhos',
                        speakers: 'Maya Eigenmann',
                        description: 'À medida que os filhos crescem, a presença dos pais muda de forma. Como continuar sendo referência, preservar a confiança e manter proximidade sem invadir a autonomia que crianças e adolescentes precisam construir?',
                        type: 'named',
                    },
                    {
                        time: '09h30',
                        title: 'Quando a família muda: separações, crises, recomeços e novos vínculos',
                        speakers: 'Nanda Perim',
                        description: 'Separações, perdas, doenças, crises financeiras, afastamentos e novas configurações podem modificar profundamente a vida familiar. Mesmo atravessando rupturas e períodos difíceis, uma família continua sendo família e pode reconstruir vínculos, reorganizar sua história e recomeçar.',
                        type: 'named',
                    },
                    { time: '10h30', title: 'Intervalo', type: 'interval' },
                    {
                        time: '11h00',
                        title: 'As marcas da infância: o que carregamos e o que não queremos repetir',
                        speakers: 'Telma Abrahão',
                        description: 'A infância deixa marcas que podem aparecer nas nossas escolhas, medos, reações e na forma como educamos. Como reconhecer o que carregamos da própria história, evitar repetições que causam sofrimento e oferecer aos filhos uma infância mais protegida, segura e consciente?',
                        type: 'named',
                    },
                    { time: '12h30', title: 'Almoço', type: 'interval' },
                    {
                        time: '14h00',
                        title: 'Filhos felizes ou filhos preparados? O grande dilema da parentalidade contemporânea',
                        speakers: 'Daiana Garbin e Thiago Godoy',
                        description: 'Na tentativa de evitar frustrações, muitos pais se perguntam até que ponto devem proteger e quando precisam permitir que os filhos enfrentem dificuldades. Como equilibrar acolhimento, responsabilidade, autonomia e preparo para a vida?',
                        type: 'named',
                    },
                    { time: '15h30', title: 'Intervalo', type: 'interval' },
                    {
                        time: '16h00',
                        title: 'O que toda criança gostaria que os adultos soubessem',
                        speakers: 'Elisama Santos',
                        description: 'Crianças nem sempre conseguem explicar o que sentem, precisam ou temem. Uma conversa sobre escuta, comunicação e sobre como os adultos podem compreender melhor o que aparece por trás de silêncios, reações e comportamentos.',
                        type: 'named',
                    },
                    { time: '17h30', title: 'Encerramento', type: 'system' },
                ],
            },
            {
                id: 'palco2',
                label: 'Palco 2',
                fullTitle: 'PALCO 2 — DESAFIOS CONTEMPORÂNEOS DAS FAMÍLIAS',
                events: [
                    {
                        time: '09h00',
                        title: 'Famílias atípicas: como cuidar do filho sem se perder no caminho',
                        speakers: 'Rosely Maria e convidados',
                        description: 'Quando o desenvolvimento de um filho não segue o percurso esperado, surgem dúvidas, lutos, sobrecarga e a necessidade de reorganizar a vida familiar. Como acolher essa reality e construir caminhos possíveis sem reduzir a criança ao diagnóstico?',
                        type: 'named',
                    },
                    { time: '09h30', title: 'Famílias atípicas (Continuação)', type: 'info' },
                    { time: '10h30', title: 'Intervalo', type: 'interval' },
                    {
                        time: '11h00',
                        title: 'Bullying: como família e escola podem agir antes que piore',
                        speakers: 'Andreza Menezes',
                        description: 'Quando uma criança ou adolescente sofre, presencia ou pratica bullying, a família nem sempre sabe como agir e a escola pode demorar a compreender a dimensão do problema. Como perceber os sinais, acolher sem interrogar, registrar o que está acontecendo e construir uma resposta conjunta?',
                        type: 'named',
                    },
                    { time: '12h30', title: 'Almoço', type: 'interval' },
                    {
                        time: '14h00',
                        title: 'Toda família precisa se sentir parte',
                        speakers: 'Dani Arrais',
                        description: 'Famílias com duas mães, dois pais e outras configurações familiares ainda convivem com perguntas invasivas, formulários que não as representam e espaços que tratam sua existência como exceção. Como conversar com os filhos sobre diversidade e construir ambientes inclusivos?',
                        type: 'named',
                    },
                    { time: '15h30', title: 'Intervalo', type: 'interval' },
                    {
                        time: '16h00',
                        title: 'Sobrecarga materna',
                        speakers: 'Patrícia Fassa, Ana Cardoso e Bebel Soares',
                        description: 'A rotina de cuidado ainda recai de forma desigual sobre muitas mulheres. Como reconhecer a sobrecarga, dividir responsabilidades e construir uma rede de apoio que não dependa de a mãe chegar ao limite para ser percebida?',
                        type: 'named',
                    },
                    { time: '17h30', title: 'Encerramento', type: 'system' },
                ],
            },
            {
                id: 'palco3',
                label: 'Palco 3',
                fullTitle: 'PALCO 3 — RELAÇÕES COTIDIANAS, REPARAÇÃO E MEMÓRIAS',
                events: [
                    {
                        time: '09h00',
                        title: 'A geração online e o vínculo offline: como (re)construir proximidade com crianças e adolescentes na era digital',
                        speakers: 'Fernanda Montano, Eva Pereira e Tamiris Mariano',
                        description: 'Celulares, jogos e redes sociais ocupam cada vez mais espaço na rotina familiar. Como estabelecer acordos, reduzir conflitos e recuperar momentos de conexão sem transformar tudo em vigilância ou proibição?',
                        type: 'named',
                    },
                    {
                        time: '09h30',
                        title: 'Prêmio Family Choice',
                        type: 'special',
                    },
                    { time: '10h30', title: 'Intervalo', type: 'interval' },
                    {
                        time: '11h00',
                        title: 'Uma rotina que ajuda os filhos a crescer — e que a família consegue sustentar',
                        speakers: 'Priscilla Kalil e Karina Tavares',
                        description: 'Sono, horários, participação nas tarefas e pequenas responsabilidades fazem parte da vida familiar, mas podem se transformar em fonte diária de conflito. Como construir uma rotina mais organizada, possível e coerente com cada idade?',
                        type: 'named',
                    },
                    { time: '12h30', title: 'Almoço', type: 'interval' },
                    {
                        time: '14h00',
                        title: 'Meu filho não está bem: como reconhecer os sinais e procurar ajuda',
                        speakers: 'Wimer Bottura Jr',
                        description: 'Isolamento, irritabilidade, crises de ansiedade, mudanças no sono, queda no rendimento e autolesão exigem atenção. Como os pais podem reconhecer sinais de sofrimento e saber quando buscar ajuda profissional?',
                        type: 'named',
                    },
                    { time: '15h30', title: 'Intervalo', type: 'interval' },
                    {
                        time: '16h00',
                        title: 'Paciência ou medo de desagradar? Por que é tão difícil dizer não e sustentar limites',
                        speakers: 'Monalizza Erlacher, Adriana Cruz e Gisele Henzel',
                        description: 'Dizer não, frustrar e sustentar uma decisão pode despertar culpa e medo de prejudicar o vínculo. Como diferenciar paciência de fuga do conflito e estabelecer limites com clareza e respeito?',
                        type: 'named',
                    },
                    { time: '17h30', title: 'Encerramento', type: 'system' },
                ],
            },
            {
                id: 'palco4',
                label: 'Palco 4',
                fullTitle: 'PALCO 4 — EXPERIÊNCIAS E ESPETÁCULOS',
                events: [
                    { time: '09h00', title: 'Não há programação neste horário', type: 'info' },
                    { time: '09h30', title: 'Não há programação neste horário', type: 'info' },
                    { time: '10h30', title: 'Intervalo', type: 'interval' },
                    {
                        time: '11h00',
                        title: 'Nossos Filhos no Século XXI',
                        speakers: 'Daniel Becker e Flávia Reis',
                        description: 'Infância, saúde, tecnologia, escola e relações familiares mudaram rapidamente. Uma conversa sobre os desafios de criar filhos hoje e sobre o que ainda precisa ser preservado.',
                        type: 'named',
                    },
                    { time: '12h30', title: 'Almoço', type: 'interval' },
                    { time: '14h00', title: 'Não há programação neste horário', type: 'info' },
                    { time: '15h30', title: 'Intervalo', type: 'interval' },
                    { time: '16h00', title: 'Não há programação neste horário', type: 'info' },
                    {
                        time: '16h30',
                        title: 'Mamma Ria',
                        speakers: 'Isa Minatel',
                        type: 'special',
                    },
                    { time: '17h30', title: 'Encerramento', type: 'system' },
                ],
            },
            {
                id: 'arena',
                label: 'Arena Ciranda Cultural',
                fullTitle: 'ARENA CIRANDA CULTURAL',
                events: [
                    { time: '10h30', title: 'Roda 7', type: 'named' },
                    { time: '12h30', title: 'Roda 8', type: 'named' },
                    { time: '16h30', title: 'Roda 9', type: 'named' },
                ],
            },
        ],
    },
    {
        id: 3,
        date: '22 Novembro',
        dayLabel: 'Dia 4',
        weekday: 'domingo',
        access: 'all',
        accessLabel: 'Aberto também para pais e cuidadores',
        themeColor: '#ED9F8C',
        dayTitle: 'DIA 4 — 22/11 — TRANSFORMAR',
        daySubTitle: 'Que futuro queremos construir juntos?',
        credenciamento: [
            { time: '07h30' },
        ],
        overviewHighlights: ['Pedro Oliveira', 'Marcos Piangers', 'Pato Fu e Giramundo', 'Elaine Paiva'],
        stages: [
            {
                id: 'palco1',
                label: 'Palco 1',
                fullTitle: 'PALCO 1 — HISTÓRIA, LEGADO E RECOMEÇOS',
                events: [
                    { time: '09h00', title: 'Não há programação neste horário', type: 'info' },
                    { time: '09h30', title: 'Não há programação neste horário', type: 'info' },
                    { time: '10h30', title: 'Intervalo', type: 'interval' },
                    {
                        time: '11h00',
                        title: 'Pais presentes: a paternidade que nossos filhos levam para a vida',
                        speakers: 'Pedro Oliveira',
                        description: 'A presença paterna deixa marcas que acompanham os filhos ao longo da vida. Participar não significa apenas ajudar nas tarefas, mas conhecer a rotina, assumir responsabilidades, sustentar limites, oferecer afeto e construir vínculo.',
                        type: 'named',
                    },
                    { time: '12h30', title: 'Almoço', type: 'interval' },
                    {
                        time: '14h00',
                        title: 'Meu Filho Cresceu. E Agora? Como lidar com a adolescência nesses tempos difíceis',
                        speakers: 'Jacqueline Vilela',
                        description: 'A adolescência modifica a forma como os filhos se comunicam, pedem ajuda, enfrentam limites e buscam autonomia. Muitos pais sentem que perderam espaço justamente quando os adolescentes continuam precisando de orientação.',
                        type: 'named',
                    },
                    {
                        time: '15h00',
                        title: 'As conversas que protegem nossos filhos: corpo, consentimento e segurança digital',
                        speakers: 'Lua Barros e Lisandréa Zonzini Salvariego Colabuono',
                        description: 'Conversar cedo sobre corpo, intimidade, consentimento, pornografia, relacionamentos e segurança digital ajuda crianças e adolescentes a reconhecer limites e procurar ajuda.',
                        type: 'named',
                    },
                    { time: '16h30', title: 'Não há programação neste horário', type: 'info' },
                    { time: '18h00', title: 'Encerramento do Festival Parental 2026', type: 'system' },
                ],
            },
            {
                id: 'palco2',
                label: 'Palco 2',
                fullTitle: 'PALCO 2 — CASAL, REDE DE APOIO E CRISES FAMILIARES',
                events: [
                    {
                        time: '09h00',
                        title: 'Depois que os filhos chegam: como continuar sendo casal e educar juntos',
                        speakers: 'Thiago Queiroz',
                        description: 'A chegada dos filhos transforma a rotina, a intimidade e a forma como o casal toma decisões. Diferenças na educação, cansaço, cobranças e divisão desigual do cuidado podem gerar afastamento e ressentimento.',
                        type: 'named',
                    },
                    { time: '09h30', title: 'Depois que os filhos chegam (Continuação)', type: 'info' },
                    { time: '10h30', title: 'Intervalo', type: 'interval' },
                    { time: '11h00', title: 'Não há programação neste horário', type: 'info' },
                    { time: '12h30', title: 'Almoço', type: 'interval' },
                    {
                        time: '14h00',
                        title: 'Comunicação sem ruídos: Como ajustar a comunicação, reduzir ruídos e preservar a conexão',
                        speakers: 'Alessandra Palazzin',
                        description: 'Quando toda conversa termina em cobrança, defesa ou discussão, pais e filhos deixam de se escutar. Como ajustar a comunicação, reduzir ruídos e preservar a conexão mesmo diante de limites, erros e discordâncias?',
                        type: 'named',
                    },
                    {
                        time: '15h00',
                        title: 'Álcool, vape, drogas, apostas e pornografia: como conversar antes que o problema cresça',
                        speakers: 'Painel de especialistas — palestrantes a definir',
                        description: 'Experimentação, pressão dos amigos, festas, cigarros eletrônicos, uso de substâncias, apostas pelo celular e acesso precoce à pornografia podem chegar à vida dos filhos antes que a família perceba.',
                        type: 'named',
                    },
                    { time: '16h30', title: 'Não há programação neste horário', type: 'info' },
                    { time: '18h00', title: 'Encerramento do Festival Parental 2026', type: 'system' },
                ],
            },
            {
                id: 'palco3',
                label: 'Palco 3',
                fullTitle: 'PALCO 3 — HABILIDADES SOCIOEMOCIONAIS, RITUAIS E BRINCAR',
                events: [
                    {
                        time: '09h00',
                        title: 'Quando você perde a calma: como corrigir seu filho sem usar palavras que machucam',
                        speakers: 'Jéssica Baptista e Aline Ferraz',
                        description: 'Gritos, ameaças e palavras ditas no impulso costumam aparecer justamente nos momentos em que pais e filhos estão mais desorganizados. Como reconhecer os próprios gatilhos, recuperar a calma e orientar a criança com firmeza.',
                        type: 'named',
                    },
                    { time: '09h30', title: 'Quando você perde a calma (Continuação)', type: 'info' },
                    { time: '10h30', title: 'Intervalo', type: 'interval' },
                    {
                        time: '11h00',
                        title: 'Tecnologia a favor das famílias: ferramentas que ajudam a organizar, cuidar e dividir responsabilidades',
                        speakers: 'Representantes de plataformas e iniciativas — a definir',
                        description: 'Aplicativos e soluções digitais podem ajudar famílias a organizar rotinas, dividir responsabilidades, facilitar a comunicação entre adultos que cuidam dos filhos e acompanhar informações importantes da vida familiar.',
                        type: 'named',
                    },
                    { time: '12h30', title: 'Almoço', type: 'interval' },
                    {
                        time: '14h00',
                        title: 'Os rituais que fazem uma família',
                        speakers: 'Elaine Paiva',
                        description: 'Refeições compartilhadas, brincadeiras, histórias, celebrações e pequenas tradições constroem pertencimento e fortalecem vínculos. Como criar rituais possíveis, que façam sentido para a rotina e a história de cada família?',
                        type: 'named',
                    },
                    {
                        time: '15h00',
                        title: 'Inteligência artificial na vida dos nossos filhos: quando ajuda e quando atrapalha',
                        speakers: 'Luciana Loureiro e Marcos Ragazzi (Representante da Rede Bernoulli)',
                        description: 'Tópicos sobre como a tecnologia e IA estão moldando o aprendizado e comportamento dos filhos no cotidiano.',
                        type: 'named',
                    },
                    { time: '16h30', title: 'Não há programação neste horário', type: 'info' },
                    { time: '18h00', title: 'Encerramento do Festival Parental 2026', type: 'system' },
                ],
            },
            {
                id: 'palco4',
                label: 'Palco 4',
                fullTitle: 'PALCO 4 — EXPERIÊNCIAS E ESPETÁCULOS',
                events: [
                    {
                        time: '09h00',
                        title: 'Estado de presença: um adulto inteiro para uma criança',
                        speakers: 'Murilo Gun',
                        description: 'Antes de formar crianças confiantes, curiosas e criativas, precisamos nos tornar adultos mais presentes, conscientes e disponíveis. Uma conversa sobre atenção, propósito e a qualidade das relações.',
                        type: 'named',
                    },
                    { time: '09h30', title: 'Estado de presença (Continuação)', type: 'info' },
                    { time: '10h30', title: 'Intervalo', type: 'interval' },
                    {
                        time: '11h00',
                        title: 'O legado invisível: o que realmente deixamos para nossos filhos',
                        speakers: 'Marcos Piangers',
                        description: 'Muito do que os filhos levam para a vida não está nos discursos, mas na maneira como foram tratados, ouvidos e acompanhados. Uma reflexão sobre tempo, prioridades, presença e as marcas que construímos nas relações cotidianas.',
                        type: 'named',
                    },
                    { time: '12h30', title: 'Almoço', type: 'interval' },
                    { time: '14h00', title: 'Não há programação neste horário', type: 'info' },
                    { time: '15h00', title: 'Não há programação neste horário', type: 'info' },
                    {
                        time: '16h30',
                        title: 'Música de Brinquedo 2',
                        speakers: 'Pato Fu e Grupo Giramundo',
                        description: 'Muito mais do que um show, um reencontro com a infância. Música, teatro de bonecos e instrumentos de brinquedo convidam o público a celebrar a imaginação, a memória afetiva e a alegria de brincar.',
                        type: 'special',
                    },
                    { time: '18h00', title: 'Encerramento do Festival Parental 2026', type: 'system' },
                ],
            },
        ],
    },
];
