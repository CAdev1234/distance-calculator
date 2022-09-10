export const toRad = (num: number) => {
    return (Math.PI / 180) * num;
};
export const calDisWithHaversine = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number,
) => {
    const radiusOfEarth = 6371;
    const deltaLat = toRad(lat1 - lat2);
    const deltaLon = toRad(lon1 - lon2);
    const a =
        Math.pow(Math.sin(deltaLat / 2), 2) +
        Math.cos(lat1) * Math.cos(lon2) * Math.pow(Math.sin(deltaLon / 2), 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)) || 0;
    return radiusOfEarth * c;
};
