export interface Animal {
  species: string;
  kingdom: string;
  class: string;
}

export interface DoSound {
  doASound: () => string;
}

export class Duck implements DoSound {
    public doASound(){
        return 'quack';
    }
}

export class Dog implements DoSound {
    public doASound(){
        return 'bark';
    }
}

