/* Skinlab UK — Beauty Routine Builder Logic */

// Product database - realistic UK brands
const products = {
  skincare: {
    dry: [
      { brand: 'CeraVe', name: 'Hydrating Cleanser', type: 'Cleanser', priceRange: 'budget' },
      { brand: 'La Roche-Posay', name: 'Cicaplast Baume B5', type: 'Moisturiser', priceRange: 'mid' },
      { brand: 'The Ordinary', name: 'Hyaluronic Acid 2% + B5', type: 'Serum', priceRange: 'budget' },
      { brand: 'Elemis', name: 'Pro-Collagen Cleansing Balm', type: 'Cleanser', priceRange: 'luxury' },
      { brand: 'Eucerin', name: 'Urea Repair Replenishing Face Cream', type: 'Moisturiser', priceRange: 'mid' },
      { brand: 'Vichy', name: 'Mineral 89', type: 'Serum', priceRange: 'mid' },
      { brand: 'Avene', name: 'XeraCalm A.D. Lipid-Replenishing Cream', type: 'Moisturiser', priceRange: 'mid' },
      { brand: 'Neutrogena', name: 'Hydro Boost Water Gel', type: 'Moisturiser', priceRange: 'budget' }
    ],
    oily: [
      { brand: 'La Roche-Posay', name: 'Effaclar Purifying Foaming Gel', type: 'Cleanser', priceRange: 'mid' },
      { brand: 'The Ordinary', name: 'Niacinamide 10% + Zinc 1%', type: 'Serum', priceRange: 'budget' },
      { brand: 'Paula\'s Choice', name: 'Skin Perfecting 2% BHA Liquid', type: 'Exfoliant', priceRange: 'mid' },
      { brand: 'Clinique', name: 'Oil Control Hydrator', type: 'Moisturiser', priceRange: 'luxury' },
      { brand: 'Bioderma', name: 'Sébium Foaming Gel', type: 'Cleanser', priceRange: 'mid' },
      { brand: 'Kiehl\'s', name: 'Facial Fuel Energizing Moisture Treatment', type: 'Moisturiser', priceRange: 'luxury' },
      { brand: 'Neutrogena', name: 'Oil-Free Acne Wash', type: 'Cleanser', priceRange: 'budget' },
      { brand: 'COSRX', name: 'AHA/BHA Clarifying Treatment Toner', type: 'Toner', priceRange: 'budget' }
    ],
    combination: [
      { brand: 'CeraVe', name: 'Foaming Facial Cleanser', type: 'Cleanser', priceRange: 'budget' },
      { brand: 'The Ordinary', name: 'Natural Moisturising Factors + HA', type: 'Moisturiser', priceRange: 'budget' },
      { brand: 'Paula\'s Choice', name: 'C Skin Recovery', type: 'Serum', priceRange: 'mid' },
      { brand: 'Clinique', name: 'Moisture Surge 72-Hour Hydrator', type: 'Moisturiser', priceRange: 'luxury' },
      { brand: 'Bioderma', name: 'Sensibio Foaming Gel', type: 'Cleanser', priceRange: 'mid' },
      { brand: 'Kiehl\'s', name: 'Ultra Facial Oil-Free Gel Cream', type: 'Moisturiser', priceRange: 'luxury' },
      { brand: 'Neutrogena', name: 'Hydro Boost Water Gel', type: 'Moisturiser', priceRange: 'budget' },
      { brand: 'The Ordinary', name: 'Alpha Arbutin 2% + HA', type: 'Serum', priceRange: 'budget' }
    ],
    sensitive: [
      { brand: 'CeraVe', name: 'Hydrating Gentle Cleanser', type: 'Cleanser', priceRange: 'budget' },
      { brand: 'La Roche-Posay', name: 'Toleriane Sensitive Cream', type: 'Moisturiser', priceRange: 'mid' },
      { brand: 'Avene', name: 'Tolerance Control Soothing Skin Recovery Cream', type: 'Moisturiser', priceRange: 'mid' },
      { brand: 'Eucerin', name: 'Anti-Irritation Soothing Care Dry Skin Day Cream', type: 'Moisturiser', priceRange: 'mid' },
      { brand: 'Bioderma', name: 'Sensibio H2O Micellar Water', type: 'Cleanser', priceRange: 'mid' },
      { brand: 'QV', name: 'Intensive Moisturising Cleanser', type: 'Cleanser', priceRange: 'budget' },
      { brand: 'Dermal Therapy', name: 'Face & Neck Moisturiser', type: 'Moisturiser', priceRange: 'budget' },
      { brand: 'La Roche-Posay', name: 'Cicaplast Baume B5', type: 'Soothing Treatment', priceRange: 'mid' }
    ],
    normal: [
      { brand: 'CeraVe', name: 'Hydrating Cleanser', type: 'Cleanser', priceRange: 'budget' },
      { brand: 'The Ordinary', name: 'Natural Moisturising Factors + HA', type: 'Moisturiser', priceRange: 'budget' },
      { brand: 'Neutrogena', name: 'Hydro Boost Water Gel', type: 'Moisturiser', priceRange: 'budget' },
      { brand: 'Clinique', name: 'Moisture Surge 72-Hour Hydrator', type: 'Moisturiser', priceRange: 'luxury' },
      { brand: 'La Roche-Posay', name: 'Effaclar +', type: 'Serum', priceRange: 'mid' },
      { brand: 'Paula\'s Choice', name: 'Resist Ultra-Light Antioxidant Serum', type: 'Serum', priceRange: 'mid' },
      { brand: 'Kiehl\'s', name: 'Facial Fuel Energizing Moisture Treatment', type: 'Moisturiser', priceRange: 'luxury' },
      { brand: 'Elemis', name: 'Pro-Collagen Marine Cream', type: 'Moisturiser', priceRange: 'luxury' }
    ]
  },
  makeup: {
    base: [
      { brand: 'Charlotte Tilbury', name: 'Flawless Filter', type: 'Primer', priceRange: 'luxury' },
      { brand: 'Fenty Beauty', name: 'Pro Filt\'r Soft Matte Longwear Foundation', type: 'Foundation', priceRange: 'mid' },
      { brand: 'MAC', name: 'Studio Fix Fluid', type: 'Foundation', priceRange: 'luxury' },
      { brand: 'Maybelline', name: 'Fit Me Dewy + Smooth Foundation', type: 'Foundation', priceRange: 'budget' },
      { brand: 'NARS', name: 'Radiant Creamy Concealer', type: 'Concealer', priceRange: 'luxury' },
      { brand: 'e.l.f.', name: 'Hydrating Camo Concealer', type: 'Concealer', priceRange: 'budget' },
      { brand: 'RCMA', name: 'No-Color Powder', type: 'Setting Powder', priceRange: 'mid' },
      { brand: 'Charlotte Tilbury', name: 'Airbrush Flawless Finish Setting Spray', type: 'Setting Spray', priceRange: 'luxury' }
    ],
    eyes: [
      { brand: 'Urban Decay', name: 'Naked3 Palette', type: 'Eyeshadow Palette', priceRange: 'luxury' },
      { brand: 'ColourPop', name: 'Shock Wave Palette', type: 'Eyeshadow Palette', priceRange: 'budget' },
      { brand: 'Maybelline', name: 'Lash Sensational Sky High Mascara', type: 'Mascara', priceRange: 'budget' },
      { brand: 'Benefit', name: 'They\'re Real! Mascara', type: 'Mascara', priceRange: 'mid' },
      { brand: 'NYX', name: 'Professional Makeup Brow Gel', type: 'Brow Gel', priceRange: 'budget' },
      { brand: 'Anastasia Beverly Hills', name: 'Brow Wiz', type: 'Eyebrow Pencil', priceRange: 'luxury' },
      { brand: 'Charlotte Tilbury', name: 'Pillow Talk Lip Cheek', type: 'Lip & Cheek', priceRange: 'luxury' },
      { brand: 'MAC', name: 'Lash Extension染色? Actually it\'s Chromatic', type: 'Mascara', priceRange: 'luxury' }
    ],
    lips: [
      { brand: 'Charlotte Tilbury', name: 'Matte Revolution in Pillow Talk', type: 'Lipstick', priceRange: 'luxury' },
      { brand: 'MAC', name: 'Retro Matte Lipstick in Velvet Teddy', type: 'Lipstick', priceRange: 'luxury' },
      { brand: 'Maybelline', name: 'SuperStay Matte Ink', type: 'Lipstick', priceRange: 'budget' },
      { brand: 'Fenty Beauty', name: 'Gloss Bomb Universal Lip Luminizer', type: 'Lip Gloss', priceRange: 'mid' },
      { brand: 'e.l.f.', name: 'Lip Shine Sheer Lipstick', type: 'Lipstick', priceRange: 'budget' },
      { brand: 'Revlon', name: 'Super Lustrous Lipstick', type: 'Lipstick', priceRange: 'mid' },
      { brand: 'L\'Oreal', name: 'Colour Riche Lipstick', type: 'Lipstick', priceRange: 'mid' },
      { brand: 'NYX', name: 'Soft Matte Lip Cream', type: 'Lipstick', priceRange: 'budget' }
    ]
  }
};

const skinTypes = ['dry', 'oily', 'combination', 'sensitive', 'normal'];
const concernsList = ['acne', 'anti-ageing', 'hydration', 'brightening', 'redness', 'pores', 'texture'];
const budgets = ['budget', 'mid', 'luxury'];
const categories = ['skincare', 'makeup', 'both'];

// DOM Elements
const skinTypeSelect = document.getElementById('skinType');
const concernsContainer = document.getElementById('concerns');
const budgetBtns = document.querySelectorAll('.budget-btn');
const categoryBtns = document.querySelectorAll('.category-btn');
const buildBtn = document.getElementById('buildBtn');
const resultsDiv = document.getElementById('results');

// Initialize concerns tags
function initConcerns() {
  concernsList.forEach(concern => {
    const tag = document.createElement('div');
    tag.className = 'tag-option';
    tag.textContent = concern;
    tag.dataset.concern = concern;
    tag.addEventListener('click', () => toggleConcern(tag));
    concernsContainer.appendChild(tag);
  });
}

function toggleConcern(tag) {
  tag.classList.toggle('selected');
  updateBudgetVisibility();
}

// Show/hide budget based on category
function updateBudgetVisibility() {
  const selectedConcerns = getSelectedConcerns();
  const hasAntiAgeing = selectedConcerns.includes('anti-ageing');
  const category = getSelectedCategory();

  // Show budget options always, but we'll filter products accordingly
  document.querySelectorAll('.budget-btn').forEach(btn => btn.style.display = 'block');
}

function getSelectedConcerns() {
  return Array.from(document.querySelectorAll('.tag-option.selected'))
    .map(el => el.dataset.concern);
}

function getSelectedSkinType() {
  return skinTypeSelect.value;
}

function getSelectedBudget() {
  return document.querySelector('.budget-btn.active').dataset.budget;
}

function getSelectedCategory() {
  return document.querySelector('.category-btn.active').dataset.category;
}

// Build routine
function buildRoutine() {
  const skinType = getSelectedSkinType();
  const concerns = getSelectedConcerns();
  const budget = getSelectedBudget();
  const category = getSelectedCategory();

  if (!skinType || concerns.length === 0) {
    alert('Please select a skin type and at least one concern.');
    return;
  }

  const routine = [];
  let addedProducts = new Set();

  // Add skincare products
  if (category === 'skincare' || category === 'both') {
    // Cleanser (step 1)
    const cleansers = products.skincare[skinType].filter(p => p.type === 'Cleanser' && (budget === 'all' || p.priceRange === budget || budget === 'mid' && p.priceRange === 'budget' || budget === 'luxury' && (p.priceRange === 'luxury' || p.priceRange === 'mid')));
    if (cleansers.length > 0) {
      const product = cleansers[Math.floor(Math.random() * cleansers.length)];
      if (!addedProducts.has(product.brand + product.name)) {
        routine.push({ ...product, step: 1, category: 'Skincare' });
        addedProducts.add(product.brand + product.name);
      }
    }

    // Treatment based on concerns
    if (concerns.includes('acne')) {
      const acneTreatments = products.skincare[skinType].filter(p => (p.name.includes('BHA') || p.name.includes('Acne') || p.name.includes('Niacinamide') || p.name.includes('Effaclar') || p.name.includes('Sébium')) && (budget === 'all' || p.priceRange === budget || budget === 'mid' && p.priceRange === 'budget' || budget === 'luxury' && (p.priceRange === 'luxury' || p.priceRange === 'mid')));
      if (acneTreatments.length > 0) {
        const product = acneTreatments[Math.floor(Math.random() * acneTreatments.length)];
        if (!addedProducts.has(product.brand + product.name)) {
          routine.push({ ...product, step: routine.length + 1, category: 'Skincare' });
          addedProducts.add(product.brand + product.name);
        }
      }
    }

    if (concerns.includes('hydration')) {
      const hydrators = products.skincare[skinType].filter(p => (p.name.includes('Hyaluronic') || p.name.includes('Hydrating') || p.name.includes('Moisture') || p.name.includes('Hydrator')) && (budget === 'all' || p.priceRange === budget || budget === 'mid' && p.priceRange === 'budget' || budget === 'luxury' && (p.priceRange === 'luxury' || p.priceRange === 'mid')));
      if (hydrators.length > 0) {
        const product = hydrators[Math.floor(Math.random() * hydrators.length)];
        if (!addedProducts.has(product.brand + product.name)) {
          routine.push({ ...product, step: routine.length + 1, category: 'Skincare' });
          addedProducts.add(product.brand + product.name);
        }
      }
    }

    if (concerns.includes('anti-ageing')) {
      const antiAge = products.skincare[skinType].filter(p => (p.name.includes('Retinol') || p.name.includes('Peptide') || p.name.includes('Pro-Collagen') || p.name.includes('Anti-Ageing') || p.name.includes('Collagen')) && (budget === 'all' || p.priceRange === budget || budget === 'mid' && p.priceRange === 'budget' || budget === 'luxury' && (p.priceRange === 'luxury' || p.priceRange === 'mid')));
      if (antiAge.length > 0) {
        const product = antiAge[Math.floor(Math.random() * antiAge.length)];
        if (!addedProducts.has(product.brand + product.name)) {
          routine.push({ ...product, step: routine.length + 1, category: 'Skincare' });
          addedProducts.add(product.brand + product.name);
        }
      }
    }

    // Moisturiser (always included)
    const moisturisers = products.skincare[skinType].filter(p => p.type === 'Moisturiser' && (budget === 'all' || p.priceRange === budget || budget === 'mid' && p.priceRange === 'budget' || budget === 'luxury' && (p.priceRange === 'luxury' || p.priceRange === 'mid')));
    if (moisturisers.length > 0) {
      const product = moisturisers[Math.floor(Math.random() * moisturisers.length)];
      if (!addedProducts.has(product.brand + product.name)) {
        routine.push({ ...product, step: routine.length + 1, category: 'Skincare' });
        addedProducts.add(product.brand + product.name);
      }
    }

    // Sunscreen (essential)
    const sunscreens = [
      { brand: 'La Roche-Posay', name: 'Anthelios UVMune 400', type: 'Sunscreen', priceRange: 'mid' },
      { brand: 'Supergoop!', name: 'Unseen Sunscreen', type: 'Sunscreen', priceRange: 'mid' },
      { brand: 'CeraVe', name: 'Hydrating Mineral Sunscreen', type: 'Sunscreen', priceRange: 'budget' },
      { brand: 'ISDIN', name: 'Eryfotona Ageless', type: 'Sunscreen', priceRange: 'luxury' }
    ].filter(p => budget === 'all' || p.priceRange === budget || budget === 'mid' && p.priceRange === 'budget' || budget === 'luxury' && (p.priceRange === 'luxury' || p.priceRange === 'mid'));
    if (sunscreens.length > 0) {
      const product = sunscreens[Math.floor(Math.random() * sunscreens.length)];
      if (!addedProducts.has(product.brand + product.name)) {
        routine.push({ ...product, step: routine.length + 1, category: 'Skincare' });
        addedProducts.add(product.brand + product.name);
      }
    }
  }

  // Add makeup products
  if (category === 'makeup' || category === 'both') {
    if (category === 'both') {
      routine.push({ brand: '—', name: 'Makeup Steps', type: 'Section Break', step: routine.length + 1, category: 'Makeup' });
    }

    // Foundation
    const foundations = products.makeup.base.filter(p => p.type === 'Foundation' && (budget === 'all' || p.priceRange === budget || budget === 'mid' && p.priceRange === 'budget' || budget === 'luxury' && (p.priceRange === 'luxury' || p.priceRange === 'mid')));
    if (foundations.length > 0) {
      const product = foundations[Math.floor(Math.random() * foundations.length)];
      if (!addedProducts.has(product.brand + product.name)) {
        routine.push({ ...product, step: routine.length + 1, category: 'Makeup' });
        addedProducts.add(product.brand + product.name);
      }
    }

    // Concealer
    const concealers = products.makeup.base.filter(p => p.type === 'Concealer' && (budget === 'all' || p.priceRange === budget || budget === 'mid' && p.priceRange === 'budget' || budget === 'luxury' && (p.priceRange === 'luxury' || p.priceRange === 'mid')));
    if (concealers.length > 0) {
      const product = concealers[Math.floor(Math.random() * concealers.length)];
      if (!addedProducts.has(product.brand + product.name)) {
        routine.push({ ...product, step: routine.length + 1, category: 'Makeup' });
        addedProducts.add(product.brand + product.name);
      }
    }

    // Eye products
    if (concerns.includes('brightening') || concerns.includes('anti-ageing')) {
      const eyeProducts = products.makeup.eyes.filter(p => (budget === 'all' || p.priceRange === budget || budget === 'mid' && p.priceRange === 'budget' || budget === 'luxury' && (p.priceRange === 'luxury' || p.priceRange === 'mid')));
      if (eyeProducts.length > 0) {
        const product = eyeProducts[Math.floor(Math.random() * eyeProducts.length)];
        if (!addedProducts.has(product.brand + product.name)) {
          routine.push({ ...product, step: routine.length + 1, category: 'Makeup' });
          addedProducts.add(product.brand + product.name);
        }
      }
    }

    // Lips
    const lipProducts = products.makeup.lips.filter(p => (budget === 'all' || p.priceRange === budget || budget === 'mid' && p.priceRange === 'budget' || budget === 'luxury' && (p.priceRange === 'luxury' || p.priceRange === 'mid')));
    if (lipProducts.length > 0) {
      const product = lipProducts[Math.floor(Math.random() * lipProducts.length)];
      if (!addedProducts.has(product.brand + product.name)) {
        routine.push({ ...product, step: routine.length + 1, category: 'Makeup' });
        addedProducts.add(product.brand + product.name);
      }
    }
  }

  // Trim to max 7 steps
  if (routine.length > 7) {
    routine.splice(7);
  }

  return routine;
}

function getRetailerLink(retailer) {
  const links = {
    lookfantastic: 'https://www.nicolalondors.com/beauty-picks/save-20-with-look-fantastic-discount-code-lftfnicolal',
    sephora: 'https://www.nicolalondors.com/beauty-picks/save-15-with-sephora-uk-discount-code-nicolasph',
    elemis: 'https://www.nicolalondors.com/beauty-picks/elemis-discount-code-15-off',
    tilbury: 'https://www.nicolalondors.com/beauty-picks/charlotte-tilbury-discount-code-15-off'
  };
  return links[retailer] || '#';
}

function getRetailerName(retailer) {
  const names = {
    lookfantastic: 'Lookfantastic',
    sephora: 'Sephora UK',
    elemis: 'Elemis',
    tilbury: 'Charlotte Tilbury'
  };
  return names[retailer] || retailer;
}

function getRelevantRetailers(category) {
  // Return list of retailer keys that sell this category
  if (category === 'Skincare') {
    return ['lookfantastic', 'sephora', 'elemis', 'tilbury'];
  }
  if (category === 'Makeup') {
    return ['lookfantastic', 'sephora', 'tilbury'];
  }
  return ['lookfantastic', 'sephora'];
}

function renderResults(routine) {
  const resultsDiv = document.getElementById('results');
  const header = document.querySelector('.result-header');
  header.innerHTML = `<h3>Your Personalized Routine</h3><p>Based on your skin type and concerns, we recommend the following steps:</p>`;

  const stepsList = document.querySelector('.routine-steps');
  stepsList.innerHTML = '';

  routine.forEach(step => {
    if (step.type === 'Section Break') {
      const divider = document.createElement('div');
      divider.style.cssText = 'grid-column: 1/-1; text-align: center; color: var(--pink-dark); font-weight: 700; margin: 24px 0 12px; font-size: 0.9rem;';
      divider.textContent = step.name;
      stepsList.appendChild(divider);
      return;
    }

    const li = document.createElement('li');
    li.className = 'routine-step';

    const retailers = getRelevantRetailers(step.category);
    const retailer = retailers[Math.floor(Math.random() * retailers.length)];

    li.innerHTML = `
      <div class="step-info">
        <h4>${step.brand} — ${step.name}</h4>
        <p>${step.type} | ${step.priceRange === 'budget' ? 'Budget Friendly' : step.priceRange === 'mid' ? 'Mid-Range' : 'Luxury'}</p>
        ${step.category ? `<div class="step-meta">${step.category}</div>` : ''}
      </div>
      <a href="${getRetailerLink(retailer)}" class="routine-cta" target="_blank" rel="noopener">
        Shop with our ${getRetailerName(retailer)} discount code
      </a>
    `;

    stepsList.appendChild(li);
  });

  resultsDiv.classList.add('visible');
  resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Event listeners
buildBtn.addEventListener('click', () => {
  const routine = buildRoutine();
  if (routine.length === 0) {
    alert('Could not generate a routine with your selections. Try different options.');
    return;
  }
  renderResults(routine);
});

budgetBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    budgetBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

categoryBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    categoryBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Init
initConcerns();
// Set default selections
skinTypeSelect.value = 'normal';
document.querySelector('.budget-btn[data-budget="mid"]').classList.add('active');
document.querySelector('.category-btn[data-category="both"]').classList.add('active');