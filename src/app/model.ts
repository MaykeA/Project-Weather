export class Model{
    public temperature: number;
    public city: string;
    public description: string;
    public wind:number;
    public humidity:number;
    public sunrise:number
    public sunset:number

    constructor(temperature: number, city: string, description: string, wind:number, 
        humidity: number, sunrise:number, sunset:number){
        this.temperature = temperature;    
        this.city = city;    
        this.description = description;    
        this.wind = wind;
        this.humidity = humidity;
        this.sunrise = sunrise
        this.sunset = sunset
    }
}