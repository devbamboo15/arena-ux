export class NavMenuItem {
  iconClass?: string;
  label: string;
  path: string;
  target?: '_blank' | '_self' | '_parent' | '_top' = '_self';
  children?: NavMenuItem[];
  tooltip?: boolean;
}
