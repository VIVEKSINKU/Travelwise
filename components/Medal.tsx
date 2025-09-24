import { ImageSourcePropType } from "react-native";

export interface medal {
  id: number;
  name: string;
  image: ImageSourcePropType;
achieved: boolean;
}

export const MedalData: medal[] = [
    {
        id:1,
        name:"Explorer",
        image:require("../assets/achievement/expo.png"),
        achieved: true,
    },
    {
        id:2,
        name:"First Step",
        image:require("../assets/achievement/firststep.jpg"),
        achieved: true,
    },
    {
        id:3,
        name:"adventurer",
        image:require("../assets/achievement/adven.png"),
        achieved: true,
    },
    {
        id:4,
        name:"cyclist",
        image:require("../assets/achievement/cycling.png"),
        achieved: true,
    },
    // {
    //     id:5,
    //     name:"100 KM Milestone",
    //     image:require(""),
    //     achieved: false,
    // },   
    // {
    //     id:6,
    //     name:"10 KM Milestone",
    //     image:require(""),
    //     achieved: false,
    // },   
    // {
    //     id:7,
    //     name:"50 KM Milestone",
    //     image:require(""),
    //     achieved: false,
    // },   
]