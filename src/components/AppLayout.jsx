import Article from './Article';
import Header from './Header';
import Sidebar from './Sidebar';
import TopArticles from './TopArticles';

function AppLayout() {
  return (
    <div className="h-full w-[100dvw] bg-[hsla(222,59%,12%,.5)] px-4 py-11 blur-[.5px] brightness-90 md:grid md:h-[100dvh] md:grid-cols-[68.5%_31.5%] md:grid-rows-[14%_56%_30%] md:px-[6.3rem] md:py-12">
      <Header />
      <Article />
      <Sidebar />
      <TopArticles />
    </div>
  );
}
export default AppLayout;
