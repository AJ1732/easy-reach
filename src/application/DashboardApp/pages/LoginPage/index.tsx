import { AdminSvg, UserSvg } from "@/components/svgs";

const LoginPage = () => {
  return (
    <main className="font-jost flex min-h-screen flex-col items-center justify-center gap-28">
      <hgroup className="space-y-20 text-center">
        <h1 className="text-[2.8125rem] font-medium leading-6">
          Welcome to EazyReach 👋
        </h1>
        <h3 className="text-3xl font-medium">How will you be logging in?</h3>
      </hgroup>

      <div className="flex items-center justify-center gap-24">
        {role.map(({ src, role }) => (
          <div
            key={role}
            className="space-y-9 rounded-3xl bg-[#FAFAFA] p-6 text-center shadow-[0px_1px_4px_3px_rgba(0,_0,_0,_0.10)]"
          >
            <div className="h-[22.25rem] w-[26.625rem] rounded-[1.25rem] bg-[#ddd] flex justify-center items-center">
              {src}
            </div>
            <p className="text-3xl font-medium leading-6">{role}</p>
          </div>
        ))}
      </div>
    </main>
  );
};
export default LoginPage;

const role = [
  {
    src: <AdminSvg />,
    role: "As an admin",
  },
  {
    src: <UserSvg />,
    role: "As a user",
  },
];
