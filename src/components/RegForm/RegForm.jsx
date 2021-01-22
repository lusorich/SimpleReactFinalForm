import React from 'react';
import { Form, Field } from 'react-final-form';
import formatString from 'format-string-by-pattern';
import {
  validName,
  requiredField,
  validPhonePattern,
  validEmail,
  validPhoneLength,
} from '../../validators/validators';
import CustomSelect from '../CusotomSelect';

const RegForm = () => {
  const onSubmit = (values) => {
    console.log('Submit success');
  };
  const composeValidators = (...validators) => (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );

  const languageList = [
    { id: 1, name: 'Русский' },
    { id: 2, name: 'Английский' },
    { id: 3, name: 'Китайский' },
    { id: 4, name: 'Испанский' },
  ];
  return (
    <>
      <div className="wrapper">
        <div className="form-header">
          <h1 className="form-header__title">Регистрация</h1>
          <p className="form-header__desc">
            Уже есть аккаунт?
            <a className="form-header__login" href="#">
              Войти
            </a>
          </p>
        </div>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, values, errors }) => (
            <form className="form" onSubmit={handleSubmit}>
              <div className="form__field-wrapper">
                <Field
                  name="fullName"
                  validate={composeValidators(requiredField, validName)}
                  type="text"
                >
                  {({ input, meta }) => (
                    <>
                      <label htmlFor="fullName">
                        <div className="form__field-title">
                          <span className="form__field-title">Имя</span>
                        </div>
                        <input
                          id="fullName"
                          className="form__field"
                          {...input}
                          placeholder="Введите Ваше имя"
                        ></input>
                      </label>
                      {meta.touched && meta.error && (
                        <span className="form__field-error">{meta.error}</span>
                      )}
                    </>
                  )}
                </Field>
              </div>
              <div className="form__field-wrapper">
                <Field
                  name="email"
                  validate={composeValidators(requiredField, validEmail)}
                  type="email"
                >
                  {({ input, meta }) => (
                    <>
                      <label htmlFor="email">
                        <div className="form__field-title">
                          <span className="form__field-title">Email</span>
                        </div>
                        <input
                          id="email"
                          className="form__field"
                          {...input}
                          placeholder="Введите ваш email"
                        ></input>
                      </label>
                      {meta.touched && meta.error && (
                        <span className="form__field-error">{meta.error}</span>
                      )}
                    </>
                  )}
                </Field>
              </div>
              <div className="form__field-wrapper">
                <Field
                  name="phone"
                  parse={formatString('+7 (999) 99 99 999')}
                  validate={composeValidators(
                    requiredField,
                    validPhoneLength,
                    validPhonePattern
                  )}
                  type="tel"
                >
                  {({ input, meta }) => (
                    <>
                      <label htmlFor="phone">
                        <div className="form__field-title">
                          <span className="form__field-title">
                            Номер телефона
                          </span>
                        </div>
                        <input
                          id="phone"
                          className="form__field"
                          {...input}
                          placeholder="Введите номер телефона"
                        ></input>
                      </label>
                      {meta.touched && meta.error && (
                        <span className="form__field-error">{meta.error}</span>
                      )}
                    </>
                  )}
                </Field>
              </div>
              <div className="form__field-wrapper">
                <Field name="language">
                  {() => (
                    <>
                      <div className="form__field-title">
                        <span className="form__field-title">Язык</span>
                      </div>
                      <CustomSelect optionsList={languageList} />
                    </>
                  )}
                </Field>
              </div>
              <div className="form__field-wrapper form__field-wrapper--last">
                <Field name="agree" type="checkbox">
                  {({ input }) => (
                    <>
                      <input
                        className="visually-hidden form__checkbox"
                        {...input}
                        placeholder="Язык"
                        id="agree"
                      ></input>
                      <label className="form__label" htmlFor="agree">
                        Принимаю <a href="#">условия</a> использования
                      </label>
                    </>
                  )}
                </Field>
              </div>
              <div className="form__button-wrapper">
                <button
                  className="form__button"
                  type="submit"
                  disabled={JSON.stringify(errors).length > 2}
                >
                  Зарегистрироваться
                </button>
              </div>
            </form>
          )}
        />
      </div>
    </>
  );
};

export default RegForm;
