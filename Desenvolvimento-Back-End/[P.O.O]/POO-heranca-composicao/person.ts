export default class Person {
    protected _nome: string;
    protected _birthDate: Date;

    constructor(nome:string, birthDate: Date) {
      this._nome = nome;
      this._birthDate = birthDate;
    }

     get nome(): string {
      if (this._nome.length < 3) {
        throw Error('o nome deve ter 3 caracteres no minimo')
      }
      return this._nome
    }

     set nome(value: string) {
      this._nome = value;
    }
  }