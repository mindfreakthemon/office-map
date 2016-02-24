import { Point } from '../../map/models/point';

export interface IRoom {
    id: string;
    name: string;
    floor?: string;
    position: Point;
}

export class Room {

    id: string;
    name: string;
    floor: string;
    position: Point;

    constructor({ id, name, floor, position}: IRoom) {
        this.id = id;
        this.name = name;
        this.floor = floor;
        this.position = position;
    }
}
