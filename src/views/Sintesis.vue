<template lang="pug">
.curso-main-container.creditos-vista
  BannerInterno.text-uppercase(:titulo="'unidad 1: Introducción a la educación y pedagogía'" :subTitulo="'SÍNTESIS'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4.mb-md-5 La Unidad 1: Introducción a la educación y pedagogía, establece los fundamentos teóricos esenciales para comprender el concepto de educación y su propósito en el desarrollo personal y social. Esta unidad proporciona una perspectiva clara sobre las finalidades de la educación, su papel en la formación de habilidades, valores y actitudes, así como su impacto en la construcción de una sociedad justa y responsable. Este enfoque integral asegura que los estudiantes adquieran una comprensión sólida de la educación como un motor de cambio y desarrollo, lo cual les permitirá aplicar estos conocimientos en su vida y comunidad.
    figure
      img(src='@/assets/componentes/sintesis.png', alt='Texto que describa la imagen')
    

</template>
<script>
import BannerInterno from '../components/plantilla/BannerInterno'
import Footer from '../components/plantilla/Footer'
export default {
  name: 'Creditos',
  components: {
    BannerInterno,
    Footer,
  },
  data: () => ({
    configTitulos: {
      liderEquipo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      contenidoInstruccional: 'CONTENIDO INSTRUCCIONAL',
      desarrolloProducto:
        'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      gestoresRepositorio: 'GESTORES DE REPOSITORIO',
    },
  }),
  computed: {
    creditosData() {
      return this.$config.creditos
    },
    creditosAdicionales() {
      return this.$config.creditosAdicionales
    },
  },
  methods: {
    renderText(textObj) {
      let newText = ''
      if (Array.isArray(textObj)) {
        textObj.forEach((texto, index) => {
          newText += (index ? '<br/>' : '') + texto
        })
      } else {
        newText += textObj
      }
      return newText
    },
  },
}
</script>

<style lang="sass">
.creditos-vista
  .tarjeta.credito
    background-color: $color-sistema-d

.creditos
  color: $color-sistema-b
  overflow-x: auto

  &__item
    min-width: 490px

  p
    line-height: 1.3em
    margin-bottom: 0
    color: $color-sistema-b

  &__titulo
    font-weight: $base-bold-font-weight
    background-color: $color-sistema-d
    padding: 5px 10px
    border-top-radius: $base-border-radius
    border-top-left-radius: $base-border-radius
    border-top-right-radius: $base-border-radius
  table
    td, th
      border-color: $color-sistema-d
</style>
