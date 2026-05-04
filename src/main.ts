import "./style.css";
import init, { get_mocking_text } from "wasm";

function main() {
  const textInput = document.getElementById("text-input");
  const preview = document.getElementById("preview");

  if (!textInput || !preview) return;

  textInput.addEventListener("input", (ev) => {
    const target = ev.target as HTMLInputElement;
    const result = get_mocking_text(target.value);
    preview.textContent = result;
  });
}

init().then(main);
