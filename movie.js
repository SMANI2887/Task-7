class  movie{
    constructor(Title,Studio,Rating){
    this.Title=Title;
    this.Studio=Studio;
    this.Rating=Rating;
}
getPG(){
    return (`The Title ${this.Title} The studio ${this.Studio} The Rating ${this.Rating}`);
}
}
let moviedetail = new movie ("Casino Royale","Eon Productions","PG­13");
console.log(moviedetail.getPG());