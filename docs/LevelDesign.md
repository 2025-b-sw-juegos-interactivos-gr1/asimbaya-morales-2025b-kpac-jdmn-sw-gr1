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

## Narrativa por tramo (qué se revela)
- Tramo 0: el jugador entiende que no hay operador identificado (LOG 01) y que “los sensores mienten” (LOG 02).
- Tramo 1: el dron se comporta como si el jugador fuera anomalía (LOG 03) y la nave pierde energía (LOG 04).
- Tramo 2: radiación como decisión informada (LOG 05) y señales de presencia irregular (LOG 06).
- Tramo 3: permisos de emergencia y condición de acceso (LOG 07); advertencia de “arrastre” (LOG 08).
- Tramo 4: el artefacto “DERIVA” y anomalía sin firma térmica (LOG 09–10).
- Tramo 5: escape corto y última señal inquietante (LOG 11–12).

## Distribución de logs (v1)
- Tramo 0: LOG 01–02
- Tramo 1: LOG 03–04 (cerca de N1)
- Tramo 2: LOG 05–06 (antes/después de bifurcación)
- Tramo 3: LOG 07–08 (cerca de N2 / zona segura)
- Tramo 4: LOG 09–10 (cámara de datos)
- Tramo 5: LOG 11–12 (ruta de escape)

---

## Eventos narrativos (picos controlados)

### Evento E1 — Puerta “demasiado lenta” (Tramo 1)
- Gatillo: el jugador intenta cruzar una compuerta.
- Efecto: la compuerta se mueve lento + luz parpadea.
- Feedback: sonido metálico + HUD mantiene objetivo (no confunde).
- Propósito: primer pico suave.

### Evento E2 — Interferencia de radiación (Tramo 2)
- Gatillo: entrar a zona marcada (R).
- Efecto: distorsión visual leve + warning breve.
- Feedback: interferencia sonora + indicador RAD sube.
- Propósito: decisión informada.

### Evento E3 — “Sombra” en el punto ciego (Tramo 3)
- Gatillo: al salir del nodo hacia el pasillo.
- Efecto: sombra rápida al borde de visión (sin mostrar detalle).
- Feedback: subgrave corto + silencio posterior (respiro).
- Propósito: pico de tensión sin combate.

### Evento E4 — Dron cambia patrón (Tramo 3/4)
- Gatillo: completar Nodo 2.
- Efecto: el dron pasa a Investigate por tiempo breve.
- Feedback: beep de búsqueda + indicador DRON cambia.
- Propósito: tensión controlada tras progreso.

### Evento E5 — “Señal” cerca del artefacto (Tramo 4)
- Gatillo: acercarse a la cámara de datos.
- Efecto: luces oscilan + una vibración lejana.
- Feedback: pulso musical breve + luces rojas limitadas.
- Propósito: clímax narrativo.

### Evento E6 — Ruta de escape habilitada (Tramo 5)
- Gatillo: tomar el artefacto.
- Efecto: compuerta se habilita, luces guían la salida.
- Feedback: tono de confirmación + objetivo cambia a “Escapar”.
- Propósito: claridad final (anti-frustración).

---

## Referencias
Layout del nivel: `/diagrams/level-layout/vertical-slice-layout.md`
