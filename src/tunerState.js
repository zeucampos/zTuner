export default function tunerState() {
  const state = {
    pitch: 0,
    frequency: 0,
  };

  const observers = [];

  function subscribe(observerFunction) {
    observers.push(observerFunction);
  }

  function notifySubscribers(command) {
    observers.forEach((observerFunction) => observerFunction(command));
  }

  function changePitch(pitch) {
    state.pitch = pitch;

    notifySubscribers({
      command: "changePitch",
      pitch,
    });
  }

  function changeFrequency(frequency) {
    state.frequency = frequency;

    notifySubscribers({
      command: "changeFrequency",
      frequency,
    });
  }

  return {
    subscribe,
    state,
    notifySubscribers,
    changePitch,
    changeFrequency,
  };
}
