import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 80%;
  height: 400px;
`;

const ImageLarge = styled.img`
  position: absolute;
  width: 250px;
  height: 300px;
  left: 70px;
  top: 70px;
  z-index: 1;
  border-radius: 10px;
`;

const ImageSmallTop = styled.img`
  position: absolute;
  width: 100px;
  height: 125px;
  left: 0px;
  top: 150px;
  z-index: 2;
  border-radius: 10px;
`;

const ImageSmallBottom = styled.img`
  position: absolute;
  width: 150px;
  height: 125px;
  left: 130px;
  top: 310px;
  z-index: 2;
  border-radius: 10px;
`;

const CardPrincipal = () => {
  //#region component
  return (
    <Container>
      <ImageSmallTop src="/cardIzqPrincipal2.jpg" alt="Small Image Top" />
      <ImageLarge src="/cardDerPrincipal22.jpg" alt="Large Center Image" />
      <ImageSmallBottom src="/cardIzqPrincipal3.jpg" alt="Small Image Bottom" />
    </Container>
  );
  //#endegion
};
export default CardPrincipal;