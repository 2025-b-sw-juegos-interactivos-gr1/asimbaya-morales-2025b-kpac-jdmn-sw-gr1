# Matriz de Trazabilidad — DERIVA (v1)

## Aesthetics → Dynamics (Sprint 2)

| Aesthetic (Objetivo emocional) | Dynamics que lo generan | Evidencia / Referencia |
|---|---|---|
| Tensión (primaria) | D1 Presión por oxígeno; D2 Amenaza persistente; D3 Amenaza dual; D4 Riesgo vs recompensa | `/docs/MDA.md` (Dynamics D1–D4) + `/docs/GDD.md` (Dynamics resumen) |
| Narrativa / Inmersión (primaria) | D5 Exploración cautelosa; D6 Micro-objetivos con logs/eventos | `/docs/MDA.md` (D5–D6) + `/docs/GDD.md` (Core Loop) |
| Reto (secundaria) | D4 Decisión por rutas; D6 Progresión por micro-objetivos (objetivos claros) | `/docs/MDA.md` (D4, D6) |
| Anti-frustración (restricción de diseño) | D7 Ventanas de respiro; D8 Checkpoints conceptuales; feedback consistente | `/docs/GDD.md` (Reglas anti-frustración) + `/docs/MDA.md` (D7–D8) |

Notas:
- Esta matriz prueba coherencia entre experiencia deseada y dinámicas diseñadas.
- En Sprint 3 se ampliará a Dynamics → Mechanics y Systems.

---

## Dynamics → Mechanics (Sprint 3)

| Dynamic | Mechanics que la soportan | Riesgo de frustración | Mitigación (anti-frustración) | Referencia |
|---|---|---|---|---|
| D1 Presión por oxígeno | O2 (consumo/umbrales/alertas), zonas de recuperación | Alto | feedback claro + ventanas de respiro | `/docs/GDD.md`, `/docs/Architecture.md` |
| D2 Amenaza persistente | FSM dron (LoS/sonido/tiempo), estados Patrol/Chase/Search | Medio | telegraphing + penalización no letal | `/diagrams/fsm/drone-fsm.md` |
| D3 Amenaza dual | FSM dron + eventos criatura (picos) | Medio | picos controlados + checkpoints conceptuales | `/docs/MDA.md`, `/docs/GDD.md` |
| D4 Riesgo vs recompensa | radiación visible + exposición gradual | Medio | advertencias + castigo gradual | `/docs/Architecture.md` |
| D5 Exploración cautelosa | verbos observar/escaneo + señales ambientales | Bajo | señales consistentes | `/docs/GDD.md` |
| D7 Ventanas de respiro | zonas seguras + reducción de amenaza (Idle) | Bajo | diseño de ritmo | `/docs/MDA.md`, `/docs/Architecture.md` |

---

## Mechanics/Systems → Level Beats (Sprint 4)

| Tramo (Beat) | Objetivo | Mechanics clave | Systems clave | Amenaza | Riesgo frustración | Mitigación | Referencia |
|---|---|---|---|---|---|---|---|
| 0 (S) | Orientación | observar/escaneo, interactuar | O2 (feedback), checkpoints | baja | Bajo | respiro + objetivos claros | `/docs/LevelDesign.md` |
| 1 | Activar Nodo 1 | moverse, evadir, interactuar | O2 | dron patrol/chase | Medio | telegraphing + rutas claras | `/diagrams/fsm/drone-fsm.md` |
| 2 | Elegir ruta | decidir ruta/ritmo | radiación visible, O2 | dron + ambiente | Medio | castigo gradual + advertencia | `/docs/Architecture.md` |
| 3 (S) | Completar Nodo 2 | interactuar, reorientar | checkpoint conceptual | dron investigate | Bajo | respiro + checkpoint | `/docs/LevelDesign.md` |
| 4 | Recuperar datos | evadir + interactuar | O2/radiación (si aplica) | pico criatura + dron | Medio-Alto | pico controlado + feedback | `/docs/MDA.md` |
| 5 | Escape | moverse/evadir | checkpoint opcional | persecución posible | Medio | ruta clara + señales | `/docs/GDD.md` |

---

## Level Beats → UI/Audio feedback (Sprint 5)

| Tramo | Pico/Respiro | UI clave | Audio/Feedback clave | Riesgo frustración | Mitigación | Referencia |
|---|---|---|---|---|---|---|
| 0 (S) | Respiro | Objetivo + HUD O2 básico | ambiente estable, sin alarma | Bajo | onboarding suave | `wireframes.md`, `Art_UX_Audio.md` |
| 1 | Pico 1 | Estado dron visible + prompt interactuar | patrol→investigate cues | Medio | telegraphing previo a chase | `Art_UX_Audio.md` |
| 2 | Pico 2 | Indicador radiación + O2 | interferencia + warning breve | Medio | castigo gradual + advertencia | `Architecture.md`, `Art_UX_Audio.md` |
| 3 (S) | Respiro | HUD estable + confirmación nodo | tono calmado + “success” sobrio | Bajo | checkpoint conceptual | `LevelDesign.md` |
| 4 | Pico 3 | Objetivo “Recuperar datos” + estado dron | chase alarm + evento criatura (subgrave) | Medio-Alto | señales claras + penalización controlada | `MDA.md`, `Art_UX_Audio.md` |
| 5 | Tensión final | Ruta clara + alertas O2 si aplica | chase/escape cues | Medio | claridad de salida + retry | `wireframes.md` |
