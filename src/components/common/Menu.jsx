import React from 'react';
import styled from 'styled-components';
import MenuItem from './MenuItem';
import MenuHeader from './MenuHeader';

const StyledHeader = styled.header`
  height: 50px;
  background-color: ${({
    theme
  }) => `${theme.colors.green}`};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

const StyledDiv = styled.div`
  display: flex;
`;

const Menu = () => (
  <StyledHeader>
    <div>
      <MenuHeader text='Gatsby template' />
    </div>
    <StyledDiv>
      <MenuItem iconName='email' title='contact' />
      <MenuItem iconName='user' title='login' />
    </StyledDiv>
  </StyledHeader>
);

export default Menu;
