import Header from '@/components/Header'
import CategorySection from '@/components/CategorySection'
import FriendSelection from '@/components/FriendSelection'
import DisplaySection from '@/components/DisplaySection'
import RankingSection from '@/components/RankingSection'

const MainPage = () => {
    return (
        <>
            <Header />
            <FriendSelection />
            <CategorySection />
            <DisplaySection />
            <RankingSection />
        </>
    )
}

export default MainPage