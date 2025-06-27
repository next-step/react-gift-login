import { useState } from "react";

type StateHook<T> = {
  value: T;
  setValue: (value: T) => void;
};

export type UserInfoHook = {
  email: StateHook<string>;
  password: StateHook<string>;
};

export default function useUserInfo() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const hookset = {
    email: { value: email, setter: setEmail },
    password: { value: password, setter: setPassword }
  };
  return hookset;
}
