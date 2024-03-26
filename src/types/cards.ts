interface TackleAnswer {
  id: number;
  name: string;
  avatarUrl: string;
  time: string;
  tackleComment: string;
  num1: number;
  num2: number;
  dapBlack: string;
}

interface Tackle {
  id: number;
  name: string;
  avatarUrl: string;
  time: string;
  tackleComment: string;
  num1: number;
  num2: number;
  dapBlack: string;
  tackleAnswer: TackleAnswer[];
}

export interface CardItem {
  id: number;
  name: string;
  time: string;
  num1: number;
  num2: number;
  num3: number;
  avatarUrl: string;
  imgUrl: string;
  dapWhite: string;
  dapBlack: string;
  comment: string;
  tackle?: Tackle[];
}
