# Mapeo del Vertical Slice con GDD y MDA

## 1. Qué parte del GDD se está demostrando
Este Vertical Slice implementa una porción mínima del diseño descrito en el GDD del proyecto **DERIVA**, específicamente:

- **Perspectiva y control:** Primera persona (FPS) con teclado + mouse.
- **Core Loop (mínimo):** explorar → detectar amenaza → interactuar con nodo/terminal → progresar → escapar.
- **Amenaza principal:** dron/IA con comportamiento de patrulla y persecución.
- **Progresión por micro-objetivos:** activar un sistema (terminal) habilita el siguiente paso (escape).
- **Entorno Sci-Fi interior:** pasillo / nave (un solo nivel).

> Nota: El slice es deliberadamente pequeño: valida **viabilidad técnica** y “feel” sin abarcar todo el juego.

---

## 2. Justificación MDA

### A) Mechanics (Mecánicas implementadas)
- Movimiento FPS (WASD + mouse) con colisiones y gravedad.
- Interacción por raycast + prompt (E) con un objeto (terminal).
- Sistema de objetivos (estado del juego).
- IA del dron con Máquina de Estados (FSM):
  - Patrol → Chase → Search → Investigate → Patrol
- Condición de victoria: escape (trigger).

### B) Dynamics (Dinámicas emergentes que aparecen)
- **Presión por amenaza persistente:** el dron condiciona rutas y ritmo.
- **Riesgo/decisión:** acercarse al terminal y exponerse vs esperar ventana segura.
- **Evasión > combate:** el jugador prioriza evitar al dron para cumplir el objetivo.
- **Progresión guiada:** micro-objetivo claro (terminal) que desbloquea salida.

### C) Aesthetics (Estética / experiencia buscada)
- **Tensión:** al ser detectado y perseguido, la lectura del peligro es inmediata.
- **Inmersión narrativa ambiental (mínima):** escenario interior sci-fi con feedback del terminal y HUD discreto.
- **Reto (secundario):** llegar al terminal y luego escapar sin ser “atrapado”.

### Emociones excluidas (cómo se evita)
- **Poder absoluto:** no hay armas ni eliminación del dron (en este slice).
- **Frustración extrema:** objetivos claros, loop corto, IA simple, sin castigos irreversibles.
- **Complejidad excesiva:** un solo objetivo a la vez, UI mínima, sistemas reducidos.

---

## 3. Qué se tuvo que ajustar del diseño al implementarlo
- Se priorizó el núcleo “interactuar + evadir” antes de agregar sistemas secundarios (oxígeno/radiación).
- Se redujo el nivel a **una sola escena** para asegurar pulido y estabilidad.
- Se definió un “final” claro para el demo (“Slice completado”) para facilitar la evaluación.

---


