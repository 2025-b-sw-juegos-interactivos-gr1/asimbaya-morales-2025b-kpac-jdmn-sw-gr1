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

## Objetivo
Definir una arquitectura modular (sin implementación) compatible con Babylon.js para un vertical slice web.

## Módulos (capas)
1) **Core**
- GameBootstrap (inicialización), SceneLoader (carga), TimeService
2) **Gameplay**
- PlayerController, InteractionController, LevelDirector (beats)
3) **Systems**
- O2System, RadiationSystem, CheckpointSystem, ObjectiveSystem
4) **AI**
- DroneAI (FSM), Perception (LoS/sonido conceptual)
5) **UI**
- UIHUD, UIScreens (Menu/Pause/Terminal/GameOver)
6) **Audio**
- AudioDirector (capas por emoción), SFXRouter (feedback por evento)
7) **Data**
- LogRepository (colección de logs), GameState (estado conceptual), SaveSnapshot (conceptual)

## Flujo (event-driven)
- Los Systems publican eventos (ej: O2_LOW, RADIATION_WARNING, CHECKPOINT_REACHED)
- UI y Audio se suscriben a eventos para feedback.
- LevelDirector controla beats y dispara cambios de objetivo y eventos narrativos.

## Patrones seleccionados (y por qué)
- **Observer / EventBus:** desacopla Systems de UI/Audio (reduce complejidad).
- **State (FSM):** IA del dron (control claro de estados).
- **Component (estilo ECS ligero):** entidades con componentes (sin reinventar un motor).
- **Factory:** creación de entidades del nivel (dron, terminales, nodos) de forma consistente.
- **Singleton (limitado):** solo para servicios globales estrictos (EventBus/AudioDirector) y con cuidado.

## Anti-complejidad (reglas de arquitectura)
- No introducir subsistemas que no estén trazados a MDA/Level Beats.
- Cada módulo debe justificar su existencia por un entregable (docs/diagramas).

## Diagramas
- UML conceptual: `/diagrams/uml/class-diagram.md`
- FSM dron (texto): `/diagrams/fsm/drone-fsm.md`
- FSM dron (formal): `/diagrams/fsm/drone-state-diagram.md`