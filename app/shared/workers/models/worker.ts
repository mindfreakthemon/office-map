export enum Team {
    MWS,
    EASY_PUSH,
    CASINO_MOBILE,
    STG,
    PTV,
    IT,
    VIDEOBET,
    IMS,
    GLOBAL,
    SKYWIND,
    CASINO,
    CROSSRIDER,
    LIVE,
    OAPI,
    FINANCE,
    HR,
    MEXOS,
    POKER,
    PLAMEE,
    FABRIC,
    BET365,
    MOBENGA,
    BIG_DATA,
    KIOSK,
    HTML5_LIVE,
    ADMINISTRATION,
    ASIAN_PACIFIC,
    CASUAL_GAMES,
    SPORTSBOOK,
    HTML_INSTALLER,
    OPERATIONS,
    INTERNAL
}

export enum Gender {
    FEMALE,
    MALE
}

export interface IWorker {
    id: string;
    firstName: string;
    lastName: string;
    photo: string;
    team: Team;
    gender: number;
}

const WORKER_DEFAULT_SKELETON: IWorker = { id: null, firstName: '', lastName: '', photo: '', team: null, gender: Gender.MALE };


export class Worker {
    static TEAM_NAMES_MAP = new Map<Team, string>(<Array<any>> [
        [Team.MWS, 'MWS'],
        [Team.EASY_PUSH, 'EASY_PUSH'],
        [Team.CASINO_MOBILE, 'CASINO_MOBILE'],
        [Team.STG, 'STG'],
        [Team.PTV, 'PTV'],
        [Team.IT, 'IT'],
        [Team.VIDEOBET, 'VIDEOBET'],
        [Team.IMS, 'IMS'],
        [Team.GLOBAL, 'GLOBAL'],
        [Team.SKYWIND, 'SKYWIND'],
        [Team.CASINO, 'CASINO'],
        [Team.CROSSRIDER, 'CROSSRIDER'],
        [Team.LIVE, 'LIVE'],
        [Team.OAPI, 'OAPI'],
        [Team.FINANCE, 'FINANCE'],
        [Team.HR, 'HR'],
        [Team.MEXOS, 'MEXOS'],
        [Team.POKER, 'POKER'],
        [Team.PLAMEE, 'PLAMEE'],
        [Team.FABRIC, 'FABRIC'],
        [Team.BET365, 'BET365'],
        [Team.MOBENGA, 'MOBENGA'],
        [Team.BIG_DATA, 'BIG_DATA'],
        [Team.KIOSK, 'KIOSK'],
        [Team.HTML5_LIVE, 'HTML5_LIVE'],
        [Team.ADMINISTRATION, 'ADMINISTRATION'],
        [Team.ASIAN_PACIFIC, 'ASIAN_PACIFIC'],
        [Team.CASUAL_GAMES, 'CASUAL_GAMES'],
        [Team.SPORTSBOOK, 'SPORTSBOOK'],
        [Team.HTML_INSTALLER, 'HTML_INSTALLER'],
        [Team.OPERATIONS, 'OPERATIONS'],
        [Team.INTERNAL, 'INTERNAL']
    ]);

    static GENDER_MAP = new Map<number, string>(<Array<any>> [
        [Gender.FEMALE, 'Female'],
        [Gender.MALE, 'Male']
    ]);

    id: string;
    firstName: string;
    lastName: string;
    photo: string;
    _team: Team;
    _gender: number;

    constructor({ id, firstName, lastName, photo, team, gender }: IWorker = WORKER_DEFAULT_SKELETON) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.photo = photo;
        this.team = team;
        this.gender = gender;
    }

    get gender() {
        return this._gender;
    }

    set gender(value) {
        let gender = parseInt(String(value), 10);

        this._gender = Worker.GENDER_MAP.has(gender) ? gender : Gender.MALE;
    }

    get team() {
        return this._team;
    }

    set team(value) {
        let team = parseInt(String(value), 10);

        this._team = Worker.TEAM_NAMES_MAP.has(team) ? team : Team.MWS;
    }

    get teamName() {
        return Worker.TEAM_NAMES_MAP.get(this.team);
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    get genderName() {
        return Worker.GENDER_MAP.get(this.gender);
    }
}
