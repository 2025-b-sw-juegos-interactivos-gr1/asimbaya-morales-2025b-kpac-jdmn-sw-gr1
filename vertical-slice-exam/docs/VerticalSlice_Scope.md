## 1. Propósito
Este Vertical Slice busca transformar una parte pequeña del diseño conceptual del proyecto **DERIVA** en una demostración técnica **funcional y pulida**.  
El enfoque elegido es **Opción A (Mecánicas)**: validar un ciclo de interacción y evasión en primera persona en un escenario único.

---

## 2. Resumen del Slice
**Escenario único (greybox con texturas):** pasillo interior sci-fi con:
- Un **terminal** interactivo.
- Un **dron** con IA basada en **Máquina de Estados (FSM)**.
- Una **puerta/compuerta** de salida inicialmente bloqueada.
- Un HUD mínimo para objetivos, estado del dron y prompts de interacción.

**Loop del jugador:**
1) Explorar y ubicarse.
2) Encontrar y activar el terminal (E).
3) Evitar al dron mientras se desplaza.
4) Ir a la salida y completar el slice.

---

## 3. Qué incluye (In Scope)
### Jugabilidad
- Movimiento FPS (WASD + mouse).
- Colisiones básicas + gravedad (sin parkour, sin saltos complejos).
- Interacción por raycast con prompts en HUD (tecla E).

### IA / Amenaza
- Dron con FSM (estados sugeridos):
  - PATROL: patrulla por puntos
  - CHASE: persecución al detectar al jugador
  - SEARCH: busca tras perder línea de visión
  - INVESTIGATE: investiga el último punto visto y vuelve a patrulla

### Objetivos / Progresión
- Objetivo 1: activar terminal.
- Objetivo 2: escapar por la compuerta.
- Condición de victoria: trigger de salida → “SLICE COMPLETADO”.

### UI y Feedback
- HUD con:
  - objetivo actual
  - estado del dron
  - prompt de interacción
  - pantalla final del slice
- Feedback de terminal (cambio visual + beep opcional).

### Arte (mínimo)
- Texturas aplicadas a suelo y paredes (para mejorar lectura visual).
- Sin arte final, sin animaciones, sin cinemáticas.

---

## 4. Qué NO incluye (Out of Scope)
Para mantener el alcance controlado, **no** se implementa:
- Multijugador.
- Mundo abierto o múltiples niveles.
- Inventarios complejos, crafting, árbol de habilidades.
- Combate completo (armas, daño avanzado, ragdoll).
- Guardado/carga completo (solo estado temporal del run).
- Sistema completo de oxígeno o radiación (puede ser “v2”).
- Modelos 3D finales con pipeline complejo (se deja preparado `public/models/`).

---

## 5. Criterios de aceptación (Acceptance Criteria)
Se considera “aprobado” cuando:
1) El proyecto corre localmente con instrucciones claras en README.
2) El jugador se mueve con colisiones sin atravesar paredes.
3) El terminal se puede activar solo cuando está en rango y mirando (raycast).
4) Al activar el terminal:
   - cambia visualmente
   - actualiza objetivo en HUD
   - la puerta se desbloquea
5) El dron:
   - patrulla
   - detecta y persigue
   - pierde visión y busca
   - su estado se refleja en HUD
6) Al llegar a la salida desbloqueada:
   - se muestra “SLICE COMPLETADO”
   - la demo termina claramente (fin del slice)

---

## 6. Riesgos y mitigación (Scope Control)
- **Riesgo:** extender el slice (más sistemas, más arte).  
  **Mitigación:** mantener 1 escena + 1 objetivo + 1 amenaza.
- **Riesgo:** colisiones raras por mallas complejas.  
  **Mitigación:** colliders simples (boxes) y mallas visuales separadas.
- **Riesgo:** IA demasiado compleja.  
  **Mitigación:** FSM con 4 estados + reglas simples (distancia + LOS).

---

## 7. Extensiones futuras (post-examen)
Opcionales:
- Integrar 1 modelo GLB/GLTF del pasillo (manteniendo colliders simples).
- Agregar “radiación” como zona de daño visual y alertas.
- Agregar “oxígeno” como temporizador simple con HUD.
- Mejorar feedback audiovisual del dron y del terminal.