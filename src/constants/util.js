const EMPTY_FIELD = "EMPTY_FIELD";
const DIFFERENT_PASSWORD = "DIFFERENT_PASSWORD";
const EMAIL = "email";
const PASSWORD = "password";
const NEW_PASSWORD = "newPassword";
const NEW_PASSWORD_DUPLICATED = "newPasswordDuplicated";
const DUPLICATED_PASS = "duplicatedPass";
const DNI = "dni";
const REGISTRATION_NUMBER = "enrollmentNumber";
const NAME = "name";
const LAST_NAME = "lastName";
const BIRTHDATE = "dateOfBirth";
const PROVINCE_SELECTED = "provinceSelected";
const CITY = "city";
const DOMICILE = "address";
const UNIVERSITY = "university";
const DESCRIPTION = "description";
const UNIVERSITY_PROVINCE = "universityProvince";
const PHONE = "phone";
const UNIVERSITY_CITY = "universityCity";
const TOKEN = "token";
const USER_ID = "userId";

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
const PASSWORDS_NOT_THE_SAME = "Las nuevas contraseñas deben coincidir";
const REGISTRATION_NUMBER_LENGTH =
  "El número de legajo debe contener hasta 5 dígitos.";
const LOGIN_ERROR =
  "Usuario y/o contraseña incorrectos. Por favor, inténtalo de nuevo.";

// Success Messages
const SUBJECT_ADDED_CORRECTLY = "Listo! La materia fue creada con éxito."

// status
const ARCHIVED_COURSE_STATUS = "ARCHIVED";
const PUBLISHED_COURSE_STATUS = "PUBLISHED";

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
  NEW_PASSWORD,
  NEW_PASSWORD_DUPLICATED,
  PASSWORDS_NOT_THE_SAME,
  DUPLICATED_PASS,
  DNI,
  REGISTRATION_NUMBER,
  NAME,
  LAST_NAME,
  BIRTHDATE,
  PROVINCE_SELECTED,
  CITY,
  PHONE,
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
  UNIVERSITY_PROVINCE,
  UNIVERSITY_CITY,
  REGISTRATION_NUMBER_LENGTH,
  LOGIN_ERROR,
  TOKEN,
  USER_ID,
  SUBJECT_ADDED_CORRECTLY
};
