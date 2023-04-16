const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return <main>{children}</main>;
};

const Layout = (page: React.ReactElement) => <DefaultLayout>{page}</DefaultLayout>;

export default Layout;
