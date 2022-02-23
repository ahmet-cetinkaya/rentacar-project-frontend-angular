export interface Redirect {
  url: string;
  next?: Redirect;
}
