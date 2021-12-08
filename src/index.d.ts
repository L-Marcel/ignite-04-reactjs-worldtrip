declare type CategoryItem = {
  name: string;
  image: string;
};

declare type ContinentItem = {
  name: string;
  image: string;
  slug: string;
  description: string;
};

declare type ContinentInfo = {
  name: string;
  image: string;
  description: string;
  qtd_countries: number;
  qtd_languages: number;
  qtd_cities: number;
  cities: City[];
};

declare type ContinentsInfo = {
  [key: string]: ContinentInfo
};

declare type City = {
  image: string;
  name: string;
  country: string;
  flag: string;
};