export interface Route {
  path: string;
  name: string;
  component: any;
  onHeader?: boolean;
  auth?: boolean;
}
