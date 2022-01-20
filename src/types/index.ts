export interface userProps {
  id: number;
  name?: string;
  surname?: string;
  email?: string;
  password?: string;
  category?: string;
  telNumber?: string;
  birthDate?: string;
  isVisible?: boolean;
}

export interface UserDispatchActionProps {
  type: string;
  payload: {
    user: userProps;
  };
}
