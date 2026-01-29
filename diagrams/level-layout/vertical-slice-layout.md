# Layout 2D (ASCII) - Vertical Slice (Nave)

## Leyenda:
- [S] Zona segura / checkpoint conceptual
- [N1], [N2] Nodos/terminales (micro-objetivos)
- [D] Cámara de datos (artefacto)
- [E] Escape (fin del slice)
- (R) Zona de radiación visible (exposición gradual)
- ---> Flujo recomendado
- "~~~" Ruta alternativa / riesgo vs recompensa
- {P} Patrulla típica del dron

```mermaid
flowchart TD
    %% Tramo 0
    T0["Tramo 0<br/>S · Inicio"] --> T1

    %% Tramo 1
    T1["Tramo 1<br/>Pasillo de servicio<br/>P · Patrulla de dron"] --> N1
    N1["N1 · Nodo terminal"] --> T2

    %% Tramo 2 - Bifurcación
    T2["Tramo 2<br/>Bifurcación<br/>Ruta A vs Ruta B"]

    %% Ruta A segura
    T2 -->|Ruta A segura| T3A
    T3A["Tramo 3A<br/>S · Respiro<br/>N2"] --> T4

    %% Ruta B riesgo / radiación
    T2 -.->|Ruta B atajo · R radiación| T3B
    T3B["Tramo 3B<br/>R · Paso irradiado<br/>hacia N2"] --> T4

    %% Tramo 4
    T4["Tramo 4<br/>Cámara de datos<br/>D · Artefacto<br/>Pico criatura"] --> T5

    %% Tramo 5
    T5["Tramo 5<br/>E · Escape"]

    
```

# Notas:
- El dron patrulla fuerte en Tramo 1 y puede investigar Tramo 3/4.
- La radiación es visible, gradual y usada solo para decisiones (no castigo injusto).