export class Towel{

    color:string;
    length:number;
    image:string;
    wet:boolean;
    
    constructor(color:string,length:number,image:string,wet:boolean){
        this.color = color;
        this.length = length;
        this.image = image;
        this.wet = wet;
    }

    use(){
        if(this.wet){
            return "Ça fonctionne pas..."
    }
    return "La cible est maintenant sèche"
    }
}