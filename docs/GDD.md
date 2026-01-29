# GDD — DERIVA (Título provisional)

## I. Ficha Técnica y Concepto (FASE 1)
- Tipo: Juego de entretenimiento
- Plataforma objetivo (Vertical Slice): Web PC (Navegador)
- Tecnología objetivo (futuro): Babylon.js
- Perspectiva: Primera Persona (FPS)
- Controles: Teclado + mouse
- Mundo: Sci-Fi
- Rol del jugador: Superviviente
- Duración objetivo: 1–2 horas

### Elevator Pitch
Juego de supervivencia narrativa en primera persona ambientado en una nave sci-fi parcialmente operativa, donde el jugador debe reparar sistemas, recuperar un dispositivo de datos y escapar, mientras gestiona oxígeno y evita amenazas (dron + presencia de criatura) y zonas de radiación visibles.

### Pilares de diseño
1. Tensión sostenida sin frustración extrema (presión + ventanas de respiro)
2. Narrativa ambiental inmersiva (logs + eventos del entorno)
3. Reto justo con mecánicas simples (decisiones claras, no complejidad excesiva)

### Restricciones (No-Goals)
- Sin multijugador
- Sin mundo abierto completo
- Sin sistemas innecesarios (inventarios complejos, árbol de habilidades, crafting extenso)

---

## II. Análisis MDA (FASE 1–3)
### Aesthetics (Objetivo emocional)
- Primarias: Tensión, Narrativa/Inmersión
- Secundaria: Reto
- Excluidas: Poder absoluto, Frustración extrema, Complejidad excesiva

### Dynamics (FASE 2)
- Progresión por micro-objetivos (reparación y acceso)
- Evitar > combatir (amenaza persistente)
- Riesgo/recompensa por ruta (oxígeno/radiación/dron)
- Narrativa fragmentada (logs + señales del entorno)
- Ventanas de respiro (zonas seguras)

### Mechanics (FASE 3)
- Verbos: mover, observar/escaneo, interactuar, gestionar oxígeno, evadir, defensa no letal
- Amenaza activa: dron (FSM)
- Amenaza secundaria: criatura (eventos)
- Radiación: zonas visibles marcadas
- Objetivo: reparar + recuperar dispositivo de datos + escape físico
- Guardado: checkpoints (zonas seguras / nodos)

---

## III. Core Loop (FASE 3)
Explorar → Detectar amenaza/radiación → Decidir ruta y ritmo → Interactuar (nodo/terminal) → Recompensa (log/avance) → Zona segura/checkpoint → Repetir

---

## IV. Narrativa y Mundo (FASE 5)
Hook: “La nave sigue funcionando… pero ¿de verdad estás solo?”
Arco del slice: descubrir señales → reparar nodos → recuperar dispositivo de datos (revelación) → escape físico (teaser)

---

## V. Diseño de Niveles (FASE 5)
Nivel lineal por tramos (0–5):
- Tramo 0: Despertar (Zona segura 1 + Terminal O2 #1)
- Tramo 1: Pasillo servicio (dron patrulla + Nodo 1)
- Tramo 2: Sector comprometido (O2 + radiación visible + Terminal O2 #2 + presencia criatura)
- Tramo 3: Sala de nodos (Zona segura 2 breve + Nodo 2)
- Tramo 4: Cámara de datos (clímax: artefacto + manifestación criatura)
- Tramo 5: Escape físico (tensión final controlada)

---

## VI. Arte y Audio (FASE 6)
- Estilo: sci-fi tecnológico limpio
- Paleta: oscura con acentos azules
- HUD: minimalista (oxígeno + alertas + objetivo + prompt)
- Audio: ambiente industrial suave, dron mecánico, señales de radiación, respiración/alertas de O2, presencia criatura subgrave

---

## VII. Arquitectura de Software (FASE 7)
- Módulos: Core, Gameplay, Systems, AI, UI/Audio, Data
- Patrones: State (FSM), Observer/EventBus, Component, Singleton (servicios)
- Guardado: checkpoints (zonas seguras/nodos)
