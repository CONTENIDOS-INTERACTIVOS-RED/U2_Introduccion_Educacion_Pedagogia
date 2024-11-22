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
        titulo: 'Introducción a las teorías pedagógicas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Historia y evolución de las teorías pedagógicas',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Teorías pedagógicas clásicas y contemporáneas     ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Conductismo',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Cognitivismo ',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Constructivismo',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'El papel del docente en las distintas corrientes pedagógicas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'El docente en el conductismo',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'El docente en el cognitivismo',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'El docente en el constructivismo',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Impacto de las teorías pedagógicas en los sistemas educativos',
        desarrolloContenidos: true,
        subMenu: [],
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
        download: 'downloads/Introduccion_Educacion_Pedagogia_U2.pdf',
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
  referencias: [
    {
      referencia:
        'Ausubel, D. P. (1968). Educational Psychology: A Cognitive View. Holt, Rinehart and Winston.',
      link: '',
    },
    {
      referencia:
        'Baddeley, A. D., & Hitch, G. (1974). Working Memory. Psychology of Learning and Motivation, 8, 47-89.',
      link: 'doi:10.1016/S0079-7421(08)60452-1',
    },
    {
      referencia: 'Bandura, A. (1977). Social Learning Theory. Prentice Hall.',
      link: '',
    },
    {
      referencia:
        'Black, P., & Wiliam, D. (1998). Assessment and Classroom Learning. Assessment in Education: Principles, Policy & Practice, 5(1), 7-74.',
      link: '',
    },
    {
      referencia:
        'Bonwell, C. C., & Eison, J. A. (1991). Active Learning: Creating Excitement in the Classroom. ASHE-ERIC Higher Education Report.',
      link: '',
    },
    {
      referencia:
        'Bransford, J. D., Brown, A. L., & Cocking, R. R. (Eds.). (2000). How People Learn: Brain, Mind, Experience, and School. National Academy Press.',
      link: '',
    },
    {
      referencia:
        'Bruner, J. S. (1966). Toward a Theory of Instruction. Harvard University Press.',
      link: '',
    },
    {
      referencia:
        'Castillo, J. y Luna, S. (2017). Filosofía y pedagogía en la Grecia clásica: Una introducción a las raíces de la educación occidental. Editorial Académica.',
      link: '',
    },
    {
      referencia:
        'Dede, C. (2006). Online Teacher Professional Development: Emerging Models and Methods. Harvard Education Press.',
      link: '',
    },
    {
      referencia: 'Dewey, J. (1938). Experience and Education. Macmillan.',
      link: '',
    },
    {
      referencia:
        'Domjan, M. (2010). Principles of learning and behavior. Wadsworth Cengage Learning.',
      link: '',
    },
    {
      referencia:
        'Felder, R. M., & Brent, R. (2007). Cooperative Learning. In A. P. S. A. (Ed.), Active Learning: Models from the Analytical Sciences. ACS Publications.',
      link: '',
    },
    {
      referencia:
        'Flavell, J. H. (1979). Metacognition and Cognitive Monitoring: A New Area of Cognitive-Developmental Inquiry. American Psychologist, 34(10), 906–911.',
      link: 'doi:10.1037/0003-066X.34.10.906',
    },
    {
      referencia:
        'Fullan, M. (2007). Leading in a Culture of Change. Jossey-Bass.',
      link: '',
    },
    {
      referencia:
        'Gagné, R. M. (1985). The conditions of learning and theory of instruction. Holt, Rinehart and Winston.',
      link: '',
    },
    {
      referencia:
        'Gagné, R. M., Briggs, L. J., & Wager, W. W. (1993). Principles of Instructional Design. Holt, Rinehart and Winston.',
      link: '',
    },
    {
      referencia:
        'Gay, G. (2010). Culturally Responsive Teaching: Theory, Research, and Practice. Teachers College Press.',
      link: '',
    },
    {
      referencia:
        'Gómez, M. (2021). Bases del conductismo y su aplicación en la educación contemporánea. Ediciones Psicoeducativas.',
      link: '',
    },
    {
      referencia:
        'González, J. (2018). El conductismo en el aula: estrategias para la modificación de conductas. Ediciones Educativas.',
      link: '',
    },
    {
      referencia:
        'Guevara, L. M. (2013). Reflexiones sobre las teorías de aprendizaje. REDHECS: Revista electrónica de Humanidades, Educación y Comunicación Social, 8(14), 6-15.',
      link: '',
    },
    {
      referencia:
        'Hattie, J. (2009). Visible Learning: A Synthesis of Over 800 Meta-Analyses Relating to Achievement. Routledge.',
      link: '',
    },
    {
      referencia:
        'Jiménez, R. (2019). Del humanismo a la modernidad: Transformaciones en la educación y sus teorías. Ediciones Pedagógicas.',
      link: '',
    },
    {
      referencia:
        'Johnson, D. W., & Johnson, R. T. (1989). Cooperation and Competition: Theory and Research. Interaction Book Company.',
      link: '',
    },
    {
      referencia:
        'Martínez, J. A. (2019). Teorías pedagógicas: Fundamentos y aplicaciones en la educación moderna. Editorial Universitaria.',
      link: '',
    },
    {
      referencia:
        'Martínez, P. (2020). Teorías pedagógicas: Historia, principios y aplicaciones en el aula moderna. Editorial Universitaria.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Educación de Canadá. (2017). Education in Canada: An Overview.',
      link: 'http://www.educationcanada.com',
    },
    {
      referencia:
        'Pavlov, I. P. (1927). Conditioned reflexes: An investigation of the physiological activity of the cerebral cortex. Oxford University Press.',
      link: '',
    },
    {
      referencia:
        'Piaget, J. (1952). The Origins of Intelligence in Children. International Universities Press.',
      link: '',
    },
    {
      referencia:
        'Popham, W. J. (2005). Classroom Assessment: What Teachers Need to Know. Pearson.',
      link: '',
    },
    {
      referencia:
        'Posner, M. I., & Petersen, S. E. (1990). The Attention System of the Human Brain. Annual Review of Neuroscience, 13(1), 25-42.',
      link: '',
    },
    {
      referencia:
        'Prince, M. (2004). Does Active Learning Work? A Review of the Research. Journal of Engineering Education, 93(3), 223-231.',
      link: '',
    },
    {
      referencia:
        'Ruiz, P. y Martínez, L. (2018). Teorías de aprendizaje y sus aplicaciones: una introducción al conductismo clásico y operante. Editorial Académica.',
      link: '',
    },
    {
      referencia:
        'Schön, D. A. (1983). The Reflective Practitioner: How Professionals Think in Action. Basic Books.',
      link: '',
    },
    {
      referencia:
        'Skinner, B. F. (1953). Science and human behavior. Macmillan.',
      link: '',
    },
    {
      referencia:
        'Skinner, B. F. (1954). The Science of Learning and the Art of Teaching. Harvard Educational Review, 24(2), 86-97.',
      link: '',
    },
    {
      referencia:
        'Slavin, R. E. (2006). Educational Psychology: Theory and Practice. Pearson Education.',
      link: '',
    },
    {
      referencia:
        'Takahashi, A. (2017). Innovations in Education: Lessons from Japan. Journal of Educational Innovation, 5(2), 45-56.',
      link: '',
    },
    {
      referencia:
        'Tan, C., & Shimizu, K. (2015). Education in Singapore: A Global Perspective. Routledge.',
      link: '',
    },
    {
      referencia:
        'Thorndike, E. L. (1911). Animal intelligence: An experimental study of the associative processes in animals. The Psychological Review, 18(3), 243-276.',
      link: '',
    },
    {
      referencia:
        'UNESCO. (2017). A Guide for Ensuring Inclusion and Equity in Education.',
      link: 'https://unesdoc.unesco.org/ark:/48223/pf0000248254',
    },
    {
      referencia:
        'Vygotsky, L. S. (1978). Mind in Society: The Development of Higher Psychological Processes. Harvard University Press.',
      link: '',
    },
    {
      referencia:
        'Wiggins, G. (1990). The Meaning of Student Assessment. Educational Leadership, 48(6), 24-29.',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Adaptación curricular',
      significado:
        'Modificación de los contenidos y métodos de enseñanza para satisfacer las necesidades específicas de los estudiantes',
    },
    {
      termino: 'Aprendizaje colaborativo',
      significado:
        'Enfoque en el que los estudiantes trabajan juntos para alcanzar objetivos comunes, fomentando la interacción y el apoyo mutuo',
    },
    {
      termino: 'Aprendizaje significativo',
      significado:
        'Proceso en el que los estudiantes conectan nuevas informaciones con conocimientos previos, facilitando una comprensión más profunda',
    },
    {
      termino: 'Cognitivismo',
      significado:
        'Teoría que estudia cómo los procesos mentales (como la memoria y el pensamiento) influyen en el aprendizaje',
    },
    {
      termino: 'Conductismo',
      significado:
        'Teoría del aprendizaje que se centra en la observación del comportamiento y el uso de refuerzos y castigos para moldear la conducta',
    },
    {
      termino: 'Constructivismo',
      significado:
        'Enfoque pedagógico que sostiene que los estudiantes construyen su propio conocimiento a través de experiencias y reflexiones',
    },
    {
      termino: 'Corriente pedagógica',
      significado:
        'Conjunto de teorías y enfoques que guían la práctica educativa y la manera en que se enseña y se aprende',
    },
    {
      termino: 'Docente',
      significado:
        'Profesional encargado de la enseñanza y la educación de los estudiantes, desempeñando un papel crucial en el proceso educativo',
    },
    {
      termino: 'Evaluación',
      significado:
        'Proceso de recopilación y análisis de información sobre el aprendizaje de los estudiantes para tomar decisiones educativas',
    },
    {
      termino: 'Impacto',
      significado:
        'Efecto o influencia de una acción o teoría en un contexto determinado, en este caso, en los sistemas educativos',
    },
    {
      termino: 'Inclusión',
      significado:
        'Práctica educativa que busca integrar a todos los estudiantes, independientemente de sus capacidades o antecedentes, en el mismo entorno de aprendizaje',
    },
    {
      termino: 'Interacción',
      significado:
        'Proceso de comunicación y colaboración entre docentes y estudiantes que influye en el aprendizaje',
    },
    {
      termino: 'Metodología',
      significado:
        'Conjunto de métodos y técnicas utilizadas en la enseñanza para facilitar el aprendizaje',
    },
    {
      termino: 'Sistema educativo',
      significado:
        'Estructura organizada de instituciones, políticas y prácticas que facilitan la educación en una sociedad',
    },
    {
      termino: 'Teoría',
      significado:
        'Conjunto de principios y conceptos que explican fenómenos o procesos, en este caso, relacionados con la educación',
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
