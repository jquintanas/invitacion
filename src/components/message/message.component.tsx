import { Fragment } from 'react';
import styles from "./style.module.css";


const MessageSegment = () => {
  //#region props

  //#endregion

  //#region hooks

  //#endregion

  //#region callBacks

  //#endregion

  //#region component
  return (
    <Fragment>
      <div className={styles["invitation-container"]}>
        <div className={styles["overlay"]}>
          <div className={styles["invitation-content"]}>
            <p className={[styles["small-text"], "pacifico-regular"].join(" ")}>
              Para armonizar con el ambiente, les pedimos que usen tonos pastel en sus atuendos.
            </p>
            <h1 className={[styles["large-text"], "pacifico-regular"].join(" ")}>
              Queremos que estén cómodos y a la vez elegantes para disfrutar de la playa con estilo. ¡Gracias por ayudarnos a hacer de este evento algo especial!
            </h1>
          </div>
        </div>
      </div>
    </Fragment>
  );
  //#endegion
};
export default MessageSegment;