---
title: Dibujando Grafos Bipartitas como Sierras
author:
  - Armando Arce / Oscar Arrieta / Jason Ocampo
  - Escuela de Informática, Universidad Nacional, Heredia, Costa Rica
header-includes:
abstract: Un método para dibujar grafos bipartitas como Sierras es expuesto. Supongamos que existen dos grupos de nodos, U y V. Una Sierra va a ordenar los nodos del grupo V en el piso y los nodos del grupo U en una altura dependiendo de la cantidad de relaciones de ese nodo con el otro grupo. Además se dibujan triángulos para ejemplificar las montañas y se colorean de un tono verde dependiendo del tamaño. Este artículo explica el criterio estético y expone un algoritmo para poder dibujar cualquier grafo bipartita de esta manera. El rendimiento y objetivo son mencionados en las conclusiones.
keywords: grafo bipartita, sierra, dibujo de grafo
bibliography: bibliografia.bib
fontsize: 11pt
classoption: twocolumn
---

# Introducción

La visualización de la información se ve marcada por la constante de mejora y acercamientos a formas naturales de percibir agrupaciones de datos, ya sean en menor cantidad o en situaciones de mayor complejidad en las que los usuarios generales pueden comprobar la efectividad de los modelos de visualización.

El modelo más común de grafos bipartitos es tal vez tener dos niveles horizontales con un conjunto A en una posición superior con respecto a un conjunto B, los nodos de estos conjuntos se mostrarían enlazados por aristas de manera vertical con cierto nivel de inclinación. El diseño planteado cambiaría a dos columnas que de igual manera representan cada conjunto de la visualización, la relación de la información se debe manejar de tal forma que sea una vista depurada y ordenada en razón de la forma de un conjunto de montañas, cuya facilidad de interpretación no se vea comprometida dentro lo posible.

## Áreas de aplicación

Los gráficos bipartitos se utilizan ampliamente en la teoría de codificación, principalmente para decodificar las palabras de código. Los gráficos de factores y los gráficos de Tanner [@R2015] son ejemplos de esto, este último es un gráfico bipartito en el que los vértices de un lado de la bipartición representan dígitos de una palabra de código y los vértices del otro lado representan combinaciones de dígitos que se espera sumar a cero en una palabra de código sin errores.

Otro ejemplo a nivel informático son las redes de Petri [@Kibria], herramientas de modelado matemático utilizado en el análisis y simulaciones de sistemas concurrentes. Un sistema es modelado como un grafo bipartito dirigido con dos conjuntos de nodos: Un conjunto de nodos "lugar" que contienen recursos y un conjunto de nodos "evento" que generan y / o consumen recursos.

En la geometría proyectiva, los gráficos de Levi [@Grunbaum2009] son una forma de gráfico bipartito utilizado para modelar las incidencias entre puntos y líneas en una configuración. Correspondiendo a la propiedad geométrica de puntos y líneas que cada dos líneas se encuentran en un punto y cada dos puntos se conectan con una sola línea.

El trabajo en BIGSIR [@R2015] utiliza los datos de uso histórico de los servicios web para recomendar servicios web a los desarrolladores. Diferente de los enfoques existentes de recomendación de servicio web, BIGSIR adopta un gráfico bipartito para visualizar los servicios web y la relación entre ellos.

A nivel de protección de servidores de aplicaciones encontramos el uso de un algoritmo bipartito. Los IDS (Intrusion Detection Systems) [@Dumas2006] monitorean y registran las peticiones capturando los eventos de red (alertas o actividades sospechosas) en un conjunto de datos multidimensional que almacena el origen, el tiempo y la naturaleza de cada evento. Aquí entra en juego el algoritmo AlertWheel el cual utiliza una visualización radial, y también muestra la ubicación, tiempo y naturaleza de muchos eventos a la vez. La visualización de tales ataques es útil para los analistas de red durante el brote de una infección virulenta Malware en Internet.

# Antecedentes

## Trabajos Previos

En su forma más simple los gráficos bipartitos muestran dos planos, uno para cada conjunto de nodos que se relacionan entre sí. Los nodos se pueden colocar en dos ejes paralelos [@Schulz2008], o dos esferas concéntricas [@Naud2007; @Dumas2012], o dos tablas [@Schulz2008].

Uno de los problemas principales en los grafos de visualización es el manejo de cantidades extensas de datos [@Zheng2005], [@DiGiacomo2007], [@Newton2002] y de mayor complejidad, en el artículo Classification via Visualization of  sample-features bipartite graphs, enfocan el uso de los grafos bipartitos con base en la separación mediante un clasificador el cual determina si un conjunto de datos de prueba puede ordenarse de tal manera que prevalezca una minimización de complejidad a la hora de un resultado final entre los subconjuntos "A" y "B" de datos. El algoritmo del clasificador da un valor positivo o negativo a los elementos adecuando su posición en el grafo bipartito y con esto facilitando la interpretación de los datos.

Aunque el dibujo gráfico es un campo muy activo de investigación, muy pocos trabajos existen sobre la visualización de gráficos bipartitos. Un método interesante llamado Anchor Maps [@Misue2006] ha sido propuesto recientemente. Proporciona una visualización del gráfico en un espacio bidimensional, procediendo en dos pasos: los elementos del primer subconjunto de vértices VA se trazan en un círculo, después de lo cual los vértices del segundo subconjunto VB se añaden a la parcela asignando Con respecto a los vértices de VA. Un enfoque diferente es propuesto por Zheng et al. [@Zheng2005], en el que se busca una disposición de puntos en dos planos paralelos, de manera que una vista en tres dimensiones a partir de la cual el número de cruces observados sea mínimo. Dibujar los vértices en curvas planas, como propuso Di Giacomo y otros [@DiGiacomo2007], es otro enfoque interesante. Hong et al. Propuso [@Ho2006] un dibujo en capas de gráficos bipartitos en dimensiones 21/2, que los vértices se asignan en dos superficies incrustadas en un espacio tridimensional euclidiano. [@Usui2007]

Zheng et al. [@Zheng2005] describió dos modelos de disposición para gráficos bipartitos y demostró teoremas de cruce de borde para estos modelos. Giacomo et al. [@DiGiacomo2007] propuso dibujar gráficos bipartitos en dos curvas para que los bordes no se cruzan. Newton et al. [@Newton2002] propuso una nueva heurística para un gráfico bipartito de dos caras. Estos estudios propusieron algoritmos para minimizar el cruce de los bordes en el estilo de dos caras o modelos extendidos, pero no consideraron los gráficos bipartitos a gran escala.

Misue [@Misue2006] describe mapas anclados como una técnica de dibujo para gráficos bipartitos a gran escala. En los mapas anclados, los nodos en un conjunto de un gráfico bipartito se llaman anclajes y los nodos en el otro conjunto se llaman nodos libres. Los anclajes están dispuestos en una circunferencia a intervalos iguales y los nodos libres están dispuestos usando el método forzado. Misue propuso un algoritmo para decidir el orden de los anclajes por escalamiento de casco. Se utilizan estilos similares en sistemas propuestos por Thiel et al. [@Thiel2007] y Donovan et al. [@ODonovan2008]. Sin embargo, se hace más difícil entender detalles a medida que aumenta el número de anclajes dispuestos en la circunferencia, porque la disposición de los anclajes se aproxima a una línea recta. Nuestra técnica es una mejora con respecto a los mapas anclados, ya que representa vistas panorámicas y detalles simultáneamente.

Naud et al. [@Naud2007] desarrolló el 3D-SE Viewer, en el que los gráficos bipartitos se disponen en esferas concéntricas en el espacio 3D. También desarrollamos una técnica de visualización 3D para los gráficos bipartitos llamados mapas anclados en la esfera, en el que los nodos en un conjunto están dispuestos en una esfera. Las técnicas de visualización 3D aumentan la legibilidad, aunque ocurren problemas de oclusión como resultado de la proyección. Estas técnicas requieren costos de interacción. Para evitar estos costes, pretendemos desarrollar una técnica de visualización 2D.x

# Algoritmos de visualización existentes

## Dos Capas (Two layers)

El grafo bipartita tradicional es el cual sus vértices pueden ser divididos en dos diferentes e independientes grupos (U, V) y cada uno de sus límites o elementos (u, v) conecte, ya sea, con un vértice de U a V o un vértice de V a U. En otras palabras, para cada relación (u, v), u puede pertenecer a U y v a V, o u pertenece a V y v pertenece a U. También podemos decir que ningún límite conecta con vértices del mismo grupo. La principal característica de la técnica de dos capas es la utilización de únicamente líneas rectas entre las relaciones del grupo U hacía el grupo V.

Un dibujo de 2 capas representa un grafo bipatito cuando cada vértice es un punto en alguna de las dos líneas paralelas, ninguno de los vértices en la misma línea es adyacente y las relaciones son segmentos en línea recta.

Una convención típica para dibujar un grafo G es poner los vértices del grupo U en una línea y los vértices del grupo V en una línea paralela y después de esto dibujar las líneas rectas o relaciones entre los vértices que liga el grupo U con el el grupo V (Figura \ref{fig:verticesUyV}).  [@Battista1994]

\begin{figure}[h]
 \centering
 \includegraphics[width=0.5\textwidth]{media/image1.png}
 \caption{Vértices en Grupos U y V}
 \label{fig:verticesUyV}
\end{figure}

El beneficio de dibujar un grafo bipartita con la técnica de dos capas es mejorar la visualización por medio de relaciones directas, las cuales son más intuitivas al ojo y razonamiento humano. Cualquier grafo bipartita puede ser dibujado por convertido a un plano de dos capas por medio de esta técnica.

## Incrustación Esférica (Spherical Embedding)

El algoritmo de incrustación esférica (SE por sus siglas en inglés) fue diseñado principalmente para visualización de grafos bipartitas[@Usui2007]. Los ítems de los dos grupos U y V son representados por medio de nodos posicionados en dos círculos concéntricos. Los ítems del grupo U son mapeados en el círculo interior y los ítems del grupo V son mapeados en el círculo exterior con un radio del doble del círculo interno. El propósito de este gráfico es posicionar los nodos de una manera que los items similares estén lo más cerca posible en cada uno de sus respectivos círculos. La Figura \ref{fig:transSE} muestra el proceso de optimización desde los datos un grafo bipartita a su visualización utilizando el algoritmo de incrustación esférica después de ser ordenados por el algoritmo.

\begin{figure}[h]
 \centering
 \includegraphics[width=0.5\textwidth]{media/image6.png}
 \caption{Optimización de Gráficos Bipartitas a SE.}
 \label{fig:transSE}
\end{figure}

Para conseguir esta visualización buscamos las coordenadas de los nodos del gráfico {xi,i = 1,...,|U| + |V|} que minimicen la distancia entre las relaciones (E) entre todos los pares de nodos. En algunos artículos esta minimización es realizada por medio de un procedimiento de descenso de gradiente la cual tiene un complejidad matemática avanzada por lo que hemos decido realizar este cálculo por medio de una heurística baricéntrica.

Básicamente la heurística baricéntrica utilizada en el ejemplo intenta acercar los nodos relacionados entre sí, tanto en el círculo interior como en el exterior. Una forma de visualizar que esto se logra es ver la reducción de relaciones que pasan cerca del centro del gráfico; ya que al tener los nodos relacionados más cerca, las relaciones pasan a ser más cortas y no deberían cruzar el gráfico. [@Zheng2005]

La incrustación esférica (SE) muestra una interesante capacidad de visualización de grafos bipartitas por medio de dos esferas. Después de varios grupos de datos hemos observado que los mejores diseños son obtenidos cuando el grafo es balanceado, lo que quiere decir que el número de ítems en cada uno de los grupos tienen el mismo rango. También encontramos casos cuando los nodos son colocados uniformemente gracias a que las relaciones entre los nodos están uniformemente distribuidos en el gráfico. Esto significa que el número de relaciones conectando cada nodo no debe de variar mucho entre los grupo, de otro modo veremos áreas limpias o en blanco en cada esfera. Es un efecto que los creadores llamaron el “efecto hueco” y asumen que probablemente relacionado a las propiedades de densidad del gráfico.

Otro de los beneficios del SE es su rapidez ya que puede procesar miles de nodos en pocos segundos. Algunos de los usos que los autores proponen es la visualización de datos proveniente de investigaciones en instituciones donde se analiza mucha información, por ejemplo indexar términos de documentos en una base de datos de neurociencia. [@Usui2007]

## Mapa anclado (Anchored Map)

La técnica del mapa anclado tiene dos tipos de nodo, los nodos anclados y los nodos libres. Los nodos anclados son ordenados en la circunferencia a distancias iguales y los nodos libres son ubicados en posiciones con relación de cercanía a los nodos anclados. El problema que esta técnica busca solucionar es tratar de decidir el orden de los anclados en la circunferencia y la posición de los nodos libres. Utilizando esta técnica no se debe de preocupar por la ruta entre las relaciones porque siempre se utiliza una línea recta. [@Misue2006]

A continuación vamos a describir la técnica propuesta para dibujar mapas anclados, explicar los criterios que se siguen para que el mapa cumpla su objetivo y el método para ordenar los nodos anclados para cumplir ese criterio.

Los mapas anclados restringen la posición de algunos nodos pero permite que otros nodos sean ordenados libremente. Los nodos restringidos son los llamados “anclas” y los demás son los nodos “libres”.

Hay muchas variaciones en la restricción de los nodos anclas. La más simple es que cada ancla está fijo en una coordenada, también es posible restringir las anclas en una curva, en un área, etc.

Y en el siguiente dibujo podemos ver cómo se ve un el mismo grafo bipartita dibujado como mapa anclado. Los nodos principales son arreglados en forma de polígono, y los otros nodos son ordenados en una posición donde se pueda interpretar su relación con el polígono. Como se puede observar en la Figura \ref{fig:ejemploMapaAnclado}: la distinción de nodos es más clara que en los gráficos anteriores.

\begin{figure}[h]
 \centering
 \includegraphics[width=0.5\textwidth]{media/image5.png}
 \caption{Ejemplo de Mapa Anclado ordenado.}
 \label{fig:ejemploMapaAnclado}
\end{figure}

Respecto a los mapas anclados, los autores proponen y exponen esa técnica pero están preocupados por la lógica de ordenamiento de los nodos anclados. Existe una penalidad basada en los espacios entre nodos anclados relacionados con el mismo nodo libre. Proponen trabajar en un algoritmo más eficiente para manejar este caso pero están seguros que el algoritmo propuesto llega a brindar otra forma de analizar la información. [@Misue2006]

## Arcos en Matriz (Matrix Arcs)

En esta técnica se visualizan los conjuntos en un eje de coordenadas "X" y "Y", formando una matriz, en la que los nodos se reparten en los ejes, con base en las relaciones de estos con respecto al otro conjunto del grafo se denota una curva en ese punto de intersección en lugar de el cierre cuadricular normal de la matriz.

Para cada nodo del conjunto "V" se debe determinar en su eje el último punto de relación con respecto a los elementos del conjunto "U" (y viceversa) y eliminar las líneas restantes de la cuadrícula.

La identificación de las relaciones una vez la matriz está completa es sencilla, pues las líneas nos llevan de un nodo a todas sus contrapartes en el conjunto contrario.

\begin{figure}[h]
 \centering
 \includegraphics[width=0.5\textwidth]{media/image11.png}
 \caption{Gráfico obtenido con nuestro algoritmo.}
 \label{fig:graficoArcos}
\end{figure}

Sobre el grafo de matriz con arcos, es una estructura muy explicíta, natural para quien analice la información. Un eje de coordendas que siempre permite hallar de manera inmediata las relaciones de los nodos (eje X y su contraparte en eje Y). La limpieza de la cuadrícula cuando se obtienen los máximos o últimos nodos de relación crean un grafo más limpio para su análisis. Si bien en primera instancia no se hace ningún ordenamiento a los datos de entrada (como en los otros algoritmos vistos) sería interesante comprobar alguna mejora de tipo promedio de los nodos relacionados o conforme al último nodo de relación para tratar de comprobar si el diseño final se puede mejorar.

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
 \includegraphics[width=0.5\textwidth]{media/Sierra1.png}
 \caption{Nodos U (flotando) y V (eje X).}
 \label{fig:sierra1}
\end{figure}

2. Figura \ref{fig:sierra2}: Se ordenan las nodos U dependiendo de la cantidad de vecinos, entre más vecinos más alta la sierra. Si 2 o más nodos U coinciden en la misma coordenada X entonces se distribuyen para una mejor lectura de los datos (en nuestro caso el nombre de película).

\begin{figure}[h]
 \centering
 \includegraphics[width=0.5\textwidth]{media/Sierra2.png}
 \caption{Nodos U ordenados por cantidad de vecinos.}
 \label{fig:sierra2}
\end{figure}

3. Figura \ref{fig:sierra3}: Se colorean las sierras, de un verde más oscuro a un verde más claro dependiendo de la altura (cantidad de vecinos) y los nodos U que tienen solamente 1 vecino se colorean café para emular un pino.

\begin{figure}[h]
 \centering
 \includegraphics[width=0.5\textwidth]{media/Sierra3.png}
 \caption{Tonos verdes y café del dibujo.}
 \label{fig:sierra3}
\end{figure}

4. Figura \ref{fig:graficoSierra}: Se dibujan las relaciones con linea punteada para mejor comprensión del gráfico en general.

### Algoritmo

El algoritmo para dibujar este tipo de grafos es el siguiente (se puede observar el resultado final en la Figura \ref{fig:graficoSierra}):

El grupo U se colocará flotando dependiendo del valor de Y y el grupo V se colocará sobre el eje X con un valor de Y = 0 siempre.

\begingroup\scriptsize

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

\endgroup

\begin{figure}[h]
 \centering
 \includegraphics[width=0.5\textwidth]{media/Sierra4.png}
 \caption{Gráfico obtenido con nuestro algoritmo.}
 \label{fig:graficoSierra}
\end{figure}

# Resultados y conclusiones preliminares

Sobre el algoritmo llamado Sierra que estamos proponiendo podemos asegurar que toma rasgos positivos como el fácil ordenamiento, el método baricéntrico y la lectura (comprensión) de los métodos también explicados. Uno de los puntos más positivos que agregamos al grafo bipartita es el uso del color para dar a entender el grado de relaciones de cada uno de los nodos. Por ejemplo en el algoritmo de dos capas o el mapa anclado los nodos con mayores relaciones quedan más cerca unos de otros, pero en el caso de nuestra propuesta es lo primero que deseamos que se note al ver el resultado; entre más grande la montaña, más relaciones tiene la misma con los nodos del otro grupo.

Algunas de las mejoras que se le pueden implementar son el ordenamiento de los nodos del grupo V (sobre eje X) y así poder percibir de mejor manera la relación entre cada grupo. Las sierras quedarían una más cerca de la otra en caso de tener nodos compartidos pero además se le sumaría la altura y el color como forma de interpretar la cantidad de nodos.

Dicho todo esto algunas de las conclusiones principales sobre los grafos bipartitas y sus métodos son las siguientes:

1. Existe muy poco investigación acerca de este tipo de grafos, lo que brinda un enorme espacio para trabajos posteriores y nuevas técnicas.
2. Los grafos bipartitas son sumamente importantes como algoritmo de predicción. Ya es utilizado por compañías y software para encontrar el mejor candidato para una relación de pareja entre miles de personas (ej: Match.com). Pero en la actualidad se puede utilizar para establecer relaciones como cliente y publicidad, o usuario y recomendación, etc. Con esto queremos decir que hay un gran ámbito donde se puede explotar y cada día gracias a nuestras visitas en páginas webs o redes sociales las compañías tienen la información necesaria para lograrlo.

\pagebreak

# \spanishbibname
