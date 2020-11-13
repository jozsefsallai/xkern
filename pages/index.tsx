import Block from '@/components/blocks/Block';
import ImageBlock from '@/components/blocks/ImageBlock';
import TitleBlock from '@/components/blocks/TitleBlock';
import ContactInfo from '@/components/contact/ContactInfo';
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
          src="/images/home/xkern_logo.png"
          id="image"
          secondary={true}
        >
          <h2>Vision To Innovation</h2>
          <p>
            xKern is a software company that plans to bring about simple but significant changes to how technology is interwoven in everyday life. We intend to pave a foundation of our vision and start building up on it with breakthrough platforms. Our products and services will heavily focus on user experience and accessibility. We strive to become the gold standard of software development with the quality of our software and services.
          </p>
        </ImageBlock>

        <ImageBlock
          src="/images/home/apps.png"
          id="image3"
          secondary={true}
        >
          <h2>Native Applications</h2>
          <p>
            We build world class applications
          </p>
        </ImageBlock>

        <Block id="footer" center>
          <div style={{ padding: '3em' }}>
            <h2 className="subtitle">More Soon</h2>
            <p>
              Our projects are in the works. We'll release something  truly remarkable soon enough
            </p>
          </div>
          <TheFooter home />
        </Block>
      </ScrollableContainer>
    </>
  );
};

export default Home;
