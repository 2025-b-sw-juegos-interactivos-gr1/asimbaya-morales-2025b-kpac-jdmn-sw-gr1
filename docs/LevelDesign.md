# Level Design — Vertical Slice (Nave Sci-Fi)

## Overview
Nivel único (vertical slice) ambientado en una nave parcialmente operativa. El nivel se divide en tramos para controlar ritmo, tensión y progresión por micro-objetivos.

**Objetivo macro del jugador:** reparar sistemas clave, recuperar un artefacto de datos y habilitar la ruta de escape.  
**Amenaza:** dron (persistente) + criatura (picos/eventos).  
**Presiones:** oxígeno y radiación visible (decisión de ruta).

---

## Tramos (Beats) y objetivos

### Tramo 0 — Despertar / Zona segura 1 (Respiro)
**Objetivo:** orientarse, entender HUD (O2/alertas) y conseguir el primer objetivo.  
**Amenaza:** baja (sin persecución).  
**Entregas narrativas:** primer log breve o señal ambiental.

### Tramo 1 — Pasillo de servicio (Presión inicial)
**Objetivo:** llegar al **Nodo 1** (terminal) y activarlo/repararlo.  
**Amenaza:** dron en patrulla (presión constante).  
**Decisión:** moverse con cautela para evitar LoS.

### Tramo 2 — Bifurcación “Riesgo vs Recompensa” (Radiación visible)
**Objetivo:** elegir ruta hacia el sector de control.  
**Ruta A (segura):** más larga, menor radiación, consume más oxígeno.  
**Ruta B (atajo):** radiación visible con exposición gradual, ahorra tiempo.  
**Amenaza:** dron + riesgo ambiental.

### Tramo 3 — Sala de nodos / Zona segura 2 (Respiro corto)
**Objetivo:** completar **Nodo 2** y obtener acceso a la cámara de datos.  
**Amenaza:** media (dron puede investigar, pero hay ventana de respiro tras completar el nodo).  
**Checkpoint conceptual:** al completar Nodo 2.

### Tramo 4 — Cámara de datos (Clímax)
**Objetivo:** recuperar el **artefacto de datos**.  
**Amenaza:** pico de tensión: evento de criatura + presión del dron (controlado).  
**Regla:** penalización gradual, señales claras.

### Tramo 5 — Ruta de escape (Tensión final controlada)
**Objetivo:** alcanzar compuerta/salida del slice.  
**Amenaza:** persecución posible, pero con ruta clara y feedback consistente.  
**Checkpoint conceptual:** previo a la salida (opcional, para evitar repetición excesiva).

---

## Ritmo (picos + ventanas de respiro)
### Ventanas de respiro (anti-frustración)
- **Respiro 1:** Tramo 0 (tutorialización y orientación).
- **Respiro 2:** Tramo 3 (tras Nodo 2, breve reorientación).

### Nota de feedback (UI/Audio)
El ritmo del nivel se apoya en telegraphing claro:
- Estado del dron siempre comunicado (audio + indicador HUD).
- Radiación visible + indicador gradual.
- Alertas de O2 por umbrales, sin saturación.
Referencia: `/docs/Art_UX_Audio.md` y wireframes en `/diagrams/ui-wireframes/wireframes.md`


### Picos de tensión
- **Pico 1:** Tramo 1 (primer contacto real con patrulla del dron).
- **Pico 2:** Tramo 2 (decisión con radiación visible: riesgo vs recompensa).
- **Pico 3:** Tramo 4 (cámara de datos: evento de criatura + presión).

### Telegraphing / feedback
- Radiación siempre visible y con advertencias antes de penalización fuerte.
- Dron anuncia cambios de estado (sonido/luz) antes de persecución.
- Los objetivos siempre se señalan con claridad (sin “adivinar”).

---

### Nota de Look & Feel (arte/audio)
Cada tramo usa un acento dominante y una capa sonora coherente:
- Respiro: luz estable + ambiente limpio (poca música).
- Tensión: contraste + señales del dron (telegraphing).
- Radiación: ámbar + interferencia suave.
- Clímax: rojo limitado + pulso + subgrave (evento criatura).
Referencia: `/docs/Art_UX_Audio.md`

---

## Referencias
Layout del nivel: `/diagrams/level-layout/vertical-slice-layout.md`
