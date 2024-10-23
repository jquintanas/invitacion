import style from './style.module.css';
const CardPrincipalDerecha = () => {
  //#region component
  return (
    <div className={style.container}>
      <div className={style["large-image-wrapper"]}>
        <img
          src="/cardDerPrincipal.jpg"
          alt="Large"
          className={style["large-image"]}
        />
      </div>
      <div className={style["small-image-wrapper"]}>
        <img
          src="/cardDerPrincipal21.jpg"
          alt="Small"
          className={style["small-image"]}
        />
      </div>
    </div>
  );
  //#endegion
};
export default CardPrincipalDerecha;