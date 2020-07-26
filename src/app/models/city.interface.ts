export interface City {
    Key: string;
    LocalizedName: string;
    Temperature?: Temperature;
    WeatherText?: string;
    Country?:Country;
}
interface Temperature {
    Metric: any;
}
interface Country {
    LocalizedName?: string;
}