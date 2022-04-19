import Language from "./language";
import Speaker from "./speaker";
import Tag from "./tag";

type Talk = {
  id: string;
  title: string;
  speaker: Speaker;
  tags: Tag[];
  nbVotes: number;
  language: Language;
  date: Date | null;
};

export default Talk;
