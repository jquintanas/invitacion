import { Col, Row } from 'antd';
import ical, { ICalCalendarMethod } from 'ical-generator';
import { Fragment, useCallback } from 'react';
import style from "./style.module.css";


const FechaComponent = () => {
  //#region props

  //#endregion

  //#region hooks

  //#endregion

  //#region callBacks
  const createICSFile = useCallback(
    () => {
      const calendar = ical({ name: 'Boda de Melany y Jonathan' });
      calendar.method(ICalCalendarMethod.REQUEST);
      const startTime = new Date(2024, 10, 23, 17, 0, 0, 0);
      const endTime = new Date(2024, 10, 24, 12, 0, 0, 0);
      calendar.createEvent({
        start: startTime,
        end: endTime,
        summary: 'Ceremonia de celebración de la boda de Melany Leon y Jonathan Quintana',
        description: 'Acompáñanos a celebrar este gran momento para nosotros, en este nuevo paso para nosotros.',
        location: 'La fogata bungalows, Puerto Lopez',
        url: "https://maps.app.goo.gl/ccgER1nhh9VTEi2x5"
      });
      const blob = new Blob([calendar.toString()], { type: 'text/calendar;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      // Crea un enlace de descarga
      const link = document.createElement('a');
      link.href = url;
      link.download = 'evento.ics';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, []
  )
  //#endregion

  //#region component
  return (
    <Fragment>
      <Row className={style.center}>
        <Col span={5}>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 14 }}>
          <Row>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }}>
              <h1 className={["pacifico-regular", style["date-title"]].join(" ")}>Fecha</h1>
              <p onClick={createICSFile} className={["lato-light", style["date-info"]].join(" ")}>Noviembre 23, Sábado</p>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }}>
              <h1 className={["pacifico-regular", style["date-title"]].join(" ")}>Hora</h1>
              <p className={["lato-light", style["date-info"]].join(" ")}>Recepción 2PM</p>
              <p className={["lato-light", style["date-info"]].join(" ")}>Ceremonia 5PM</p>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }}>
              <h1 className={["pacifico-regular", style["date-title"]].join(" ")}>Ubicación</h1>
              <p className={["lato-light", style["date-info"]].join(" ")}>
                <a className={style["link"]} target='_blank' href='https://maps.app.goo.gl/ccgER1nhh9VTEi2x5' rel="noreferrer">
                  La Fogata Bungalows, Puerto López
                </a>
              </p>
            </Col>
          </Row>
        </Col>
        <Col span={5}>
        </Col>
      </Row >
    </Fragment >
  );
  //#endegion
};
export default FechaComponent;