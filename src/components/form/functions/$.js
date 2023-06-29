/* Obtiene el ide de un elemento */
const $ = (getId) => {
  return document.getElementById(getId);
};
export default $;

const $toggle = (id, css) => {
  return $(id).classList.toggle(css);
};

/* devolvera la funcion de document.getElementById().classList */
const $classList = (getId) => {
  return $(getId).classList;
};

const $focus = (id) => {
  return $(id).focus();
};

const $style = (getId) => {
  return $(getId).style;
};

const $value = (id) => {
    return $(id).value;
  };
  

/* Devuelve el id del elemento activo */
const $activeElement = () => {
  return document.activeElement.id;
};

export { $toggle, $classList, $focus, $style, $activeElement, $value };
