import SelectFriend from '@/components/SelectFriend';
import ThemeContainer from '@/components/ThemeContainer';
import Ranking from '@/Layout/Ranking';

function MainLayout() {
  return (
    <div className="flex flex-col">
      <SelectFriend />
      <ThemeContainer />
      <Ranking />
    </div>
  );
}

export default MainLayout;
