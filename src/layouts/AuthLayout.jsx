import { Header, Sidebar } from "../components";

export const AuthLayout = ({children}) => {
  return (
    <main className="w-full overflow-hidden h-screen bg-secondary text-white">
      <Header />
      <Sidebar />
      <div className="w-full h-[calc(100vh-58px)]">
        {children}
      </div>
    </main>
  );
};
