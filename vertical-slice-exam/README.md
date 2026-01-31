# DERIVA — Vertical Slice (Enfocado en Mecánicas)

Vertical Slice del proyecto **DERIVA** (FPS Sci-Fi) enfocado en validar **mecánicas core** en una escena pequeña funcional y pulida.

## Objetivo del Slice (qué valida)
Demostrar un ciclo jugable mínimo:
1) El jugador se mueve en primera persona (FPS) con colisiones.
2) El jugador **interactúa** con un **terminal** (tecla **E**) usando raycast.
3) Un **dron** controlado por **FSM** (Patrol/Investigate/Chase/Search) reacciona al jugador.
4) Al activar el terminal, se habilita la salida y el jugador **escapa** para completar el slice.

> Enfoque: **Calidad sobre cantidad**. Un solo escenario que funciona correctamente.

---

## Requisitos
- Node.js 18+ (recomendado)
- Navegador moderno (Chrome/Edge/Firefox)

---

## Instalación y ejecución
Desde la carpeta `vertical-slice/`:

```bash
npm install
npm run dev
```

Abrir la URL que indique VITE (por ejemplo: `http://localhost:5173`)

---

## Controles
- WASD: movimiento
- Mouse: mirar
- E: interactuar (terminal)

---

## Criterio de éxito (Definition of Done del Slice)
- Se muestra un objetivo en HUD.
- Se puede activar el terminal al mirar el objeto e interactuar (E).
- El dron cambia de estado (visible en HUD).
- La puerta se habilita tras activar el terminal.
- Al acercarse a la salida se muestra “SLICE COMPLETADO”.

---

## Estructura del proyecto
- public/textures/ → texturas (suelo/pared).
- public/models/ → reservado para futuros modelos GLB/GLTF (no usado aún).
- src/ → código del slice (player, world, AI, UI, systems).
- docs/ → alcance del slice y mapeo con GDD/MDA.

---

## Licencia / Créditos
Este prototipo es parte de un ejercicio académico y se usa únicamente con fines de evaluación.

---