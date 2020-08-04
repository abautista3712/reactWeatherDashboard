export default {
  getDirection: function (angle) {
    const directions = ["N", "NW", "W", "SW", "S", "SE", "E", "NE"];
    return directions[
      Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % 8
    ];
  },
};
