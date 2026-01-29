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

---

## Dirección de Arte v1 (Look & Feel)

### Estilo visual
- **Sci-fi industrial** (metal, paneles, cableado, señalética técnica).
- **Realismo controlado:** detalles suficientes para inmersión, pero lectura clara (no “ruido visual”).
- **Geometría:** pasillos angostos, salas con maquinaria, compuertas, nodos visibles.

### Paleta (base + acentos)
- **Base:** grises fríos, negro suave, acero (neutral, tensión).
- **Acentos:**
  - **Azul/cian:** tecnología funcional, UI/zonas seguras (respiro).
  - **Ámbar/amarillo:** advertencias técnicas (radiación/alarma suave).
  - **Rojo:** peligro máximo (solo para chase/clímax, uso limitado).
- Regla: **1 acento dominante por tramo** para no saturar.

### Iluminación (ritmo emocional)
- **Tramos de respiro:** iluminación estable, más uniforme, menos parpadeo.
- **Tramos de tensión:** contrastes fuertes, sombras, luz direccional, parpadeo controlado.
- **Radiación:** brillo localizado y reconocible (no confundir con UI).
- **Clímax:** oscilación de luz + sombras marcadas para siluetas (criatura/evento).

### Materiales (guía)
- **Metal (acero/aleación):** principal; desgaste moderado (rayas, manchas).
- **Plástico técnico:** paneles de control, carcasas del dron.
- **Vidrio/visores:** terminales, cabinas (reflejos moderados).
- **Señalética:** iconos simples, flechas, numeración de sectores.
- **Radiación:** “haze” / interferencia visual sutil en áreas marcadas.

### Reglas anti-confusión (anti-frustración visual)
- Radiación siempre marcada de forma consistente (color + forma).
- Objetivos (nodos/terminales) deben destacarse con acento tecnológico (azul/cian).
- Evitar exceso de props que bloquee lectura del espacio.

Moodboard textual: `/references/visual/moodboard-textual.md`

---

## Audio Style Guide v1

### Estilo general
- **Ambiente:** industrial minimalista, drones bajos, ventilación, chasquidos metálicos.
- **Música:** pulsos sutiles (tensión), casi ausente en respiro, sube en chase/clímax.
- **Regla:** el audio debe informar estado (telegraphing) sin saturar.

### Capas por emoción
- **Respiro:** ambiente estable, menos elementos, silencio útil.
- **Tensión:** drones bajos + detalles mecánicos + señales de dron a distancia.
- **Clímax:** pulso más marcado + subgrave (criatura/evento) + alarmas breves.

### Lista mínima de SFX (v1)
**UI/HUD**
- beep suave (notificación), alerta O2, alerta radiación, confirmación objetivo
**Interacción**
- abrir compuerta, terminal click, nodo activación, nodo completado, log adquirido
**Ambiente**
- ventilación, goteo, chispa eléctrica, metal cruje, paso lejano
**Dron**
- patrol hum, investigate beep, chase alarm corto, search ping, “impacto” no letal
**Radiación**
- interferencia suave, warning breve, exposición alta (distorsión)
**Jugador**
- respiración normal/forzada, paso suave/rápido

Referencia de uso por tramo: `/docs/LevelDesign.md`

