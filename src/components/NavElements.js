import styled from 'styled-components';

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  
  @media screen and (max-width: 768px) {
    /* margin-right: 20px; */
    display: none;
  }
  `

export const NavBtnLink = styled.span`
  border-radius: 12px;
  background: #946aef;
  padding:9px 22px;
  font-size: 0.8rem;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 15px;
  
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #f2af1a;
    color: #fff;
  }
`


