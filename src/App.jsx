import styled from 'styled-components';
import Button from './components/Button';

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  color: #3845c0;

`;


const App = ()=> {
    return (
    <Wrapper>    
       <Title>Bienvenid@</Title>
       <Button />
    </Wrapper>
  )

}

export default App
