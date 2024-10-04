import getBanner from "@/actions/get-banner";
import Banner from "@/components/banner";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const banner = await getBanner("7810a535-ed50-4991-a95b-547810f07fe3");

  return (
    <Container>
      <div className="space-y-10 pb-20">
        <Banner data={banner} />
      </div>
    </Container>
  );
};

export default HomePage;
