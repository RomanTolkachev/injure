export interface IMenuItem {
  path: string;
  text: string;
}

export interface IEmployee {
  photoCallUs: string;
  colourMain: string;
  colourAccent: string;
  legend: string | null;
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
}
