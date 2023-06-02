export const nameValidate = {
  required: {
    value: true,
    message: 'Please enter your Firstname',
  },
  minLength: {
    value: 4,
    message: 'First name must be at least 4 character long',
  },
}
export const cardValidate = {
  required: {
    value: true,
    message: 'Please enter your card Number',
  },
  minLength: {
    value: 16,
    message: 'card number must be at least 16 digit number',
  },
  maxLength: {
    value: 16,
    message: 'card number should be of 16 digit number',
  },
}
export const yearValidate = {
  required: {
    value: true,
    message: 'Please enter expiry year',
  },
}
export const cvvValidate = {
  required: {
    value: true,
    message: 'Please enter cvv',
  },
}
