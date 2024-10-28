import { Col, Row } from 'antd';
import { Fragment } from 'react';
import baseUrl from './../../const';
import style from './style.module.css';

const HorarioComponent = () => {
  //#region props

  //#endregion

  //#region hooks

  //#endregion

  //#region callBacks

  //#endregion

  //#region component
  return (
    <Fragment>
      <Row className={[style.center, style.full, style.container].join(" ")}>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 6 }} className={[style.center, style.full, style.direction].join(" ")}>
          <img src={`${baseUrl}check-in.png`} alt="checkIn" className={style.icon} />
          <p className={["pacifico-regular", style.hour].join(" ")}>14:00</p>
          <p className={[style["event"], "lato-regular"].join(" ")}>Check-in</p>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 6 }} className={[style.center, style.full, style.direction].join(" ")}>
          <img src={`${baseUrl}wedding.png`} alt="checkIn" className={style.icon} />
          <p className={["pacifico-regular", style.hour].join(" ")}>17:00</p>
          <p className={[style["event"], "lato-regular"].join(" ")}>Ceremonia</p>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 6 }} className={[style.center, style.full, style.direction].join(" ")}>
          <img src={`${baseUrl}dinner.png`} alt="checkIn" className={style.icon} />
          <p className={["pacifico-regular", style.hour].join(" ")}>19:00</p>
          <p className={[style["event"], "lato-regular"].join(" ")}>Cena</p>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 6 }} className={[style.center, style.full, style.direction].join(" ")}>
          <img src={`${baseUrl}dance.png`} alt="checkIn" className={style.icon} />
          <p className={["pacifico-regular", style.hour].join(" ")}>20:00</p>
          <p className={[style["event"], "lato-regular"].join(" ")}>Fiesta</p>
        </Col>
      </Row>
    </Fragment>
  );
  //#endegion
};
export default HorarioComponent;