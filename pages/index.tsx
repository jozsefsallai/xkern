import ImageBlock from '@/components/blocks/ImageBlock';
import TitleBlock from '@/components/blocks/TitleBlock';
import Meta from '@/components/Meta';
import ScrollableContainer from '@/components/scrollable-container/ScrollableContainer';
import TheFooter from '@/components/the-footer/TheFooter';

const Home = () => {
  return (
    <>
      <Meta description="Home page description" url="/" />

      <ScrollableContainer>
        <TitleBlock
          title="xKern"
          slogan="Vision To Innovation"
          id="home"
        />

        <ImageBlock
          src="/images/home/1.jpg"
          id="image"
          secondary={true}
        >
          <h2>Lorem Ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris in nunc sit amet purus sagittis accumsan.
          </p>
        </ImageBlock>

        <ImageBlock
          src="/images/home/2.jpg"
          id="image2"
          reverse={true}
        >
          <h2>Cras Mattis</h2>
          <p>
            Cras mattis luctus vulputate. Donec vitae tempor lacus, in elementum risus.
          </p>

          <TheFooter absolute={true} />
        </ImageBlock>
      </ScrollableContainer>
    </>
  );
};

export default Home;
