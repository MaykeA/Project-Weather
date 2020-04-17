export class Model{
    public temperature: number;
    public city: string;
    public date: string;
    public description: string;
    public wind:number;
    public moisture:number;

    constructor(temperature: number, city: string, date: string, description: string, wind:number, rh:number){
        this.temperature = temperature;    
        this.city = city;    
        this.date = date;    
        this.description = description;    
        this.wind = wind;
        this.moisture = rh;
    }
}