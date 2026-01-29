# Arquitectura (Blueprint)

## IA — Dron (FSM)
La amenaza persistente se modela como una FSM con estados: Idle, Patrol, Investigate, Chase, Search, Pressure/Attack (no letal).
El objetivo es mantener tensión constante con telegraphing claro y castigos graduales.
Referencia: `/diagrams/fsm/drone-fsm.md`

## Sistemas v1 (mínimos)

### Sistema de Oxígeno
- Variable conceptual: O2 (0–100)
- Consumo: constante + modificadores por sprint/estrés/eventos
- Umbrales: advertencias por niveles (feedback claro)
- Recuperación: zonas seguras/terminales o acciones específicas (sin complejidad)

### Sistema de Radiación
- Zonas visibles (feedback visual)
- Exposición acumulativa (no instantánea)
- Penalización gradual (afecta presión/decisión)
- Evitar “insta-fail” sin advertencia previa

### Checkpoints conceptuales
- Se activan en puntos lógicos: zonas seguras y nodos completados
- Guardan estado conceptual mínimo: progreso de objetivos, estado de O2/exposición (alto nivel)
- Evitan repetición excesiva y sostienen el reto justo
