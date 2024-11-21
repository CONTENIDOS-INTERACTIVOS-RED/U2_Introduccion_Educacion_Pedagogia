<template lang="pug">
.curso-main-container.pb-3
  BannerInterno.text-uppercase(:titulo="'unidad 1: Introducción a la educación y pedagogía'" :subTitulo="'1. Concepto y finalidad de la educación '")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    #t_1_1.titulo-segundo
      div.d-flex
        span.me-3 1.1  
        h2 Definición y elementos de la educación

    .row.mb-5
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-right")
        img.h-100(src='@/assets/curso/unidad/img-5.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.flex-column.justify-content-center.bg-rosa.p-4.p-xxl-5(data-aos="fade-left")
        p.mb-0  La educación es mucho más que una simple transmisión de conocimientos; es un proceso que forma parte esencial de nuestras vidas y va moldeando quiénes somos en nuestra relación con el mundo. Al explorar cómo la educación influye en el desarrollo personal y social, podemos descubrir los significados profundos y únicos que cada individuo le asocia en su vida cotidiana. 

    .tarjeta.box-shadow.p-3.mb-5(data-aos="fade-up")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/template/pdf-icon-circle.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.text-bold.mb-3 Definición y elementos de la educación 
              p.text-small ¿Qué implica  para cada uno de nosotros este proceso? ¿Cómo ha impactado en nuestra capacidad para convivir, colaborar y reflexionar sobre nuestro entorno? Lo invitamos a leer el PDF Definición y elementos de la educación , donde encontrará respuestas y perspectivas que seguramente resonarán con su propia experiencia de la educación.
            .col-sm-auto
              a.download-btn.boton.bg-azul(:href="obtenerLink('/downloads/Anexos_Definición y elementos de la educación.pdf')" target="_blank")
                span.text-small Descargar
                i.fas.fa-arrow-right
    
    #t_1_2.titulo-segundo
      div.d-flex
        span.me-3 1.2  
        h2 Objetivos y propósitos de la educación

    p.mb-4 Al hablar de los objetivos y propósitos de la educación, se hace referencia a las metas fundamentales que esta debe alcanzar en el proceso formativo de las personas. La educación no se limita simplemente a la transmisión de conocimientos; su alcance es mucho más amplio y se extiende hacia la formación integral del individuo. A través de este proceso, se busca desarrollar una serie de competencias, habilidades y valores, que permitan a cada persona vivir plenamente en sociedad y contribuir activamente a su desarrollo. 
    p.text-bold Conozcamos cuáles son esos objetivos y propósitos:

    .row.position-relative.mb-5.py-4.bg-fondo-2.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Fomentar el desarrollo cognitivo
              p Esto implica que los estudiantes adquieran conocimientos y habilidades intelectuales que les permitan comprender el mundo que les rodea. La educación, desde esta perspectiva, se centra en transmitir saberes científicos, históricos, matemáticos y literarios, que constituyen la base del conocimiento humano. Sin embargo, el desarrollo cognitivo va más allá de memorizar información; se trata de formar mentes críticas y reflexivas, capaces de cuestionar, analizar y aplicar lo aprendido en situaciones concretas. Según Piaget (1970), este desarrollo intelectual ocurre a través de una serie de etapas, donde el individuo construye su conocimiento de manera activa, explorando y aprendiendo del entorno.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-6.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Formación de ciudadanos responsables y éticos
              p Este objetivo está relacionado con el desarrollo de valores y principios que orientan las acciones de las personas en la sociedad. A través de la educación, se busca que los individuos comprendan la importancia de la justicia, la equidad, el respeto a los demás, la responsabilidad social y la empatía. En palabras de Durkheim (1972), la educación es una herramienta esencial para la socialización, en la medida en que enseña a los individuos, a respetar las normas y valores que rigen la vida en sociedad. De este modo, la educación contribuye a la construcción de una comunidad más justa y equitativa.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Promover el desarrollo personal y emocional
              p La educación no solo debe formar al individuo en el aspecto intelectual o moral, sino también en su bienestar emocional. Es decir, debe ayudar a las personas a conocerse a sí mismas, a gestionar sus emociones de manera saludable, y a desarrollar la capacidad de trabajar en equipo y resolver conflictos de manera pacífica. La educación emocional es esencial para el bienestar personal y para la construcción de relaciones interpersonales sanas y respetuosas. Goleman (1995), en su teoría sobre la inteligencia emocional, destaca que las habilidades emocionales son tan importantes como las cognitivas para el éxito en la vida, dado que nos permiten enfrentar desafíos, adaptarnos al cambio y colaborar efectivamente con otros.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Preparar para la vida laboral
              p En este sentido, la educación debe dotar a las personas de las competencias técnicas y profesionales necesarias para desempeñarse en un entorno laboral, que es cada vez más complejo y exigente. La formación técnica y vocacional juega un papel crucial en este objetivo, porque permite a los individuos adquirir habilidades prácticas que les permitirán integrarse exitosamente en el mercado de trabajo. Sin embargo, no se trata solo de formar trabajadores competentes, sino también de fomentar el espíritu emprendedor y la capacidad de adaptación a los cambios constantes del mundo laboral actual.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Fomentar la autonomía y el aprendizaje a lo largo de la vida 
              p La educación no se detiene en la infancia o la juventud, sino que es un proceso continuo. El objetivo se fundamenta en que las personas adquieran las habilidades necesarias para seguir aprendiendo de manera autónoma, adaptándose a los cambios del entorno y buscando constantemente el crecimiento personal y profesional. Freire (1970), plantea que la educación debe ser un proceso de liberación, en el que los individuos desarrollen una conciencia crítica que les permita transformar su realidad. En este sentido, la educación se convierte en una herramienta de emancipación, que otorga a las personas la capacidad de construir su propio conocimiento y ser agentes de cambio en la sociedad.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')

    #t_1_3.titulo-segundo
      div.d-flex
        span.me-3 1.3  
        h2 La educación como herramienta de desarrollo personal y social
    p.mb-4 La educación es, sin duda, una de las herramientas más poderosas para el desarrollo personal y social. Cuando se reflexiona sobre su impacto, no solo se piensa en la adquisición de conocimientos, sino en la manera en que esta puede transformar la vida de las personas y de las comunidades en las que viven. Desde este enfoque, se puede argumentar que la educación tiene un doble propósito: facilitar el crecimiento individual y contribuir al bienestar colectivo.
    p.mb-4.text-bold Talentos y herramientas que se adquieren con la educación:

    .row.mb-5
      .col-12.col-lg-7(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="Desarrollo personal")
            p La educación impulsa el desarrollo personal al ofrecer a cada individuo las herramientas necesarias para conocerse a sí mismo, descubrir sus talentos y habilidades, y construir un proyecto de vida significativo. Esta dimensión de la educación va más allá de la mera instrucción académica o técnica; se trata de una formación integral que fomenta, tanto el crecimiento intelectual como el emocional y el ético. Por ejemplo, Carl Rogers (1969), uno de los principales exponentes de la psicología humanista, sostiene que la educación debe centrarse en el estudiante como persona, ayudándole a desarrollar un sentido de responsabilidad personal y una capacidad para la autorreflexión crítica. Este enfoque no solo permite adquirir conocimientos, sino que además promueve la autonomía y la autorrealización.
          .div(titulo="Autodescubrimiento")
            p A través de ella, el individuo es capaz de explorar sus intereses y pasiones, de formarse una identidad propia y de adquirir las habilidades necesarias para enfrentarse a los desafíos de la vida con confianza. Esta capacidad de autogestión y resiliencia, es fundamental en un mundo que cambia constantemente. Un individuo educado no es solo alguien que ha memorizado ciertos conceptos o dominado habilidades técnicas, sino alguien que tiene la capacidad de aprender a lo largo de toda la vida, adaptarse a nuevas situaciones y desarrollar una visión crítica de la realidad. En este sentido, la educación es un motor del crecimiento personal continuo (Knowles, 1975).
          .div(titulo="Desarrollo social")
            p Como mencionaba Paulo Freire (1970), en su obra "Pedagogía del oprimido", la educación es un medio para liberar a las personas de la ignorancia y de las estructuras de poder que perpetúan la desigualdad. Según Freire, la educación debe ser un proceso de concientización en el que los individuos tomen conciencia de su realidad social, económica y política y, a partir de ello, busquen transformarla para mejorar las condiciones de vida tanto propias como de su comunidad. Esto es lo que él llamaba la "praxis ": la reflexión y acción que llevan al cambio social.
          .div(titulo="Competencias cívicas")
            p A través de la educación, las personas adquieren las competencias cívicas necesarias para participar activamente en la vida democrática. Saber leer y escribir, conocer la historia, entender los derechos humanos y los principios de justicia social, son aspectos esenciales para formar ciudadanos comprometidos con el bienestar colectivo. De esta manera, la educación no solo prepara para la vida laboral, sino también para la participación activa en la sociedad. A través del desarrollo de una conciencia crítica, los individuos pueden cuestionar las injusticias, trabajar por la equidad y contribuir a la creación de sociedades más justas y cohesionadas.
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')
  
    p.mb-4 Un claro ejemplo de este impacto social, lo encontramos en la promoción de la igualdad de género y los derechos humanos. La educación ha demostrado ser un motor clave para reducir las brechas de género, mejorar la calidad de vida y garantizar el acceso equitativo a oportunidades de desarrollo. La UNESCO (2020), destaca que cuando las niñas y las mujeres tienen acceso a la educación, no solo mejoran sus propias vidas, sino que también tienen un impacto positivo en sus familias y comunidades, lo que genera un círculo virtuoso de desarrollo social.

    .row.mb-5
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')  
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        p.mb-4 Por lo tanto, la educación no puede verse de manera aislada; es una fuerza que transforma tanto al individuo como a la sociedad. A nivel personal, brinda las herramientas necesarias para el autoconocimiento, la autonomía y el crecimiento continuo. A nivel social, contribuye a formar ciudadanos críticos, conscientes de su entorno y comprometidos con el bienestar común. Así, la educación es una herramienta de empoderamiento que, al facilitar el desarrollo personal, impacta de manera directa en el progreso social, creando comunidades más justas, equitativas y cohesionadas.
        div.d-flex.align-items-start.bg-rosa.p-4.mb-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-13.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            .d-flex.flex-column
              p.text-bold.mb-2 Reflexione:
              p.pe-xl-3.mb-0(data-aos="fade-up") ¿Cómo puede la educación contribuir al desarrollo de la autoconfianza y la resiliencia en los individuos? 



</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-img-1
  position: absolute
  max-width: none
  width: calc( 100% + 96px  )
  height: calc( 100% + 96px )
  left: -48px
  top: -48px
  inline-size: auto
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
