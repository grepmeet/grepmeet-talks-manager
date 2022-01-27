import Speaker from './speaker';
import Tag from './tag';

type Session =  {
    id?: string|null;
    title: string;
    speaker: Speaker;
    tags?: Tag[];
    date: Date;
};

export default Session;
