import React from 'react';
import Menu from '../components/commonElements/Menu';
import MenuItem from '../components/commonElements/MenuItem';
import InfoContent from '../components/index/InfoContent';

const Index = () => (
  <>
    <Menu>
      <MenuItem iconName="email" title="contact" />
      <MenuItem iconName="user" title="log in" />
    </Menu>
    <InfoContent />
  </>
);

export default Index;
