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

export interface newUserProps {
  name?: string
  surname?: string
  email?: string
  password?: string
  telNumber?: string
  birthDate?: string
  category?: string
  subCategory?: string
}

export interface newUserDispatchActionProps {
  type: string
  payload: {
    newUserProps: newUserProps
  }
}
