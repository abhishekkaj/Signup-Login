export default function validateInfo(values) {
    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = 'Username required';
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
  
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.phone) {
      errors.phone = 'Phone Number is required';
    } else if (!/^[0-9\b]+$/.test(values.phone)) {
      errors.phone = 'Phone Number is invalid';
    }
    
    if (!values.password) {
      errors.password = 'Password is required';
    
    }else if (values.password == values.email) {
        errors.password = 'You cannot use your email as your password';
      }else if (values.password == values.phone) {
        errors.password = 'You cannot use your phone number as your password';
      } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/.test(values.password)) {
        errors.password = 'Password must be greater than 8 character and must include at least 1 UpperCase, 1 LowerCase, 1 digit and 1 special character';
      }
    if (!values.password2) {
      errors.password2 = 'Password is required';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Passwords do not match';
    }
    return errors;
  }