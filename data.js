// Dados dos produtos
const products = [
    {
        id: 1,
        name: "Banheira Dobrável Rosa - Peça Única",
        image: "https://placehold.co/300x300/FFB6C1/FFFFFF?text=Banheira+Rosa",
        category: "banho",
        originalPrice: 129.90,
        discountedPrice: 89.90,
        defectDescription: "Leve mancha na lateral direita, visível na foto de detalhe",
        defectType: "Mancha",
        featured: true,
        sold: false
    },
    {
        id: 2,
        name: "Carrinho de Passeio Compacto - Peça Única",
        image: "https://placehold.co/300x300/87CEEB/FFFFFF?text=Carrinho",
        category: "passeio",
        originalPrice: 499.90,
        discountedPrice: 349.90,
        defectDescription: "Pequeno amassado na capota, sem afetar a funcionalidade",
        defectType: "Amassado",
        featured: true,
        sold: false
    },
    {
        id: 3,
        name: "Berço Portátil com Mosquiteiro - Peça Única",
        image: "https://placehold.co/300x300/F5DEB3/FFFFFF?text=Berco+Portatil",
        category: "sono",
        originalPrice: 329.90,
        discountedPrice: 229.90,
        defectDescription: "Arranhões leves no teto do mosquiteiro",
        defectType: "Arranhões",
        featured: true,
        sold: false
    },
    {
        id: 4,
        name: "Troninho Sanfonado Azul - Peça Única",
        image: "https://placehold.co/300x300/ADD8E6/FFFFFF?text=Troninho+Azul",
        category: "banho",
        originalPrice: 79.90,
        discountedPrice: 49.90,
        defectDescription: "Pequena amassadura na base, completamente funcional",
        defectType: "Amassado",
        featured: true,
        sold: false
    },
    {
        id: 5,
        name: "Mordedor de Silicone Colorido - Peça Única",
        image: "https://placehold.co/300x300/FFA07A/FFFFFF?text=Mordedor",
        category: "alimentacao",
        originalPrice: 34.90,
        discountedPrice: 19.90,
        defectDescription: "Pequeno defeito na cor, leve diferença de tonalidade",
        defectType: "Defeito de cor",
        featured: false,
        sold: false
    },
    {
        id: 6,
        name: "Cadeirinha para Refeição - Peça Única",
        image: "https://placehold.co/300x300/DDA0DD/FFFFFF?text=Cadeirinha",
        category: "alimentacao",
        originalPrice: 199.90,
        discountedPrice: 139.90,
        defectDescription: "Pequeno risco na base, não afeta a estabilidade",
        defectType: "Risco",
        featured: false,
        sold: false
    },
    {
        id: 7,
        name: "Kit Higiene com Estojo - Peça Única",
        image: "https://placehold.co/300x300/98FB98/FFFFFF?text=Kit+Higiene",
        category: "banho",
        originalPrice: 89.90,
        discountedPrice: 59.90,
        defectDescription: "Embalagem levemente danificada, produtos intactos",
        defectType: "Embalagem danificada",
        featured: false,
        sold: true
    },
    {
        id: 8,
        name: "Móbile Musical para Berço - Peça Única",
        image: "https://placehold.co/300x300/F0E68C/FFFFFF?text=Mobile",
        category: "sono",
        originalPrice: 149.90,
        discountedPrice: 99.90,
        defectDescription: "Leve desbotamento em um dos personagens",
        defectType: "Desbotamento",
        featured: false,
        sold: true
    }
];