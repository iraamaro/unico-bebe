// Função para criar o card de produto
function createProductCard(product, isSold = false) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    // Calcular porcentagem de desconto
    const discountPercentage = Math.round(((product.originalPrice - product.discountedPrice) / product.originalPrice) * 100);
    
    // Conteúdo do card
    let cardContent = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <div class="price-info">
                <span class="original-price">R$ ${product.originalPrice.toFixed(2)}</span>
                <span class="discounted-price">R$ ${product.discountedPrice.toFixed(2)}</span>
                <span class="discount-badge">-${discountPercentage}%</span>
            </div>
            <div class="tags">
                <span class="defect-tag">${product.defectType}</span>
                <span class="availability-badge">1 unidade disponível</span>
            </div>
            <a href="produto.html?id=${product.id}" class="btn btn-secondary">Ver detalhes</a>
        </div>
    `;
    
    // Adicionar overlay se o produto estiver vendido
    if (isSold || product.sold) {
        cardContent += '<div class="sold-overlay">VENDIDO</div>';
    }
    
    card.innerHTML = cardContent;
    
    return card;
}

// Função para carregar produtos no carrinho
let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id == productId);
    if (product && !product.sold) {
        cart.push(product);
        updateCartCount();
        alert(`Produto adicionado ao carrinho: ${product.name}`);
    } else {
        alert('Produto não disponível');
    }
}

function updateCartCount() {
    // Em um MVP real, atualizaria o contador do carrinho
    console.log(`Itens no carrinho: ${cart.length}`);
}