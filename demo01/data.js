module.exports = function () {
  var data = {
    Especialidad: [
      {
        id:1,
        tipoEspecialidad: "Psicología Clínica",
        centroEspecialidad: "UNMSM",
        descripcionEspecialidad:"se centra en el diagnóstico y tratamiento de problemas psicológicos y emocionales",
      },
      {
        id:2,
        tipoEspecialidad: "Psicología Social",
        centroEspecialidad: "PUCP",
        descripcionEspecialidad:"se centra en el estudio de como los individuos interactúan con su entorno social",
      },
      {
        id:3,
        tipoEspecialidad: "Psicología de la Salud",
        centroEspecialidad: "IPCC",
        descripcionEspecialidad:"se centra en el estudio de los factores psicológicos que influyen en la salud y el bienestar",
      },
      {
        id:4,
        tipoEspecialidad: "Psicología Organizacional",
        centroEspecialidad:"UPCH",
        descripcionEspecialidad:"se centra en la aplicación de la psicología a las empresas y organizaciones, incluyendo la selección y capacitación de personal",
      }
    ],
    Psicologo:[
      {
        id: 1,
        nombre: "Juan Pérez",
        correoElectronico: "juan.perez@ejemplo.com",
        Especialidad:
        {
          id:1,
          tipoEspecialidad: "Psicología Clínica",
          centroEspecialidad: "UNMSM",
        }
      },

      {
        id: 2,
        nombre: "María García",
        correoElectronico: "maria.garcia@ejemplo.com",
        Especialidad:
        {
          id:2,
          tipoEspecialidad: "Psicología Social",
          centroEspecialidad: "PUCP",
        }

      },
    ]
  }
  return data
}
