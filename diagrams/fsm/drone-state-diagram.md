# Diagrama de Estados — Dron (FSM formal) v1

Estados:
- Idle
- Patrol
- Investigate
- Chase
- Search
- Pressure (penalización no letal)

Transiciones (trigger -> next):
Idle
- timer_elapsed -> Patrol

Patrol
- suspicious_signal(sound/light) -> Investigate
- line_of_sight(player) -> Chase

Investigate
- confirm_line_of_sight -> Chase
- timeout_no_confirmation -> Patrol

Chase
- lose_line_of_sight_for(t) -> Search
- distance_critical -> Pressure

Search
- reacquire_signal -> Chase
- timeout_no_signal -> Patrol

Pressure
- apply_penalty_complete -> (line_of_sight ? Chase : Search)

Notas anti-frustración (telegraphing):
- Antes de Chase: señal audible/visual (beep/luces) consistente.
- Pressure es gradual (no insta-fail) y deja oportunidad de escape.
- Ventanas de respiro: permitir Idle o Patrol con rutas previsibles tras checkpoints.
