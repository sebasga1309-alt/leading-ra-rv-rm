/**
 * ZOO·XR - Interactive Engine
 * Handles theme toggling, perspective switching, simulator layer management,
 * and interactive SVG holographic overlays.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initPerspectiveTabs();
  initXRSimulator();
  initFAQAccordion();
  initMobileNav();
  initScrollEffects();
});

/* --------------------------------------------------------------------------
   1. Theme Management (Light / Dark Mode)
   -------------------------------------------------------------------------- */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (!themeToggleBtn) return;

  // Retrieve saved preference or check OS preference
  const savedTheme = localStorage.getItem('zoo_xr_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const currentTheme = savedTheme ? savedTheme : (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', currentTheme);

  themeToggleBtn.addEventListener('click', () => {
    const activeTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('zoo_xr_theme', newTheme);
    
    // Announce for screen readers
    themeToggleBtn.setAttribute('aria-label', `Cambiar a modo ${newTheme === 'dark' ? 'claro' : 'oscuro'}`);
  });
}

/* --------------------------------------------------------------------------
   2. Perspective Switcher (Estudiante vs Profesional)
   -------------------------------------------------------------------------- */
function initPerspectiveTabs() {
  const tabs = document.querySelectorAll('.perspective-tab');
  const panels = document.querySelectorAll('.perspective-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-target');

      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   3. Interactive XR Simulator
   -------------------------------------------------------------------------- */
const SIMULATOR_DATA = {
  normal: {
    category: 'Cámara Estándar de Campo',
    title: 'Visión Real Sin Filtros',
    description: 'Inspección visual tradicional de una hembra bovina Holstein en lote de pastoreo. Representa el punto de partida zootécnico antes de la intervención de tecnologías inmersivas.',
    hudText: 'MODO ÓPTICO DIRECTO · 1080p 60fps',
    indicators: [
      { name: 'Identificación Visual', val: 'Caravana #4028' },
      { name: 'Comportamiento Observado', val: 'Pastoreo Activo' },
      { name: 'Condición Aparente', val: 'Saludable / Alerta' },
      { name: 'Iluminación Ambiental', val: 'Luz Natural 850 lx' }
    ]
  },
  ar: {
    category: 'Realidad Aumentada (RA) · Campo',
    title: 'HUD Biométrico y Telemetría en Vivo',
    description: 'Superposición de datos fisiológicos recogidos por sensores IoT y visión artificial con gafas inteligentes: temperatura infrarroja, frecuencia de rumia y score corporal instantáneo.',
    hudText: 'RA ACTIVA · TELEMETRÍA BIOMÉTRICA CONECTADA',
    indicators: [
      { name: 'Frecuencia Cardíaca', val: '72 bpm (Normal)' },
      { name: 'Temperatura Superficial', val: '38.6 °C (Normotermia)' },
      { name: 'Score Corporal (BCS)', val: '3.5 / 5.0 (Óptimo)' },
      { name: 'Tiempo de Rumia Diario', val: '485 min / 24h' }
    ]
  },
  mr: {
    category: 'Realidad Mixta (RM) · Laboratorio',
    title: 'Gemelo Digital y Anatomía Rumiante',
    description: 'Despliegue holográfico tridimensional del sistema digestivo poligástrico en tiempo real. Permite al estudiante y al nutricionista evaluar la fermentación ruminal e interactuar con cada compartimento.',
    hudText: 'RM HOLOGRAMA · ANATOMÍA POLIGÁSTRICA 3D',
    indicators: [
      { name: 'Volumen Ruminal', val: '185 Litros (Llenado 82%)' },
      { name: 'pH Ruminal Estimado', val: '6.4 (Fermentación Estable)' },
      { name: 'Contracciones de Retículo', val: '3 cada 2 minutos' },
      { name: 'Población Microbiana', val: '10¹⁰ bacterias / ml' }
    ]
  },
  vr: {
    category: 'Realidad Virtual (RV) · Simulación',
    title: 'Bioclimatología & Confort en Establo',
    description: 'Inmersión 360° en la nave ganadera para auditar el microclima. Visualiza vectores de ventilación, mapa de estrés calórico por índice ITH y confort en cama sin perturbar el lote.',
    hudText: 'RV SIMULACIÓN · CONFORT BIOCLIMÁTICO 360°',
    indicators: [
      { name: 'Índice ITH (Temp-Humedad)', val: '67 (Zona Confort)' },
      { name: 'Velocidad de Flujo de Aire', val: '2.4 m/s (Ventilador Lote 2)' },
      { name: 'Tiempo de Descanso en Cama', val: '13.2 horas / día' },
      { name: 'Riesgo Estrés Térmico', val: 'Nulo (Bajo Control)' }
    ]
  }
};

function initXRSimulator() {
  const modeButtons = document.querySelectorAll('.sim-mode-btn');
  const catEl = document.getElementById('sim-data-cat');
  const titleEl = document.getElementById('sim-data-title');
  const descEl = document.getElementById('sim-data-desc');
  const hudTextEl = document.getElementById('sim-hud-status-text');
  const indicatorsContainer = document.getElementById('sim-indicators-list');

  const layerNormal = document.getElementById('sim-layer-normal');
  const layerAR = document.getElementById('sim-layer-ar');
  const layerMR = document.getElementById('sim-layer-mr');
  const layerVR = document.getElementById('sim-layer-vr');

  const layers = {
    normal: layerNormal,
    ar: layerAR,
    mr: layerMR,
    vr: layerVR
  };

  modeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.getAttribute('data-mode');
      if (!SIMULATOR_DATA[mode]) return;

      // Update active button
      modeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update layers visibility
      Object.keys(layers).forEach(k => {
        if (layers[k]) {
          if (k === mode) {
            layers[k].classList.remove('hidden');
          } else if (mode === 'normal' || k !== 'normal') {
            layers[k].classList.add('hidden');
          }
        }
      });

      // Keep base cow visible unless VR mode replaces it with environmental mesh
      if (mode === 'vr') {
        if (layerNormal) layerNormal.classList.remove('hidden');
      } else {
        if (layerNormal) layerNormal.classList.remove('hidden');
      }

      // Update texts
      const data = SIMULATOR_DATA[mode];
      if (catEl) catEl.textContent = data.category;
      if (titleEl) titleEl.textContent = data.title;
      if (descEl) descEl.textContent = data.description;
      if (hudTextEl) hudTextEl.textContent = data.hudText;

      // Render indicators
      if (indicatorsContainer) {
        indicatorsContainer.innerHTML = data.indicators.map(item => `
          <div class="indicator-item">
            <span class="indicator-name">${item.name}</span>
            <span class="indicator-val">${item.val}</span>
          </div>
        `).join('');
      }
    });
  });

  // Setup anatomical hotspot tooltips for MR
  const hotspots = document.querySelectorAll('.sim-hotspot');
  const hintEl = document.getElementById('sim-dynamic-hint');

  hotspots.forEach(spot => {
    spot.addEventListener('mouseenter', () => {
      const info = spot.getAttribute('data-info');
      if (hintEl && info) {
        hintEl.innerHTML = `<strong>Compartimento:</strong> ${info}`;
      }
    });
    spot.addEventListener('mouseleave', () => {
      if (hintEl) {
        hintEl.innerHTML = `Haz clic en los modos superiores para alternar entre RA, RV y RM en tiempo real.`;
      }
    });
    spot.addEventListener('click', () => {
      const info = spot.getAttribute('data-info');
      if (hintEl && info) {
        hintEl.innerHTML = `<strong>Seleccionado:</strong> ${info}`;
      }
    });
  });
}

/* --------------------------------------------------------------------------
   4. FAQ Accordion
   -------------------------------------------------------------------------- */
function initFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        // Close all
        faqItems.forEach(i => i.classList.remove('open'));
        // If it wasn't open, open it
        if (!isOpen) {
          item.classList.add('open');
        }
      });
    }
  });
}

/* --------------------------------------------------------------------------
   5. Mobile Navigation Menu
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      toggleBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close when clicking any nav link
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

/* --------------------------------------------------------------------------
   6. Scroll Effects & Active Link Tracking
   -------------------------------------------------------------------------- */
function initScrollEffects() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        current = sectionId;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}
