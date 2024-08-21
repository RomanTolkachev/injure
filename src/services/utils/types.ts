export interface IMenuItem {
  path: string;
  text: string;
  BGImage?: string;
}

export interface IEmployee {
  photoCallUs: string;
  photoTeam: string;
  colourMain: string;
  colourAccent: string;
  experience: string;
  bio: string;
  legal?: {
    number: string;
    from: string;
    legalBody: string;
  };
}

export interface INews {
  date: Date;
  header: string;
  preview: string;
  text: string;
  id?: string;
}

export type TAppDispatch = {};
