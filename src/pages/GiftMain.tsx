import { PageContainer } from '@/components/layout/PageContainer';
import { Navigation } from '@/components/header/Navigation';
import { CategorySection } from '@/components/category/CategorySection';
import { FriendBanner } from '@/components/banner/FriendBanner';
import { MessageBanner } from '@/components/banner/MessageBanner';


const GiftMain= () =>{
    return (
        <PageContainer>
            <Navigation />
            <FriendBanner />
            <CategorySection />
            <MessageBanner />
            <h1>카카오 선물하기 메인 페이지</h1>
        </PageContainer>
    );
};
export default GiftMain;
