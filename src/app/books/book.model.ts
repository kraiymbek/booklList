export class Book {
    public name: string;
    public description: string;
    public fullDescription: string;
    public imagePath: string;
    public author: string;
    public genre: string;
    public addedTime: Date;


    constructor(name: string, descr: string, fullDescr: string,
                imagePath: string, author: string, genre:string, addedTime: Date){
        this.name = name;
        this.description = descr;
        this.fullDescription = fullDescr;
        this.imagePath = imagePath;
        this.author = author;
        this.genre = genre;
        this.addedTime = addedTime;
    }
}