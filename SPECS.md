# Plataforma de alquiler de agentes de IA:
Una startup llamada **AgentHub** está construyendo una plataforma SaaS donde las empresas pueden alquilar agentes de IA — asistentes inteligentes preconfigurados que pueden equiparse con distintas skills. en esta fase, el proyecto debe trabajarse especificamente en el frontend.
## Estructura de proyecto

La estructura del proyecto está implementada mediante seis vistas HTML y JavaScript compartido. Tailwind CSS se utiliza mediante clases de utilidad en el marcado; no se deben crear ni enlazar archivos CSS, bloques `<style>` ni atributos `style`.

- `dashboard.html`
- `user_management.html`
- `agent_management.html`
- `skills_catalog.html`
- `agent_contracts.html`
- `error_log.html`
- `js/agenthub-ui.js`

## Inventario de componentes

| Componente | Uso |
| --- | --- |
| `AppShell` | Estructura persistente compartida por las seis vistas. |
| `Sidebar` y `SidebarLink` | Navegación a las seis secciones, con estado activo visible. |
| `TopBar` y `ThemeToggle` | Encabezado común y control global de tema claro/oscuro. |
| `PageHeader` | Título y contexto de la vista actual. |
| `MetricCard` | Métrica, etiqueta e ícono del dashboard. |
| `DataTable` | Encabezados y filas de usuarios, contratos y errores. |
| `StatusBadge` | Estado de usuarios/agentes o tipo y gravedad del error. |
| `RowActionsMenu` | Menú `⋮` asociado a cada registro de un listado. |
| `DetailsModal` y `AgentConfigModal` | Detalle de una entidad y configuración del prompt del agente. |
| `SkillsDisclosure` | Lista de skills expandible en cada fila de agente. |

Los componentes compartidos mantienen el mismo comportamiento y lenguaje visual en todas las vistas. Pueden implementarse con HTML y JavaScript vanilla; los nombres del inventario describen responsabilidades, no exigen un framework.

## Qué demuestra esta implementación de referencia

- Un diseño de administración persistente y uniforme en todas las vistas (barra lateral y barra superior).
- Datos empresariales estáticos en todas las secciones requeridas.
- Patrones de interacción funcionales implementados con JavaScript puro (vanilla JavaScript):
  - Menús desplegables de acciones por fila (`⋮`).
  - Ventanas modales de detalles y configuración.
  - Listas de habilidades expandibles y contraíbles en las filas de los agentes.
  - Interruptor global para alternar entre el modo oscuro y el modo claro.
- Uso de HTML semántico para tablas, secciones, navegación y áreas de contenido principal.

## Requisitos globales

- La barra lateral debe mostrar enlaces funcionales a Dashboard, Gestión de usuarios, Gestión de agentes, Habilidades, Contratos de agentes y Registro de errores. El enlace de la vista actual debe distinguirse visualmente.
- Todas las vistas deben conservar la barra lateral y la barra superior, con navegación disponible al cambiar de sección.
- Aplicar clases de utilidad Tailwind de manera consistente. No usar atributos `style`, elementos `<style>` ni archivos CSS propios o enlazados.
- Todo listado con registros debe mostrar un control `⋮` por fila o elemento: usuarios, agentes, skills, contratos y errores. Al activarlo se abre su menú; al volver a activarlo se cierra; hacer clic fuera lo cierra y abrir otro menú cierra el anterior.
- «Ver detalles» debe abrir un modal en al menos cuatro secciones. Se requiere en Gestión de usuarios, Gestión de agentes, Habilidades, Contratos de agentes y Registro de errores. «Configurar» también abre el modal de configuración del agente.
- Todos los modales se cierran con su botón de cierre y al hacer clic en el backdrop. Hacer clic dentro del contenido del modal no debe cerrarlo.
- Las listas de skills de los agentes empiezan colapsadas. El control permite expandirlas y colapsarlas con una transición visual perceptible.
- El toggle de tema claro/oscuro afecta toda la vista, incluidos navegación, tablas, menús y modales. Guardar la preferencia en `localStorage` y aplicarla al cargar cualquiera de las seis vistas.
- El HTML debe usar elementos semánticos: `header`, `nav`, `main`, `section`, `footer` cuando corresponda, y `table` con `thead`, `tbody`, encabezados `th` y celdas `td` para datos tabulares. Los controles interactivos deben ser botones o enlaces nativos con nombre accesible.
- En escritorio (ancho de viewport de 1024 px o superior), la navegación lateral permanece visible y las tablas muestran sus columnas sin recorte. En tablet (768–1023 px), la navegación puede colapsarse en un control de menú accesible y las tablas deben permitir desplazamiento horizontal sin deformar ni ocultar su contenido.

## Criterios de aceptación

1. [ ] La barra lateral permite acceder a las seis vistas requeridas y señala cuál está activa.
2. [ ] Cada una de las seis vistas cumple al menos tres especificaciones concretas de su sección correspondiente.
3. [ ] Los componentes del inventario están presentes donde se requieren y conservan comportamiento y estilo consistentes.
4. [ ] Las vistas usan clases Tailwind; no contienen atributos `style`, elementos `<style>` ni enlaces a archivos CSS.
5. [ ] El Dashboard muestra exactamente cuatro tarjetas de métricas y un espacio de gráfico semanal de ancho completo debajo de ellas.
6. [ ] Cada listado presenta como mínimo la cantidad de registros y los campos indicados en su sección.
7. [ ] Cada fila o elemento de los cinco listados tiene un menú `⋮` que abre, cierra con un segundo clic, cierra al hacer clic fuera y no deja abierto otro menú simultáneamente.
8. [ ] «Ver detalles» abre un modal con información específica en Gestión de usuarios, Gestión de agentes, Habilidades, Contratos de agentes y Registro de errores.
9. [ ] Todos los modales cierran con el botón de cierre o al hacer clic en el backdrop; un clic dentro del modal no lo cierra.
10. [ ] Las skills de cada agente están colapsadas al cargar y su control las expande/colapsa con una transición visible.
11. [ ] El toggle cambia el tema de toda la interfaz y la preferencia persiste al navegar entre las seis vistas y recargar.
12. [ ] Los mismos cuatro agentes —Atlas, Nébula, Lince y Brújula— aparecen con idéntica escritura en Gestión de agentes, Contratos de agentes y Registro de errores.
13. [ ] El contenido usa la estructura semántica requerida y los controles interactivos tienen nombres accesibles.
14. [ ] En escritorio y tablet se puede usar la navegación y consultar todo el contenido de tablas sin recortes; en tablet se permite desplazamiento horizontal de tablas.

## Notas

- en esta fase del proyecto, aun no se hace la integración con un backend.

## Especificaciones de las vistas

Las siguientes especificaciones de cada vista pueden utilizarse como requisitos de referencia.

### 1) Panel principal (Dashboard)

- Mostrar exactamente 4 cards de métricas en una cuadrícula adaptable: ingresos totales, pérdidas por descuentos/cupones, agentes activos y agentes con fallos. Cada tarjeta debe incluir un ícono, una etiqueta y un valor estático.
- Mostrar un espacio reservado para un gráfico de actividad semanal que ocupe todo el ancho, debajo de las tarjetas y claramente separado del contenido de los indicadores clave de rendimiento (KPI).
- Mantener un diseño coherente en los modos claro y oscuro, con un contraste legible para las etiquetas, los valores y los íconos de las tarjetas.

### 2) Gestión de usuarios

- Mostrar una tabla con al menos 5 usuarios y las siguientes columnas: nombre, correo electrónico, plan y una insignia de estado.
- Incluir un menú desplegable de acciones (`⋮`) en cada fila, con al menos las opciones «Ver detalles» y «Eliminar».
- Al seleccionar «Ver detalles», abrir una ventana modal con toda la información del usuario. La ventana debe poder cerrarse mediante el botón de cierre y al hacer clic en el fondo superpuesto.

### 3) Gestión de agentes

- Mostrar una lista de al menos 4 agentes con su nombre, propietario, insignia de estado y una lista de habilidades que aparezca contraída de forma predeterminada. Incluir Atlas, Nébula, Lince y Brújula con esa escritura exacta.
- Incluir un control para expandir o contraer la lista de habilidades y mostrarlas mediante una transición visual fluida.
- Incluir un menú desplegable de acciones por fila con las opciones «Ver detalles», «Configurar» y «Eliminar». «Ver detalles» abre un modal con la información del agente; «Configurar» abre un modal que contiene su *prompt* del sistema en un área de texto editable (`textarea`).

### 4) Habilidades (Catálogo)

- Mostrar al menos 4 habilidades, cada una con su nombre, una descripción breve y el número de agentes que la tienen habilitada.
- Incluir un texto explicativo dentro de la vista que defina qué significa una «habilidad» en el contexto de la plataforma AgentHub.
- Incluir un menú desplegable de acciones (`⋮`) para cada habilidad, con las opciones «Ver detalles» y «Eliminar». «Ver detalles» abre un modal con el nombre, descripción y cantidad de agentes que tienen habilitada esa habilidad.

### 5) Contratos de agentes

- Mostrar una tabla de contratos con al menos 4 registros que incluyan el cliente, el agente alquilado, las habilidades contratadas, las fechas de inicio y finalización, y el importe total pagado. Incluir al menos un contrato para cada uno de estos agentes: Atlas, Nébula, Lince y Brújula.
- Incluir un menú desplegable de acciones (`⋮`) en cada fila, con la opción «Ver detalles».
- Mostrar una ventana modal con el desglose completo del contrato y los precios desglosados de cada habilidad contratada.

### 6) Registro de errores

- Mostrar al menos 6 registros de errores con fecha y hora, nombre del agente, una insignia que indique el tipo de error y una descripción breve. Los registros deben incluir errores de Atlas, Nébula, Lince y Brújula.
- Utilizar insignias codificadas por colores para distinguir los tipos de errores o sus niveles de gravedad.
- Incluir un menú desplegable de acciones (`⋮`) para cada registro, con las opciones «Ver detalles» (que abre una ventana modal con los detalles de la traza del error) y «Marcar como resuelto».