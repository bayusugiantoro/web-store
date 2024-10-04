export interface Banner {
  imageUrl: any;
  id: string;
  label: string;
  image: string;
}

export interface Category {
  id: string;
  name: string;
  banner: Banner;
}
