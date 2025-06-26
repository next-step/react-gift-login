import Container from "@/components/Container";
import Navigation from "@/components/Navigation";
import Category from "@/components/Category";
import Ranking from "@/components/Ranking";
import Friend from "@/components/Friend";
import DividerDiv from "@/components/DividerDiv";

const Gift = () => {
  return (
    <Container>
      <Navigation />
      <Friend />
      <DividerDiv />
      <Category />
      <DividerDiv />
      <Ranking />
    </Container>
  );
};

export default Gift;
