import { Group } from "../models/Group";
import { Post } from "../models/Post";
import { User } from "../models/User"
import { _Comment } from "../models/_Comment"

export class Data{
    static users: User[] = [
        new User(1, "Rakoto", "Jean", "assets/images/pdp/1.jpg" , "Follow me if you want professional's fashion and beauty advices"),
        new User(2, "Balita", "Naivo", "assets/images/pdp/6.jpg", "Reading book is my passion <3"),
        new User(3, "Ledada", "zefa", "assets/images/pdp/10.jpg", "Welcome to my profile. No code, no life")
    ] ;

    static posts: Post[] = [
        new Post(1, "assets/images/1.jpg", 3, "12h", "Manao ahoana ny fomba fiseon'ny COVID-19?", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 1, 5, 1),
        new Post(2, "assets/images/6.jpg", 2, "7h", "Aiza ny CCO?", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 2, 8, 1),
        new Post(3, "assets/images/10.jpg", 1, "1m", "Firy ny numéro vert?", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 1, 5, 4)
    ] ;
    
    static groups: Group[] = [
        new Group(1, "COVID-19", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "assets/images/post/1.jpg"),
        new Group(2, "CCO", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "assets/images/post/2.jpg"),
        new Group(3, "Urgence", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "assets/images/post/3.jpg")
    ] ;
    
    static comments: _Comment[] = [
        new _Comment(1, "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "30m", 1, 1),
        new _Comment(2, "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "1h", 2, 2),
        new _Comment(3, "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "20m", 2, 1),
        new _Comment(4, "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "2h", 3, 3),
        new _Comment(5, "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "30m", 1, 3),
        new _Comment(6, "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "25m", 1, 2),
        new _Comment(7, "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "55m", 3, 1),
        new _Comment(8, "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "55m", 3, 2)
    ] ;

}