import styled from "styled-components"
import { Input } from "../input-form/input-form.styles"
export const BackgroundImage=styled.div`
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
   
`
export const ItemBody=styled.div`

height: 120px;
padding: 0 25px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 1px solid black;
background-color: white;
opacity: 0.7;
position: absolute;
${Input}{
  font-size: 14px;
  padding: 0;
  width:60%;
  margin:0 auto;
  
}
h2 {
  font-weight: bold;
  margin: 0 6px 0;
  font-size: 22px;
  color: #4a4a4a;
  &:hover{
    color:grey

  }
}


p {
  font-weight: lighter;
  font-size: 16px;
  &:hover{
    color:grey

  }
}
}

`

export const ItemContainer=styled.div`
min-width:30% ;
height:42vh;
flex: 1 1 auto;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid black;
margin: 0 7.5px 15px;
overflow: hidden;
position:relative;


&:hover {
  cursor: pointer;

  ${BackgroundImage} {
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }

  ${ItemBody}{
    opacity: 0.9;
  }
}

&.large {
  height: 380px;
}

&:first-child {
  margin-right: 7.5px;
}

&:last-child {
  margin-left: 7.5px;
}
`

