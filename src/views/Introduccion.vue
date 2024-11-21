<template lang="pug">
.curso-main-container.introduccion
  BannerInterno.text-uppercase(:titulo="'unidad 1: Introducción a la educación y pedagogía'" :subTitulo="'Introducción'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .bg-fondo-1.bg-full-width
      div.px-5.pb-md-3.py-4
    
        p.mb-4 La educación se considera un proceso fundamental para la formación integral, que trasciende la simple transmisión de conocimientos. En esta unidad, se exploran los conceptos y finalidades de la educación, destacando su papel en el desarrollo de habilidades, valores y actitudes que fomentan una participación activa y crítica en la sociedad. El conocimiento adquirido no solo contribuye a formar individuos competentes, sino que también ayuda en la construcción de comunidades más justas y responsables.

        .row
          .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-1.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center ¿Cuál es el enfoque de la unidad?
                p.text-small.px-4.text-center.pb-2 El enfoque de esta unidad se centra en cómo la educación moldea tanto a las personas como a su entorno. En un mundo en constante cambio, se reconoce la importancia de la educación más allá de lo académico. Este proceso se presenta como un medio para el desarrollo personal y social, promoviendo la reflexión crítica y la responsabilidad cívica, aspectos esenciales para una convivencia armónica y un progreso social sostenible.
          .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-left")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-2.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center ¿Qué se espera al finalizar la unidad?
                p.text-small.px-4.text-center.pb-2 Al finalizar la unidad, se espera que se logre identificar y analizar las diversas funciones de la educación en la sociedad. Se desarrollarán habilidades para evaluar, de manera crítica, los diferentes enfoques educativos y una comprensión profunda de su papel en la formación de ciudadanos autónomos y comprometidos con la comunidad.
    p.mb-4 Además, la educación impacta no solo en la vida personal, sino que también es clave para el futuro profesional. Comprender cómo se aplican los principios educativos en la práctica, puede inspirar a convertirse en un agente de cambio en la comunidad. Los líderes educativos, por ejemplo, influyen en las futuras generaciones, moldeando su forma de pensar y actuar, lo que subraya la relevancia de este tema para el desarrollo social. 
    .row.mb-4
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        div.d-flex.align-items-start.bg-amarillo.p-4.h-100(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-3.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") Se espera que el estudiante participe activamente en las actividades y discusiones, mostrando disposición para explorar diversas perspectivas sobre la educación. Es fundamental que revise los materiales sugeridos, como lecturas y videos, que se encuentran en la guía de aprendizaje, para enriquecer el diálogo y maximizar su comprensión. Además, se anticipa que el estudiante desarrolle habilidades de análisis crítico y reflexión, reconociendo la importancia de la educación como un motor de cambio social y personal en su vida y en la comunidad.
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-4.png', alt='Texto que describa la imagen')  




</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
import Muestras from '../components/muestras/Muestras.vue'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
    Muestras,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
