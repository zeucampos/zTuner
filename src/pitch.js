export const pitchList = [
  {
    name: "E",
    frequency: 82,
  },
  {
    name: "A",
    frequency: 110,
  },
  {
    name: "D",
    frequency: 147,
  },
  {
    name: "G",
    frequency: 196,
  },
  {
    name: "B",
    frequency: 247,
  },
  {
    name: "E",
    frequency: 330,
  },
];

export function updatePitch(analyserNode, detector, input, sampleRate) {
  analyserNode.getFloatTimeDomainData(input);
  const [pitch, clarity] = detector.findPitch(input, sampleRate);

  // window.document.getElementById("pitch").textContent = `${
  //   Math.round(pitch * 10) / 10
  // } Hz`;
  // window.document.getElementById("clarity").textContent = `${Math.round(
  //   clarity * 100
  // )} %`;
  // window.setTimeout(
  //   () => updatePitch(analyserNode, detector, input, sampleRate),
  //   100
  // );
}
