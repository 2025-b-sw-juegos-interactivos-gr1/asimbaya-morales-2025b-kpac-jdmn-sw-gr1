# Release Notes — DERIVA (Blueprint) v1.0

Fecha: 2026-01-29  
Tipo de release: **Documentación y Blueprint técnico/creativo (sin implementación)**

---

## 1) Resumen
Este release consolida la pre-producción de **DERIVA**, un juego de entretenimiento en primera persona (Web PC) orientado a **tensión e inmersión narrativa**, con reto controlado y evitando frustración extrema.  
El entregable es un **blueprint** listo para iniciar producción (vertical slice futuro en Babylon.js), con diseño MDA, level design del slice, arquitectura técnica (UML/patrones), dirección de arte y guía de UI/audio, narrativa ambiental y trazabilidad end-to-end.

---

## 2) Alcance del Release (qué está “cerrado”)
### Diseño y experiencia
- High Concept y pilares (tensión + narrativa/inmersión; reto como secundaria).
- MDA completo: Aesthetics → Dynamics → Mechanics.
- Core Loop definido y trazable.

### Vertical Slice (1 nivel)
- Beats/tramos (0–5) con objetivos y ritmo (picos/respiros).
- Layout 2D (ASCII) con zonas seguras, nodos y bifurcación riesgo vs recompensa.

### Sistemas (Blueprint)
- Oxígeno (presión), Radiación (decisión informada), Checkpoints conceptuales (anti-frustración).
- IA del dron: FSM (texto + formal).

### UI/UX y Audio (Blueprint)
- HUD mínimo + pantallas clave.
- Wireframes low-fi (ASCII).
- Telegraphing/feedback por sistema y eventos.

### Narrativa
- Sinopsis + arco del slice.
- Logs v1 (12) con asignación por tramo.
- Eventos narrativos (picos controlados, sin combate).

### Ingeniería / Arquitectura
- Arquitectura modular propuesta (Babylon.js) con flujo event-driven.
- UML conceptual (clases y relaciones).
- Patrones seleccionados y justificación.

### Gestión (Scrum / GitHub Projects)
- Evidencia de sprints semanales (S0–S9), issues, campos, y workflow.
- Checklist final de entrega.

---

## 3) Entregables incluidos (rutas)
**Core docs**
- `/docs/GDD.md`
- `/docs/MDA.md`
- `/docs/LevelDesign.md`
- `/docs/Art_UX_Audio.md`
- `/docs/Architecture.md`
- `/docs/Narrative_Logs.md`
- `/docs/Traceability_Matrix.md`
- `/docs/Scrum.md`
- `/docs/Delivery_Checklist.md`
- `/README.md`

**Diagramas**
- `/diagrams/core-loop/core-loop.md`
- `/diagrams/level-layout/vertical-slice-layout.md`
- `/diagrams/ui-wireframes/wireframes.md`
- `/diagrams/uml/class-diagram.md`
- `/diagrams/fsm/drone-fsm.md`
- `/diagrams/fsm/drone-state-diagram.md`

**Referencias**
- `/references/visual/moodboard-textual.md`

---

## 4) Fuera de alcance (lo que NO incluye este release)
- Implementación funcional en Babylon.js (no se escribe código en esta fase).
- Arte final (modelos 3D, texturas finales, animaciones, UI final).
- Audio final (música masterizada, SFX finales, mezcla).
- Sistemas avanzados no necesarios: crafting extenso, árbol de habilidades, inventario complejo, multijugador, mundo abierto completo.
- Integraciones de backend / guardado real (solo blueprint conceptual).

---

## 5) Criterios de calidad (Definition of Done del release)
- Documentos navegables con links cruzados (sin rutas rotas).
- Naming consistente: DERIVA, N1/N2, D (datos), E (escape), O2, RAD.
- Trazabilidad completa end-to-end (sin contradicciones).
- Evidencia de PM: issues, sprints, review antes de Done.
- Anti-frustración explícita (feedback antes del castigo, penalización gradual).

---

## 6) Cómo evaluar rápido (ruta recomendada)
1) `/README.md`  
2) `/docs/GDD.md`  
3) `/docs/MDA.md`  
4) `/docs/LevelDesign.md` + `/diagrams/level-layout/vertical-slice-layout.md`  
5) `/docs/Art_UX_Audio.md` + `/diagrams/ui-wireframes/wireframes.md`  
6) `/docs/Architecture.md` + `/diagrams/uml/class-diagram.md` + `/diagrams/fsm/drone-state-diagram.md`  
7) `/docs/Narrative_Logs.md`  
8) `/docs/Traceability_Matrix.md`  
9) `/docs/Scrum.md` + `/docs/Delivery_Checklist.md`

---

## 7) Riesgos conocidos (del blueprint a producción)
- **Tensión vs frustración:** si el dron o radiación no tienen telegraphing claro, puede sentirse injusto.
- **Ritmo del slice:** si los beats se hacen muy lineales o sin ventanas de respiro, se pierde el objetivo emocional.
- **Sobrecarga UI:** si HUD crece con más sistemas, rompe la regla “minimalista”.
- **Scope creep:** agregar sistemas no trazados rompe el enfoque del proyecto.

Mitigación: respetar la trazabilidad y el principio anti-complejidad.

---

## 8) Roadmap recomendado hacia un Vertical Slice implementable (Babylon.js)
### Sprint VS-01 (Prototipo de ritmo)
- Navegación FPS básica (placeholder).
- Implementar beats del nivel (Tramos 0–3) con triggers.
- HUD mínimo (objetivo + O2 básico).

### Sprint VS-02 (Amenaza + telegraphing)
- Implementar FSM del dron (Patrol/Investigate/Chase/Search).
- Señales audiovisuales por estado (telegraphing).
- Ajustar ventanas de respiro.

### Sprint VS-03 (Sistemas mínimos)
- Oxígeno (consumo/alertas) + checkpoints reales.
- Radiación visible con exposición gradual.
- Integración de feedback UI/Audio.

### Sprint VS-04 (Narrativa y polish)
- Terminal/logs funcionales (texto y triggers).
- Eventos narrativos controlados (sin combate).
- Ajuste final de ritmo y claridad.

**Criterio de “Vertical Slice listo”:**
- Se completa el arco: despertar → nodos → artefacto → escape, con tensión e inmersión y sin frustración extrema.

---

## 9) Notas finales
Este release representa el cierre de la fase de pre-producción documental.  
Cualquier cambio futuro debe:
1) actualizar la trazabilidad,  
2) justificarlo en MDA,  
3) reflejarlo en Level beats, y  
4) actualizar su impacto en arquitectura/UI/audio.

Fin del release v1.0.
