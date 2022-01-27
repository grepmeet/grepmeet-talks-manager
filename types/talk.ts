import Speaker from './speaker';
import Tag from './tag';

type Talk =  {
    id?: string|null;
    title: string;
    speaker: Speaker;
    tags?: Tag[];
    nbVotes: number;
};

export default Talk;
