# GDD — DERIVA (Título provisional)

## I. Ficha Técnica y Concepto
**Tipo de proyecto:** Juego de entretenimiento  
**Perspectiva:** Primera Persona (FPS clásico)  
**Plataforma objetivo (Vertical Slice):** Web PC (Navegador)  
**Tecnología objetivo (futuro):** Babylon.js  
**Controles:** Teclado + mouse  
**Duración objetivo:** 1–2 horas (experiencia “media”)  
**Mundo:** Sci-Fi  
**Rol del jugador:** Superviviente  

### High Concept (1 frase)
Un superviviente atrapado en una nave parcialmente operativa debe **reparar sistemas**, **recuperar un artefacto de datos** y **escapar**, mientras gestiona oxígeno, evita radiación visible y sobrevive a una amenaza dual (dron activo + presencia de criatura).

### Elevator Pitch
Juego de supervivencia narrativa en primera persona ambientado en una nave sci-fi que aún funciona “a medias”. El jugador progresa por micro-objetivos (nodos/terminales), gestiona oxígeno y toma decisiones de ruta bajo presión. Una IA en forma de dron patrulla y castiga la exposición, mientras que una criatura aparece como eventos/picos de tensión. El enfoque es **tensión + inmersión**, con **reto justo** y sin sistemas innecesarios.

### Pilares de diseño (3)
1. **Tensión sostenida sin frustración extrema:** presión constante con ventanas de respiro planificadas.  
2. **Narrativa ambiental inmersiva:** historia fragmentada por logs, señales del entorno y revelaciones por objetivos.  
3. **Reto justo, reglas simples:** decisiones claras (ruta/tiempo/recursos) sin complejidad excesiva.

### Restricciones / No-Goals (lo que NO será)
- **No multijugador:** experiencia single player enfocada en inmersión.  
- **No mundo abierto completo:** nivel lineal por tramos para controlar ritmo y tensión.  
- **No sistemas innecesarios:** sin crafting extenso, sin árbol de habilidades, sin inventarios complejos, sin combate “power fantasy”.

### Reglas anti-frustración (para mantener “Reto” sin “Frustración extrema”)
- **Ventanas de respiro:** secciones seguras o de baja amenaza donde el jugador puede reorientarse y planificar.  
- **Feedback claro y consistente:** señales visuales/sonoras para oxígeno, radiación y proximidad de amenaza.  
- **Checkpoints conceptuales:** progreso protegido en puntos lógicos (zonas seguras / nodos) para evitar repetición excesiva.  
- **Aprendizaje sin castigo injusto:** amenazas y radiación se comunican antes de penalizar fuerte (telemetría visible, advertencias).  

---

## II. Análisis MDA (Resumen)
> El detalle formal vive en `/docs/MDA.md`. Esta sección referencia la experiencia objetivo.

### Aesthetics (Experiencia objetivo)
- **Primarias:** Tensión, Narrativa/Inmersión  
- **Secundaria:** Reto  
- **Excluidas:** Poder absoluto, Frustración extrema, Complejidad excesiva  

### Dynamics (Resumen)
- **Presión por oxígeno:** decisiones de ritmo y ruta bajo reloj táctico.
- **Amenaza persistente (evitar > enfrentar):** el dron obliga a ocultarse, observar y planificar.
- **Amenaza dual:** dron como presión constante + criatura como picos/eventos.
- **Riesgo vs recompensa:** radiación visible crea decisiones justas (atajo riesgoso vs ruta segura).
- **Exploración cautelosa:** el jugador lee el entorno y reconstruye historia (inmersión).
- **Micro-objetivos:** nodos/terminales encadenan progreso y narrativa.
- **Anti-frustración:** ventanas de respiro + checkpoints conceptuales.

> Detalle completo en `/docs/MDA.md`.

**Declaración de experiencia:**  
El jugador debe sentirse vulnerable pero capaz: cada avance se logra mediante decisiones conscientes bajo presión (oxígeno, amenaza y radiación), mientras reconstruye la historia de la nave a través de pistas ambientales, logrando una tensión constante con picos controlados y descanso estratégico.

---

## III. Core Loop (Final v1)

### Core Loop (pasos)
1) **Orientar objetivo:** el jugador identifica el siguiente micro-objetivo (nodo/terminal/acceso).
2) **Explorar con cautela:** avanza leyendo señales del entorno (luz/sonido/logs).
3) **Detectar presión y amenazas:** oxígeno + radiación visible + patrón del dron.
4) **Decidir ruta y ritmo:** elegir entre seguridad/tiempo/riesgo (ruta alternativa o atajo).
5) **Ejecutar interacción:** activar/reparar nodo, abrir acceso, recuperar log, habilitar progreso.
6) **Recompensa y actualización de estado:** progreso + narrativa (log/evento) + cambio del entorno.
7) **Respiro / checkpoint conceptual:** ventana segura o segmento de baja amenaza para reorientación.
8) **Repetir hasta objetivo final:** recuperar artefacto de datos y habilitar escape.

### Variación de picos (amenaza dual)
- El dron mantiene presión constante.
- La criatura aparece como evento puntual para “subir la tensión” y romper la rutina, sin convertir el juego en combate.

### Reglas de coherencia (para no romper el diseño)
- Cada paso del loop debe reforzar **tensión + inmersión** sin añadir sistemas innecesarios.
- El reto debe venir de **decisiones** (ruta/tiempo/recursos), no de complejidad.

---

## IV. Mechanics v1 (Verbos + reglas base)

### Verbos mínimos del jugador
1) **Moverse** (caminar/correr controlado): prioriza ritmo y ruido (decisión).
2) **Observar/escaneo**: leer señales del entorno (luz/sonido/indicadores).
3) **Interactuar**: usar terminales/nodos, abrir compuertas, activar sistemas.
4) **Ocultarse/evadir**: romper línea de visión, usar cobertura y timing.
5) **Gestionar recursos**: oxígeno como presión constante (decidir ruta/tiempo).
6) **Recuperar evidencia narrativa**: logs/artefactos que avanzan el contexto.
7) **Uso mínimo de “defensa no letal” (opcional conceptual)**: herramienta para ganar tiempo, no para dominar.

### Reglas base (sin implementación)
- **Oxígeno:** consumo constante + alertas por umbrales; zonas/acciones pueden recuperar o estabilizar.
- **Radiación visible:** entrar en zona acumula exposición; penalización gradual (nunca “insta-fail” sin aviso).
- **Amenaza (dron):** el jugador evita exposición; la IA responde a visión/sonido/tiempo.
- **Progreso por micro-objetivos:** nodos/terminales desbloquean rutas y entregan narrativa.
- **Checkpoints conceptuales:** se activan en puntos lógicos (zonas seguras/nodos) para evitar repetición.

### Límites (anti-complejidad)
- Sin crafting extenso.
- Sin árbol de habilidades.
- Sin inventario complejo (si hay ítems, son pocos y funcionales).
- Sin combate que genere “poder absoluto”.

### Sistemas (resumen)
El vertical slice usa tres sistemas mínimos: **Oxígeno** (presión), **Radiación** (decisión de ruta) y **Checkpoints conceptuales** (anti-frustración). Todos priorizan feedback claro y castigos graduales.


---

## V. Diseño de Niveles (pendiente)
## VI. Arte y Audio (pendiente)
## VII. Arquitectura de Software (pendiente)
