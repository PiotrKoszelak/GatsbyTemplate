import React from 'react';
import renderer from 'react-test-renderer';
import {
  ThemeProvider
} from 'styled-components';
import {
  render, screen
} from '@testing-library/react';
import theme from '../../utils/theme';
import Button from './Button';

const ButtonWrapper = ({
  // eslint-disable-next-line react/prop-types
  children
}) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

describe('Button defaul behavior', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <ButtonWrapper>
          <Button text='Default text' />
        </ButtonWrapper>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('displays the correct default title', () => {
    render(
      <ButtonWrapper>
        <Button />
      </ButtonWrapper>
    );
    expect(screen.getByText('no text')).toBeInTheDocument();
  });
});
