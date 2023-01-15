import IAgenda from "./interfaces/IAgenda";

// src/Quadra.ts
export default abstract class Quadra {
    abstract reservar<T>(data: Date): IAgenda<T>
}
