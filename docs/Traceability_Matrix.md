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
