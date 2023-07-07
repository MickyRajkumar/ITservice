type IGeoData = {
  lat: string;
  lng: string;
};

type IAddressData = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeoData;
};

type ICompanyData = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type IUserData = {
  id: string;
  name: string;
  username: string;
  email: string;
  address: IAddressData;
  phone: string;
  website: string;
  company: ICompanyData;
};

export interface IResponse<T = never> {
  data: T;
}

export type IError = {
  error?: boolean;
};

export type IPriceData = {
  id: string;
  name: string;
  description: string;
  price: string;
  configuration: string;
  setupInfo: string;
  teamSize: string;
  support: string;
  update: string;
};

export type IFeatureData = {
  id: string;
  title: string;
  description: string;
  page?: string;
  button?: string;
  phone?: string;
};
