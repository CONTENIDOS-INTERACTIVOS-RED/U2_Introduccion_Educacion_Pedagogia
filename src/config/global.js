export default {
  global: {
    componenteFormativo:
      'Componente Formativo con un nombre extremadamente largo y extenso',
    descripcionCurso:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vestibulum quam bibendum varius.<br/><br/>Quisque pretium at nulla sit amet placerat. Vestibulum consequat suscipit accumsan. Proin pharetra congue enim et tempus. Sed sodales dui volutpat, placerat tellus accumsan, semper est. Phasellus nec lorem elementum, mattis quam eget, vestibulum nibh. Sed.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Concepto y finalidad de la educación ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Definición y elementos de la educación',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Objetivos y propósitos de la educación',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Objetivos y propósitos de la educación',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Objetivos y propósitos de la educación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Educación en las civilizaciones antiguas: Mesopotamia, Egipto, Grecia y Roma',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Edad Media y Renacimiento: cambios y continuidades',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Ilustración y Revolución Industrial: nuevas ideas y estructuras educativas',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo:
              'Siglo XX y XXI: reformas, innovaciones y educación contemporánea',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Corrientes filosóficas y pedagógicas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Filosofías clásicas en la educación',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Pedagogías clásicas: Montessori, Dewey, Piaget',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Diferentes enfoques educativos',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Corrientes contemporáneas',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-download',
        titulo: 'Descargar PDF',
        download: 'downloads/Introduccion_Educacion_Pedagogia_U1.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
    ],
  },
  referencias: [],
  glosario: [
    {
      termino: 'Ambiente de aprendizaje',
      significado:
        'Se refiere al espacio físico y al clima emocional y social que se establece dentro del aula, influyendo en la motivación y el bienestar de los estudiantes',
    },
    {
      termino: 'Asimilación',
      significado:
        'Proceso cognitivo en el que los estudiantes incorporan nueva información dentro de esquemas mentales ya existentes, según la teoría de Piaget',
    },
    {
      termino: 'Autoconocimiento',
      significado:
        'Proceso de reflexión personal que permite a los individuos reconocer sus propias habilidades, intereses y valores, fundamental para el desarrollo personal',
    },
    {
      termino: 'Autonomía',
      significado:
        'Capacidad de los individuos para tomar decisiones y aprender de manera independiente, gestionando su propio proceso educativo a lo largo de la vida',
    },
    {
      termino: 'Competencias',
      significado:
        'Conjuntos de conocimientos, habilidades y actitudes que permiten a los individuos enfrentar desafíos y desempeñarse adecuadamente en diferentes contextos',
    },
    {
      termino: 'Concientización',
      significado:
        'Proceso de toma de conciencia sobre la propia realidad social, económica y política, que permite a los individuos identificar y cuestionar las estructuras de poder que perpetúan la desigualdad',
    },
    {
      termino: 'Currículo',
      significado:
        'Conjunto de contenidos y experiencias de aprendizaje organizados y presentados a los estudiantes, que debe ser relevante y alineado con sus necesidades y contextos',
    },
    {
      termino: 'Desarrollo cognitivo',
      significado:
        'Proceso de adquisición de conocimientos y habilidades intelectuales, que permite a los estudiantes comprender y analizar el mundo que les rodea',
    },
    {
      termino: 'Edubas',
      significado:
        'Escuelas de Mesopotamia destinadas a la educación de los hijos de la élite, donde se enseñaban escritura, matemáticas y leyes',
    },
    {
      termino: 'Escribas',
      significado:
        'Individuos entrenados en la escritura y administración, fundamentales en las civilizaciones antiguas, especialmente en Mesopotamia y Egipto',
    },
    {
      termino: 'Humanismo',
      significado:
        'Enfoque educativo que pone énfasis en el desarrollo integral del individuo, considerando tanto su crecimiento personal como emocional, con la autorrealización como meta',
    },
    {
      termino: 'Idealismo',
      significado:
        'Corriente filosófica que sostiene que la realidad se encuentra en las ideas y en el mundo de las formas; enfatiza el desarrollo del pensamiento crítico y la búsqueda del conocimiento verdadero',
    },
    {
      termino: 'Inclusión',
      significado:
        'Valor que promueve la aceptación y participación de todos los estudiantes, independientemente de sus diferencias, en el proceso educativo',
    },
    {
      termino: 'Metacognición',
      significado:
        'Capacidad del estudiante para reflexionar sobre su propio proceso de aprendizaje, fundamental en el constructivismo',
    },
    {
      termino: 'Praxis',
      significado:
        'Concepto propuesto por Freire que se refiere a la combinación de reflexión y acción orientada al cambio social y a la transformación de la realidad',
    },
    {
      termino: 'S. d.',
      significado:
        '("sine die" en latín) en citas bibliográficas: Indica que no se conoce la fecha de publicación de un documento',
    },
    {
      termino: 'Socialización',
      significado:
        'Se refiere al proceso mediante el cual los individuos adquieren e internalizan los valores, normas, comportamientos y habilidades necesarios para interactuar de manera efectiva dentro de su cultura y sociedad. Este proceso ocurre principalmente a través de la interacción con otros, incluyendo familiares, compañeros, educadores y miembros de la comunidad',
    },
  ],
  complementario: [
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: ['Nombre 1', 'Nombre 2'],
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
