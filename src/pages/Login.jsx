import { Button, Input } from "../components";
import { useLogin } from "../hooks";

export const Login = () => {
    const { loading, login, error } = useLogin();
  return (
    <main className="w-full overflow-hidden h-screen bg-secondary flex items-center justify-center">
      <form autoComplete="off" onSubmit={login} className="p-5 relative bg-primary rounded-xl w-full max-w-[280px] text-white flex flex-col gap-3 items-center justify-start overflow-hidden">
        <img className="w-full" src="/images/logo.png" alt="LOGO" />
        <Input disabled={loading} className={"w-full"} placeholder={"Enter Username"} name={"username"} />
        <Input disabled={loading} className={"w-full"} type="password" placeholder={"Enter Password"} name={"password"} />
        {error && <p className="block w-full text-red-500 px-1 text-xs">Invalid username/password</p>}
        <Button disabled={loading} type="submit" className={"w-full mb-7"}>{loading ? "Signing in..." : "Sign in"}</Button>
        <div className="absolute bottom-0 left-0 bg-light p-2 text-xs text-center w-full">
            Copyrights © 2024 | All Rights Reserved
        </div>
      </form>
    </main>
  );
};
