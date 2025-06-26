import { PageContainer } from '@/components/layout/PageContainer';
import { Navigation } from '@/components/header/Navigation';
import { CategorySection } from '@/components/category/CategorySection';
import { FriendBanner } from '@/components/banner/FriendBanner';
import { MessageBanner } from '@/components/banner/MessageBanner';
import { RankingSection } from '@/components/ranking/RankingSection'; // ✅ 추가


const GiftMain= () =>{
    return (
        <PageContainer>
            <Navigation />
            <FriendBanner />
            <CategorySection />
            <MessageBanner />
            <RankingSection />
        </PageContainer>
    );
};
export default GiftMain;
