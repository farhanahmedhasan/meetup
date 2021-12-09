import MainNavigation from './MainNavigation';

const Layout = (props) => {
  return (
    <div>
      <MainNavigation />
      <main className='container py-8'>{props.children}</main>
    </div>
  );
};

export default Layout;
