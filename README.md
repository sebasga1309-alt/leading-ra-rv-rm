# 🌿 ZOO·XR — El Futuro Inmersivo de la Zootecnia

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/SVG-Vector_Graphics-FFB13B?style=for-the-badge&logo=svg&logoColor=white" alt="SVG" />
  <img src="https://img.shields.io/badge/Modo-Claro_%2F_Oscuro-10B981?style=for-the-badge" alt="Modo Claro/Oscuro" />
  <img src="https://img.shields.io/badge/Tecnología-RA_%7C_RV_%7C_RM-0284C7?style=for-the-badge" alt="XR" />
  <img src="https://img.shields.io/badge/Zootecnia-Ciencia_Animal_4.0-059669?style=for-the-badge" alt="Zootecnia" />
  <img src="https://img.shields.io/badge/Bioética-3Rs_Bienestar_Animal-7C3AED?style=for-the-badge" alt="3Rs Bienestar" />
  <img src="https://img.shields.io/badge/Dependencias-Zero_Dependencies-success?style=for-the-badge" alt="Zero Dependencies" />
</p>

---

## 📌 Descripción del Proyecto

**ZOO·XR** es una landing page interactiva con diseño minimalista de alto impacto visual, creada para divulgar y demostrar la integración de las tecnologías de **Realidad Aumentada (RA)**, **Realidad Virtual (RV)** y **Realidad Mixta (RM)** en el ejercicio profesional de la **Zootecnia** y la formación de **estudiantes de ciencia animal**.

La plataforma expone cómo la convergencia de sensores IoT, inteligencia artificial y gemelos digitales impulsa la precisión en campo al tiempo que promueve la educación bioética sin sufrimiento animal (Principio de las 3Rs).

---

## ✨ Características Principales

- 🌓 **Soporte Nativo para Modo Claro y Modo Oscuro**:
  - Conmutador con icono animado SVG.
  - Detección de la preferencia del sistema operativo (`prefers-color-scheme`).
  - Persistencia automática de la configuración mediante `localStorage`.

- 🥽 **Simulador / Visor XR Interactivo en Vivo**:
  - **Cámara Real**: Inspección visual zootécnica tradicional.
  - **Modo RA (HUD)**: Superposición de arete RFID (#4028), termograma en tiempo real (38.6 °C), frecuencia cardíaca (72 bpm) y condición corporal (BCS 3.5).
  - **Modo RM (Anatomía)**: Holograma 3D interactivo del sistema digestivo poligástrico de rumiantes (Rumen, Retículo, Omaso y Abomaso) con información científica al pasar el cursor o hacer clic.
  - **Modo RV (Bioclimatología)**: Simulación de ventilación, mapa térmico y control del Índice de Temperatura y Humedad (ITH) en establos.

- 🎓 **Doble Perspectiva: Estudiante vs. Profesional**:
  - **Vida Estudiantil**: Laboratorios holográficos 24/7, simulación cinética ruminal y prácticas hápticas de inseminación artificial y palpación con cero estrés animal.
  - **Vida Profesional**: Ganadería de precisión con gafas AR (HUD en lote), pesaje óptico por LiDAR, clasificación lineal automática y gemelos digitales de granjas.

- 🐾 **Bioética y las 3Rs del Bienestar Animal**:
  - **Reemplazar**: Sustitución de prácticas invasivas en docencia por modelos virtuales.
  - **Reducir**: Disminución de animales requeridos para formación masiva.
  - **Refinar**: Perfeccionamiento de habilidades técnicas previas a la práctica en animales vivos.

- 🎨 **100% Gráficos Vectoriales SVG Nativos**:
  - Ilustraciones biomédicas y hologramas integrados directamente en código, asegurando máxima nitidez en cualquier resolución y cero enlaces rotos.

- 📱 **Diseño Totalmente Responsivo**:
  - Adaptabilidad para smartphones, tabletas y monitores de ultra-alta definición.

---

## 🗂️ Estructura del Proyecto

```plaintext
landing-ra-rv-rm/
├── index.html       # Estructura semántica HTML5, metadatos SEO y gráficos SVG
├── styles.css       # Sistema de diseño minimalista con CSS Custom Properties
├── app.js           # Lógica interactiva (Modo claro/oscuro, simulador XR y acordeón)
└── README.md        # Documentación oficial del proyecto con badges
```

---

## 🚀 Cómo Ejecutar el Proyecto

Este proyecto está construido con estándares web modernos sin necesidad de instalar dependencias externas ni compiladores:

### Opción 1: Apertura Directa en Navegador
1. Clona o descarga la carpeta del repositorio.
2. Haz doble clic en `index.html` o arrástralo a tu navegador preferido (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, Brave).

### Opción 2: Servidor Local Ligero

#### Con VS Code Live Server:
Haz clic derecho en `index.html` y selecciona **Open with Live Server**.

#### Con Python:
```bash
python -m http.server 8080
```
Abre tu navegador en `http://localhost:8080`.

#### Con Node.js / npx:
```bash
npx serve .
```

---

## 🛠️ Tecnologías y Herramientas

| Categoría | Tecnología / Recurso | Propósito |
| :--- | :--- | :--- |
| **Estructura** | HTML5 Semántico | Accesibilidad (a11y), SEO y maquetación limpia |
| **Estilos** | CSS3 Vanilla | Custom Properties, Glassmorphism, Grid & Flexbox |
| **Lógica** | Vanilla JavaScript | Conmutación de tema, control de capas SVG y eventos |
| **Gráficos** | SVG Vectorial Nativo | Hologramas, diagramas anatómicos y telemetría |
| **Tipografía** | Google Fonts | *Plus Jakarta Sans*, *Outfit* y *JetBrains Mono* |

---

## 📚 Hoja de Ruta para Estudiantes de Zootecnia 4.0

1. **Fotogrametría Móvil**: Usa aplicaciones como *Polycam* o *Luma AI* para digitalizar piezas óseas y forrajes.
2. **Modelos Abiertos**: Explora repositorios como *Sketchfab* para estudiar anatomía animal en Realidad Aumentada.
3. **Visitas Inmersivas 360°**: Utiliza visores accesibles para recorrer plantas de beneficio y granjas bioseguras.
4. **Competencias del Futuro**: Integra la nutrición y genética clásica con análisis de datos de sensores y modelado espacial.

---

## 📄 Licencia

Distribuido bajo la Licencia MIT. Consulta el archivo para más detalles.

---

<p align="center">
  Hecho con dedicación para el avance de la <strong>Zootecnia</strong> y la <strong>Ciencia Animal</strong> 🐄🔬
</p>
