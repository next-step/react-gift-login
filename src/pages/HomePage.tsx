import { FriendSelectButton } from "@/entities/friends/ui/FriendSelectButton";
import { FriendSelection } from "@/entities/friends/ui/FriendSelection";
import { giftCategory } from "@/entities/gift/constants/giftCategory";
import { GiftCategoryGrid, GiftCategoryItem } from "@/entities/gift/ui/GiftCategoryGrid";
import { Banner } from "@/widgets/banner/Banner";
import { VerticalSpacing } from "@/widgets/layouts/Spacing.styled";
import { TitledSection } from "@/widgets/sections/TitledSection";

export default function HomePage() {
    return (
        <div>
            <FriendSelection>
                <FriendSelectButton />
            </FriendSelection>

            <VerticalSpacing size="24px" />

            <TitledSection title="선물 테마">
                <GiftCategoryGrid>
                    {giftCategory.map((category) => {
                        return (
                            <GiftCategoryItem
                                key={category.themeId}
                                imgSrc={category.image}
                                label={category.name}
                            />
                        );
                    })}
                </GiftCategoryGrid>
            </TitledSection>

            <VerticalSpacing size="24px" />

            <Banner
                title="프론트엔드 2단계 과제 화이팅! 🎉"
                subTitle="카카오테크 캠퍼스 3기여러분"
            />

            <VerticalSpacing size="40px" />

            <TitledSection title="실시간 급상승 선물랭킹"></TitledSection>
        </div>
    );
}
