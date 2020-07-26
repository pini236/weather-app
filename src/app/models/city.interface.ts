export interface City {
    Key: string;
    LocalizedName: string;
    Temperature?: Temperature;
    WeatherText?: string
}
interface Temperature {
    Metric: any;
}
