export interface Banner {
  id: string;
  label: string;
  image: string;
}

export interface Category {
  id: string;
  name: string;
  banner: Banner;
}
