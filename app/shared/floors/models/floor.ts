import { Wall } from '../../map/models/wall';
import { Place } from '../../map/models/place';
import { Seat } from '../../map/models/seat';
import { Point } from '../../map/models/point';
import { Room } from '../../rooms/models/room';
import { Serializable } from '../../app/common/serializable';

export interface IFloor {
    number: string;
    walls: Wall[];
    places: Place[];
    seats: Seat[];
}

const FLOOR_DEFAULT_SKELETON: IFloor = { number: null, walls: [], places: [], seats: [] };

export class Floor implements Serializable, IFloor {

    number: string;
    walls: Wall[];
    places: Place[];
    seats: Seat[];

    constructor({ number, walls, places, seats }: IFloor = FLOOR_DEFAULT_SKELETON) {
        this.number = number;
        this.walls = walls;
        this.places = places || [];
        this.seats = seats || [];
    }

    addWall(type: string, color: string, start: Point, end: Point, vertex?: Point) {
        if (vertex) {
            this.walls.push(new Wall(type, color, start, end, vertex));
        } else {
            this.walls.push(new Wall(type, color, start, end));
        }
    }

    deleteWall(wall: Wall) {
        this.walls = this.walls
            .filter((nextWall) => !Object.is(nextWall, wall));
    }

    addPlace(latlng, room: Room) {
        this.places.push(new Place(room.id, room.name, room.icon, { x: latlng.lat, y: latlng.lng }, this.number));
    }

    deletePlace(place: Place) {
        this.places = this.places
            .filter((nextPlace) => !Object.is(nextPlace, place));
    }

    lastPlace() {
        return this.places[this.places.length - 1];
    }

    lastWall() {
        return this.walls[this.walls.length - 1];
    }

    addSeat(latlng: L.LatLng) {
        this.seats.push(new Seat({ x: latlng.lat, y: latlng.lng }));
    }

    deleteSeat(seat: Seat) {
        this.seats = this.seats
            .filter((nextSeat) => !Object.is(nextSeat, seat));
    }

    lastSeat() {
        return this.seats[this.seats.length - 1];
    }

    setWorkerOnSeat(seat: Seat, worker: string) {
        seat.worker = worker;
    }

    toJSON(): IFloor {
        return {
            number: this.number,
            walls: this.walls.slice(0),
            places: this.places.slice(0),
            seats: this.seats.slice(0)
        };
    }
}
