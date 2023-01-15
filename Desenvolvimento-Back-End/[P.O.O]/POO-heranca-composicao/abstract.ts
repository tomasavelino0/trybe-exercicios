abstract class Character {
    _nome: string;
    constructor(nome: string) {
        this._nome = nome;
    }

    public get nome(): string {
        return this._nome
    }

    abstract talk():void
    abstract especialMove():void 
}

class MeleeCharacter extends Character {
    talk(): void {
        console.log(`${this._nome} e um personagem melee`)
    }

    especialMove(): void {
        console.log(`${this._nome} especias: chute, soco`);
        
    }

}

class LongRangeCharacter extends Character {
    talk(): void {
        console.log(`${this._nome} e um personagem range`)
    }

    especialMove(): void {
        console.log(`${this.nome} especiais: flechada, bola de fogo`)
    }
}

function myCharacter(character: Character) {
    console.log(character.talk())
    console.log(character.especialMove())
}

const melee = new MeleeCharacter('jack-chan')
const range = new LongRangeCharacter('merlim')

myCharacter(melee)
myCharacter(range)