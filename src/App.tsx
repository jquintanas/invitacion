import { Col, Row } from "antd";
import './App.css';
import MessageSegment from "./components/message/message.component";
// @ts-ignore
import FlipCountdown from '@rumess/react-flip-countdown';
import CardPrincipalDerecha from "./components/cardDerecha/cardPrincipalDerecho.component";
import CardPrincipal from "./components/cardPrincipal.component";


function App() {
  return (
    <Row>
      <Col span={24} className="container-principal">
        <Row className="row-container-principal">
          <Col span={8} className="card-left">
            <CardPrincipal />
          </Col>
          <Col span={8} className="text-principal">
            <p className="frase lato-regular">Te invitamos a celebrar este gran momento para nosotros</p>
            <p className="title pacifico-regular">Jonathan & Melany</p>
          </Col>
          <Col span={8} className="card-right">
            <CardPrincipalDerecha />
          </Col>
        </Row>
      </Col>
      <Col span={24} className="container-fecha">
        <Row>
          <Col span={5}>
          </Col>
          <Col span={14}>
            <Row>
              <Col span={8}>
                <h1 className="pacifico-regular date-title">Fecha</h1>
                <p className="date-info lato-regular">Noviembre 23, Sábado</p>
              </Col>
              <Col span={8}>
                <h1 className="pacifico-regular date-title">Hora</h1>
                <p className="date-info lato-regular">Recepción 2PM</p>
                <p className="date-info lato-regular">Ceremonia 5PM</p>
              </Col>
              <Col span={8}>
                <h1 className="pacifico-regular date-title">Ubicación</h1>
                <p className="date-info lato-regular">La Fogata Bungalows, Puerto López</p>
              </Col>
            </Row>
          </Col>
          <Col span={5}>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Row>
          <Col span={6}>
            <div></div>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Cumque quisquam nulla impedit est.</p>
          </Col>
          <Col span={6}>
            <div></div>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Cumque quisquam nulla impedit est.</p>
          </Col>
          <Col span={6}>
            <div></div>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Cumque quisquam nulla impedit est.</p>
          </Col>
          <Col span={6}>
            <div></div>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Cumque quisquam nulla impedit est.</p>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <FlipCountdown
          theme='dark'
          size='large'
          endAt={new Date(
            Date.now() +
            1000 /* sec */ *
            60 /* min */ *
            60 /* hour */ *
            24 /* day */ *
            30 /* month */ *
            12 /* year */ *
            2
          ).toUTCString()}
        />
      </Col>
      <Col span={24}>
        <MessageSegment />
      </Col>
      <Col span={24}></Col>
    </Row>
  );
}

export default App;
