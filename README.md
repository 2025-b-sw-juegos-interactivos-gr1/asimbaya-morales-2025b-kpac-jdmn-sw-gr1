# DERIVA (Working Title) — GDD / Arquitectura / Gestión (Scrum)

Kevin Asimbaya - Jhon Morales

Proyecto de **Desarollo de Juegos Interactivos** (fase de pre-producción).  
No se implementa código funcional: el entregable es un **blueprint listo para producción**.

## High Concept
Juego de supervivencia narrativa en primera persona (Web PC) ambientado en una nave sci-fi parcialmente operativa. El jugador debe **reparar sistemas**, **recuperar un artefacto de datos** y **escapar**, gestionando **oxígeno** y evitando una **amenaza persistente (dron)** y eventos de **presencia**.

## Decisiones clave
- Perspectiva: Primera Persona (FPS clásico)
- Emociones: Tensión + Inmersión narrativa (secundaria: reto)
- Restricciones: sin multijugador, sin mundo abierto completo, sin sistemas innecesarios
- Tecnología objetivo (futuro vertical slice): Babylon.js (Web)

---

## Ruta de lectura recomendada (evaluación rápida)
1) GDD (visión general): `/docs/GDD.md`  
2) MDA (justificación): `/docs/MDA.md`  
3) Level Design (vertical slice): `/docs/LevelDesign.md` + layout `/diagrams/level-layout/vertical-slice-layout.md`  
4) UI/Audio (wireframes + feedback): `/docs/Art_UX_Audio.md` + `/diagrams/ui-wireframes/wireframes.md`  
5) Arquitectura técnica: `/docs/Architecture.md` + UML `/diagrams/uml/class-diagram.md` + FSM `/diagrams/fsm/drone-state-diagram.md`  
6) Narrativa (logs): `/docs/Narrative_Logs.md`  
7) Trazabilidad total: `/docs/Traceability_Matrix.md`  
8) Gestión Scrum/Projects: `/docs/Scrum.md`

---

## Mapa del repo
- `/docs/` Documentación principal (GDD, MDA, Scrum, Arquitectura, Level Design, UX/Audio, Logs, Trazabilidad)
- `/diagrams/` Diagramas (core loop, layouts, UML, FSM, wireframes)
- `/references/` Referencias (moodboard textual, etc.)
- `.github/ISSUE_TEMPLATE/` Plantillas de issues (Epic/Story/Task/Bug)

---

## Gestión (GitHub Projects)
Sprints semanales. Workflow del board: Backlog → Ready → In Progress → Review → Done  
Fields usados: Sprint, Estimate, Owner, Area, Doc Link, Status.  
Detalle: `/docs/Scrum.md`
