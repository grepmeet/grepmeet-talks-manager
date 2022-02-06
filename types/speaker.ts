import User from "./user";

type Speaker = User & {
  subtitle?: string;
  biography?: string;
};

export default Speaker;
