export class Activity {
    constructor(
        public id: number,
        public title: string,
        public photo: string,
        public duration: number,
        public date: Date,
        public tableField: any[]
    ) { }
}

