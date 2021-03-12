export interface User {
    meta: any;
    error: boolean;
    payload: UserPayload | Error | string | any;
  }
  
  export interface UserPayload {
    username: string;
  }