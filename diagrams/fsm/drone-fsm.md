# FSM — Dron (Amenaza persistente) v1

## Estados
1) **Idle (Standby)**
- Propósito: “respirar” y permitir ventanas de respiro si el jugador está lejos.
- Transición: timer → Patrol.

2) **Patrol**
- Propósito: presión constante. Ruta/patrón predefinido.
- Triggers:
  - Si detecta **señal sospechosa** (sonido/indicador) → Investigate
  - Si detecta **línea de visión** (LoS) al jugador → Chase

3) **Investigate**
- Propósito: subir tensión sin castigo inmediato.
- Triggers:
  - Si confirma LoS → Chase
  - Si no confirma tras tiempo T → Patrol

4) **Chase**
- Propósito: castigar exposición; forzar evasión.
- Triggers:
  - Si pierde LoS por tiempo t → Search
  - Si se acerca a distancia crítica → Pressure/Attack (no letal / penalización)

5) **Search**
- Propósito: tensión “¿me encontró?”.
- Triggers:
  - Si recupera pista → Chase
  - Si agota tiempo sin pista → Patrol

6) **Pressure/Attack (no letal)**
- Propósito: penalización controlada (no muerte instantánea), empuja a retroceder.
- Triggers:
  - Tras aplicar penalización breve → Chase o Search (según LoS)

## Reglas anti-frustración (telegraphing)
- Señales claras antes de Chase (audio/luces del dron).
- Chase no debe iniciar sin indicio consistente (LoS o confirmación de investigación).
- “Attack” es penalización gradual, no instantánea, para evitar frustración extrema.
