// user.model.ts

export class User {
  constructor(
    public id: number,
    public password: string,
    public email?: string,
    public role?: boolean
  ) {}
}

  
 

