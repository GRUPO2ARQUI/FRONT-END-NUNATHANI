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
    disponibilidad: [
      {
        id: 1,
        inicio_turno: "08:00",
        fin_turno: "14:00",
        dias_laborales: ["Lunes", "Miércoles", "Viernes"]
      },
      {
        id: 2,
        inicio_turno: "12:00",
        fin_turno: "18:00",
        dias_laborales: ["Miércoles", "Viernes"]
      },
      {
        id: 3,
        inicio_turno: "10:00",
        fin_turno: "16:00",
        dias_laborales: ["Lunes", "Viernes"]
      },
      {
        id: 4,
        inicio_turno: "14:00",
        fin_turno: "20:00",
        dias_laborales: ["Martes", "Jueves"]
      }
    ]
   
  }
  return data
}
