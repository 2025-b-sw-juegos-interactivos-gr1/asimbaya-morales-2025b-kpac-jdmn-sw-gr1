# Scrum.md — Flujo Scrum Diario (Operación del Equipo)

> Este documento define **cómo trabajamos diariamente** en GitHub Projects usando Scrum.
> En esta fase del proyecto, el trabajo es **100% documentación/diseño/arquitectura** (sin implementación funcional).

---

## 1) Cadencia del Sprint (Diario)

- **Duración del Sprint:** 1 Día
- **Inicio del Sprint (Planning):** 2:00 pm (10–15 min)
- **Cierre del Sprint (Review + Retro):** 10:00 pm (10–15 min)

### Objetivo del Sprint
Entregar **artefactos verificables** (documentos/diagramas) que se vinculan a Issues y quedan en el repositorio.

---

## 2) Roles del equipo (2 personas)

> Ambos miembros tienen la **misma responsabilidad**. Los roles son funcionales, no jerárquicos.

- **Dev-A:** enfoque principal en Diseño/Gameplay (según se acuerde por Sprint)
- **Dev-B:** enfoque principal en Arquitectura/Gestión (según se acuerde por Sprint)

### Regla de revisión cruzada (Peer Review)
- Si **Dev-A** trabaja un issue → **Dev-B** revisa.
- Si **Dev-B** trabaja un issue → **Dev-A** revisa.

Nadie aprueba su propio trabajo.

---

## 3) Herramientas de trabajo

- **Backlog y seguimiento:** GitHub Projects (Board)
- **Evidencia/entregables:** repositorio (`/docs`, `/diagrams`, `/references`)
- **Trazabilidad:** todo issue debe enlazar a un documento/diagrama (campo **Doc Link** o link en comentario).

---

## 4) Flujo del tablero (Columnas)

Las columnas del Project se usan así:

1. **Backlog**  
   Ideas, tareas pendientes o issues aún sin definición suficiente.

2. **Ready**  
   Issues listos para ejecutarse. Deben cumplir DoR (ver sección 5).

3. **In Progress**  
   El Owner está trabajando activamente el issue.

4. **Review**  
   Revisión del otro miembro (peer review). Se valida contra criterios de aceptación.

5. **Done**  
   Terminado y validado. Debe cumplir DoD (ver sección 6).

---

## 5) Definition of Ready (DoR)

Un issue puede moverse a **Ready** SOLO si cumple TODO:

- [ ] Tiene **título claro** (con prefijo EPIC / US / TASK / BUG).
- [ ] Tiene **criterios de aceptación** (AC) o checklist de verificación.
- [ ] Tiene definido el **entregable** (archivo/diagrama) en `/docs` o `/diagrams`.
- [ ] Tiene **estimación** (1,2,3,5).
- [ ] Tiene **Owner** asignado (Dev-A, Dev-B o Ambos).
- [ ] Tiene asignado **Area** (GDD, MDA, Gameplay, Architecture, UI/UX, Audio, LevelDesign, Management).
- [ ] Tiene asignado **Sprint** (S0, S1, S2…).

---

## 6) Definition of Done (DoD)

Un issue puede moverse a **Done** SOLO si cumple TODO:

- [ ] El entregable está **subido al repo** (documento/diagrama).
- [ ] El issue incluye **link de evidencia** (campo Doc Link o comentario con ruta):
  - Ejemplo: `/docs/GDD.md` o `/diagrams/uml/player-class.png`
- [ ] Cumple todos los **criterios de aceptación** (AC).
- [ ] Tiene **revisión cruzada** confirmada:
  - [ ] PR aprobado por el otro miembro, **o**
  - [ ] Comentario de aprobación del otro miembro en el issue.
- [ ] No introduce **complejidad innecesaria** (respeta las restricciones del proyecto).

---

## 7) Ceremonias Scrum (mínimas y medibles)

### 7.1 Sprint Planning (Lunes)
**Objetivo:** seleccionar el trabajo del Sprint y dejarlo en Ready.

Checklist del Planning:
- [ ] Definir objetivo del Sprint (1 frase).
- [ ] Seleccionar issues del Backlog y moverlos a Ready (cumpliendo DoR).
- [ ] Confirmar Owner, Estimate, Area, Sprint.
- [ ] Identificar dependencias (si existen).

### 7.2 Daily / Async Check-in (Opcional, recomendado)
**Frecuencia:** 1 vez al día (texto corto en comentario o chat del equipo)
- ¿Qué hice ayer?
- ¿Qué haré hoy?
- ¿Qué me bloquea?

### 7.3 Sprint Review (Viernes)
**Objetivo:** demostrar entregables (docs/diagramas) y validar que están listos.

Checklist:
- [ ] Abrir cada issue en Done y mostrar evidencia.
- [ ] Confirmar que la documentación queda coherente (sin contradicciones).
- [ ] Registrar decisiones importantes (si aplica) en el documento correspondiente.

### 7.4 Retrospective (Viernes, después del Review)
**Objetivo:** mejorar el proceso.

Preguntas:
- ¿Qué funcionó?
- ¿Qué no funcionó?
- ¿Qué cambiaremos el próximo Día (1 acción concreta)?

---

## 8) Estimación (puntos)

Usamos una escala simple:
- **1** = tarea pequeña (≤ 1 hora)
- **2** = mediana (1–2 horas)
- **3** = grande (2–4 horas)
- **5** = muy grande (4–8 horas) → preferible dividir

Regla: si algo parece 5, **dividirlo** en tareas más pequeñas.

---

## 9) Política de cambios (para evitar retrabajo)

- Cualquier cambio grande en documentos base debe:
  - crear un **issue BUG/Inconsistencia** o una **TASK** de “Actualizar X”
  - incluir link a la sección afectada
  - pasar por Review (peer review)

---

## 10) Reglas rápidas (para operar sin fricción)

- Todo issue produce evidencia (archivo o diagrama).
- Nada pasa a Done sin revisión del otro.
- Ready significa “se puede hacer ya”, no “algún día”.
- Si un issue queda bloqueado, se etiqueta como `blocked` y se documenta el motivo.

---

## 11) SPRINTS

### Sprint 1 — Review & Retro

### Review (Qué se entregó)
- Sección I del GDD completada (High Concept): `/docs/GDD.md`
- Aesthetics MDA formal documentada: `/docs/MDA.md`
- Reglas anti-frustración y límites de complejidad integrados en el GDD: `/docs/GDD.md`

### Retro (Qué funcionó / Qué mejorar)
**Funcionó**
- Flujo de tablero con Review obligatorio (peer review) antes de Done.
- Entregables con Doc Link trazable por issue.

**Mejorar**
- Mantener “Doc Link” siempre actualizado al cerrar cada issue.
- Definir desde el inicio de sprint el criterio de “ventana de respiro” para no reinterpretarlo después.


### Sprint 2 — Review & Retro

### Review (Qué se entregó)
- Dynamics MDA definidas y justificadas: `/docs/MDA.md`
- Resumen de Dynamics integrado en el GDD: `/docs/GDD.md`
- Core Loop final (texto + reglas de coherencia) en el GDD: `/docs/GDD.md`
- Diagrama textual del Core Loop: `/diagrams/core-loop/core-loop.md`
- Matriz de trazabilidad Aesthetics → Dynamics (v1): `/docs/Traceability_Matrix.md`

### Retro (Qué funcionó / Qué mejorar)
**Funcionó**
- Aesthetics → Dynamics quedó trazable (sin contradicciones).
- Core Loop se alinea con amenaza dual y presión (oxígeno/radiación) sin añadir sistemas innecesarios.

**Mejorar**
- En Sprint 3, fijar “verbos mínimos” antes de escribir mecánicas (evita retrabajo).
- Mantener el Doc Link actualizado apenas un entregable cambie (no al final).


### Sprint 3 — Review & Retro

### Review (Qué se entregó)
- Mechanics v1 (verbos + reglas + límites): `/docs/GDD.md`
- Mechanics encajadas en MDA: `/docs/MDA.md`
- FSM del dron documentada: `/diagrams/fsm/drone-fsm.md`
- IA + Systems v1 (O2/Radiación/Checkpoints): `/docs/Architecture.md`
- Matriz Dynamics → Mechanics (v1): `/docs/Traceability_Matrix.md`

### Retro (Qué funcionó / Qué mejorar)
**Funcionó**
- Reglas y amenazas quedaron especificadas sin entrar en implementación.
- Anti-frustración se reflejó en IA y sistemas (feedback + castigo gradual).

**Mejorar**
- En Sprint 4, definir “Level Slice” (layout) antes de expandir sistemas.
- Mantener consistencia de términos (O2/exposición/zonas seguras) en todos los docs.


### Sprint 4 — Review & Retro

### Review (Qué se entregó)
- Beats del nivel (tramos + objetivos): `/docs/LevelDesign.md`
- Layout 2D ASCII del vertical slice: `/diagrams/level-layout/vertical-slice-layout.md`
- Reglas de ritmo (picos y respiros) + telegraphing: `/docs/LevelDesign.md`
- Trazabilidad Mechanics/Systems → Level Beats (v1): `/docs/Traceability_Matrix.md`
- Referencia en GDD: `/docs/GDD.md`

### Retro (Qué funcionó / Qué mejorar)
**Funcionó**
- El nivel traduce Dynamics/Mechanics en experiencia concreta.
- Bifurcación riesgo vs recompensa aporta reto sin complejidad.

**Mejorar**
- En Sprint 5, especificar UI/HUD mínimo (O2, radiación, alerta dron) para reforzar feedback.
- Definir “eventos de criatura” como beats controlados (sin combate).


### Sprint 5 — Review & Retro

### Review (Qué se entregó)
- HUD mínimo + pantallas clave: `/docs/Art_UX_Audio.md`
- Wireframes low-fi (HUD/pantallas): `/diagrams/ui-wireframes/wireframes.md`
- Especificación de audio/feedback (telegraphing): `/docs/Art_UX_Audio.md`
- Trazabilidad Level → UI/Audio (v1): `/docs/Traceability_Matrix.md`
- Referencias en GDD y LevelDesign: `/docs/GDD.md`, `/docs/LevelDesign.md`

### Retro (Qué funcionó / Qué mejorar)
**Funcionó**
- Feedback consistente reduce frustración y mantiene tensión.
- Wireframes dan evidencia clara sin diseñar arte final.

**Mejorar**
- En Sprint 6, definir “arte/moodboard” y paleta final para coherencia visual.
- Normalizar terminología HUD (O2/exposición/estado dron) en todos los docs.


### Sprint 6 — Review & Retro

### Review (Qué se entregó)
- Dirección de arte v1 (paleta, iluminación, materiales): `/docs/Art_UX_Audio.md`
- Moodboard textual v1: `/references/visual/moodboard-textual.md`
- Audio style guide v1 + lista SFX: `/docs/Art_UX_Audio.md`
- Trazabilidad Aesthetics → Arte/Audio (v1): `/docs/Traceability_Matrix.md`
- Refuerzo de uso por tramo: `/docs/LevelDesign.md`

### Retro (Qué funcionó / Qué mejorar)
**Funcionó**
- Look & Feel quedó justificado por Aesthetics (no decorativo).
- Paleta por tramo facilita lectura y reduce frustración.

**Mejorar**
- En Sprint 7, definir “narrativa y worldbuilding” (logs, arco del slice).
- Normalizar nombres de sectores/nodos para consistencia narrativa.


### Sprint 7 — Review & Retro

### Review (Qué se entregó)
- Narrativa base + mundo + hook: `/docs/GDD.md`
- Logs v1 (12) y distribución: `/docs/Narrative_Logs.md` + `/docs/LevelDesign.md`
- Eventos narrativos (6) con feedback: `/docs/LevelDesign.md` + `/docs/Art_UX_Audio.md`
- Trazabilidad Narrativa → Beats (v1): `/docs/Traceability_Matrix.md`

### Retro (Qué funcionó / Qué mejorar)
**Funcionó**
- Narrativa ambiental dosificada (logs cortos) refuerza inmersión.
- Eventos crean picos sin convertirlo en combate.

**Mejorar**
- En Sprint 8, definir arquitectura UML/patrones (entidades y managers).
- Estandarizar nombres: sectores, nodos, compuertas y artefacto.
