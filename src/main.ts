import "./style.css";
import init, { get_mocking_text } from "wasm";

const RANDOM_MESSAGES = [
  "I'm ready!",
  "Is mayonnaise an instrument?",
  "I don't need it... I don't need it...",
  "No, this is Patrick!",
  "The inner machinations of my mind are an enigma.",
  "I wumbo, you wumbo, he she me wumbo.",
  "Imagination!",
  "Finland!",
  "It's not just a boulder... it's a rock!",
  "Can I be excused for the rest of my life?",
];

function main() {
  const copyButton = document.getElementById("copy");
  const randomButton = document.getElementById("random");
  const textInput = document.getElementById(
    "text-input",
  ) as HTMLTextAreaElement | null;
  const preview = document.getElementById("preview");

  if (!textInput || !preview) return;

  textInput.addEventListener("input", (ev) => {
    const target = ev.target as HTMLInputElement;
    const result = get_mocking_text(target.value);
    preview.textContent = result;
  });

  if (copyButton) {
    copyButton.addEventListener("click", () => {
      navigator.clipboard.writeText(preview.textContent.trim() ?? "");
    });
  }

  if (randomButton && textInput) {
    randomButton.addEventListener("click", () => {
      const msg =
        RANDOM_MESSAGES[Math.floor(Math.random() * RANDOM_MESSAGES.length)];
      textInput.value = msg;
      preview.textContent = get_mocking_text(msg);
    });

    randomButton.click();
  }

  preview.textContent = get_mocking_text(preview.textContent ?? "");
}

init().then(main);
