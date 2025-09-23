import { ImageSourcePropType } from "react-native";

export interface Place {
  id: number;
  name: string;
  image: ImageSourcePropType;
}

export const PlaceData: Place[] = [
  {
    id: 1,
    name: "Alleppey Backwaters",
    image: require("../../assets/KBoat.jpg"), 
  },
  {
    id: 2,
    name: "Munnar Hills",
    image: require("../../assets/Munnar_hills.jpg"),
  },
  {
    id:3,
    name:"Jatayu Nature Park",
    image:require("../../assets/jatayu_park.jpg")
  },
  {
    id:4,
    name:"Kochi Fort",
    image:require("../../assets/Kochi_Fort.jpg")
    },
    {
        id:5,
        name:"Kovalam Beach",
        image:require("../../assets/kovalam.jpg")
    },
    {
        id:6,
        name:"Kumarakom",
        image:require("../../assets/kumarakom.jpg")
    },
    {
        id:7,
        name:"Sree Padmanabhaswamy Temple",
        image:require("../../assets/Sree-Padmanabhaswamy-Temple.jpg")
    },
    {
        id:8,
        name:"Thekkady",
        image:require("../../assets/Thekkady.jpg")
    },
    {
        id:9,
        name:"vagamon",
        image:require("../../assets/vagamon.jpg")
    },
    {
        id:10,
        name:"varkala",
        image:require("../../assets/varkala.jpg")
    },
    {
        id:11,
        name:"Wayanad",
        image:require("../../assets/wayanad.jpg")
    },
    {
        id:12,
        name:"kozhikode",//Kadalundi Bird Sanctuary
        image:require("../../assets/kozhikode.jpg")
    },
    {
      id:13,
      name:"Kadathanadan Kalari & Navarasa Kathakali Centre",
      image:require("../../assets/katak.jpg")
    },
    {
      id:14,
      name:"Elephant Camp",
      image:require("../../assets/elephant.jpg")
    }
];
