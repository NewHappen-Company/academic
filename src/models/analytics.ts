export interface IIdentification {
  id: string;
  sex: string;
  birth_date: string;
  description: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;

  identification: IIdentification;
}

export interface IAcademic {
  id: string;
  client_id: string;
  number: string;
}

export interface ISchedule {
  id: string;
  start_date: string;
  available: boolean;
  avaiable: boolean; // ERROR DB
}

export interface IDates {
  birth: string;
  age: string;
  startDate: string;
}

export interface Response {
  user: IUser;
  professional: any;
  schedule: ISchedule;
  identification: IIdentification;
  academic: IAcademic;
  formated: IDates;
  companyId: string;
  okay: boolean;
}