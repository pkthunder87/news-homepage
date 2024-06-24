import Article from './Article';
import Header from './Header';
import Sidebar from './Sidebar';
import TopArticles from './TopArticles';

function AppLayout() {
  return (
    <div className="grid h-[200dvh] w-[100dvw] grid-cols-1 px-[6.3rem] py-12 md:h-[100dvh] md:grid-cols-[68.5%_31.5%] md:grid-rows-[14%_56%_30%]">
      <Header />
      <Article />
      <Sidebar />
      <TopArticles />
    </div>
  );
}

export default AppLayout;
