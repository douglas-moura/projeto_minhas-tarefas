export const cores = {
    primaria: {
        _100: "#D0F2FE",
        _200: "#A3E1FD",
        _300: "#74CAFB",
        _400: "#51B3F8",
        _500: "#1A8EF4",
        _600: "#136ED1",
        _700: "#0D52AF",
        _800: "#083A8D",
        _900: "#042875",
    },
    secundaria: {
        _100: "#FEF4D1",
        _200: "#FEE5A3",
        _300: "#FCD275",
        _400: "#F9BF52",
        _500: "#F5A11B",
        _600: "#D28113",
        _700: "#B0640D",
        _800: "#8E4A08",
        _900: "#753805"
    },
    cinza: {
        _100: '#E0E0E0',
        _300: '#A2A2A2',
        _500: '#6B6B6B',
        _600: '#4F4F4F',
    },
    branco: '#ffffff',
    preto: '#252525',
}

export const temaClaro = {
    cores: {
        textoDefault: cores.cinza._500,
        textoInvert: cores.branco,
        textoAlt: cores.cinza._300,
        textoDestaque: cores.primaria._500, // Cor para textos destacados
        backgroundDefault: cores.branco,               // Cor principal de fundo da página
        backgroundDestaque: cores.primaria._500,   // Fundo de cards, modais, etc.
        backgroundSecundario: cores.secundaria._500,   // Fundo de cards, modais, etc.
        borda: cores.cinza._100,                // Cor padrão das bordas
        icone: cores.primaria._500,             // Cor padrão dos ícones
        aviso: '#FF503D',                       // Cor para avisos / alertas (ex: vermelho)
        sucesso: '#80BA16',                     // Cor para sucesso (ex: verde)
    },
    espacamento: {
        pequeno: 4,
        medio: 8,
        grande: 16,
        gigante: 24,
    },
    fonte: {
        tamanhoPequeno: 12,
        tamanhoMedio: 16,
        tamanhoGrande: 20,
        tamanhoExtraGrande: 24,
        pesoNormal: '400',
        pesoNegrito: '700',
    },
    borda: {
        raio: 8,  // Raio padrão de bordas
    },
    primaria: {
        pelicula: cores.primaria.medio,
        claro: '#D0F2FE',
        medio: '#1A8EF4',
        escuro: '#0D52AF',
    },
    cinza: {
        pelicula: '#f9f9f9',
        claro: '#f3f3f3',
        medio: '#d7d7d7',
        escuro: '#888888',
    },
    branco: '#ffffff',
    preto: '#252525',
    texto: '#252525',
}

export const temaEscuro = {
    cores: {
        textoDefault: cores.cinza._100,
        textoInvert: cores.branco,
        textoAlt: cores.cinza._300, 
        textoDestaque: cores.primaria._500, // Cor para textos destacados
        backgroundDefault: cores.preto,               // Cor principal de fundo da página
        backgroundDestaque: cores.primaria._500,   // Fundo de cards, modais, etc.
        backgroundSecundario: cores.secundaria._500,   // Fundo de cards, modais, etc.
        borda: cores.branco,                // Cor padrão das bordas
        icone: cores.primaria._500,             // Cor padrão dos ícones
        aviso: '#FF503D',                       // Cor para avisos / alertas (ex: vermelho)
        sucesso: '#80BA16',                     // Cor para sucesso (ex: verde)
    },
    espacamento: {
        pequeno: 4,
        medio: 8,
        grande: 16,
        gigante: 24,
    },
    fonte: {
        tamanhoPequeno: 12,
        tamanhoMedio: 16,
        tamanhoGrande: 20,
        tamanhoExtraGrande: 24,
        pesoNormal: '400',
        pesoNegrito: '700',
    },
    borda: {
        raio: 8,  // Raio padrão de bordas
    },
    primaria: {
        pelicula: cores.primaria.medio,
        claro: '#D0F2FE',
        medio: '#1A8EF4',
        escuro: '#0D52AF',
    },
    cinza: {
        pelicula: '#f9f9f9',
        claro: '#f3f3f3',
        medio: '#d7d7d7',
        escuro: '#888888',
    },
    branco: '#ffffff',
    preto: '#252525',
    texto: '#252525',
}