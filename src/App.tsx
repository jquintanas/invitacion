import { Col, Row } from "antd";
import './App.css';
import MessageSegment from "./components/message/message.component";
// @ts-ignore
import FlipCountdown from '@rumess/react-flip-countdown';
import { Image, Modal } from 'antd';
import { useCallback, useRef, useState } from "react";
import ReactPlayer from 'react-player';
import CardPrincipalDerecha from "./components/cardDerecha/cardPrincipalDerecho.component";
import CardPrincipal from "./components/cardPrincipal.component";
import FechaComponent from "./components/fecha/fecha.component";
import HorarioComponent from "./components/horario/horario.component";
import baseUrl from "./const";


function App() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCancel = () => {
    setIsModalOpen(false);
  };


  const playMusic = useCallback(() => {
    setIsModalOpen(false);
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, [])

  return (
    <>
      <Modal mask={true} title="" open={isModalOpen} onOk={playMusic} onCancel={handleCancel} okText="SI" cancelText="No" >
        <ReactPlayer width={"100%"} url={`${baseUrl}intro.mp4`} />
        <p>Quieres disfrutar de nuestra música.?</p>
      </Modal>
      <div className="fondoP"></div>
      <Row className="fondo">
        <Col span={24} className="container-principal">
          <Row className="row-container-principal div-p">
            <Col xs={{ span: 24 }} md={{ span: 8 }} className="card-left">
              <CardPrincipal />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 8 }} className="text-principal">
              <p className="frase lato-regular">Te invitamos a celebrar este gran momento para nosotros, nuestro matrimonio civil.</p>
              <p className="title pacifico-regular">Jonathan & Melany</p>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 8 }} className="card-right">
              <CardPrincipalDerecha />
            </Col>
          </Row>
        </Col>
        <Col span={24} className="container-fecha">
          <FechaComponent />
        </Col>
        <Col span={24} className="container-horario">
          <HorarioComponent />
        </Col>
        <Col span={24} className="container-countdown">
          <FlipCountdown
            theme='dark'
            size='medium'
            endAt={new Date(2024, 10, 23, 14, 0, 0, 0).toUTCString()}
            hideYear={true}
            hideMonth={true}
          />
        </Col>
        <Col span={24} className="container-message">
          <MessageSegment />
        </Col>
        <Col span={24} className="container-dress center">
          <Image
            className="img"
            src={`${baseUrl}dresscode.jpg`}
          />
        </Col>
        <Col span={24} style={{ display: "none" }}>
          <audio controls={true} ref={audioRef}>
            <source src={`${baseUrl}destinoocasualidad.mp3`} type="audio/ogg" />
            Your browser does not support the audio element.
          </audio>
        </Col>
      </Row>
    </>
  );
}

export default App;
