export interface MenuItem {
  label: string;
  action: Function;
  isDisabled?: boolean;
  icon?: string;
  isButton?: boolean;
}
