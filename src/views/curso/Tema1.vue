<template lang="pug">
.curso-main-container.pb-3
  BannerInterno.text-uppercase(:titulo="'Unidad 2. Teorías pedagógicas y su impacto en la educación'" :subTitulo="'1. Introducción a las teorías pedagógicas'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-4
      .d-flex.align-items-center
        div.d-flex.align-items-center(data-aos="fade-down")
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-7.svg', alt='')
          p.pe-xl-5.mb-0 Al adentrarnos en el estudio de las teorías pedagógicas, nos encontraremos con un conjunto de conceptos fundamentales que explican y orientan los procesos educativos. 

    .row.mb-4.mx-0
      .col-12.col-xl-8.d-flex.flex-column.align-items-center.justify-content-center.bg-rosa.p-4(data-aos="fade-right")
        p.text-bold.mb-4.me-auto ¿Qué es una teoría pedagógica?
        p.mb-0(data-aos="fade-up") Puede considerarse como un conjunto estructurado de ideas, principios y normas, que intenta explicar el proceso educativo y orientar las prácticas de enseñanza. Se trata de un marco teórico que ha sido construido a lo largo del tiempo, facilitando el análisis y la comprensión del proceso de aprendizaje en los estudiantes, adaptándose a sus necesidades y a los contextos en los cuales se desenvuelven.
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-left")
        img.h-100(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')

    .row.mb-5
      .col-5.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7.d-flex.flex-column.align-items-center(data-aos="fade-left")
        p.mb-4 Por ejemplo, teorías como el constructivismo de Jean Piaget y Lev Vygotsky, o el enfoque del aprendizaje significativo propuesto por David Ausubel, ofrecen perspectivas distintas sobre cómo los estudiantes construyen su conocimiento. Estos enfoques sugieren que el aprendizaje no es solo un proceso de adquisición de información, sino un acto activo de construcción de significados. La teoría constructivista, por ejemplo, plantea que el conocimiento se construye mediante la interacción con el entorno, y no simplemente a través de la transmisión de conocimientos.
        p.mb-0 Es importante destacar que el dominio de las teorías pedagógicas proporciona un marco de análisis crítico para reflexionar sobre las prácticas educativas. Así, la teoría se convierte en una herramienta que permite cuestionar los métodos de enseñanza, indagar en la efectividad de las estrategias y buscar formas de mejorar la calidad del aprendizaje. De esta manera, las teorías pedagógicas no solo fundamentan la práctica educativa, sino que también fomentan una actitud reflexiva y crítica en el ejercicio docente.

    #t_1_1.titulo-segundo
      div.d-flex
        span.me-3 1.1  
        h2 Historia y evolución de las teorías pedagógicas

    .row.mb-5
      .col-12.col-xl-7.d-flex.flex-column
        p Al explorar la historia y evolución de las teorías pedagógicas, se obtiene una comprensión profunda de cómo estas han moldeado la educación a lo largo del tiempo y de su importancia en la creación de prácticas educativas significativas. 
        div.d-flex.align-items-start.bg-amarillo.p-4.mb-4(data-aos="fade-right")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-10.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") ¿Sabía que cada teoría pedagógica ha surgido como una respuesta a las necesidades, valores y conocimientos propios de su contexto histórico, reflejando así la manera en que cada sociedad ha concebido el aprendizaje y el papel de la educación en la formación de los individuos?
      .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')  

    .row.mb-5
      .col-5.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7.d-flex.flex-column.align-items-center(data-aos="fade-left")
        p.mb-4 Por lo tanto, al analizar la evolución de estas teorías, no solo se comprenden las bases sobre las que descansa el sistema educativo actual, sino que también se abren posibilidades para cuestionar y enriquecer las prácticas pedagógicas, adaptándolas a los retos del presente.
        p.mb-0 En primer lugar, es importante señalar que las teorías pedagógicas no surgieron de manera aislada, sino que se encuentran profundamente vinculadas al contexto social, cultural y científico de cada época, como se presenta a continuación.

    ImagenInfografica.color-secundario.mb-5.bg-full-width
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')

      .tarjeta.bg-azul-1.p-4(x="50%" y="17%" numero="+")
        .h5.mb-1 Antigua Grecia
        p En la antigua Grecia, por ejemplo, filósofos como Sócrates, Platón y Aristóteles establecieron algunas de las primeras ideas sobre la educación, considerándola un medio para alcanzar la virtud y la ciudadanía (Castillo y Luna, 2017). En este periodo, el enfoque educativo se centraba en el desarrollo moral y en el pensamiento crítico, subrayando la relevancia del diálogo y la reflexión en el aprendizaje. De este modo, la educación tenía un propósito ético, asociado a la formación de individuos capaces de participar activamente en la vida cívica.
      .tarjeta.bg-azul-1.p-4(x="50%" y="37%" numero="+")
        .h5.mb-1 Edad Media
        p Durante la Edad Media, las ideas pedagógicas adoptaron un enfoque teocéntrico, donde la enseñanza estaba subordinada a las doctrinas religiosas.
      .tarjeta.bg-azul-1.p-4(x="50%" y="57%" numero="+")
        .h5.mb-1 Renacimiento e Ilustración
        p El Renacimiento y la Ilustración trajeron consigo un cambio radical, al empezar a valorarse el conocimiento científico y el pensamiento racional como bases para el aprendizaje. Filósofos como Comenio y Rousseau, jugaron un papel central en estas transformaciones, al proponer una educación centrada en el desarrollo natural del niño, con un enfoque más humanista y menos dogmático (Jiménez, 2019).
      .tarjeta.bg-azul-1.p-4(x="50%" y="77%" numero="+")
        .h5.mb-1 Siglo XIX y principios del siglo XX
        p figuras como John Dewey en Estados Unidos y María Montessori en Italia, revolucionaron la educación al introducir conceptos como el aprendizaje activo y el enfoque en el desarrollo integral de cada estudiante. Dewey abogó por una educación basada en la experiencia y la participación activa, mientras que Montessori resaltó la importancia de los ambientes preparados y la autonomía del estudiante en el proceso de aprendizaje (Martínez, 2020). Estos enfoques fueron fundamentales para el surgimiento del constructivismo en el siglo XX, una de las teorías más influyentes en la pedagogía contemporánea, la cual sostiene que el conocimiento se construye activamente mediante la interacción con el entorno y la resolución de problemas.

    .row.mb-0
      .col-12.col-md-11.col-lg-10.mx-auto
        p.mb-4 El recorrido histórico de las teorías pedagógicas, permite observar cómo estas han evolucionado en respuesta a los cambios sociales, culturales y científicos. Cada etapa de la historia de la pedagogía ha aportado ideas y enfoques que aún hoy sirven de fundamento para las prácticas educativas. Este análisis demuestra que las teorías pedagógicas no solo proporcionan marcos de referencia para la enseñanza, sino que también reflejan las aspiraciones y valores de cada sociedad. 
        .d-flex.align-items-center
          div.d-flex.align-items-center.bg-morado.px-3.py-4
            img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-14.svg', alt='Texto que describa la imagen')
            .d-flex.flex-column
              p.text-bold.mb-1 Lectura recomendadas
              p.pe-xl-5.mb-0 Se invita a leer el texto "Teorías del aprendizaje y modelos educativos: revisión histórica" de Fonseca y Bencomo (2011), el cual se encuentra en el material de apoyo. Esta lectura es una oportunidad valiosa para profundizar en la evolución de las teorías del aprendizaje y los modelos educativos que han influido en las prácticas docentes hasta hoy.

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.researchgate.net/publication/367203768_Bandura's_Social_Learning_Theory_Social_Cognitive_Learning_Theory" target="_blank" rel="noopener noreferrer") Bandura, A. (1977). Social Learning Theory. Prentice Hall. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/CWdIG21czR8?si=24oAcAMkqmODY7u_" target="_blank" rel="noopener noreferrer") Sprouts Español (6 ene 2023). La teoría del aprendizaje social de Bandura.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
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
