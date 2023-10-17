class cat{
    constructor(name, tiredness, hunger, lonliness, happiness){
        this.name = name;
        this.tiredness = tiredness;
        this.hunger = hunger;
        this.lonliness = lonliness;
        this.happiness = happiness;
    }

    //metodos
    feed(){

        
        this.hunger= this.hunger+1 ;
    }
    DontFeed(){
        this.hunger= this.hunger-1 ;
    }

    sleep(){
        this.tiredness= this.tiredness+1;
    }
    DontSleep(){
        this.tiredness= this.tiredness-1;
    }

    pet(){
        this.lonliness= this.lonliness+1;
    }
    DontPet(){
        this.lonliness= this.lonliness-1;
    }
    play(){
        this.happiness= this.happiness+1;
    }
    DontPlay(){
        this.happiness = this.happiness-1;
    }

    Estado() {
        console.log(`${this.name} is our pet.`);
        if(this.tiredness<5){
            console.log("Paws is tired")
        }else{
            console.log("Paws is a tope")
        }

        if(this.hunger<5){
            console.log("Paws is hunger")
        }else{
            console.log("Paws no tiene hambre")
        }

        if(this.lonliness<5){
            console.log("Paws is lonly")
        }else{
            console.log("Paws is the best")
        }

        if(this.happiness<5){
            console.log("Paws is happy")
        }else{
            console.log("Paws smokig weed")
        }
        
        
      }
}

cat = new cat("gatiito",4,3,3,3);

cat.sleep();

cat.Estado();