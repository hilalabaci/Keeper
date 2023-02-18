import { v4 as uuid } from "uuid";
var colors = [
  "#FF914D",
  "#FFBD59",
  "#FFDE59",
  "#C1FF72",
  "#7ED957",
  "#00BF63",
  "#004AAD",
  "#5271FF",
  "#38B6FF",
  "#5CE1E6",
  "#0CC0DF",
  "#0097B2",
  "#5E17EB",
  "#8C52FF",
  "#CB6CE6",
  "#FF66C4",
  "#FF5757",
  "#FF3131",
];
const details = [
  {
    id: uuid(),
    color: colors[Math.floor(Math.random() * colors.length)],
    text: "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.”",
    date: "2023-02-15",
  },
  {
    id: uuid(),
    color: colors[Math.floor(Math.random() * colors.length)],
    text: "The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.”",
    date: "2023-02-16",
  },
  {
    id: uuid(),
    color: colors[Math.floor(Math.random() * colors.length)],
    text: "Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and”",
    date: "2023-02-17",
  },
  {
    id: uuid(),
    color: colors[Math.floor(Math.random() * colors.length)],
    text: "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.”",
    date: "2023-02-18",
  },
  {
    id: uuid(),
    color: colors[Math.floor(Math.random() * colors.length)],
    text: "In particular, the garbled words of lorem ipsum bear an unmistakable resemblance to sections 1.10.32–33 of Cicero's work, with the most notable passage excerpted below:”",
    date: "2023-02-19",
  },
];
export default details;
