import { useState } from "react";

//export const Formulaire_ajout = ({ handleClick, setPage, page, pageMax }) => {
export const Button = (type, command, variable, text) => {

  // test si texte invariable ou pas

  if ({text}.textIfFalse != undefined) {
    textIfTrue = {text}.textIfTrue;
    textIfFalse = {text}.textIfFalse;
    text = "{"+ {variable} + "?" + {textIfTrue} + " : " + {textIfFalse} + "}";
  } else {
    2
  }

  // render

  return (
    <button
      type={type}
      command={command}
    >
      {text}
    </button>
  );
}
