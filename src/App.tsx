import PageLayout from '@/components/Layout/PageLayout';
import NavigationBar from '@/components/NavigationBar';



function App() {
  return (
    <>
      <NavigationBar />
      <PageLayout>
        {/* 싱딘 고정 확인용 */}
        {Array.from({ length: 50 }).map((_, i) => (
          <p key={i}>더미 콘텐츠 {i + 1}</p>
        ))}
      </PageLayout>
    </>
  );
}

export default App;
