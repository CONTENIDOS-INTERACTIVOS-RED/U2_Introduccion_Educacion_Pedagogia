<template lang="pug">
.curso-main-container.pb-3
  BannerInterno.text-uppercase(:titulo="'unidad 1: Introducción a la educación y pedagogía'" :subTitulo="'2. Evolución histórica de la educación'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #t_2_1.titulo-segundo
      div.d-flex
        span.me-3 2.1  
        h2 Educación en las civilizaciones antiguas: Mesopotamia, Egipto, Grecia y Roma

    p.mb-4 Cuando se estudian los orígenes de la educación, es interesante observar cómo las civilizaciones antiguas desarrollaron sistemas educativos que respondían a las necesidades sociales, culturales y económicas de su tiempo. Mesopotamia, Egipto, Grecia y Roma, algunas de las más influyentes civilizaciones del mundo antiguo, desarrollaron enfoques educativos que dejaron un legado duradero en la historia de la educación. Conozcamos cada una de ellas:

    TabsC.mb-4
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Mesopotamia", :iconUrl="require('@/assets/curso/unidad/img-14.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-18.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 Mesopotamia
            p(data-aos="fade-up") Considerada la cuna de la civilización, tuvo uno de los primeros sistemas educativos formales. La escritura cuneiforme, una de las primeras formas de escritura, fue creada en Mesopotamia y jugó un papel central en la educación de los escribas. En esta civilización, la educación se enfocaba en la enseñanza de la escritura, las matemáticas y las leyes, conocimientos necesarios para la administración y el comercio. Las escuelas, conocidas como "edubas", eran dirigidas principalmente por sacerdotes y estaban destinadas a los hijos de la élite, quienes se formaban para ocupar puestos en el gobierno o en la administración religiosa (Tinney, 1998).
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Egipto", :iconUrl="require('@/assets/curso/unidad/img-15.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-up")
            figure
              img(src='@/assets/curso/unidad/img-19.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 Egipto
            p(data-aos="fade-up") La educación también estaba ligada a la administración y la religión. Los egipcios desarrollaron una escritura propia, los jeroglíficos, que eran enseñados en las "Casas de la Vida", centros de estudio ubicados en los templos. Aquí, los escribas aprendían no solo a escribir, sino también matemáticas y astronomía, conocimientos cruciales para la gestión del Estado y la construcción de las majestuosas pirámides y templos egipcios. La educación estaba mayormente reservada para las clases altas, mientras que las clases más bajas no tenían acceso a la misma formación (Baines & Eyre, 1983). El sistema educativo egipcio subrayaba la importancia de la obediencia y la moralidad, elementos claves en una sociedad profundamente religiosa.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Grecia", :iconUrl="require('@/assets/curso/unidad/img-16.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-down")
            figure
              img(src='@/assets/curso/unidad/img-20.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 Grecia
            p(data-aos="fade-up") El enfoque educativo dio un giro más filosófico y académico, especialmente en las ciudades-estado de Atenas y Esparta. En Atenas, la educación estaba dirigida a la formación integral del ciudadano, y se centraba en las artes, la filosofía, la retórica y la ética. Grandes pensadores como Sócrates, Platón y Aristóteles influenciaron el pensamiento educativo griego, y su enfoque en el desarrollo del pensamiento crítico y la búsqueda de la verdad sigue siendo un pilar en los sistemas educativos modernos (Marrou, 1956). En contraste, en Esparta, la educación estaba enfocada en la formación militar. Los niños espartanos, desde temprana edad, eran entrenados en la disciplina, la resistencia física y la lealtad al Estado, lo que reflejaba la necesidad de mantener una sociedad guerrera (Cartledge, 2003).
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Roma", :iconUrl="require('@/assets/curso/unidad/img-17.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-left")
            figure
              img(src='@/assets/curso/unidad/img-21.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 Roma
            p(data-aos="fade-up") Influenciada por la cultura griega, adaptó muchos de sus conceptos educativos. En los primeros días de Roma, la educación era principalmente familiar, y los padres enseñaban a sus hijos las habilidades necesarias para ser buenos ciudadanos y soldados. Sin embargo, a medida que Roma expandió su imperio, se creó un sistema educativo más formal. Los romanos desarrollaron un enfoque práctico de la educación, enfocado en la formación del orador y el administrador, con un fuerte énfasis en el derecho, la retórica y la historia. Los romanos también establecieron una distinción entre la educación primaria, donde los niños aprendían a leer, escribir y contar, y la educación superior, que se centraba en la oratoria y el estudio de textos clásicos (Bonner, 1977). Este modelo influyó profundamente en el sistema educativo occidental.

    .row.mb-4
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        p Cada una de estas civilizaciones contribuyó, de manera única, al desarrollo de la educación, con enfoques que iban desde lo religioso y administrativo en Mesopotamia y Egipto, hasta lo filosófico y académico en Grecia y lo práctico y legal en Roma. Estas bases educativas no solo reflejan las necesidades de sus respectivas sociedades, sino que también influyeron en el desarrollo de los sistemas educativos modernos.
        div.d-flex.align-items-start.bg-amarillo.p-4.mb-4(data-aos="fade-right")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-22.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            .d-flex.flex-column
              p.text-bold.mb-1 Reflexione:
              p.pe-xl-3.mb-0(data-aos="fade-up") ¿Qué similitudes y diferencias se pueden encontrar entre los sistemas educativos de las civilizaciones prehispánicas y los de Mesopotamia, Egipto, Grecia y Roma? 
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-23.png', alt='Texto que describa la imagen')  

    #t_2_2.titulo-segundo
      div.d-flex
        span.me-3 2.2  
        h2 Edad Media y Renacimiento: cambios y continuidades

    p.mb-4 Cuando se aborda el estudio de la Edad Media y el Renacimiento, se observan transformaciones profundas en diversas áreas de la sociedad, pero también continuidades que conectan ambos periodos históricos. Estos dos momentos presentan diferencias notables, particularmente en la forma en que se percibía el conocimiento, la religión, y el papel del ser humano en el mundo, aunque no se puede perder de vista que ciertos aspectos fundamentales se mantuvieron a lo largo del tiempo. Conozcamos más sobre cada una de ellas:

    .row.mb-5
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Edad Media")
            p La visión del mundo estaba profundamente influenciada por la religión cristiana. La Iglesia Católica ejercía un control significativo sobre la educación y la vida intelectual. Se creía que el conocimiento último y más valioso era el que tenía que ver con las verdades divinas, y la mayor parte del pensamiento filosófico y científico estaba subordinado a la teología. Los monasterios y las universidades medievales, como la Universidad de París o la de Bolonia, se centraban en el estudio de textos religiosos y de autores antiguos que habían sido reinterpretados a la luz de la fe cristiana. Por ejemplo, pensadores como Tomás de Aquino integraron las ideas de Aristóteles en una cosmovisión teológica, contribuyendo al desarrollo de la escolástica, un método de enseñanza que predominó en la época (Le Goff, 1999).
          .div(titulo="Renacimiento")
            p Con la llegada del Renacimiento en los siglos XIV y XV, se comienza a notar un cambio en la forma de entender el mundo. Esta época marcó el retorno a los ideales de la antigüedad clásica, pero con un enfoque renovado. El humanismo renacentista puso al ser humano en el centro de la reflexión filosófica y cultural. Se promovió una visión del individuo, como capaz de entender el mundo y modificarlo a través de la razón y la observación empírica. Este cambio de perspectiva supuso una ruptura importante con la Edad Media, donde la teología había sido la disciplina más importante (Burke, 2014).
    p.mb-4 La Edad Media no fue un periodo completamente oscuro en cuanto al conocimiento o el pensamiento crítico, como muchas veces se ha estereotipado. A lo largo de estos siglos, hubo avances importantes en áreas como la filosofía, la arquitectura y la tecnología. Las catedrales góticas, con sus avanzadas técnicas de construcción y su simbolismo religioso, son un ejemplo de cómo se combinaban el arte y la devoción en esta época. 

    .row.mb-4
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        p Un elemento clave de continuidad entre ambos periodos, fue la persistencia del cristianismo como una fuerza dominante en la vida cotidiana y en el pensamiento europeo. Aunque el Renacimiento promovió un enfoque más secular y racional del conocimiento, los artistas y pensadores seguían profundamente influenciados por la religión. De hecho, muchas de las obras renacentistas, desde las pinturas de Miguel Ángel hasta los textos de Erasmo de Róterdam, estaban imbuidas de temas religiosos, aunque abordados desde una nueva óptica, más centrada en la humanidad que en lo divino.
        div.d-flex.align-items-start.bg-rosa.p-4.mb-4(data-aos="fade-right")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-25.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            .d-flex.flex-column
              p.pe-xl-3.mb-0(data-aos="fade-up") El Renacimiento también mantuvo la tradición académica de la Edad Media, en cuanto a la preservación y estudio de los textos clásicos. Si bien los renacentistas redescubrieron y reinterpretaron las obras de autores griegos y romanos, en muchos casos lo hicieron basándose en los textos que los eruditos medievales habían conservado y comentado. Los monjes medievales, por ejemplo, habían transcrito y salvaguardado importantes manuscritos clásicos que serían redescubiertos y exaltados durante el Renacimiento.
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-26.png', alt='Texto que describa la imagen')  

    .row.mb-5 
      .col-4.d-none.d-xl-block(data-aos="fade-right")
        img.h-100(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8(data-aos="fade-left")
        p.mb-0 Una diferencia significativa entre ambos periodos, es el cambio en la actitud hacia la ciencia y el conocimiento empírico. Durante el Renacimiento, el método científico comenzó a tomar forma con figuras como Galileo Galilei y Nicolás Copérnico, quienes desafiaron las concepciones medievales del universo basadas en la autoridad de Aristóteles y Ptolomeo. El enfoque renacentista hacia la investigación científica se basaba en la observación directa de la naturaleza y la experimentación, algo que representaba un cambio drástico respecto a la escolástica medieval, que tendía a fundamentarse en la argumentación lógica, más que en la experimentación empírica.

    #t_2_3.titulo-segundo
      div.d-flex
        span.me-3 2.3  
        h2 Ilustración y Revolución Industrial: nuevas ideas y estructuras educativas

    .row.mb-5.mx-0
      .col-12.col-xl-8.d-flex.align-items-center.bg-azul-claro.p-4(data-aos="fade-right")
        p.mb-0(data-aos="fade-up") Para comprender la evolución de la educación moderna, es fundamental analizar los cambios que ocurrieron durante la Ilustración y la Revolución Industrial. Ambos periodos transformaron profundamente las ideas y estructuras educativas, debido a que trajeron consigo nuevos enfoques filosóficos, sociales y económicos que redefinieron el papel de la educación en la sociedad. 
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-left")
        img.h-100(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen')

    .tarjeta.box-shadow.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/template/pdf-icon-circle.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.text-bold.mb-3 Ilustración y Revolución Industrial  
              p.text-small Lo invitamos a leer el PDF Ilustración y Revolución Industrial y conocer el impacto de La Ilustración y la Revolución Industrial en la transformación de las estructuras educativas 
            .col-sm-auto
              a.download-btn.boton.bg-azul.text-white(:href="obtenerLink('/downloads/Anexos_Ilustración y Revolución Industrial.pdf')" target="_blank")
                span.text-small Descargar
                i.fas.fa-arrow-right
    #t_2_4.titulo-segundo
      div.d-flex
        span.me-3 2.4  
        h2 Siglo XX y XXI: reformas, innovaciones y educación contemporánea
    
    p.mb-4 Durante el siglo XX, la educación experimentó profundas reformas e innovaciones que marcaron un cambio significativo en la forma de concebir el aprendizaje y la enseñanza. Estas transformaciones no solo respondieron a las necesidades de una sociedad en constante evolución, sino que también sentaron las bases para la educación contemporánea que se conoce en la actualidad.
    p.mb-4.text-bold Ampliemos la información sobre la temática:

    .row.mb-5
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Siglo XX")
            p.mb-1 Durante el siglo XX, la educación experimentó profundas reformas e innovaciones que marcaron un cambio significativo en la forma de concebir el aprendizaje y la enseñanza. Estas transformaciones no solo respondieron a las necesidades de una sociedad en constante evolución, sino que también sentaron las bases para la educación contemporánea que se conoce en la actualidad.
            p En las primeras décadas del siglo XX, la educación comenzó a alejarse de métodos rígidos y autoritarios. La influencia de pensadores como John Dewey se hizo notable. Dewey propuso un enfoque progresista, donde el aprendizaje debía ser una experiencia activa y centrada en el estudiante. A través de su obra, se enfatizó la importancia de aprender haciendo y la necesidad de relacionar el conocimiento con la vida cotidiana. Este cambio de paradigma permitió que los educadores considerarán   al estudiante como un participante activo en su proceso educativo, lo que fomentó la creatividad y la crítica en el aula (Dewey, 1938).
          .div(titulo="Primeras décadas del siglo XX")
            p En las primeras décadas del siglo XX, la educación comenzó a alejarse de métodos rígidos y autoritarios. La influencia de pensadores como John Dewey se hizo notable. Dewey propuso un enfoque progresista, donde el aprendizaje debía ser una experiencia activa y centrada en el estudiante. A través de su obra, se enfatizó la importancia de aprender haciendo y la necesidad de relacionar el conocimiento con la vida cotidiana. Este cambio de paradigma permitió que los educadores considerarán  al estudiante como un participante activo en su proceso educativo, lo que fomentó la creatividad y la crítica en el aula (Dewey, 1938).
          .div(titulo="Finales del siglo XX")
            p Con el avance de la tecnología y la globalización a finales del siglo XX y principios del XXI, la educación contemporánea se vio influenciada por la necesidad de preparar a los estudiantes para un mundo interconectado. La incorporación de las nuevas tecnologías en el aula transformó las metodologías de enseñanza, haciendo posible el acceso a un vasto universo de información. Las herramientas digitales no solo cambiaron la manera de impartir conocimientos, sino que también fomentaron el aprendizaje colaborativo y la comunicación entre estudiantes de diversas partes del mundo (Moreno, 2020).
          .div(titulo="Siglo XXI")
            p En el contexto del siglo XXI, se ha puesto un énfasis significativo en el desarrollo de competencias y habilidades para la vida. Los modelos educativos actuales buscan formar no solo profesionales competentes, sino también ciudadanos responsables y comprometidos con su comunidad. En este sentido, la educación se ha convertido en un medio para fomentar la inclusión, la diversidad y la equidad, con el objetivo de asegurar que todos los individuos tengan las mismas oportunidades de aprendizaje y desarrollo personal (UNESCO, 2015).


    .row.mb-5
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-rosa.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-25.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0 Asimismo, la educación contemporánea enfrenta retos significativos. La pandemia del COVID-19, por ejemplo, obligó a una rápida transición hacia la educación en línea y a distancia. Esta situación reveló desigualdades preexistentes y destacó la necesidad de repensar las políticas educativas para garantizar el acceso a todos los estudiantes, independientemente de su contexto socioeconómico. Las experiencias de este período han llevado a una reflexión profunda sobre la importancia de la flexibilidad y la adaptabilidad en los sistemas educativos (OECD, 2020).
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
