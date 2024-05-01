const EMPTY_FIELD = "EMPTY_FIELD";
const DIFFERENT_PASSWORD = "DIFFERENT_PASSWORD";
const EMAIL = "email";
const PASSWORD = "password";
const DUPLICATED_PASS = "duplicatedPass";
const DNI = "dni";
const REGISTRATION_NUMBER = "registrationNumber";
const NAME = "name";
const LAST_NAME = "lastName";
const BIRTHDATE = "birthdate";
const PROVINCE_SELECTED = "provinceSelected";
const CITY = "city";
const DOMICILE = "domicile";
const UNIVERSITY = "university";
const DESCRIPTION = "description";

// Course status
const ARCHIVADO = "Archivado";
const PENDIENTE = "Pendiente";
const PUBLICADO = "Publicado";

// error messages
const INVALID_EMAIL_FORMAT =
  "El formato del email debe ser de la forma test@test.com";
const INVALID_PASSWORD_FORMAT =
  "La contraseña debe contener al menos 8 caracteres";
const INVALID_NAME = "El nuevo nombre debe ser diferente al actual";
const ERROR_TERMS_AND_CONDITIONS =
  "*Debes aceptar los términos y condiciones para continuar.";
const NOT_SAME_PASS = "Ambas contraseñas deben coincidir.";
const ERROR_EMPTY_FIELDS = "El campo no puede quedar vacío";
const INVALID_DNI_FORMAT = "El DNI debe contener al menos 7 caracteres";
const INVALID_REGISTRATION_NUMBER_FORMAT =
  "El número de matrícula debe contener al menos 5 caracteres";
const NOT_CORRECT_OPTION_SELECTED =
  "Cuidado! Al menos una opción debe ser correcta";
const NOT_QUESTION_SELECTED =
  "Cuidado! El exámen debe contener al menos una pregunta.";

// status
const ARCHIVED_COURSE_STATUS = "Archivado";
const PUBLISHED_COURSE_STATUS = "Publicado";

const grades = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 10,
    label: "10",
  },
  {
    value: 20,
    label: "20",
  },
  {
    value: 30,
    label: "30",
  },
  {
    value: 40,
    label: "40",
  },
  {
    value: 50,
    label: "50",
  },
  {
    value: 60,
    label: "60",
  },
  {
    value: 70,
    label: "70",
  },
  {
    value: 80,
    label: "80",
  },
  {
    value: 90,
    label: "90",
  },
  {
    value: 100,
    label: "100",
  },
];

module.exports = {
  EMPTY_FIELD,
  DIFFERENT_PASSWORD,
  EMAIL,
  PASSWORD,
  DUPLICATED_PASS,
  DNI,
  REGISTRATION_NUMBER,
  NAME,
  LAST_NAME,
  BIRTHDATE,
  PROVINCE_SELECTED,
  CITY,
  DOMICILE,
  UNIVERSITY,
  DESCRIPTION,
  ARCHIVADO,
  PENDIENTE,
  PUBLICADO,
  INVALID_NAME,
  INVALID_EMAIL_FORMAT,
  INVALID_PASSWORD_FORMAT,
  ERROR_TERMS_AND_CONDITIONS,
  NOT_SAME_PASS,
  ERROR_EMPTY_FIELDS,
  INVALID_DNI_FORMAT,
  INVALID_REGISTRATION_NUMBER_FORMAT,
  NOT_CORRECT_OPTION_SELECTED,
  ARCHIVED_COURSE_STATUS,
  PUBLISHED_COURSE_STATUS,
  grades,
  NOT_QUESTION_SELECTED,
};
