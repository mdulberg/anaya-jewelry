const gridEl = document.querySelector('[data-product-grid]');

const formatPrice = (value, currency = 'EUR') => {
  try {
    return new Intl.NumberFormat('en-IE', { style: 'currency', currency }).format(value);
  } catch {
    return `€${value}`;
  }
};

const renderCard = (product) => {
  const { id, name, price, currency, metal, style, image, badge } = product;
  const priceLabel = formatPrice(price, currency);
  const mainImage = Array.isArray(image) ? image[0] : image;
  return `
    <article class="product-card">
      <a href="product.html?id=${encodeURIComponent(id)}" aria-label="${name}">
        <div class="image-wrap">
          ${badge ? `<span class="badge">${badge}</span>` : ''}
          <img src="${mainImage}" alt="${name}">
        </div>
        <div class="product-body">
          <p class="product-name">${name}</p>
          <p class="product-meta">${metal} • ${style}</p>
          <div class="price-row">
            <span class="price">${priceLabel}</span>
            <span class="chip">View</span>
          </div>
        </div>
      </a>
    </article>
  `;
};

const renderProducts = (products = []) => {
  if (!gridEl) return;
  gridEl.innerHTML = products.map(renderCard).join('');
};

const showError = () => {
  gridEl.innerHTML = `
    <div class="product-card">
      <div class="product-body">
        <p class="product-name">We could not load the collection.</p>
        <p class="product-meta">Please refresh the page.</p>
      </div>
    </div>
  `;
};

const loadProducts = async () => {
  try {
    const res = await fetch('data/products.json', { cache: 'no-store' });
    if (!res.ok) throw new Error('Network error');
    const data = await res.json();
    renderProducts(data);
  } catch (err) {
    console.error(err);
    showError();
  }
};

document.addEventListener('DOMContentLoaded', loadProducts);
