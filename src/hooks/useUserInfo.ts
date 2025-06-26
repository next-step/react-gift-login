import { useState } from "react";

type stateHook = {
  value: string;
  setter: (value: string) => void;
};

export type UserInfoHook = {
  email: stateHook;
  password: stateHook;
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
