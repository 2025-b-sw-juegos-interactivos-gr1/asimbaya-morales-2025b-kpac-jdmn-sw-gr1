# MDA — DERIVA (Título provisional)

## Aesthetics (Estética: la experiencia)
### Emociones primarias
1) **Tensión:** presión constante por recursos y amenaza persistente; el jugador anticipa peligro y planifica cada paso.  
2) **Narrativa / Inmersión:** la historia se descubre por el entorno (logs, señales, eventos), reforzando la sensación de estar “dentro” de la nave.

### Emoción secundaria
3) **Reto:** dificultad justa basada en decisiones (ruta/tiempo/gestión) más que en ejecución compleja.

### Emociones excluidas (por diseño)
- **Poder absoluto:** el jugador no domina el entorno; siempre hay vulnerabilidad.  
- **Frustración extrema:** evitamos castigos injustos y repetición excesiva; hay checkpoints conceptuales y señales claras.  
- **Complejidad excesiva:** sistemas mínimos, claros, sin “capas” innecesarias (no crafting extenso, no inventarios complejos).

### Declaración de experiencia (1 párrafo)
DERIVA busca que el jugador se sienta atrapado y observado en un entorno sci-fi que aún funciona, donde avanzar significa elegir bien bajo presión. La tensión se sostiene con amenazas persistentes y recursos controlados, mientras la inmersión se fortalece al reconstruir la historia mediante narrativa ambiental. El reto existe para que cada decisión importe, pero con reglas simples y feedback consistente para evitar frustración y complejidad innecesaria.

---

## Dynamics (Dinámicas: comportamiento emergente)

> Las Dynamics describen “qué termina haciendo el jugador” cuando interactúa con las reglas y restricciones.

### D1) Presión por oxígeno (gestión bajo tensión)
El jugador prioriza rutas seguras y objetivos cercanos porque el oxígeno introduce un reloj táctico. Esto mantiene tensión constante sin necesidad de combate directo.

### D2) Amenaza persistente (evitar > enfrentar)
La presencia del dron hace que el jugador reduzca exposición, observe patrones y use cobertura/tiempo. La dinámica principal es “sobrevivir evitando”.

### D3) Amenaza dual (dron activo + criatura como picos de tensión)
El dron genera presión continua; la criatura aparece como eventos (picos) que rompen la rutina y elevan el miedo/anticipación. Esto evita monotonía y refuerza la narrativa de “no estás solo”.

### D4) Riesgo vs recompensa por ruta (radiación visible)
Zonas con radiación visible obligan a decidir: ir por un atajo con riesgo o rodear con menor riesgo pero mayor tiempo/oxígeno. Esto sostiene el reto justo basado en decisión.

### D5) Exploración cautelosa y lectura del entorno (inmersión)
El jugador avanza interpretando señales: luces, sonidos, restos, logs. La dinámica favorece “explorar con atención”, elevando inmersión narrativa.

### D6) Micro-objetivos encadenados (progresión por nodos/terminales)
El jugador progresa reparando o activando nodos/terminales. Cada micro-objetivo da avance claro (meta) y entrega narrativa (log/evento), reforzando el loop.

### D7) Ventanas de respiro (anti-frustración planificada)
Después de picos de tensión, existen zonas/segmentos con menor amenaza para reorientación. Esto evita frustración extrema y permite aprendizaje.

### D8) Checkpoints conceptuales (evitar repetición excesiva)
El progreso se protege en puntos lógicos (zonas seguras/nodos), reduciendo castigo por fallos y manteniendo el reto sin frustración.

### Nota de coherencia
Estas dinámicas están diseñadas para producir:
- **Tensión** (D1, D2, D3, D4),
- **Inmersión narrativa** (D5, D6),
- **Reto** (D4, D6),
evitando **frustración extrema** (D7, D8) y **complejidad excesiva** (sistemas mínimos).

---

## Mechanics (Mecánicas: reglas que soportan las Dynamics)

- **Verbos mínimos:** moverse, observar/escaneo, interactuar, evadir, gestionar oxígeno, recuperar narrativa.
- **Reglas de presión:** oxígeno como reloj táctico (umbral/alertas), radiación visible con exposición gradual.
- **Reglas de amenaza:** dron con FSM (visión/sonido/tiempo) para presión persistente.
- **Anti-frustración:** ventanas de respiro + checkpoints conceptuales + feedback consistente.

> Detalle de Mechanics v1 en `/docs/GDD.md` y FSM del dron en `/diagrams/fsm/drone-fsm.md`.


