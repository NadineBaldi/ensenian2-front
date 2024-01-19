const EMPTY_FIELD = "EMPTY_FIELD";
const DIFFERENT_PASSWORD = "DIFFERENT_PASSWORD";
const EMAIL = "email";
const PASSWORD = "password";
const DUPLICATED_PASS = "duplicatedPass";
const DNI = "dni";
const FILE_NUMBER = "fileNumber";

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
const INVALID_FILE_NUMBER_FORMAT =
  "El número de legajo debe contener al menos 5 caracteres";

// status
const ARCHIVED_COURSE_STATUS = "Archivado";
const PUBLISHED_COURSE_STATUS = "Publicado";

module.exports = {
  EMPTY_FIELD,
  DIFFERENT_PASSWORD,
  EMAIL,
  PASSWORD,
  DUPLICATED_PASS,
  DNI,
  FILE_NUMBER,
  INVALID_NAME,
  INVALID_EMAIL_FORMAT,
  INVALID_PASSWORD_FORMAT,
  ERROR_TERMS_AND_CONDITIONS,
  NOT_SAME_PASS,
  ERROR_EMPTY_FIELDS,
  INVALID_DNI_FORMAT,
  INVALID_FILE_NUMBER_FORMAT,
  ARCHIVED_COURSE_STATUS,
  PUBLISHED_COURSE_STATUS,
};
