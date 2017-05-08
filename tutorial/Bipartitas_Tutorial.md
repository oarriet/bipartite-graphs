---
title: Algoritmos sencillos para visualización de grafos bipartitas - Un tutorial
author:
- Oscar Arrieta / Jason Ocampo
- Escuela de Informática, Universidad Nacional, Heredia, Costa Rica
abstract:
bibliography: bibliografia.bib
fontsize: 11pt
---

# Introducción

La visualización de la información se ve marcada por la constante de mejora y acercamientos a formas naturales de percibir agrupaciones de datos, ya sean en menor cantidad o en situaciones de mayor complejidad en las que los usuarios generales pueden comprobar la efectividad de los modelos de visualización. Los grafos tienen su origen en abstracciones matemáticas, que si bien son el punto de partida para lograr las visualizaciones, pueden no ser tan aceptables para todos los usuarios (definiciones, fórmulas, expresiones), siendo lo importante la representación final y qué tan sencilla se presenta como un canal de acceso. Sobre esta línea, buscando visualizaciones naturales nos enfocamos en grafos bipartitos a manera de un conjunto de montañas, formando en su punto final una sierra, siendo nuestros conjuntos la base de dicho modelo y los puntos altos de cada formación. La presente investigación pretende ofrecer una solución a la generación de un grafo con esta forma con base en modelos similares y que sea una alternativa a las visualizaciones de este tipo.

## Visualización de los datos

El proceso de visualización de los datos tiene como base dos aspectos sobresalientes, no sólo lo que se puede comunicar si no también llegar a conclusiones mediante análisis de los grafos. La visualización es una herramienta que permite compartir interpretaciones basados en la manera de recibir "lo que se ve" a nivel de un conjunto de datos y sus interacciones. Completar la aceptación y comprensión de información es la clave del proceso, llevando un conjunto de definiciones a un ámbito visual y de relación bien representado.

## Motivación

## Descripción del problema

Existen numerosos modelos de grafos de dos conjuntos, el más común puede ser tal vez tener dos niveles horizontales con un conjunto *A* en una posición superior con respecto a un conjunto *B*, los nodos de estos conjuntos se mostrarían enlazados por aristas de manera vertical con cierto nivel de inclinación. El diseño planteado cambiaría a dos columnas que de igual manera representan cada conjunto de la visualización, la relación de la información se debe manejar de tal forma que sea una vista depurada y ordenada en razón de la forma de un conjunto de montañas, cuya facilidad de interpretación no se vea comprometida dentro lo posible.

## Áreas de aplicación

Los gráficos bipartitos se utilizan ampliamente en la teoría de codificación, principalmente para decodificar las palabras de código. Los gráficos de factores y los gráficos de Tanner son ejemplos de esto, este último es un gráfico bipartito en el que los vértices de un lado de la bipartición representan dígitos de una palabra de código y los vértices del otro lado representan combinaciones de dígitos que se espera sumar a cero en una palabra de código sin errores. Un gráfico de factores es una red relacionada usada para decodificación probabilística de LDPC (Low Density Parity Check son una clase de códigos de corrección de error lineal que permiten transmitir un mensaje por un canal de comunicaciones ruidoso ).

Otro ejemplo a nivel informático son las redes de Petri, herramientas de modelado matemático utilizada en el análisis y simulaciones de sistemas concurrentes. Un sistema es modelado como un grafo bipartito dirigido con dos conjuntos de nodos: Un conjunto de nodos "lugar" que contienen recursos y un conjunto de nodos "evento" que generan y / o consumen recursos. Estas redes utilizan las propiedades de los gráficos bipartitos dirigidos y otras propiedades para permitir pruebas matemáticas del comportamiento de los sistemas al mismo tiempo que permiten la implementación fácil de simulaciones del sistema.

En la geometría proyectiva, los gráficos de Levi son una forma de gráfico bipartito utilizado para modelar las incidencias entre puntos y líneas en una configuración. Correspondiendo a la propiedad geométrica de puntos y líneas que cada dos líneas se encuentran en un punto y cada dos puntos se conectan con una sola línea.

Los gráficos bipartitos también se pueden encontrar campos más triviales. Ejemplos incluyen las relaciones entre los documentos y las palabras incluidas en ellos, gráficos que muestran las relaciones entre los clientes y las mercancías que compraron, además muestran las relaciones entre las comunidades y sus miembros. Con estas aplicaciones de los grafos se logran análisis de comportamientos, definiendo posibles patrones en cuanto a consumo o búsquedas de los usuarios segmentando a los mismos para posteriores tomas de decisiones.

La correspondencia bipartita puede ser usada para resolver un problema para determinar qué parejas son compatibles para el matrimonio (hombre / mujer). El problema es maximizar el número de coincidencias, ni la poligamia ni la poliandria son permitidas. A cada vértice se le puede asignar sólo un vértice del otro grupo. Este problema se puede solucionar resolviendo este problema creando una red de flujo fuera de un gráfico bipartito.<!-- @Arunkumar2015 -->

Gráfico bipartita puede modelar las situaciones comunes, así como graves problemas en las diversas áreas de las redes inalámbricas, incluyendo las redes de radio cognitivas, los grandes datos y la computación en la nube. Por lo tanto, se puede entender que es el deseo del investigador de aplicar las estructuras de la teoría de grafos como el bi-gráfico en sus trabajos. Los bi-gráficos teóricos parecen ser muy sencillos, pero con todas las complejidades de los principios generales de la teoría gráfica que lo encarnan. Este trabajo ha hecho un extenso análisis de la literatura y encontró que los bi-gráficos no son muy discutidos y aplicados mucho en el contexto específico de la computación en nube. <!-- @Arunkumar2015 -->

La computación en nube es una computación basada en Internet. Se basa en compartir recursos informáticos que se entregan como servicios en Internet. El servicio Web es uno de los tipos de servicios más importantes que se pueden utilizar en la computación en nube. Pero muchos de ellos pueden ser similares en algunas propiedades funcionales o no funcionales, haciendo cómo recomendar un servicio web adecuado un problema que enfrentan muchos desarrolladores. Los investigadores han tenido en cuenta los atributos de QoS. Sin embargo, su investigación se basa en la premisa de que todos los servicios web recomendados son compatibles, es decir, los servicios web recomendados se pueden componer con los servicios web existentes. Puede que no siempre sea cierto. En el documento, se tiene en cuenta la compatibilidad de los servicios web y se presenta un método de Recomendación de Servicio basado en Gráficos Bipartitos (BIGSIR) para abordar el problema de compatibilidad de servicios. <!-- @Arunkumar2015 -->

El trabajo en BIGSIR utiliza los datos de uso histórico de los servicios web para recomendar servicios web a los desarrolladores. Diferente de los enfoques existentes de recomendación de servicio web, BIGSIR adopta un gráfico bipartito para visualizar los servicios web y la relación entre ellos. Basado en el modelo de gráfico, se introduce un algoritmo de recomendación efectivo para recomendar los servicios web adecuados. El enfoque en se evalúa en un conjunto de datos construido a partir de Experiment, un motor de búsqueda que contiene alrededor de 1.851 servicios web y 2.000 flujos de trabajo. Los resultados experimentales demuestran que, aparte de algunos servicios web aislados o flujos de trabajo, BIGSIR puede obtener resultados prometedores. Este trabajo no sólo proporciona un nuevo conjunto de datos, sino que también pone de relieve una nueva perspectiva para la recomendación de servicios, es decir, los servicios como una red bipartita.

La aplicación del software Map Reduce es un marco para el procesamiento de aplicaciones de datos intensivos con una manera paralela en los sistemas de computación en la nube. También hay un número creciente de trabajos de reducción de mapa que requieren garantías de plazo. La fecha límite existente, relativa a los esquemas de programación, no considera los dos problemas en el entorno de cálculo del mapa reducido: la heterogeneidad del rendimiento de las ranuras y la variación del tiempo de trabajo. En este trabajo, se utiliza el modelo de gráficos bipartitos para proponer un nuevo Planificador de Reducción de Mapa llamado BGMRS. El BGMRS puede obtener la solución óptima del problema de programación con límite de tiempo, transformando el problema en un problema de gráfico bien conocido: coincidencia bipartita ponderada mínima. <!-- @Arunkumar2015 -->

A nivel de protección de servidores de aplicaciones encontramos el uso de un algoritmo bipartito. Los IDS (Intrusion Detection Systems) monitorean y registran las peticiones capturando los eventos de red (alertas o actividades sospechosas) en un conjunto de datos multidimensional que almacena el origen, el tiempo y la naturaleza de cada evento. Dada la cantidad de eventos es indispensable el análisis automatizado de los datos, así como de propios usuarios expertos en seguridad para la comprensión de la actividad de la red y eventualmente adaptar las estrategias de seguridad. Aquí entra en juego el algoritmo  AlertWheel el cual utiliza una visualización radial, y también muestra la ubicación, tiempo y naturaleza de muchos eventos a la vez. La visualización de tales ataques es útil para los analistas de red durante el brote de una infección virulenta Malware en Internet. En la Figura \ref{fig:IDS} vemos un ejemplo de aplicación de dicho algoritmo al caso mencionado.

\begin{figure}[h]
 \centering
 \makebox[\textwidth]{\includegraphics[width=\textwidth]{media/image0.png}}
 \caption{Visualización de ataque de red.}
 \label{fig:IDS}
\end{figure}

# Antecedentes

## Trabajos Previos

En su forma más simple los gráficos bipartitos muestran dos planos, uno para cada conjunto de nodos que se relacionan entre sí. Los nodos se pueden colocar en dos ejes paralelos [@Schulz2008], o dos esferas concéntricas [@Naud2007; @Dumas2012], o dos tablas [@Schulz2008; @John2013].

Uno de los problemas principales en los grafos de visualización es el manejo de cantidades extensas de datos [@Zheng2005], [@DiGiacomo2007], [@Newton2002] y de mayor complejidad, en el artículo Classification via Visualization of  sample-features bipartite graphs, enfocan el uso de los grafos bipartitos con base en la separación mediante un clasificador el cual determina si un conjunto de datos de prueba puede ordenarse de tal manera que prevalezca una minimización de complejidad a la hora de un resultado final entre los subconjuntos "A" y "B" de datos. El algoritmo del clasificador da un valor positivo o negativo a los elementos adecuando su posición en el grafo bipartito y con esto facilitando la interpretación de los datos.


Aunque el dibujo gráfico es un campo muy activo de investigación, muy pocos trabajos existen sobre la visualización de gráficos bipartitos. Un método interesante llamado Anchor Maps [@Misue2006] ha sido propuesto recientemente. Proporciona una visualización del gráfico en un espacio bidimensional, procediendo en dos pasos: los elementos del primer subconjunto de vértices VA se trazan en un círculo, después de lo cual los vértices del segundo subconjunto VB se añaden a la parcela asignando Con respecto a los vértices de VA. Un enfoque diferente es propuesto por Zheng et al. [@Zheng2005], en el que se busca una disposición de puntos en dos planos paralelos, de manera que una vista en tres dimensiones a partir de la cual el número de cruces observados sea mínimo. Dibujar los vértices en curvas planas, como propuso Di Giacomo y otros [@DiGiacomo2007], es otro enfoque interesante. Hong et al. Propuso [@Hong2005] un dibujo en capas de gráficos bipartitos en dimensiones 21/2, que los vértices se asignan en dos superficies incrustadas en un espacio tridimensional euclidiano. <!-- @Usui2007 -->

Zheng et al. [@Zheng2005] describió dos modelos de disposición para gráficos bipartitos y demostró teoremas de cruce de borde para estos modelos. Giacomo et al. [@DiGiacomo2007] propuso dibujar gráficos bipartitos en dos curvas para que los bordes no se cruzan. Newton et al. [@Newton2002] propuso una nueva heurística para un gráfico bipartito de dos caras. Estos estudios propusieron algoritmos para minimizar el cruce de los bordes en el estilo de dos caras o modelos extendidos, pero no consideraron los gráficos bipartitos a gran escala.

Misue [@Misue2006] describe mapas anclados como una técnica de dibujo para gráficos bipartitos a gran escala. En los mapas anclados, los nodos en un conjunto de un gráfico bipartito se llaman anclajes y los nodos en el otro conjunto se llaman nodos libres. Los anclajes están dispuestos en una circunferencia a intervalos iguales y los nodos libres están dispuestos usando el método forzado [7]. Misue propuso un algoritmo para decidir el orden de los anclajes por escalamiento de casco. Se utilizan estilos similares en sistemas propuestos por Thiel et al. [@Thiel] y Donovan et al. [@Donovan]. Sin embargo, se hace más difícil entender detalles a medida que aumenta el número de anclajes dispuestos en la circunferencia, porque la disposición de los anclajes se aproxima a una línea recta (Figura 6 (a)). Nuestra técnica es una mejora con respecto a los mapas anclados, ya que representa vistas panorámicas y detalles simultáneamente.

Naud et al. [@Naud2007] desarrolló el 3D-SE Viewer, en el que los gráficos bipartitos se disponen en esferas concéntricas en el espacio 3D. También desarrollamos una técnica de visualización 3D para los gráficos bipartitos llamados mapas anclados en la esfera [12], en el que los nodos en un conjunto están dispuestos en una esfera. Las técnicas de visualización 3D aumentan la legibilidad, aunque ocurren problemas de oclusión como resultado de la proyección. Estas técnicas requieren costos de interacción. Para evitar estos costes, pretendemos desarrollar una técnica de visualización 2D.x

## Modelo de datos

Los requisitos comunes para dibujar un gráfico bipartito son que la bipartición se resalta en la visualización representando los vértices en dos capas distintas, los bordes tienen tan pocas curvas como sea posible y el número de cruces de borde es minimizado. Un gráfico bipartito es un grafo biplanar si tiene un dibujo de línea recta sin cruzar donde los vértices de un mismo conjunto de partitos se encuentran a lo largo de una misma capa horizontal [@Eades1994]. Los gráficos biplanares se han caracterizado independientemente en [@Eades1994, @Harary1972, @Tomii1977]. También se ha estudiado bien el problema de calcular dibujos en línea recta de gráficos bipartitos con los vértices de dos capas horizontales y un número mínimo de cruces; Véase, p. [@DiBattista1999, @Kaufmann2001] para algunas referencias básicas sobre este tema. <!-- @DiGiacomo2007 -->

El propósito de la visualización gráfica bipartita es mostrar simultáneamente dos tipos de relaciones: las similitudes existentes entre los elementos dentro de cada uno de los dos subconjuntos, sobre la base de las relaciones definidas por los bordes del gráfico. <!-- @Usui2007 -->

A. Definición formal de un gráfico bipartito

Una gráfica G se define como G: = {V, E}, donde V es el conjunto de vértices o nodos y E el conjunto de aristas. El Gráfico G no está dirigido si las parejas en E no están ordenadas. Un gráfico no dirigido G se denomina gráfico bipartito si existe una partición del conjunto de vértices V = VA ∪ VB, de modo que no hay borde en E que conecte VA a VB. <!-- @Usui2007 -->

Para los fines de este trabajo, un grafo bipartito G = (U, L, E) consiste en dos conjuntos U y L de vértices y un conjunto E G U x L de bordes. Obsérvese que una bipartición de vértice U, L específica se especifica en la definición de G. Por lo tanto, las referencias a G suponen que esta partición especificada. <!-- @Eades1994 -->

A menudo es útil dibujar G de modo que los vértices de U (la "parte superior") y L (la "parte inferior") estén sobre líneas horizontales & y At, respectivamente, con AU por encima de 2; Los bordes se dibujan como segmentos de línea recta abiertos entre sus extremos como en la Fig. 1. Una vez que se especifican las coordenadas y de las líneas horizontales Ja y ', se define un dibujo de G dando una coordenada x para cada vértice, ya que las coordenadas y de los vértices de U y L son iguales a las coordenadas y de A , y &,, respectivamente. <!-- @Eades1994 -->

Un dibujo es biplanar si no tiene pasos de borde; Un gráfico es biplanar si tiene un dibujo biplanar. En este artículo investigamos el problema de encontrar, dado un gráfico bipartito, un subgrafo biplanar con un número máximo de aristas. (El subgrafo biplanar no necesita ser inducido.) También estudiamos este problema cuando las posiciones de algunos o de todos los vértices son prescritas. <!-- @Eades1994 -->

Sea G = (V1, V2, E) un gráfico bipartito. Un dibujo de 2 capas de G tiene un paso de ventilador si existen dos bordes adyacentes que están ambos cruzados por un tercer borde; Decimos que los tres bordes involucrados en el cruce lo conforman. Para un dibujo de 2 capas dado de G, denote por li la línea horizontal sobre la cual se dibujan los vértices de Vi (i = 1,2). Siempre suponemos que l1 está por encima de l2. Dos dibujos de 2 capas de G son equivalentes si tienen el mismo orden de izquierda a derecha πi de los vértices de Vi (i = 1, 2) a lo largo de li. Una incrustación de 2 capas es una clase de equivalencia de dibujos de dos capas y se describe mediante un par de ordenamientos lineales (es decir, permutaciones) γ = (π1, π2) de los vértices en V1 y V2, respectivamente. Si Γ es un dibujo dentro de la clase γ, también decimos que γ es la incorporación de Γ.

Sea Γ1 y Γ2 dibujos de 2 capas de G con la misma incorporación γ. Dos aristas e y e 'cruzan en Γ1 si y sólo si cruzan en Γ2. Decimos que la incrustación γ tiene un cruce en los bordes ey e '. Además, tres bordes e, e 'y e' 'forman un ventilador que cruza en Γ1 si y sólo si forman un ventilador que cruza en Γ2. Correspondientemente, decimos que la incrustación γ tiene un ventilador que cruza los bordes e, e ', y e' '. Sea γ = (π1, π2) una incrustación de 2 capas de un grafo bipartito G. El primer vértice de π1 y el primer vértice de π2 se llaman los vértices más izquierdos de γ; El último vértice de π1 y el último vértice de π2 se llaman los vértices más a la derecha de γ. <!-- @DiGiacomo2012 -->

En el campo matemático de la teoría gráfica, un gráfico bipartito (o bigraph) es un grafo cuyos vértices pueden
Se dividen en dos conjuntos disjuntos U y V (es decir, U y V son cada uno independiente establece tales que cada borde conecta un vértice en U a uno en V. El vértice fijó U y V se denota a menudo como partite los sistemas. Equivalente, un bipartito Es un gráfico que no contiene ciclos de longitudes impares [1], [2]. <!-- @Arunkumar2015 -->

Los dos conjuntos U y V pueden ser pensados ​​como un color del gráfico con dos colores: si uno colorea todos los nodos en U azul, y todos los nodos en V verde, cada borde tiene extremos de diferentes colores, como se requiere en el problema de coloración del gráfico.. [3] [4] Por el contrario, tal coloración es imposible en el caso de un grafo no bipartito, tal como un triángulo después de que un nodo esté coloreado de azul y otro de verde, el tercer vértice del triángulo está conectado a vértices de ambos colores, impidiéndole ser asignado cualquiera de los colores.

A menudo se escribe G = (U, V, E) para denotar un grafo bipartito cuya partición tiene las partes U y V, con Edenoting los bordes de la gráfica. Si un gráfico bipartito no está conectado, puede tener más de una bipartición; En este caso, la notación (U, V, E) es útil para especificar una bipartición particular que puede ser importante en una aplicación. Si │U│ = │V│, es decir, si los dos subconjuntos tienen cardinalidad igual, entonces Gis se llama un gráfico bipartito equilibrado. [3]. Si todos los vértices del mismo lado de la bipartición tienen el mismo grado, entonces Gis se llama bi-regular. El elemento a buscar en la nube puede ser modelado como una nube bipartita, además, los algoritmos de coincidencia perfecta, teoremas y lemas pueden, obviamente, matemáticamente modelado y analizado.

Un grafo bipartito G = (U; V; E) es especificado por dos conjuntos disjuntos U y V de vértices, y un conjunto E de bordes entre ellos. Una coincidencia perfecta es un subconjunto del conjunto de bordes E tal que cada vértice tiene exactamente un borde incidente sobre él. Puesto que estamos interesados ​​en la correspondencia perfecta en el gráfico G, asumiremos que | U | = | V | = n. Sea U = {u1; U2; _ _ _; Un} y V = {v1; V2; _ _ _; Vn}. El algoritmo no tiene ningún error si G no tiene una coincidencia perfecta (no hay instancia), y los errores con probabilidad a lo sumo 1/2 si G tiene una correspondencia perfecta (sí instancia). <!-- @Arunkumar2015 -->

Los dos conjuntos disjuntos U y V donde Set U contiene datos a buscar y se almacenan datos de Set V. El partido hecho con estos dos conjuntos disjuntos para coincidir con los datos exactos buscados en el Conjunto V.

# Algoritmos de visualización existentes

## Dos Capas (Two layers)

El grafo bipartita tradicional es el cual sus vértices pueden ser divididos en dos diferentes e independientes grupos (U, V) y cada uno de sus límites o elementos (u, v) conecte, ya sea, con un vértice de U a V o un vértice de V a U. En otras palabras, para cada relación (u, v), u puede pertenecer a U y v a V, o u pertenece a V y v pertenece a U. También podemos decir que ningún límite conecta con vértices del mismo grupo. La principal característica de la técnica de dos capas es la utilización de únicamente líneas rectas entre las relaciones del grupo U hacía el grupo V.

Un dibujo de 2 capas representa un grafo bipatito cuando cada vértice es un punto en alguna de las dos líneas paralelas, ninguno de los vértices en la misma línea es adyacente y las relaciones son segmentos en línea recta.

Una convención típica para dibujar un grafo G es poner los vértices del grupo U en una línea y los vértices del grupo V en una línea paralela y después de esto dibujar las líneas rectas o relaciones entre los vértices que liga el grupo U con el el grupo V (Figura \ref{fig:verticesUyV}).  <!-- @Eades1994 -->

\begin{figure}[h]
 \centering
 \makebox[\textwidth]{\includegraphics[width=\textwidth]{media/image1.png}}
 \caption{Vértices en Grupos U y V}
 \label{fig:verticesUyV}
\end{figure}

Como se puede observar en la Figura \ref{fig:relDirectas}: El objetivo de dibujar un grafo bipartita con la técnica de dos capas es mejorar la visualización por medio de relaciones directas, las cuales son más intuitivas al ojo y razonamiento humano. Cualquier grafo bipartita (a) puede ser dibujado por convertido a un plano de dos capas (b) por medio de esta técnica.

\begin{figure}[h]
 \centering
 \makebox[\textwidth]{\includegraphics[width=\textwidth]{media/image2.png}}
 \caption{Relaciones directas.}
 \label{fig:relDirectas}
\end{figure}

El algoritmo para crear un grafo de dos capas es bastante sencillo, el mismo sigue esta lógica (se puede observar el resultado final en la Figura \ref{fig:graficoTwoLayer}): <!--On the one-sided crossing minimization in a bipartite graph with large degrees -->

1.  Se toman todos elementos del primer set (Grupo U) y se ordenan en una línea recta, ya sea horizontal o vertical.

2.  Se toman todos los elementos del segundo set (Grupo V) y se ordenan en una línea recta completamente paralela a la línea del primer set (Grupo U).

3. Se calcula la heurística baricéntrica de cada nodo.

    a. n = cantidad de nodos U

    b. Se repite (n x 2) cantidad de veces:

        i. Por cada nodo U:

            1. Se obtiene la posición del nodo U.

            2. Se obtiene las posiciones de todos los vecinos del nodo U.

            3. Se calcula promedio de las posiciones de vecinos

            4. Se asigna al nodo U ese promedio.

        ii. Se ordenan los nodos U según promedio.

        iii. Por cada nodo V:

            1. Se obtiene la posición del nodo V.

            2. Se obtiene las posiciones de todos los vecinos del nodo V.

            3. Se calcula promedio de las posiciones de vecinos

            4. Se asigna al nodo V ese promedio.

        iv. Se ordenan los nodos V según promedio.

4.  Por cada elemento en el Grupo U al que llamaremos ‘u’

    a.  Se obtiene la lista de relaciones del elemento ‘u’ hacia los elementos ‘v’

    b.  Por cada relación ‘r’

        i.  Se traza una línea recta desde ‘u’ hasta ‘v’.

        ii. Se repite por cada relación.

    c.  Se repite por cada elemento ‘u’.

\begin{figure}[h]
 \centering
 \makebox[\textwidth]{\includegraphics[width=\textwidth]{media/image10.png}}
 \caption{Gráfico obtenido con nuestro algoritmo.}
 \label{fig:graficoTwoLayer}
\end{figure}

Entre los casos de investigación más importantes acerca de este tipo de grafos se buscan los algoritmos dónde se puede evitar la mayor cantidad de cruces<!-- F. Harary, A.J. Schwenk, Trees with Hamiltonian square, Mathematiks 18 (1971) 138–140
F. Harary, A.J. Schwenk, A new crossing number for bipartite graphs, Utilitas Math. 1 (1972) 203–209
--> entre las relaciones por medio del ordenamiento de los nodos en el grupo U, así como de optimizar las relaciones entre ambos grupos para asignaciones directas (Matching).<!-- Hopcroft, John E.; Karp, Richard M. (1973), "An n5/2 algorithm for maximum matchings in bipartite graphs" -->

En el caso del Matching o Emparejamiento (Figura \ref{fig:ejemploMatching}) es una de las aplicaciones más comunes cuando se tiene Grafos Bipartitas dibujados en forma de dos capas. La definición de emparejamiento obtener un conjunto de relaciones donde ningún par tenga el mismo vértice en común. Si el emparejamiento contiene la mayor cantidad de relaciones entonces podemos decir que es un emparejamiento máximo. Cabe aclarar que el emparejamiento no quiere decir que todos los vértices tengan que estar relacionados con otro, sino que haya la mayor cantidad de relaciones.<!-- Emparejamientos.pdf -->

\begin{figure}[h]
 \centering
 \makebox[\textwidth]{\includegraphics[width=\textwidth]{media/image3.png}}
 \caption{Ejemplo de Matching.}
 \label{fig:ejemploMatching}
\end{figure}

Por ejemplo en el grafo G1 el emparejamiento es de un tamaño de 3, pero en el G2 se puede observar una emparejamiento de tamaño 4. En G2 no se deja ningún nodo libre, por lo que se llama Emparejamiento completo, el cuál también es máximo y sólo se puede conseguir cuando la cantidad de vértices entre los dos planos es la misma.

Un ejemplo de uso de matchings o emparejamientos son los sitios para búsqueda de empleos o búsqueda de pareja, tipo match.com. Con la información disponible según las capacidades o gustos del candidato dependiendo de las opciones de empleo o pareja; se puede crear un grafo bipartita, después dibujarlo como dos planos y ejecutar el algoritmo para emparejamiento máximo.

## Incrustación Esférica (Spherical Embedding)

El algoritmo de incrustación esférica (SE por sus siglas en inglés) fue diseñado principalmente para visualización de grafos bipartitas. Los ítems de los dos grupos U y V son representados por medio de nodos posicionados en dos círculos concéntricos. Los ítems del grupo U son mapeados en el círculo interior y los ítems del grupo V son mapeados en el círculo exterior con un radio del doble del círculo interno. El propósito de este gráfico es posicionar los nodos de una manera que los items similares estén lo más cerca posible en cada uno de sus respectivos círculos. La Figura \ref{fig:transSE} muestra el proceso de construcción de un grafo bipartita y su visualización utilizando el algoritmo de incrustación esférica. <!-- 3D-SE viewer - A Text Mining Tool based on Bipartite Graph Visualization-->

\begin{figure}[h]
 \centering
 \makebox[\textwidth]{\includegraphics[width=\textwidth]{media/image6.png}}
 \caption{Transformación de Gráficos Bipartitas a SE.}
 \label{fig:transSE}
\end{figure}

Para conseguir esta visualización buscamos las coordenadas de los nodos del gráfico {xi,i = 1,...,|U| + |V|} que minimicen la distancia entre las relaciones (E) entre todos los pares de nodos. En algunos artículos esta minimización es realizada por medio de un procedimiento de descenso de gradiente la cual tiene un complejidad matemática avanzada por lo que hemos decido realizar este cálculo por medio de una heurística baricéntrica.

Básicamente la heurística baricéntrica utilizada en el ejemplo intenta acercar los nodos relacionados entre sí, tanto en el círculo interior como en el exterior. Una forma de visualizar que esto se logra es ver la reducción de relaciones que pasan cerca del centro del gráfico; ya que al tener los nodos relacionados más cerca, las relaciones pasan a ser más cortas y no deberían cruzar el gráfico. <!-- --Crossing Minimization Problems of Drawing Bipartite Graphs in Two Clusters.pdf-->

El algoritmo para dibujar este tipo de grafos es el siguiente (se puede observar el resultado final en la Figura \ref{fig:graficoSE}):

1. Dibujar el círculo interno:

    a. Se toma los nodos del grupo V y se colocan alrededor del círculo con distancias iguales entre ellos. Se sigue el orden original con dirección de las manecillas del reloj.

2. Dibujar el círculo externo:

    a. Se dibuja el círculo con el mismo centro que el círculo anterior pero con un radio de 2X, siendo X el radio del círculo interno.

    b. Se toma los nodos del grupo U y se colocan alrededor del círculo con distancias iguales entre ellos. Se sigue el orden original con dirección de las manecillas del reloj.

3. Se trazan las relaciones entre los nodos.

4. Se calcula la heurística baricéntrica de cada nodo.

    a. n = cantidad de nodos U

    b. Se repite (n x 2) cantidad de veces:

        i. Por cada nodo U:

            1. Se obtiene la posición del nodo U.

            2. Se obtiene las posiciones de todos los vecinos del nodo U.

            3. Se calcula promedio de las posiciones de vecinos

            4. Se asigna al nodo U ese promedio.

        ii. Se ordenan los nodos U según promedio.

        iii. Por cada nodo V:

            1. Se obtiene la posición del nodo V.

            2. Se obtiene las posiciones de todos los vecinos del nodo V.

            3. Se calcula promedio de las posiciones de vecinos

            4. Se asigna al nodo V ese promedio.

        iv. Se ordenan los nodos V según promedio.

5. Dibujar el círculo interno con nuevo orden:

    a. Se toma los nodos del grupo V y se colocan alrededor del círculo con distancias iguales entre ellos. Se sigue el orden nuevo.

6. Dibujar el círculo externo:

    a. Se toma los nodos del grupo U y se colocan alrededor del círculo con distancias iguales entre ellos. Se sigue el orden nuevo.

7. Se trazan las relaciones entre los nodos.

\begin{figure}[h]
 \centering
 \makebox[\textwidth]{\includegraphics[width=\textwidth]{media/image7.png}}
 \caption{Gráfico obtenido con nuestro algoritmo.}
 \label{fig:graficoSE}
\end{figure}

## Mapa anclado (Anchored Map)

La técnica del mapa anclado tiene dos tipos de nodo, los nodos anclados y los nodos libres. Los nodos anclados son ordenados en la circunferencia a distancias iguales y los nodos libres son ubicados en posiciones con relación de cercanía a los nodos anclados. El problema que esta técnica busca solucionar es tratar de decidir el orden de los anclados en la circunferencia y la posición de los nodos libres. Utilizando esta técnica no se debe de preocupar por la ruta entre las relaciones porque siempre se utiliza una línea recta.<!-- Drawing Bipartite Graphs as Anchored Maps-->

A continuación vamos a describir la técnica propuesta para dibujar mapas anclados, explicar los criterios que se siguen para que el mapa cumpla su objetivo y el método para ordenar los nodos anclados para cumplir ese criterio.

Los mapas anclados restringen la posición de algunos nodos pero permite que otros nodos sean ordenados libremente. Los nodos restringidos son los llamados “anclas” y los demás son los nodos “libres”.

Hay muchas variaciones en la restricción de los nodos anclas. La más simple es que cada ancla está fijo en una coordenada, también es posible restringir las anclas en una curva, en un área, etc. En la Figura \ref{fig:varBipartitas} podemos ver varios tipos de técnicas para dibujar un grafo bipartita.

\begin{figure}[h]
 \centering
 \makebox[\textwidth]{\includegraphics[width=\textwidth]{media/image4.png}}
 \caption{Variaciones de Gráficos Bipartitas.}
 \label{fig:varBipartitas}
\end{figure}

Y en el siguiente dibujo podemos ver cómo se ve un el mismo grafo bipartita dibujado como mapa anclado. Los nodos principales representados por la letra C son arreglados en forma de pentágono, y los nodos M son ordenados en una posición donde se pueda interpretar su relación con C. Como se puede observar en la Figura \ref{fig:ejemploMapaAnclado}: la distinción de nodos es más clara que en los gráficos anteriores.

\begin{figure}[h]
 \centering
 \makebox[\textwidth]{\includegraphics[width=\textwidth]{media/image5.png}}
 \caption{Ejemplo de Mapa Anclado ordenado.}
 \label{fig:ejemploMapaAnclado}
\end{figure}

La convención para dibujar este tipo de grafos como mapas anclados es así:

-   Tenemos el grafo bipartita G = (A, B). Los elementos de A, las anclas, son ordenados en figura estilo circular. Cada nodo es un vértice con distancias exactamente iguales entre cada uno (polígono regular con A &gt;= 3). Los elementos de B que son los nodos libres son ordenados dentro o muy cerca de la figura que forman los elementos de A.

-   Cada relación es dibujada con una línea completamente recta.

-   Entre más relaciones tenga un nodo B con un o más nodos A, el nodo B va a estar más cerca de esos nodos B.

Siguiendo estas convenciones se puede observar claramente la afinidad de los nodos libres a cada uno de los nodos anclados. Además de poder ver grupos de nodos libres más cercanos entre ellos, lo que demuestra una afinidad entre ellos pero que no es explícita por el grafo bipartita o la información cruda.

El algoritmo para dibujar este tipo de grafos es el siguiente (se puede observar el resultado final en la Figura \ref{fig:graficoMapaAnclado}):

1.  Ordenar las anclas en intervalos iguales.

    a.  Calcular la longitud de la circunferencia: depende más que todo del espacio para dibujar (por ejemplo el tamaño del browser) y la cantidad de nodos.

    b.  Ordenar los nodos anclados: Tiene mucho que ver con la calidad final del mapa.

        i.  M = cantidad de anclas (polígono de M vértices).

        ii. Se asigna un número a cada ancla en sentido del reloj de 1 hasta M.

        iii. Se toman 2 anclas y se calcula la penalidad contra un nodo libre en común.

        iv. Se toman las 2 siguientes anclas y se vuelve a calcular la penalidad.

        v.  Si la primera penalidad es mayor:

            1.  Se mueve intercambian los nodos anclas.

        vi. Se repite alrededor del círculo hasta que las penalidades estén ordenadas.

2.  Ordenar los nodos libres en posiciones dependiendo de su relación con las anclas.

Como se puede ver en el algoritmo anterior los mayores cálculo matemáticos son ejecutados en encontrar la penalidad de cada par de anclas del mapa y después en la atracción de cada nodo libre contra las anclas.

\begin{figure}[h]
 \centering
 \makebox[\textwidth]{\includegraphics[width=\textwidth]{media/image9.png}}
 \caption{Gráfico obtenido con nuestro algoritmo.}
 \label{fig:graficoMapaAnclado}
\end{figure}

## Arcos en Matriz (Matrix Arcs)

# Algoritmos de visualización propuesto

## Sierra

### Descripción

Después de investigar sobre todas las formas de visualizar grafos bipartitas existentes, hemos llegado algunas conclusiones preliminares que nos ayudaron en la creación de los grafos Sierra.

Uno de los principales aspectos en contra de los grafos bipartitas es la rápida lectura de las relaciones y cada uno de los nodos. Por ejemplo en el Mapa Anclado o en la Incrustación Esférica es sumamente complicado ubicar cada descripción del nodo (en nuestro caso los actores o películas) y todavía es un poco más confuso entender la relación entre ellos, aún cuando ya se hayan ordenado.

Otro de los apuntes negativos es el estilo poco estético que se maneja como una estándar (no escrito) a la hora de dibujar los grafos bipartitas.

Por estas razones nos propusimos crear una nueva visualización de este tipo de grafos pero sin inventar el agua tibia, conservando las características positivas de cada uno de los estilos estudiados. Algunas de estas características son:

1. El uso de dos ejes, al estilo de los Gráficos de Dos Capas, pero en nuestro caso se interpretan como x,y en un plano cartesiano. Esto para mejor comprensión de los datos y del algoritmo. Planos cartesianos es parte del álgebra básica y creemos que facilitará su entendimiento a los usuarios.
2. El uso de un ordenamiento baricéntrico pero enfocado solamente a uno de los grupos del grafo, el grupo de nodos U.
3. Las relaciones se detallarán por medio de líneas punteadas para no saturar el gráfico y simplificar su lectura.
4. La última característica principal la forma o estilo del dibujo. Los autores nacidos en Costa Rica, un país repleto de vegetación y montañas. Queremos así darle un poco de color y naturalidad a los datos que se evalúan. Por esto decidimos tratar de emular las sierras/montañas y sus bosques.

### Proceso de contrucción y diseño

1. Figura \ref{fig:sierra1}: Se acomodan las nodos U flotando en el eje Y y los nodos V sobre el eje X. Todos los nodos tiene distancias iguales entre sí calculadas en el algoritmo.

\begin{figure}[h]
 \centering
 \makebox[\textwidth]{\includegraphics[width=\textwidth]{media/Sierra1.png}}
 \caption{Nodos U (flotando) y V (eje X).}
 \label{fig:sierra1}
\end{figure}

2. Figura \ref{fig:sierra2}: Se ordenan las nodos U dependiendo de la cantidad de vecinos, entre más vecinos más alta la sierra. Si 2 o más nodos U coinciden en la misma coordenada X entonces se distribuyen para una mejor lectura de los datos (en nuestro caso el nombre de película).

\begin{figure}[h]
 \centering
 \makebox[\textwidth]{\includegraphics[width=\textwidth]{media/Sierra2.png}}
 \caption{Nodos U ordenados por cantidad de vecinos.}
 \label{fig:sierra2}
\end{figure}

3. Figura \ref{fig:sierra3}: Se colorean las sierras, de un verde más oscuro a un verde más claro dependiendo de la altura (cantidad de vecinos) y los nodos U que tienen solamente 1 vecino se colorean café para emular un pino.

\begin{figure}[h]
 \centering
 \makebox[\textwidth]{\includegraphics[width=\textwidth]{media/Sierra3.png}}
 \caption{Tonos verdes y café del dibujo.}
 \label{fig:sierra3}
\end{figure}

4. Figura \ref{fig:sierra4}: Se dibujan las relaciones con linea punteada para mejor comprensión del gráfico en general.

\begin{figure}[h]
 \centering
 \makebox[\textwidth]{\includegraphics[width=\textwidth]{media/Sierra4.png}}
 \caption{Relaciones con linea punteada.}
 \label{fig:sierra4}
\end{figure}

### Algoritmo

El algoritmo para dibujar este tipo de grafos es el siguiente (se puede observar el resultado final en la Figura \ref{fig:graficoSierra}):

El grupo U se colocará flotando dependiendo del valor de Y y el grupo V se colocará sobre el eje X con un valor de Y = 0 siempre.

1. Se ordenan los nodos U de mayor cantidad de vecinos a menor cantidad de vecinos.

2. Se calculan las coordenadas de grupo V:

    a. Se calcula el espacio horizontal entre nodos = largo de canvas / cantidad de nodos.

    b. xActual = 0

    c. Por cada nodo en V:
        i. xActual = xActual + espacio entre nodos.

        ii. Al valor X del nodo = xActual.

        iii. Al valor Y del nodo = 0.

3. Se calcula las coordenadas de grupo U:

    a. Se calcula el espacio vertical entre nodos = alto del canvas / cantidad de nodos con diferente número de vecinos.

    b. CantidadVecinosActual = cantidad de vecinos de nodo U[0].

    c. yActual = valor más alto del canvas.

    d. Por cada nodo en U (ordenado):

        i. Si CantidadVecinosActual != cantidad vecinos de nodo.

            1. CantidadVecinosActual = cantidad vecinos de nodo.

            2. yActual = yActual + espacioVertical.

        ii. Aplica cálculo baricentrico de nodo U.

            1. Se calcula el promedio de coodenadas entre el hijo vecino y el vecino derecho para que el nodo U quede en medio y se forme un triángulo (sierra).

        iii. Al valor X del nodo = cálculo baricéntrico.

        iv. Al valor Y del nodo = yActual.

4. Por cada nodo en U:

    a. Se dibujan y pintan las sierras. En caso que sea sólo un vecino se pinta un pino.

\begin{figure}[h]
 \centering
 \makebox[\textwidth]{\includegraphics[width=\textwidth]{media/image8.png}}
 \caption{Gráfico obtenido con nuestro algoritmo.}
 \label{fig:graficoSierra}
\end{figure}

\pagebreak

# \spanishbibname
