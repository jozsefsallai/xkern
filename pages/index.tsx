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
      <Meta description="Building advanced IT services, native mobile applications and websites. xKern delivers solutions that blend in with our lives ease our tasks." url="/" />

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
            Bringing about simple but significant changes to how technology is interwoven in everyday life. Our products and services will heavily focus on user experience and accessibility. We strive to become the gold standard of software development with the quality of our software and services.
          </p>
        </ImageBlock>

        <ImageBlock
          src="/images/home/apps.png"
          id="image3"
          secondary={false}
        >
          <h2>Native Applications</h2>
          <p>
            We build world class applications. We respect the design patterns, hardware and software features and the accessibility options provided by the platform to build applications that feel natural to use.
          </p>
        </ImageBlock>

        <ImageBlock
          src="/images/home/sprout.png"
          id="image4"
          secondary={true}
        >
          <h2>Green Earth</h2>
          <p>
            We plant a tree for every 200,000 INR we make. We have a commitment to our planent. In addition to being as eco-friendly as we can in our operations, we plant trees and nurture them for a better tomorrow. Join us in this.
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
