import React from 'react';
import PropTypes from 'prop-types';
import {
  InputFieldWrapper,
  Input,
  FloatingLabel,
} from './styles';

const InputField = ({
  placeholder,
  pattern,
  minLength,
  maxLength,
  ...props
}) => (
  <InputFieldWrapper>
    <Input
      type="text"
      pattern={pattern}
      minLength={minLength}
      maxLength={maxLength}
      required
      {...props}
    />
    <FloatingLabel>{ placeholder }</FloatingLabel>
  </InputFieldWrapper>
);

InputField.propTypes = {
  placeholder: PropTypes.string,
  pattern: PropTypes.string,
  minLength: PropTypes.string,
  maxLength: PropTypes.string,
};

InputField.defaultProps = {
  placeholder: 'Input',
  pattern: '.*',
  minLength: '1',
  maxLength: '20',
};

export default InputField;
