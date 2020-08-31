import React, { useEffect, useState } from "react";
import styled from "styled-components"
import Tip from "../single/tip"
import Author from "../single/author"
import { connect } from 'react-redux';
import MenuListMobile from './menu_list_mobile';
import { bgIn } from '../single/KeyFrames';

const Root = styled.header`
    position: absolute;
    justify-content: space-between;
    align-items: center;
    width: ${({isAuthor}) => isAuthor ? '150px' : '100px' };
    left: ${({isAuthor}) => isAuthor ? 'calc(100vw - 170px)' : 'calc(100vw - 120px)' };
    right: 20px;
    top: 10px;
    display: flex;
    animation: 1.5s ${bgIn} 1.5s ease-in forwards;
    z-index: 5;
`

const Container = ({firebase}) => {

    const [show, setShow] = useState(false);

    useEffect(() => {

        setTimeout(function(){ 
          setShow(true);
        }, 1500);
      
      }, []);

      const rend = () => {
        if (show){
          return (
            firebase.auth &&
                <>
                    <MenuListMobile />
                    <Author />
                    <Tip /> 
                </> 
          )
        }
        else{
          return (
            null
          )
        }
      }


  return (
    <>
      <Root isAuthor={firebase.auth.uid ? true : false}>
           {rend()}
      </Root>
    </>
  
  )
}

export default connect(state => ({
    firebase : state.firebase,
  }), null)(Container)
