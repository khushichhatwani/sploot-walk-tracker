export function calculateDistance(coords: { latitude: number; longitude: number }[]) {
  if (coords.length < 2) return 0;

  const toRad = (value: number) => (value * Math.PI) / 180;
  const R = 6371e3; // Earth's radius in meters

  let distance = 0;
  for (let i = 1; i < coords.length; i++) {
    const a = coords[i - 1];
    const b = coords[i];

    const φ1 = toRad(a.latitude);
    const φ2 = toRad(b.latitude);
    const Δφ = toRad(b.latitude - a.latitude);
    const Δλ = toRad(b.longitude - a.longitude);

    const aCalc = Math.sin(Δφ / 2) ** 2 + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(aCalc), Math.sqrt(1 - aCalc));

    distance += R * c;
  }

  return distance; // in meters
}
