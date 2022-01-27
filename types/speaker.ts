import User from './user';

type Speaker = User & {
    subtitle?: string;
};

export default Speaker;
