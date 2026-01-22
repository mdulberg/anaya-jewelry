const shell = document.querySelector('[data-product-shell]');
const crumbsEl = document.querySelector('[data-breadcrumbs]');

const formatPrice = (value, currency = 'EUR') => {
  try {
    return new Intl.NumberFormat('en-IE', { style: 'currency', currency }).format(value);
  } catch {
    return `€${value}`;
  }
};

const getProductId = () => new URLSearchParams(window.location.search).get('id');

const renderNotFound = () => {
  if (!shell) return;
  shell.innerHTML = `
    <div class="about-card">
      <h2>Product not found</h2>
      <p class="detail-desc">We could not locate this piece. Please return to the collection.</p>
      <div class="detail-actions">
        <a class="cta cta--solid" href="index.html#catalog">Back to earrings</a>
      </div>
    </div>
  `;
};

const renderProduct = (product) => {
  if (!shell) return;
  const { name, price, currency, metal, style, size, image, badge, description, details } = product;
  const images = Array.isArray(image) ? image : [image];
  document.title = `${name} | Anaya Jewelry`;
  if (crumbsEl) {
    crumbsEl.textContent = `Home / Earrings / ${name}`;
  }
  shell.innerHTML = `
    <div class="detail-media">
      ${badge ? `<span class="badge">${badge}</span>` : ''}
      <div class="detail-images">
        ${images.map((src) => `<img src="${src}" alt="${name}">`).join('')}
      </div>
    </div>
    <div class="detail-info">
      <h1>${name}</h1>
      <p class="detail-price">${formatPrice(price, currency)}</p>
      <div class="detail-meta">
        <span class="pill">${metal}</span>
        <span class="pill">${style}</span>
        <span class="pill">${size}</span>
      </div>
      <p class="detail-desc">${description}</p>
      <ul class="detail-list">
        ${(details || []).map(item => `<li>${item}</li>`).join('')}
      </ul>
      <div class="detail-actions">
        <a class="cta cta--solid" href="index.html#catalog">Shop collection</a>
        <a class="cta cta--ghost" href="mailto:mdulberg@gmail.com?subject=${encodeURIComponent(name)}">Contact us</a>
      </div>
      <p class="note">Need help? Email mdulberg@gmail.com and we will match you with the right pair.</p>
    </div>
  `;
};

const loadProduct = async () => {
  const id = getProductId();
  try {
    const res = await fetch('data/products.json', { cache: 'no-store' });
    if (!res.ok) throw new Error('Network error');
    const data = await res.json();
    const product = data.find((item) => item.id === id) || data[0];
    if (!product) {
      renderNotFound();
      return;
    }
    renderProduct(product);
  } catch (err) {
    console.error(err);
    renderNotFound();
  }
};

document.addEventListener('DOMContentLoaded', loadProduct);
