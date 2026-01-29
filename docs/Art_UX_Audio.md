# Arte, UI/UX y Audio — DERIVA

## UI/UX — Principios
- **Minimalista y legible:** mostrar solo lo necesario para decisiones (O2, radiación, dron, objetivo).
- **Feedback antes que castigo:** señales claras previas a persecución/penalización.
- **Consistencia sci-fi:** tipografía/íconos técnicos, prompts discretos.
- **Evitar sobrecarga:** sin minimapa complejo, sin exceso de paneles.

## HUD mínimo (Gameplay)
Elementos obligatorios:
1) **Objetivo actual** (1 línea).
2) **Oxígeno (O2)**: barra + porcentaje + alerta por umbrales.
3) **Radiación/Exposición**: indicador gradual (barra corta).
4) **Estado del dron**: Patrol/Investigate/Chase (texto + señal visual).
5) **Prompt de interacción**: aparece solo al poder interactuar (Ej: [E]).

## Pantallas clave
- **Menú principal:** Start / Opciones / Salir.
- **Pausa:** Continuar / Reintentar desde checkpoint / Opciones / Menú.
- **Terminal/Log:** lectura de logs + acción “Activar nodo” (si aplica).
- **Game Over/Retry:** mensaje neutral + reintento desde checkpoint conceptual.

Wireframes: `/diagrams/ui-wireframes/wireframes.md`

---

## Audio/Feedback (Telegraphing)
### Dron (según FSM)
- **Patrol:** zumbido mecánico bajo + pasos/rotores regulares (presión suave).
- **Investigate:** aumento leve de frecuencia + “beep” de búsqueda (aviso).
- **Chase:** alarma corta + incremento claro de volumen/ritmo (pico de tensión).
- **Pressure/Attack (no letal):** golpe sordo + interferencia breve (penalización controlada).

### Oxígeno (O2)
- Umbrales:
  - **>60%:** sin alertas.
  - **60–30%:** beep suave esporádico + respiración más presente.
  - **<30%:** alerta más frecuente (sin spam), refuerzo visual.
  - **<15%:** alerta crítica + HUD destaca O2 (prioridad).

### Radiación/Exposición
- Entrada a zona: chisporroteo/interferencia suave + indicador sube.
- Exposición alta: interferencia más fuerte + “warning” breve (no continuo).

### Interacción y progreso
- Terminal: confirmación “click/whirr” tecnológico.
- Nodo completado: sonido de éxito sobrio + luz/indicador del entorno.
- Ventanas de respiro: ambiente más silencioso + tono estable (descanso).

---

## Referencias cruzadas
- Level Design (ritmo y telegraphing): `/docs/LevelDesign.md`
