const courses = [
  {
    id: 1,
    name: "Física I",
    status: "Pendiente",
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
  },
  {
    id: 2,
    name: "Física II",
    status: "Publicado",
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
  },
  {
    id: 3,
    name: "Álgebra",
    status: "Publicado",
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
  },
  {
    id: 4,
    name: "Análisis Matemático I",
    status: "Archivado",
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
  },
];

module.exports = {
  courses,
};
