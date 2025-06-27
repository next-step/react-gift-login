import Container from "@/components/Container";
import Navigation from "@/components/Navigation";
import Category from "@/components/Category";
import Ranking from "@/components/Ranking";
import Friend from "@/components/Friend";
import Divider from "@/components/Divider";
import Banner from "@/components/Banner";

const Gift = () => {
  return (
    <Container>
      <Navigation />
      <Friend />
      <Divider />
      <Category />
      <Divider />
      <Banner />
      <Divider />
      <Ranking />
    </Container>
  );
};

export default Gift;
