<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno.text-uppercase(:titulo="'Unidad 2. Teorías pedagógicas y su impacto en la educación'" :subTitulo="'4. Impacto de las teorías pedagógicas en los sistemas educativos'")
    .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0
  
      .row.mb-4
        .col-12.col-xl-7(data-aos="fade-right")
          p.mb-4 La formulación de políticas educativas se basa en gran medida en las teorías pedagógicas, las cuales influyen en la manera en que los sistemas educativos estructuran sus enfoques de enseñanza y aprendizaje. Estas teorías proporcionan un marco conceptual que orienta la toma de decisiones en educación, afectando tanto el diseño de los currículos como los métodos de evaluación y las estrategias de enseñanza en las aulas. 

          p.mb-0 Al adoptar teorías como el conductismo, el constructivismo o el cognitivismo, los responsables de la educación pueden formular políticas que respondan a los diferentes estilos de aprendizaje y necesidades de los estudiantes.
        .col-12.col-xl-5.d-none.d-xl-block(data-aos="fade-left")
          img(src='@/assets/curso/unidad/img-51.png', alt='Texto que describa la imagen')

      .row.bg-morado.bg-full-width.py-4.mb-0
        div.px-5.pb-md-3.py-4.d-flex
          .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
            img(src='@/assets/curso/unidad/img-52.png', alt='Texto que describa la imagen')
          .col-12.col-xl-7.d-flex.ps-4.align-items-center.flex-column(data-aos="fade-left")
            h2.mb-4.pb-2.me-auto Impacto en los sistemas educativos
            p.mb-4 Lo invitamos a consultar el PDF Impacto en los sistemas educativos,  en donde se explora cómo diversas teorías pedagógicas han moldeado las políticas educativas y examina ejemplos específicos de sistemas educativos que han integrado distintos enfoques teóricos para mejorar la calidad educativa, el rendimiento académico y la inclusión en el aula.
            a.d-flex.me-auto.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexos_4.pdf')" target="_blank")
              img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
              p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Impacto en los sistemas educativos

  </template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema4',
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

<style lang="sass">
.material-complementario
  padding-top: 3rem
  border-top: 9px solid $color-sistema-e
</style>
