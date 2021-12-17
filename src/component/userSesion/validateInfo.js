export default function validateInfo(values) {
    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = 'Falta crear usuario';
    }
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Este e-mail no es válido';
    }
    if (!values.password) {
      errors.password = 'Falta crear contraseña';
    } else if (values.password.length < 6) {
      errors.password = 'La contraseña debe tener más de 6 caracteres';
    }
    if (!values.dateofbirth.trim()) {
        errors.dateofbirth = 'Falta la fecha de nacimiento';
      }
    return errors;
  }