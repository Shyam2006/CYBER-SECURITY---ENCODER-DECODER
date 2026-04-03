// ─── State ────────────────────────────────────────────────────────────────────
let activeFilter = 'all';

// ─── Navbar scroll effect ─────────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ─── Hamburger menu ───────────────────────────────────────────────────────────
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.toggle('open');
  document.getElementById('hamburger').classList.toggle('active');
});

function closeMobileMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
  document.getElementById('hamburger').classList.remove('active');
}

// ─── Filter buttons ───────────────────────────────────────────────────────────
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    renderCards(activeFilter);
  });
});

// ─── Render recipe cards ──────────────────────────────────────────────────────
function renderCards(filter) {
  const grid = document.getElementById('recipeGrid');
  const filtered = filter === 'all'
    ? RECIPES
    : RECIPES.filter(r => r.tags.includes(filter));

  if (filtered.length === 0) {
    grid.innerHTML = '<p class="no-results">No recipes found for this category.</p>';
    return;
  }

  grid.innerHTML = filtered.map(r => `
    <article class="card" onclick="openModal(${r.id})" tabindex="0" onkeydown="if(event.key==='Enter')openModal(${r.id})">
      <div class="card-img-wrap">
        <img src="${r.image}" alt="${r.name}" loading="lazy" />
        <span class="card-badge ${r.type}">${r.badge}</span>
      </div>
      <div class="card-body">
        <div class="card-meta-top">
          <span class="card-tag">${r.tags[0]}</span>
          <span class="card-diff diff-${r.difficulty.toLowerCase()}">${r.difficulty}</span>
        </div>
        <h3>${r.name}</h3>
        <p>${r.description.substring(0, 100)}…</p>
        <div class="card-footer">
          <span>⏱ ${r.time}</span>
          <span>🍸 ${r.serves} serving${r.serves > 1 ? 's' : ''}</span>
          <button class="card-btn">View Recipe</button>
        </div>
      </div>
    </article>
  `).join('');

  // Animate cards in
  requestAnimationFrame(() => {
    document.querySelectorAll('.card').forEach((card, i) => {
      card.style.animationDelay = `${i * 0.06}s`;
      card.classList.add('card-enter');
    });
  });
}

// ─── Modal ────────────────────────────────────────────────────────────────────
function openModal(id) {
  const r = RECIPES.find(x => x.id === id);
  if (!r) return;

  document.getElementById('modalImg').src = r.image;
  document.getElementById('modalImg').alt = r.name;
  document.getElementById('modalBadge').textContent = r.badge;
  document.getElementById('modalBadge').className = `modal-badge ${r.type}`;
  document.getElementById('modalCategory').textContent = r.tags.join(' · ');
  document.getElementById('modalTitle').textContent = r.name;
  document.getElementById('modalDesc').textContent = r.description;
  document.getElementById('modalDiff').textContent = r.difficulty;
  document.getElementById('modalTime').textContent = r.time;
  document.getElementById('modalServes').textContent = r.serves;

  document.getElementById('modalIngredients').innerHTML =
    r.ingredients.map(i => `<li>${i}</li>`).join('');
  document.getElementById('modalInstructions').innerHTML =
    r.instructions.map(i => `<li>${i}</li>`).join('');

  if (r.tip) {
    document.getElementById('modalTip').textContent = r.tip;
    document.getElementById('modalTipWrap').style.display = 'flex';
  } else {
    document.getElementById('modalTipWrap').style.display = 'none';
  }

  const overlay = document.getElementById('modalOverlay');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ─── Init ─────────────────────────────────────────────────────────────────────
renderCards('all');

// Section anchor nav for cocktails/mocktails
document.querySelector('a[href="#cocktails"]').addEventListener('click', e => {
  e.preventDefault();
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.filter === 'cocktail');
  });
  activeFilter = 'cocktail';
  renderCards('cocktail');
  document.getElementById('recipes').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('a[href="#mocktails"]').addEventListener('click', e => {
  e.preventDefault();
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.filter === 'mocktail');
  });
  activeFilter = 'mocktail';
  renderCards('mocktail');
  document.getElementById('recipes').scrollIntoView({ behavior: 'smooth' });
});
