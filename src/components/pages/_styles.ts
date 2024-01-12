import styled from "styled-components";

const NavWrapper = styled.div`
  margin-left: 10px;
  font-size: 20px;

  //& >div> a {
  //погружение NavWrapper>div>a, если такая структура
  & > a {
    text-decoration: none;
    color: #1e3786;
  }

  & > a.active {
    text-decoration: underline;
    color: #03eaff;
  }

  & > a:hover {
    color: steelblue; /* Цвет ссылки */
  }
`
const NavWrapper2 = styled.div`
  margin-left: 10px;
  font-size: 20px;

  & > a {
    text-decoration: none;
    color: #1e3786;
  }

  & > a.active {
    text-decoration: underline;
    color: #03eaff;
  }

  & > a:hover {
    color: steelblue; /* Цвет ссылки */
  }
`
export  const S={
    NavWrapper,
    NavWrapper2
}