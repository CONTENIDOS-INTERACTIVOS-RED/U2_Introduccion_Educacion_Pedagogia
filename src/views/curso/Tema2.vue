<template lang="pug">
.curso-main-container.pb-3
  BannerInterno.text-uppercase(:titulo="'Unidad 2. Teorías pedagógicas y su impacto en la educación'" :subTitulo="'2. Teorías pedagógicas clásicas y contemporáneas'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-5
      .col-12.col-xl-9.col-xxl-10(data-aos="fade-right")
        p.mb-0 En este tema, conoceremos las principales teorías pedagógicas que han dado forma a la educación moderna: el conductismo, el cognitivismo y el constructivismo. Cada una de estas teorías ofrece perspectivas únicas sobre cómo se produce el aprendizaje y cómo los docentes pueden facilitarlo de manera efectiva. A través del conductismo, analizaremos el papel del condicionamiento y el refuerzo en el desarrollo de comportamientos deseados en el aula. Desde el cognitivismo, abordaremos los procesos mentales que intervienen en el aprendizaje, como la atención, la memoria y la metacognición, y cómo estos pueden optimizarse para lograr un aprendizaje significativo.
      .d-none.d-xl-block.col-xl-3.col-xxl-2.mx-auto(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')

    #t_2_1.titulo-segundo
      div.d-flex
        span.me-3 2.1  
        h2 Conductismo

    .row.mb-4
      .col-12.col-xl-7.d-flex.flex-column
        p.mb-4 Esta corriente se originó en la psicología experimental y se centra en el estudio de la conducta observable, considerando que el aprendizaje ocurre a través de la interacción entre estímulos del entorno y respuestas visibles. 
        .bg-morado.p-4.d-flex.flex-column(data-aos="fade-right")
          p.mb-4 Para comprender el conductismo dentro de las teorías pedagógicas, es esencial conocer sus principios fundamentales y las contribuciones de sus principales exponentes, lo invitamos a consultar el PDF Principios fundamentales del conductismo y profundizar sobre estos elementos.
          a.d-flex.me-auto.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexos_6.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Principios fundamentales del conductismo
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')

    p.mb-4(data-aos="fade-up") Recapitulando, el conductismo plantea que el aprendizaje es un proceso observable que puede moldearse mediante condicionamiento y refuerzo. Este enfoque permite comprender cómo ciertos estímulos y consecuencias pueden influir de manera decisiva en la adquisición de conocimientos y conductas. Así, el refuerzo y el condicionamiento, operan como herramientas que, al ser aplicadas de forma adecuada, ayudan a establecer y mantener comportamientos deseables, proporcionando un marco valioso para la enseñanza y el desarrollo de competencias en el aula. 

    .row.bg-morado.bg-full-width.py-4
      div.px-5.pb-md-3.py-4.d-flex
        .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
          img.h-100(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')
        .col-12.col-xl-7.col-xxl-8.d-flex.ps-4.ps-xl-5.align-items-center.flex-column(data-aos="fade-left")
          h2.mb-4.pb-2 Aplicaciones en el aula
          p.mb-3 El conductismo, como una de las teorías más influyentes en el ámbito de la psicología del aprendizaje, ha dejado una huella profunda en los modelos educativos actuales. Al enfocarse en el comportamiento observable y en la respuesta a estímulos específicos, esta teoría propone que el aprendizaje puede ser estructurado y optimizado a través de técnicas que modifiquen las conductas de los estudiantes. En el entorno educativo, el conductismo ha sido la base para desarrollar estrategias que promuevan no solo la adquisición de conocimientos, sino también la creación de hábitos y conductas que favorezcan un ambiente de respeto y colaboración en el aula. A continuación, en el PDF Aplicaciones en el aula, se detallan algunas de las principales aplicaciones del conductismo en la dinámica escolar, resaltando cómo estas contribuyen al desarrollo integral de los estudiantes.  
          a.d-flex.me-auto.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexos_1.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Aplicaciones en el Aula
             
    #t_2_2.titulo-segundo
      div.d-flex
        span.me-3 2.2  
        h2 Cognitivismo 

    .row.mb-4
      .col-12.col-xl-7.col-xxl-8(data-aos="fade-right")
        p.mb-4 El cognitivismo es una de las teorías del aprendizaje más importantes en la educación. Esta teoría se enfoca en los procesos mentales que ocurren durante el aprendizaje, considerando que la mente humana funciona de manera similar a una computadora: procesa información, almacena datos y recupera conocimientos. 
        p.mb-0 Conozcamos los principales exponentes de esta teoría, cuyas ideas han sido cruciales para entender cómo aprendemos y cómo podemos enseñar mejor:
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto(data-aos="fade-left")
        img.h-100(src='@/assets/curso/unidad/img-18.png', alt='Texto que describa la imagen')

    TabsC.mb-4
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Jean Piaget", :iconUrl="require('@/assets/curso/unidad/img-19.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-20.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 Jean Piaget
            p.mb-4(data-aos="fade-up") Es conocido por su teoría del desarrollo cognitivo, que establece que las personas pasan por diferentes etapas a medida que crecen y se desarrollan. Según Piaget (1952), hay cuatro etapas fundamentales en el desarrollo cognitivo: la sensoriomotora, la preoperacional, la de operaciones concretas y la de operaciones formales. 
            p.mb-0 Cada etapa refleja un nivel diferente de capacidad cognitiva y una manera específica de interactuar con el entorno. Por ejemplo, en la etapa preoperacional, que ocurre aproximadamente entre los 2 y los 7 años, los niños comienzan a usar el lenguaje y desarrollan habilidades de pensamiento simbólico. Sin embargo, su razonamiento sigue siendo egocéntrico y concreto, lo que limita su comprensión de conceptos más abstractos.

      .tabs-content.border.px-4.p-md-5.py-3(titulo="Jerome Bruner", :iconUrl="require('@/assets/curso/unidad/img-19.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-21.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 Jerome Bruner
            p.mb-4(data-aos="fade-up") Destaca la importancia de la cultura y la interacción social en el aprendizaje. Bruner (1966) sostiene que el aprendizaje es un proceso activo, donde el estudiante construye su propio conocimiento a través de la exploración y el descubrimiento. Introdujo el concepto de andamiaje, que se refiere al apoyo que un educador proporciona a los estudiantes durante el aprendizaje.  
            p.mb-0(data-aos="fade-up") Este apoyo puede ser gradual, permitiendo que los estudiantes se vuelvan más autónomos a medida que adquieren habilidades y conocimientos. El enfoque de Bruner invita a los educadores a diseñar actividades que fomenten la participación activa, de modo que los estudiantes se conviertan en protagonistas de su propio aprendizaje, lo que resulta en experiencias más significativas.

      .tabs-content.border.px-4.p-md-5.py-3(titulo="Robert Gagné", :iconUrl="require('@/assets/curso/unidad/img-19.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 Robert Gagné
            p.mb-4(data-aos="fade-up") Señala que diferentes tipos de aprendizaje requieren condiciones específicas para adquirir conocimientos y habilidades de manera efectiva. Gagné sugiere que el aprendizaje debe organizarse en una secuencia lógica de eventos, desde lo más básico hasta lo más complejo. Cada evento de aprendizaje activa un proceso cognitivo específico, como la atención, la retención y el recuerdo. El éxito de cada fase del aprendizaje depende de un adecuado andamiaje en la enseñanza. Esto significa que el docente no solo transmite información, sino que también crea un entorno que permite a los estudiantes organizar y comprender la información de manera progresiva.
            p.mb-0 Por lo tanto, la contribución de Gagné al cognitivismo es fundamental, ya que se enfoca en el papel activo de los procesos cognitivos y en el diseño de estrategias de enseñanza que facilitan la retención y la transferencia de conocimientos. Al reconocer y aplicar estos principios en el aula, se fomenta un aprendizaje más significativo y efectivo. En conclusión, su enfoque sigue siendo una referencia clave en el diseño de materiales educativos, organizando el contenido de manera que los estudiantes puedan asimilar y construir su aprendizaje de manera progresiva y eficaz.

    .row.mb-5.mx-0
      .col-12.col-xl-8.d-flex.align-items-center.bg-rosa.p-4(data-aos="fade-right")
        p.mb-0(data-aos="fade-up") Tanto Piaget como Bruner resaltan la importancia de la reflexión y la metacognición en el aprendizaje. La metacognición es la capacidad de una persona para entender y regular sus propios procesos de pensamiento. Al fomentar esta habilidad, los estudiantes pueden evaluar su propio aprendizaje, identificar estrategias efectivas y realizar ajustes cuando sea necesario. Este autorreflexión es esencial para desarrollar habilidades de pensamiento crítico y resolución de problemas, aspectos cruciales en la educación actual. 
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-left")
        img.h-100(src='@/assets/curso/unidad/img-23.png', alt='Texto que describa la imagen')

    h2 Procesos de aprendizaje
    p.mb-4 Para comprender los procesos de aprendizaje desde la perspectiva cognitivista, resulta esencial profundizar en cómo se desarrollan y actúan la atención, la memoria y la metacognición en el aprendizaje. El cognitivismo, una teoría que se centra en los procesos mentales internos del individuo, sostiene que el aprendizaje se basa en el procesamiento de la información y en la construcción activa de conocimiento. Esto significa que la mente no es un simple receptor pasivo de información; en cambio, selecciona, organiza y almacena datos activamente (Gagné et al., 1993).
    p.mb-4 A continuación, conoceremos cada uno de los procesos implicados en el aprendizaje:


    .row.position-relative.mb-5.py-4.bg-fondo-2.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Atención
              p.mb-1 Se refiere a la capacidad que permite enfocar los recursos cognitivos en información relevante, filtrando estímulos innecesarios o distracciones. 
              p.mb-4 La atención no solo facilita la recepción de nueva información, sino que también es clave para su retención, asegurando que los recursos mentales se dirijan a la información significativa (Posner & Petersen, 1990). 
              p.mb-0 En esta línea, se puede observar cómo los entornos de aprendizaje, deben estar diseñados para minimizar distracciones y optimizar la atención sostenida, de modo que el estudiante pueda concentrarse y procesar la información de manera efectiva.

            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Memoria
              p.mb-4 Componente fundamental del cognitivismo, la memoria humana se puede clasificar en varios sistemas, como la memoria de trabajo, que permite retener y manipular información de forma temporal, y la memoria a largo plazo, donde se almacenan conocimientos para un uso posterior. Según Baddeley y Hitch (1974), la memoria de trabajo actúa como un espacio de procesamiento activo en el que se integran y reorganizan los nuevos datos en función de los conocimientos previos. 
              p.mb-0 Este proceso es clave para el aprendizaje, dado que permite organizar la información de manera que se almacene en la memoria a largo plazo y pueda recuperarse cuando sea necesario.

            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Metacognición
              p.mb-4 Se entiende como la “conciencia y control sobre los propios procesos cognitivos” (Flavell, 1979). La metacognición permite al estudiante no solo monitorear su comprensión y rendimiento, sino también ajustar sus estrategias de aprendizaje según sea necesario. 
              p.mb-0 Es decir, una persona con habilidades metacognitivas avanzadas puede detectar si una estrategia de estudio no es efectiva y cambiarla por otra que le facilite la comprensión o retención de información. El desarrollo de estas habilidades es particularmente relevante en la educación, pues fomenta la autonomía y facilita que el estudiante se convierta en un aprendiz activo y consciente de su propio proceso de aprendizaje.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-26.png', alt='Texto que describa la imagen')

    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        p.mb-0 Como se observa, la teoría cognitivista proporciona una base sólida para analizar y mejorar los procesos de enseñanza y aprendizaje, considerando no solo la atención y la memoria como componentes esenciales, sino también la metacognición como una habilidad crucial para el aprendizaje autorregulado. Estos conceptos se interrelacionan de manera que facilitan la adquisición y consolidación de conocimientos a lo largo del tiempo. 
      .d-none.d-xl-block.col-5.px-0(data-aos="fade-left")
        img.h-100(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')

    .row.bg-morado.bg-full-width.py-4.mb-5
      div.px-5.pb-md-3.py-4.d-flex
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
          img(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen')
        .col-12.col-xl-7.d-flex.ps-4.ps-xl-5.align-items-center.flex-column(data-aos="fade-left")
          h2.mb-4.pb-2.me-auto Estrategias de enseñanza basadas en el cognitivismo
          p.mb-3 El cognitivismo, como enfoque teórico del aprendizaje, pone énfasis en los procesos mentales internos que intervienen en la adquisición y procesamiento de conocimientos. A diferencia del conductismo, que prioriza la modificación de conductas observables, el cognitivismo se centra en cómo el individuo organiza, interpreta y almacena la información, buscando que el aprendizaje sea significativo y estructurado. Esta perspectiva subraya la importancia de estrategias que estimulen la comprensión profunda, la construcción activa del conocimiento y el desarrollo de habilidades de autorregulación en el estudiante. A continuación, en el PDF #[strong Estrategias de enseñanza basadas en el cognitivismo], se presentan algunas de las estrategias más destacadas del cognitivismo, resaltando cómo contribuyen a optimizar el proceso de enseñanza y aprendizaje en el aula. 
          a.d-flex.me-auto.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexos_3.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Estrategias de enseñanza basadas en el cognitivismo

    #t_2_3.titulo-segundo
      div.d-flex
        span.me-3 2.3  
        h2 Constructivismo
    
    p.mb-4 El constructivismo es una teoría del aprendizaje que enfatiza la idea que los estudiantes construyen su propio conocimiento a través de la experiencia y la interacción con su entorno. Para entender mejor esta teoría, es útil explorar las ideas de tres de sus principales exponentes: Lev Vygotsky, John Dewey y David Ausubel. 
    p.mb-4 A continuación, conozcamos los enfoques de cada uno de ellos, los cuales ayudan a comprender cómo se produce el aprendizaje en las aulas:

    .row.position-relative.mb-4.py-4.bg-fondo-2.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Lev Vygotsky
              p.mb-1 Conocido por su enfoque en la importancia de la interacción social en el aprendizaje. Una de sus ideas más importantes es la Zona de Desarrollo Próximo (ZDP). Este concepto se refiere a la diferencia entre lo que un estudiante puede hacer por sí solo y lo que puede lograr con la ayuda de alguien más, como un maestro o un compañero más avanzado. Según Vygotsky (1978), el aprendizaje ocurre mejor cuando los estudiantes trabajan juntos y se apoyan mutuamente. 
              p.mb-4 Esto significa que el entorno social y cultural donde aprenden, es muy importante. En el aula, esto se traduce en fomentar la colaboración y el diálogo, permitiendo que los estudiantes aprendan unos de otros y desarrollen su pensamiento crítico.

            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold John Dewey
              p.mb-1 Realizó grandes aportes al constructivismo, al defender que el aprendizaje debe basarse en la experiencia. Dewey (1938) creía que los estudiantes aprenden mejor cuando participan activamente en su educación, a través de experiencias prácticas y relevantes. 
              p.mb-4 Para él, la educación debe conectarse con la vida real. En este sentido, Dewey promovía que las aulas deben ser espacios donde los estudiantes puedan explorar, experimentar y reflexionar sobre  lo que están aprendiendo. Así, el rol del maestro es más de guía y facilitador, que de simple transmisor de información, ayudando a los estudiantes a descubrir por sí mismos.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold David Ausubel
              p.mb-1 Se centró en la idea de aprendizaje significativo. Según Ausubel (1968), el aprendizaje es más efectivo cuando los estudiantes pueden relacionar nuevos conocimientos con lo que ya saben. Esto significa que los educadores deben ayudar a los estudiantes a organizar y estructurar la información de manera que tenga sentido para ellos. 

              p.mb-4 Además, Ausubel enfatiza que la motivación es clave; los estudiantes necesitan ver la relevancia de lo que están aprendiendo, para que sea significativo. Esto implica que los maestros deben crear un ambiente donde los estudiantes se sientan interesados y conectados con el contenido.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen')

    h2 Principios del aprendizaje activo y la construcción del conocimiento
    p.mb-4 Al profundizar en el constructivismo, es clave comprender dos de sus principios fundamentales: el aprendizaje activo y la construcción del conocimiento. Estos principios se centran en la idea de  que el aprendizaje no consiste simplemente en recibir información, sino en participar activamente en la creación de significado a través de la interacción y la experiencia. Desde esta perspectiva, el aprendizaje se convierte en un proceso dinámico y personalizado, en el que cada estudiante construye sus propias comprensiones a partir de su experiencia y del diálogo con otros.

    .row.mb-5
      .col-12.col-lg-7(data-aos="fade-right")
        p.mb-4 Ampliemos la información sobre cada uno de estos principios:
        AcordionA(tipo="b")
          .div(titulo="Aprendizaje activo")
            p.mb-4 Se refiere a la participación directa del estudiante en su proceso de aprendizaje. En este enfoque, el estudiante no es un receptor pasivo de información, sino un participante comprometido que explora, analiza y cuestiona el contenido, conectándolo con sus propias experiencias y conocimientos previos (Bonwell & Eison, 1991). De hecho, investigaciones han demostrado que el aprendizaje activo, en comparación con la instrucción tradicional, resulta en una comprensión más profunda y en una retención a largo plazo del conocimiento (Prince, 2004). 
            p.mb-0 Este principio impulsa la idea de que el docente debe crear un entorno en el que el estudiante pueda experimentar, resolver problemas y reflexionar activamente sobre el contenido. Así, se facilita un aprendizaje más significativo que trasciende la simple memorización.
          .div(titulo="Construcción del conocimiento")
            p Proceso mediante el cual el estudiante no solo asimila nueva información, sino que también la interpreta y reorganiza en función de su estructura cognitiva previa. Según Piaget (1952), el conocimiento no se recibe de manera pasiva; en lugar de eso, se construye a través de un proceso de adaptación en el que el estudiante transforma y modifica sus esquemas mentales al enfrentarse con nuevas ideas y experiencias. Esto significa que el aprendizaje depende de la capacidad de cada individuo para conectar los nuevos contenidos con su conocimiento existente, reorganizándolo y transformándolo en comprensiones más complejas.
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen')


    .row.mb-5
      .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-33.png', alt='Texto que describa la imagen')  
      .col-12.col-xl-7.d-flex.flex-column
        div.d-flex.align-items-start.bg-amarillo.p-4.mb-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-34.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") Ambos principios interactúan de manera que el aprendizaje activo facilita la construcción del conocimiento, permitiendo al estudiante un rol protagonista en su educación y promoviendo el autorreflexión y la autonomía.  
        p Por ejemplo, en un aula constructivista, el docente puede implementar actividades de aprendizaje, basado en problemas, donde el estudiante trabaja en resolver situaciones reales y, en el proceso, construye sus conocimientos a partir de la experiencia y la reflexión crítica. Este enfoque también fomenta un ambiente colaborativo, en el cual los estudiantes, al trabajar juntos, construyen conocimiento de forma colectiva, enriqueciendo su aprendizaje mediante la discusión y la argumentación (Dewey, 1938).

    .row.bg-morado.bg-full-width.py-4
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column(data-aos="fade-right")
          h2.mb-4.pb-2.me-auto Implicaciones para la práctica educativa
          p.mb-4 El constructivismo, como teoría del aprendizaje, propone una visión transformadora de la educación en la que el estudiante se convierte en el protagonista de su propio proceso de conocimiento. Lejos de ser un receptor pasivo, el estudiante en el enfoque constructivista participa activamente en la construcción de significados, basándose en sus experiencias previas y en la interacción con su entorno. En este marco, el rol del docente cambia a un facilitador que guía y apoya al estudiante en su exploración y comprensión del mundo. Este enfoque no solo modifica la dinámica del aula, sino que también promueve una educación más participativa, centrada en el desarrollo de habilidades críticas, sociales y de autorregulación. A continuación, en el PDF Implicaciones para la práctica educativa, se presentan las principales implicaciones del constructivismo en la práctica educativa, destacando estrategias y métodos que favorecen un aprendizaje significativo y colaborativo.
          a.d-flex.me-auto.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexos_5.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Implicaciones para la práctica educativa
             
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
          img.h-100(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen')


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://nap.nationalacademies.org/catalog/9853/how-people-learn-brain-mind-experience-and-school-expanded-edition" target="_blank" rel="noopener noreferrer") Bransford, J. D., Brown, A. L., & Cocking, R. R. (Eds.). (2000). How People Learn: Brain, Mind, Experience, and School. National Academy Press. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://editorial.upn.edu.co/wp-content/pages/freire/index.html" target="_blank" rel="noopener noreferrer") Universidad pedagógica nacional. (sep 2021) Paulo Freire maestro de maestros 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
