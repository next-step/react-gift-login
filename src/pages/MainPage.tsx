import Header from '@/components/Header'
import CategorySection from '@/components/CategorySection'
import FriendSelection from '@/components/FriendSelection'
import DisplaySection from '@/components/DisplaySection'

const MainPage = () => {
    return (
        <>
            <Header />
            <FriendSelection />
            <CategorySection />
            <DisplaySection />
        </>
    )
}

export default MainPage