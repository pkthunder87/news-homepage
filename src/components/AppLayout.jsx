import Article from './Article';
import Header from './Header';
import Sidebar from './Sidebar';
import TopArticles from './TopArticles';

function AppLayout() {
  return (
    <div className="grid h-[200dvh] w-[100dvw] grid-cols-1 px-24 py-12 md:h-[100dvh] md:grid-cols-[70%_30%] md:grid-rows-[15%_60%_25%]">
      <Header />
      <Article />
      <Sidebar />
      <TopArticles />
    </div>
  );
}

export default AppLayout;
