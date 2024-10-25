import { useState } from 'react'
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 10px 20px;
  border: none;
  color: white;
  cursor: pointer;
  background-color: ${props => (props.isActive?'green':'red')};
`;

const Button = () => {
    const [isActive,setIsActive] = useState(false);

    const toggleButton = ()=>{
        setIsActive(!isActive);
    }

  return (
    <StyledButton isActive={isActive} onClick={toggleButton}>
        {isActive?'active':'inactive'}
    </StyledButton>
  )
}

export default Button