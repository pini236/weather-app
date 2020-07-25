export interface City {
    locationKey: string;
    name: string;
    Temperature?: Temperature;
    WeatherText?: string
}
interface Temperature {
    Metric: any;
}
