export type CityType = Array<string | number>;
export interface FormDataType {
    origin_city: Array<CityType>;
    intermediate_cities: Array<CityType>;
    destination_city: Array<CityType>;
    date_trip: string;
    num_passenger: number;
}
