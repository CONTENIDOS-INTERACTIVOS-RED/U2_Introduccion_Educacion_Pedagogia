<template lang="pug">
.curso-main-container.introduccion
  BannerInterno.text-uppercase(:titulo="'Unidad 2. Teorías pedagógicas y su impacto en la educación'" :subTitulo="'Introducción'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.mb-5
    .row.mb-4
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        p.mb-4 La presente unidad se centra en el estudio de las teorías pedagógicas, un tema fundamental en el ámbito de la educación. La comprensión de estas teorías resulta esencial para desarrollar prácticas educativas efectivas, dado que ofrecen un marco conceptual que guía el proceso de enseñanza-aprendizaje.
        p.mb-4 El objetivo de este proceso es el de comprender la importancia de las teorías pedagógicas en el desarrollo de la educación. Al finalizar esta sección, se espera que el estudiante haya adquirido un conocimiento sólido sobre las principales corrientes pedagógicas, sus exponentes y sus aplicaciones en el aula, así como un entendimiento claro del papel que desempeña el docente en cada una de ellas.
        p.mb-0 La unidad se organizará en cuatro secciones:
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-1.png', alt='Texto que describa la imagen')  

    
    .bg-fondo-3.bg-full-width
      div.px-5.pb-md-3.py-4
        .row.mb-4.justify-content-center
          .col-10.col-md-8.col-lg-6.col-xl-3.mb-4.mb-xl-0
            .custom-image-card.d-flex.p-3.flex-column.align-items-center
              img.pe-2(src='@/assets/curso/unidad/img-2.svg', style="width: 80px")
              p.text-bold.mb-4 Primera sección
              p.px-1.text-small.mb-0.d-flex Se dedicará a la introducción de las teorías pedagógicas, abordando su definición y evolución histórica.
          .col-10.col-md-8.col-lg-6.col-xl-3.mb-4.mb-xl-0
            .custom-image-card.d-flex.p-3.flex-column.align-items-center
              img.pe-2(src='@/assets/curso/unidad/img-3.svg', style="width: 80px")
              p.text-bold.mb-4 Segunda sección
              p.px-1.text-small.mb-0.d-flex Se analizarán las teorías clásicas y contemporáneas, incluyendo el conductismo, cognitivismo y constructivismo, así como también, sus aplicaciones en el aula.
          .col-10.col-md-8.col-lg-6.col-xl-3.mb-4.mb-xl-0
            .custom-image-card.d-flex.p-3.flex-column.align-items-center
              img.pe-2(src='@/assets/curso/unidad/img-4.svg', style="width: 80px")
              p.text-bold.mb-4 Tercera sección
              p.px-1.text-small.mb-0.d-flex Explorará el papel del docente en estas corrientes.
          .col-10.col-md-8.col-lg-6.col-xl-3.mb-4.mb-xl-0
            .custom-image-card.d-flex.p-3.flex-column.align-items-center
              img.pe-2(src='@/assets/curso/unidad/img-5.svg', style="width: 80px")
              p.text-bold.mb-4 Cuarta sección
              p.px-1.text-small.mb-0.d-flex Se discutirá el impacto de las teorías pedagógicas en los sistemas educativos y los desafíos y oportunidades que presentan.

        .row.mb-5
          .d-flex.align-items-center
            div.d-flex.align-items-center.bg-verde-oscuro.px-3.py-4.text-white(data-aos="fade-down")
              img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-4.svg', alt='Texto que describa la imagen')
              p.pe-xl-5.mb-0 Se espera que se involucren activamente en el curso, participando en discusiones y actividades, así como cumplir también con los requisitos previos necesarios para aprovechar al máximo esta experiencia de aprendizaje. Este enfoque colaborativo y participativo, es esencial para lograr un aprendizaje significativo y duradero en el contexto de un curso virtual.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
