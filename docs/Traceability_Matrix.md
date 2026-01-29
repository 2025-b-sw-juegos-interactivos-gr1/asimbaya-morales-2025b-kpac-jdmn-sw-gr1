# Traceability_Matrix.md — Matriz de Trazabilidad (GDD ↔ MDA ↔ Sistemas ↔ Issues)

> Este documento asegura la trazabilidad entre:
> **Objetivos emocionales (MDA)** → **dinámicas** → **mecánicas/sistemas** → **entregables** → **Issues (GitHub)**.
>
> Regla: **ningún Issue se considera Done** si no enlaza su evidencia aquí (o al menos su salida está registrada).

---

## 1) Cómo usar esta matriz (reglas)

### 1.1 Identificadores estándar
- **AEST-** = Aesthetics (Estética / emoción objetivo)
- **DYN-** = Dynamics (dinámica emergente)
- **MEC-** = Mechanics (regla / mecánica)
- **SYS-** = System (sistema / subsistema)
- **DOC-** = Documento (ruta en `/docs`)
- **DIA-** = Diagrama (ruta en `/diagrams`)
- **ISSUE-** = Issue (ID GitHub, ej: `#12`)

### 1.2 Reglas mínimas
- Cada fila debe tener **al menos**: MDA → Sistema → Evidencia → Issue.
- Si algo cambia, se crea un `BUG` o `TASK` y se actualiza la matriz.
- Los entregables deben vivir en el repo:
  - Documentos en `/docs`
  - Diagramas en `/diagrams`

---

## 2) Mapeo MDA → Sistemas (alta prioridad)

> Completa esta tabla primero. Es el “esqueleto” del juego.

| ID | MDA (Aesthetic/Dynamic) | Elemento de diseño (qué lo provoca) | Sistema relacionado | Riesgo si falta | Evidencia requerida | Issue |
|---|---|---|---|---|---|---|
| AEST-01 | **Tensión** | Presión sostenida + amenaza creíble + recursos limitados | SYS-01 Amenazas / SYS-02 Recursos | El juego se vuelve plano | DOC: `/docs/MDA.md` + DIA: `/diagrams/core-loop/...` | ISSUE- |
| AEST-02 | **Narrativa / Inmersión** | Historia ambiental + descubrimiento progresivo | SYS-03 Narrativa Ambiental | Se siente vacío / sin propósito | DOC: `/docs/GDD.md` + `/docs/MDA.md` | ISSUE- |
| AEST-03 | **Reto (sec.)** | Decisiones claras + riesgo/recompensa | SYS-04 Decisiones de Ruta | Aburrido o injusto | DOC: `/docs/LevelDesign.md` | ISSUE- |
| DYN-01 | Exploración cautelosa | Recursos + amenaza + oscuridad/ruido | SYS-02 Recursos / SYS-01 Amenazas | Se juega “corriendo” | DIA: `/diagrams/level-layout/...` | ISSUE- |
| DYN-02 | Evitar > combatir | Amenaza persistente no trivial | SYS-01 Amenazas | Power fantasy accidental | DIA: `/diagrams/fsm/...` | ISSUE- |
| DYN-03 | Ventanas de respiro | Zonas seguras / checkpoints | SYS-05 Checkpoints | Frustración extrema | DOC: `/docs/GDD.md` | ISSUE- |

---

## 3) Sistemas (catálogo y trazabilidad)

> Lista de sistemas del proyecto (sin implementación). Cada SYS debe tener al menos 1 entregable.

| SYS ID | Sistema | Descripción | Entradas/Salidas (alto nivel) | Documentos | Diagramas | Issues |
|---|---|---|---|---|---|---|
| SYS-01 | Amenazas (IA/entidades) | Comportamiento de amenaza principal/secundaria | In: detección/estado; Out: persecución/eventos | `/docs/Architecture.md` | `/diagrams/fsm/` | # |
| SYS-02 | Recursos (Oxígeno/energía) | Presión y gestión mínima (no compleja) | In: consumo; Out: alertas/limitaciones | `/docs/GDD.md` | `/diagrams/core-loop/` | # |
| SYS-03 | Narrativa ambiental | Logs, señales, eventos del entorno | In: triggers; Out: revelaciones | `/docs/GDD.md` | `/diagrams/level-layout/` | # |
| SYS-04 | Decisión de ruta | Riesgo/recompensa por camino | In: estado jugador; Out: ruta elegida | `/docs/LevelDesign.md` | `/diagrams/level-layout/` | # |
| SYS-05 | Checkpoints / zonas seguras | Ventanas de respiro | In: avance; Out: checkpoint | `/docs/GDD.md` | `/diagrams/level-layout/` | # |
| SYS-06 | UI/HUD minimalista | Info crítica sin saturar | In: oxígeno/alertas; Out: HUD | `/docs/Art_UX_Audio.md` | `/diagrams/ui-wireframes/` | # |
| SYS-07 | Audio (tensión + feedback) | SFX/ambiente para inmersión | In: eventos; Out: capas de audio | `/docs/Art_UX_Audio.md` | `/references/audio/` | # |

> Nota: puedes añadir o quitar sistemas, pero cada sistema debe tener evidencia.

---

## 4) Trazabilidad Documentos ↔ Issues

> Esta tabla asegura que cada documento tiene Issues asociados y evidencia.

| DOC ID | Documento | Propósito | Secciones clave | Issues principales | Estado |
|---|---|---|---|---|---|
| DOC-01 | `/docs/GDD.md` | Documento maestro | Concepto, loops, restricciones | EPIC-01, EPIC-03 |  |
| DOC-02 | `/docs/MDA.md` | Justificación MDA | Aesthetics/Dynamics/Mechanics | EPIC-01, EPIC-02 |  |
| DOC-03 | `/docs/Scrum.md` | Operación Scrum | DoR/DoD, rituales | Sprint-0 Setup |  |
| DOC-04 | `/docs/Architecture.md` | Arquitectura conceptual | Módulos, patrones | EPIC-07 |  |
| DOC-05 | `/docs/LevelDesign.md` | Niveles y layouts | objetivos por tramo | EPIC-05 |  |
| DOC-06 | `/docs/Art_UX_Audio.md` | Arte/UI/Audio | wireframes + mood | EPIC-06 |  |
| DOC-07 | `/docs/Traceability_Matrix.md` | Trazabilidad | matrices y catálogo | Sprint-0 Setup |  |

---

## 5) Trazabilidad Diagramas ↔ Issues

| DIA ID | Diagrama | Propósito | Ruta | Issues | Estado |
|---|---|---|---|---|---|
| DIA-01 | Core Loop | Ciclo principal del juego | `/diagrams/core-loop/` | EPIC-03 |  |
| DIA-02 | UML conceptual | Clases/módulos (conceptual) | `/diagrams/uml/` | EPIC-07 |  |
| DIA-03 | FSM amenaza (IA) | Estados/transiciones | `/diagrams/fsm/` | EPIC-02 / EPIC-07 |  |
| DIA-04 | Layout nivel (vertical slice) | Flujo y objetivos por zona | `/diagrams/level-layout/` | EPIC-05 |  |

---

## 6) Control de cambios (mini bitácora)

| Fecha | Cambio | Motivo | Issue |
|---|---|---|---|
| YYYY-MM-DD |  |  | # |
