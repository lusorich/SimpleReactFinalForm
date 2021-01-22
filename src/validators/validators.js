export const requiredField = (value) => {
  if (value) return undefined;
  return 'Поле обязательно к заполнению';
};

export const validPhonePattern = (value) => {
  if (/[+]{1}[0-9]\s\([0-9]{3}\)\s[0-9]{2}\s[0-9]{2}\s[0-9]{3}/.test(value))
    return undefined;
  return 'Номер телефона может состоять только из цифр';
};

export const validEmail = (value) => {
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)/.test(
      value
    )
  )
    return undefined;
  return 'Введите корректный email';
};

export const validPhoneLength = (value) => {
  if (value.length === 18) return undefined;
  return 'Введите 11 цифр';
};

export const validName = (value) => {
  if (/^(?![ .]+$)[a-zA-Zа-яА-Я .]*$/.test(value)) return undefined;
  return 'Некорректное имя';
};
