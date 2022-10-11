import theme from "./theme.js";

const font = new FontFace(
  "Silkscreen",
  "url(../assets/fonts/Silkscreen-Regular.ttf)"
);

export default function renderInterface(
  HTMLCanvas,
  state,
  requestAnimationFrame
) {
  const ctx = HTMLCanvas.getContext("2d");
  HTMLCanvas.style.backgroundColor = "white";

  ctx.fillStyle = theme.colors.primary;
  ctx.fillRect(0, 0, HTMLCanvas.width, HTMLCanvas.height);

  font.load().then((font) => {
    document.fonts.add(font);
    ctx.fillStyle = "#e66465";
    ctx.font = "600 64px Silkscreen";
    ctx.textAlign = "center";
    ctx.fillText("A", HTMLCanvas.width / 2, HTMLCanvas.height / 2 - 200, 100);
  });

  const steps = Array.from(Array(60).keys());

  steps.forEach((step, k) => {
    ctx.fillStyle = "#e66465";
    ctx.fillOpacity = 0;
    ctx.fillRect(
      (HTMLCanvas.width / steps.length) * k + 2,
      HTMLCanvas.height / 2 - 100,
      HTMLCanvas.width / steps.length - 4,
      200
    );
  });

  ctx.fillStyle = "white";
  ctx.font = "16px Helvetica";
  ctx.textAlign = "center";
  ctx.fillText(
    `${Math.round(state.pitch * 10) / 10} Hz`,
    HTMLCanvas.width / 2,
    HTMLCanvas.height / 2 - 170,
    100
  );

  requestAnimationFrame(() =>
    renderInterface(HTMLCanvas, state, requestAnimationFrame)
  );
}
