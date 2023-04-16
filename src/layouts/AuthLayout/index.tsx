const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <main>{children}</main>;
};

export const Layout = (page: React.ReactElement) => <AuthLayout>{page}</AuthLayout>;

export default Layout;
