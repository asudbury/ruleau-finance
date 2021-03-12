export interface Cases {
    meta: any;
    error: boolean;
    payload: CasesPayload | Error | string | any;
  }
  
  export interface CasesPayload {
    data: Array<any>;
  }