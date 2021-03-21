import React, {
  useEffect, useState
} from 'react';
import {
  connect
} from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../common/Button';
import login, {
  loginReset
} from '../../state/actions/login';
import InputText from '../common/InputText';
import InputPassword from '../common/InputPassword';

const StyledForm = styled.form`
  height: fit-content;
  display: flex;
  border: 2px solid ${({
    theme
  }) => `${theme.colors.green}`};
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
`;

const StyledSpan = styled.div`
  color: ${({
    theme
  }) => `${theme.colors.red}`};
  font-size: 10px;
  margin-top: 10px;
`;

const LoginContent = ({
  dispatch, loginStatus
}) => {
  useEffect(
    () => () => {
      dispatch(loginReset());
    },
    []
  );

  const [values, setValues] = useState({
    password: '',
    showPassword: false,
    username: ''
  });

  const handleChange = (e, prop) => {
    setValues({
      ...values, [prop]: e.target.value
    });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values, showPassword: !values.showPassword
    });
  };

  const handleButtonClick = e => {
    e.preventDefault();
    dispatch(login(values.username, values.password));
  };

  return (
    <StyledForm>
      <InputText
        width='200'
        value={values.username}
        onChange={e => handleChange(e, 'username')}
      />
      <InputPassword
        width='200'
        value={values.password}
        showPassword={values.showPassword}
        onChange={e => handleChange(e, 'password')}
        handleClickShowPassword={handleClickShowPassword}
      />
      <Button text='Login' onClick={e => handleButtonClick(e)} width='100' />
      {loginStatus.error ? <StyledSpan>Login failed</StyledSpan> : null}
    </StyledForm>
  );
};

LoginContent.propTypes = {
  loginStatus: PropTypes.objectOf(PropTypes.any).isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(
  state => ({
    loginStatus: state.loginStatus
  }),
  null
)(LoginContent);
