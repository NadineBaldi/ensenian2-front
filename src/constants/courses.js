const courses = [
  {
    id: 1,
    name: "Física I",
    status: "Pendiente",
    description: "Curso de Física I para Ingeniería en Sistemas de Información",
    units: [
      {
        id: 11,
        name: "Unidad 1: MRU",
        questions: [
          "Título pregunta 1",
          "Título pregunta 2",
          "Título pregunta 3",
        ],
      },
      {
        id: 12,
        name: "Unidad 2: MRUA",
        questions: [
          "Título pregunta 1",
          "Título pregunta 2",
          "Título pregunta 3",
        ],
      },
      {
        id: 13,
        name: "Unidad 3: Óptica",
        questions: [
          "Título pregunta 1",
          "Título pregunta 2",
          "Título pregunta 3",
          "Título pregunta 4",
          "Título pregunta 5",
        ],
      },
      {
        id: 14,
        name: "Unidad 4: Leyes de Newton",
        questions: ["Título pregunta 1", "Título pregunta 2"],
      },
    ],
    students: [
      {
        id: "s1",
        name: "Juan Perez",
        email: "juanperez@gmail.com",
        registrationNumber: "12345",
      },
      {
        id: "s2",
        name: "Lucia Ibañez",
        email: "luibañez12@gmail.com",
        registrationNumber: "12346",
      },
      {
        id: "s3",
        name: "Juan Ignacio Vega",
        email: "juanignaciovega@gmail.com",
        registrationNumber: "12348",
      },
      {
        id: "s4",
        name: "Julia Selci",
        email: "julia_selci_1998@hotmail.com",
        registrationNumber: "12883",
      },
      {
        id: "s5",
        name: "Nicolas Monti",
        email: "nicomonti22@gmail.com",
        registrationNumber: "23342",
      },
      {
        id: "s6",
        name: "Nadine Baldi",
        email: "nanubaldi16@gmail.com",
        registrationNumber: "24660",
      },
      {
        id: "s7",
        name: "Ayrton Corgnali",
        email: "acorgnali@hotmail.com",
        registrationNumber: "12349",
      },
      {
        id: "s8",
        name: "Lucas Perez",
        email: "perez_lucas_214@gmail.com",
        registrationNumber: "12322",
      },
      {
        id: "s9",
        name: "Fiorella Triverio",
        email: "ftriverio@gmail.com",
        registrationNumber: "13579",
      },
      {
        id: "s10",
        name: "Lautaro Ariel Nudel",
        email: "lautaronudel@gmail.com",
        registrationNumber: "22342",
      },
      {
        id: "s11",
        name: "Martina Mernes",
        email: "martina_mernes_1999@gmail.com",
        registrationNumber: "21546",
      },
      {
        id: "s12",
        name: "Candela Brey",
        email: "caande_b@hotmail.com",
        registrationNumber: "29938",
      },
    ],
  },
  {
    id: 2,
    name: "Física II",
    status: "Publicado",
    description:
      "Curso de Física II para Ingeniería en Sistemas de Información",
    units: [
      {
        id: 21,
        name: "Unidad 1: Ley de Gauss",
        questions: [
          "Título pregunta 1",
          "Título pregunta 2",
          "Título pregunta 3",
        ],
      },
      {
        id: 22,
        name: "Unidad 2: Campo Eléctrico",
        questions: ["Título pregunta 1", "Título pregunta 2"],
      },
      {
        id: 23,
        name: "Unidad 3: Capacitores",
        questions: [
          "Título pregunta 1",
          "Título pregunta 2",
          "Título pregunta 3",
        ],
      },
    ],
    students: [
      {
        id: "s1",
        name: "Juan Perez",
        email: "juanperez@gmail.com",
        registrationNumber: "12345",
      },
      {
        id: "s2",
        name: "Lucia Ibañez",
        email: "luibañez12@gmail.com",
        registrationNumber: "12346",
      },
      {
        id: "s3",
        name: "Juan Ignacio Vega",
        email: "juanignaciovega@gmail.com",
        registrationNumber: "12348",
      },
      {
        id: "s4",
        name: "Julia Selci",
        email: "julia_selci_1998@hotmail.com",
        registrationNumber: "12883",
      },
      {
        id: "s5",
        name: "Nicolas Monti",
        email: "nicomonti22@gmail.com",
        registrationNumber: "23342",
      },
      {
        id: "s6",
        name: "Nadine Baldi",
        email: "nanubaldi16@gmail.com",
        registrationNumber: "24660",
      },
      {
        id: "s7",
        name: "Ayrton Corgnali",
        email: "acorgnali@hotmail.com",
        registrationNumber: "12349",
      },
      {
        id: "s8",
        name: "Lucas Perez",
        email: "perez_lucas_214@gmail.com",
        registrationNumber: "12322",
      },
      {
        id: "s9",
        name: "Fiorella Triverio",
        email: "ftriverio@gmail.com",
        registrationNumber: "13579",
      },
      {
        id: "s10",
        name: "Lautaro Ariel Nudel",
        email: "lautaronudel@gmail.com",
        registrationNumber: "22342",
      },
      {
        id: "s11",
        name: "Martina Mernes",
        email: "martina_mernes_1999@gmail.com",
        registrationNumber: "21546",
      },
      {
        id: "s12",
        name: "Candela Brey",
        email: "caande_b@hotmail.com",
        registrationNumber: "29938",
      },
    ],
  },
  {
    id: 3,
    name: "Álgebra",
    status: "Publicado",
    description: "Curso de Álgebra para Ingeniería en Sistemas de Información",
    units: [
      {
        id: 31,
        name: "Unidad 1",
        questions: [
          "Título pregunta 1",
          "Título pregunta 2",
          "Título pregunta 3",
        ],
      },
      {
        id: 32,
        name: "Unidad 2",
        questions: [
          "Título pregunta 1",
          "Título pregunta 2",
          "Título pregunta 3",
        ],
      },
      {
        id: 33,
        name: "Unidad 3",
        questions: ["Título pregunta 1", "Título pregunta 2"],
      },
      {
        id: 34,
        name: "Unidad 4",
        questions: [
          "Título pregunta 1",
          "Título pregunta 2",
          "Título pregunta 3",
        ],
      },
      {
        id: 35,
        name: "Unidad 5",
        questions: [
          "Título pregunta 1",
          "Título pregunta 2",
          "Título pregunta 3",
        ],
      },
      {
        id: 36,
        name: "Unidad 6",
        questions: [
          "Título pregunta 1",
          "Título pregunta 2",
          "Título pregunta 3",
        ],
      },
    ],
    students: [
      {
        id: "s1",
        name: "Juan Perez",
        email: "juanperez@gmail.com",
        registrationNumber: "12345",
      },
      {
        id: "s2",
        name: "Lucia Ibañez",
        email: "luibañez12@gmail.com",
        registrationNumber: "12346",
      },
      {
        id: "s3",
        name: "Juan Ignacio Vega",
        email: "juanignaciovega@gmail.com",
        registrationNumber: "12348",
      },
      {
        id: "s4",
        name: "Julia Selci",
        email: "julia_selci_1998@hotmail.com",
        registrationNumber: "12883",
      },
      {
        id: "s5",
        name: "Nicolas Monti",
        email: "nicomonti22@gmail.com",
        registrationNumber: "23342",
      },
      {
        id: "s6",
        name: "Nadine Baldi",
        email: "nanubaldi16@gmail.com",
        registrationNumber: "24660",
      },
      {
        id: "s7",
        name: "Ayrton Corgnali",
        email: "acorgnali@hotmail.com",
        registrationNumber: "12349",
      },
      {
        id: "s8",
        name: "Lucas Perez",
        email: "perez_lucas_214@gmail.com",
        registrationNumber: "12322",
      },
      {
        id: "s9",
        name: "Fiorella Triverio",
        email: "ftriverio@gmail.com",
        registrationNumber: "13579",
      },
      {
        id: "s10",
        name: "Lautaro Ariel Nudel",
        email: "lautaronudel@gmail.com",
        registrationNumber: "22342",
      },
      {
        id: "s11",
        name: "Martina Mernes",
        email: "martina_mernes_1999@gmail.com",
        registrationNumber: "21546",
      },
      {
        id: "s12",
        name: "Candela Brey",
        email: "caande_b@hotmail.com",
        registrationNumber: "29938",
      },
    ],
  },
  {
    id: 4,
    name: "Análisis Matemático I",
    status: "Archivado",
    description:
      "Curso de Análisis Matemático I para Ingeniería en Sistemas de Información",
    units: [
      {
        id: 41,
        name: "Unidad 1",
        questions: [
          "Título pregunta 1",
          "Título pregunta 2",
          "Título pregunta 3",
          "Título pregunta 4",
          "Título pregunta 5",
        ],
      },
      {
        id: 42,
        name: "Unidad 2",
        questions: [
          "Título pregunta 1",
          "Título pregunta 2",
          "Título pregunta 3",
        ],
      },
      {
        id: 43,
        name: "Unidad 3",
        questions: ["Título pregunta 1", "Título pregunta 2"],
      },
    ],
    students: [
      {
        id: "s1",
        name: "Juan Perez",
        email: "juanperez@gmail.com",
        registrationNumber: "12345",
      },
      {
        id: "s2",
        name: "Lucia Ibañez",
        email: "luibañez12@gmail.com",
        registrationNumber: "12346",
      },
      {
        id: "s3",
        name: "Juan Ignacio Vega",
        email: "juanignaciovega@gmail.com",
        registrationNumber: "12348",
      },
      {
        id: "s4",
        name: "Julia Selci",
        email: "julia_selci_1998@hotmail.com",
        registrationNumber: "12883",
      },
      {
        id: "s5",
        name: "Nicolas Monti",
        email: "nicomonti22@gmail.com",
        registrationNumber: "23342",
      },
      {
        id: "s6",
        name: "Nadine Baldi",
        email: "nanubaldi16@gmail.com",
        registrationNumber: "24660",
      },
      {
        id: "s7",
        name: "Ayrton Corgnali",
        email: "acorgnali@hotmail.com",
        registrationNumber: "12349",
      },
      {
        id: "s8",
        name: "Lucas Perez",
        email: "perez_lucas_214@gmail.com",
        registrationNumber: "12322",
      },
      {
        id: "s9",
        name: "Fiorella Triverio",
        email: "ftriverio@gmail.com",
        registrationNumber: "13579",
      },
      {
        id: "s10",
        name: "Lautaro Ariel Nudel",
        email: "lautaronudel@gmail.com",
        registrationNumber: "22342",
      },
      {
        id: "s11",
        name: "Martina Mernes",
        email: "martina_mernes_1999@gmail.com",
        registrationNumber: "21546",
      },
      {
        id: "s12",
        name: "Candela Brey",
        email: "caande_b@hotmail.com",
        registrationNumber: "29938",
      },
    ],
  },
];

module.exports = {
  courses,
};
