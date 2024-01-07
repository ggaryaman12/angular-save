export interface Compound {
    id?: number;
    name: string;
    image: string;
    desc: string;
  };
  
  export interface CompoundResponse {
    count: number;
    rows: Compound[];
  };