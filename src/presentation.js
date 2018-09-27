// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Fill,
  Image,
  Layout,
  Link
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('./font.css');

const theme = createTheme(
  {
    primary: '#111',
    secondary: '#FFB81C',
    tertiary: '#FFF',
    quarternary: '#CECECE'
  },
  {
    primary: 'Helvetica',
    secondary: 'GrandmasterClash'
  },
  {
    components: {
      listItem: {
        fontSize: '4rem'
      }
    }
  }
);
theme.screen.components.listItem.fontSize = '3rem';
theme.screen.components.list.listStyle = 'none';
theme.screen.components.listItem.marginBottom = '2rem';

const images = {
  lut: require('./logo.svg'),
  syntax: require('./logo.png'),
  pocket: require('./pocket.gif'),
  will: require('./will.gif'),
  ricky: require('./ricky.gif'),
  up: require('./upgraydd.gif'),
  chris: require('./chris.gif'),
  sk8: require('./sk8.gif'),
  robocop: require('./roboop.gif'),
  homer: require('./homer.gif'),
  airborn: require('./airborn.gif'),
  fast: require('./2fast.gif')
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide
          transition={['slide']}
          bgColor="primary"
          notes="* Intro. Hey what's up.. <br /><br />
          * Today I'm going to be sharing my secrets about learning fast. <br /><br />
          * Somethin that has become increasingly important as our industry changes and grows<br /><br />
          * Despite the name, there will not be any fast and furious gifs in this talk, this is going to be serious.
        "
        >
          <Heading
            size={1}
            fit
            caps
            lineHeight={1}
            textColor="secondary"
            textFont="secondary"
          >
            2 Fast 2 Furious
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            How to learn quickly in a rapidly changing development world
          </Text>
          <Text margin="4rem 0 0" textColor="tertiary" size={1} bold>
            @stolinski @leveluptuts
          </Text>
        </Slide>
        <Slide transition={['slide']} bgColor="primary">
          <Fill>
            <Image width={'100%'} src={images.fast} />
          </Fill>
        </Slide>
        <Slide
          transition={['slide']}
          bgColor="primary"
          notes="* If you I've seen me before it's probably from one of these two things<br /><br />
          * I created Level Up Tutorials<br /><br />
          * Tutorial streaming service <br /><br />
          * I've made over 2,000 of both free and premium video tutorials that have gained over 22million views on Youtube<br /><br />
          * I've createed 300 tutorials in the past year<br /><br />
          * I also co-host a weekly full stack podcast with Wes Bos called Syntax.<br /><br />"
        >
          <Heading size={1} textColor="secondary" textFont="secondary">
            Who Am I?
          </Heading>
          <Layout style={{ alignItems: 'center' }}>
            <Fill>
              <Link href="https://www.leveluptutorials.com/" target="_blank">
                <Image src={images.lut} />
              </Link>
            </Fill>
            <Fill>
              <Link href="https://syntax.fm/" target="_blank">
                <Image src={images.syntax} />
              </Link>
            </Fill>
          </Layout>
        </Slide>
        <Slide
          transition={['slide']}
          bgColor="secondary"
          textColor="primary"
          notes="* Before we get into it I wanted to take soem time to talk about WHAT exactly we need to learn first<br /><br />
          * Almost thee most important question here<br /><br />
          * What's a good way to learn slowly? Learn the wrong thing<br /><br />"
        >
          <Heading size={1} textColor="primary" textFont="secondary">
            What To Learn?
          </Heading>
          <Image src={images.will} />
        </Slide>
        <Slide
          transition={['slide']}
          bgColor="primary"
          textColor="tertiary"
          notes="* Things make a huge splash and it goes one of two ways<br /><br />
          * How much time can you afford to lose<br /><br />
          * Fizzles out over time or explodes and contiues to grow<br /><br />"
        >
          <List>
            <Heading size={1} textColor="secondary" textFont="secondary">
              Big Splash
            </Heading>
            <ListItem>
              Something comes out and everyone is talking about it for a week.
            </ListItem>
          </List>
        </Slide>
        <Slide
          transition={['slide']}
          bgColor="primary"
          textColor="tertiary"
          notes="
          * One reason why you might learn something is because going the distatnce<br /><br />
          * Why take the time to learn something if you aren't going to use those skills ever again<br /><br />
          * Wait for mainstream brands and dev teams to invest time in platform<br /><br />
          * Nike launched a Gatsby site, so if you were waiting for that one it's prob good<br /><br />
          "
        >
          <List>
            <Heading size={1} textColor="secondary" textFont="secondary">
              Going The Distance
            </Heading>
            <ListItem>Wait and see who's using</ListItem>
          </List>
        </Slide>
        <Slide
          transition={['slide']}
          bgColor="primary"
          textColor="tertiary"
          notes="* One reason to learn is to make more money<br /><br />
          * Get those skills that allow you to gett a promotion or a more coveted role<br /><br />
          * Learn the skills needed for your next promotion and learn without anyone telling you to.   
          "
        >
          <List>
            <Heading size={1} textColor="secondary" textFont="secondary">
              Upgrayedd
            </Heading>
            <ListItem>Looking to up your income</ListItem>
            <Image src={images.up} />
          </List>
        </Slide>
        <Slide
          transition={['slide']}
          bgColor="primary"
          textColor="tertiary"
          notes="* This one can be tough. It can be overwhelming and difficult for the dev that's already put a ton of energy into this industry.<br /><br />
          * Job market isn't matching resumes<br /><br />
          * Skills are becoming saturated and obsolete<br /><br />"
        >
          <List>
            <Heading size={1} textColor="secondary" textFont="secondary">
              Falling Behind
            </Heading>
            <ListItem>Job market has moved</ListItem>
            <ListItem>Your skills are obsolete</ListItem>
          </List>
        </Slide>
        <Slide
          transition={['slide']}
          bgColor="primary"
          textColor="tertiary"
          notes="* Last one is easy,  for fun <br /><br />
          * Developers get to make cools things and that can be really fun<br /><br />
          * Who cares if I'm never going to use the web audio api to make a synth in a client project, it's fun.<br /><br />
          * Can still make you a better programmer regardless.<br /><br />"
        >
          <List>
            <Heading size={1} textColor="secondary" textFont="secondary">
              For Fun!
            </Heading>
            <ListItem>Web skills can be exciting</ListItem>
          </List>
        </Slide>
        <Slide
          transition={['slide']}
          bgColor="primary"
          textColor="tertiary"
          notes="* Since I basically learn web dev for a living, it's crucial that I learn things fast and efficiently.<br /><br />
          So in this talk I'll be giving you 6 steps for learning things fast."
        >
          <Heading size={1} textColor="secondary" textFont="secondary">
            6 Steps for skillz™
          </Heading>
        </Slide>
        <Slide
          transition={['slide']}
          bgColor="secondary"
          textColor="primary"
          notes="I love this gif for this step because it shows both external and internal exploration."
        >
          <Heading size={3} textColor="tertiary" textFont="secondary">
            Step 1.
          </Heading>
          <Heading size={1} textColor="primary" textFont="secondary">
            Explore
          </Heading>
          <Image src={images.homer} />
        </Slide>
        <Slide
          transition={['slide']}
          bgColor="primary"
          textColor="tertiary"
          notes="
          * You'll often see people making claims about different educational mediums link Video tutorials are bad for learning, or this or that isn't efficient for learning<br /><br />
          * This is totally wrong. The reality is we all learn differently. SO in this step we need to explore our own learning strategies <br /><br />
          * You need to pay attention to what is working for you.<br /><br />
          * I got lucky for this one, my wife Courtney is a Dr of EDU psych and because of that I've had every psychological test known to man done to me<br /> <br />
          * Bad short term memory, eyes gloss over for blogs<br /><br />
          * So what you need to do, is pay attention to what works best for you and don't force what doesn't work<br /><br />
          "
        >
          <List>
            <Heading size={1} textColor="secondary" textFont="secondary">
              Style
            </Heading>
            <ListItem>Docs</ListItem>
            <ListItem>Source</ListItem>
            <ListItem>Blogs</ListItem>
            <ListItem>Video</ListItem>
            <ListItem>Quizzes</ListItem>
            <ListItem>Apps</ListItem>
            <ListItem>Podcasts</ListItem>
          </List>
        </Slide>
        <Slide
          transition={['slide']}
          bgColor="primary"
          textColor="tertiary"
          notes="* Likewise you'll need to take stock of your learning resources <br /><br />
          * Follow people and consume there media"
        >
          <List>
            <Heading size={1} textColor="secondary" textFont="secondary">
              Resources
            </Heading>
            <ListItem>Find your preferred learning resources</ListItem>
          </List>
        </Slide>
        <Slide
          transition={['slide']}
          bgColor="secondary"
          textColor="primary"
          notes="* Focus on the stuff you can take with you<br /><br />
          * Like Michel Goosen here you'll be able to go from topic to topic easily"
        >
          <Heading size={3} textColor="tertiary" textFont="secondary">
            Step 2.
          </Heading>
          <Heading size={1} textColor="primary" textFont="secondary">
            Build Your Foundation
          </Heading>
          <Image src={images.airborn} />
        </Slide>
        <Slide
          transition={['slide']}
          bgColor="primary"
          textColor="tertiary"
          notes="* We used to say with out foundation, your house will collapse. <br /><br />
            * So here, we're going to want to put focus onto our fundamental skills js, css, html<br /><br />
            * These are skills you can improve no matter what you are working on.<br /><br />
            * Frameworks matter less when your JS is strong<br /><br />
            * People in yt comments talking about .map being a react thing<br /><br />
          "
        >
          <List>
            <Heading size={1} textColor="secondary" textFont="secondary">
              *Fun*damentals
            </Heading>
            <ListItem>Core HTML, CSS, JS & Programming Fundamentals</ListItem>
            <ListItem>Can always improve your foundation</ListItem>
            <ListItem>Frameworks matter less when your JS is strong</ListItem>
          </List>
        </Slide>
        <Slide
          transition={['slide']}
          bgColor="primary"
          textColor="tertiary"
          notes="
          * Focus on things you can take with you.<br /><br />
          * Use native libs wherever possible over platform libs (where it makes sense <br /><br />
          * Think about a lib that you used recently that could have been just a js lib instead of an React lib<br /><br />
          * Chances are that JS lib is more supported and less likely to go away
          "
        >
          <List>
            <Heading size={1} textColor="secondary" textFont="secondary">
              Native
            </Heading>
            <ListItem>Focus on things you can take with you</ListItem>
            <ListItem>Use native libs wherever it makes sense</ListItem>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="tertiary" textFont="secondary">
            Step 3.
          </Heading>
          <Heading size={1} textColor="primary" textFont="secondary">
            Narrow Your Focus
          </Heading>
          <Image src={images.chris} />
        </Slide>
        <Slide
          transition={['slide']}
          bgColor="primary"
          textColor="tertiary"
          notes="
          * Learn core platforms in isolation
          * Major platorms (react, redux rather than smaller ones like styled-components, routing)<br /><br />
          * learn react first <br /><br />
          * then react + redux<br /><br />
          * then react + apollo<br /><br />
          * Why? Because context is key when trying to learn<br /><br />
          * When you don't know the boundaries between what you're learning you don't learn the indivdual components.
          "
        >
          <List>
            <Heading size={1} textColor="secondary" textFont="secondary">
              Context Is Key
            </Heading>
            <ListItem>Must have proper context </ListItem>
            <ListItem>Boundaries blurred</ListItem>
          </List>
        </Slide>
        <Slide
          transition={['slide']}
          bgColor="primary"
          textColor="tertiary"
          notes="* This makes adding on to concepts later on more difficult<br /><br />
           * Future learning of concepts will be slower.<br /><br />
           * When you go to learn React + Apollo after learning react redux you have to learn the entirety of the stack all over again instead of just the new parts<br /><br />
           * git merging in new content as oppose to starting a new file from scratch"
        >
          <List>
            <Heading size={1} textColor="secondary" textFont="secondary">
              Turtle Time
            </Heading>
            <ListItem>
              Future learning speed is slowed by not having proper context
            </ListItem>
            <ListItem>git merge vs new file</ListItem>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="tertiary" textFont="secondary">
            Step 4.
          </Heading>
          <Heading size={1} textColor="primary" textFont="secondary">
            Promote Excitement
          </Heading>
          <Image src={images.pocket} />
        </Slide>
        <Slide
          transition={['slide']}
          bgColor="primary"
          textColor="tertiary"
          notes="* What I mean by promote is that you need to find things to get you excited. <br /><br />
            * Remember when you first started programing and everything seemed so fresh and exciting<br /><br />
            * We need to find and harness that energy
          "
        >
          <List>
            <Heading size={1} textColor="secondary" textFont="secondary">
              Fresh
            </Heading>
            <ListItem>
              Remember how much fun you were having when you first started to
              code?
            </ListItem>
          </List>
        </Slide>
        <Slide
          transition={['slide']}
          bgColor="primary"
          textColor="tertiary"
          notes="
          * Why do we need to be excited?<br /><br />
          * You enter flow, where time stops and you dial in.
        "
        >
          <List>
            <Heading size={1} textColor="secondary" textFont="secondary">
              Flow
            </Heading>
            <ListItem>Flow happens when you are excited</ListItem>
          </List>
        </Slide>
        <Slide
          transition={['slide']}
          bgColor="primary"
          textColor="tertiary"
          notes=" * How to get there?<br /><br />
        * Harness the power of things that already make you excited.<br /><br />
        * Pick projects that are based around your non-code related passions<br /><br />
        * Example hobby projects.. raspberry pi beer brewing setup, bboytools, <br /><br />
        "
        >
          <List>
            <Heading size={2} textColor="secondary" textFont="secondary">
              Pick Your Projects
            </Heading>
            <ListItem>Things you care about</ListItem>
            <ListItem>Use hobbies for projects</ListItem>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="tertiary" textFont="secondary">
            Step 5.
          </Heading>
          <Heading size={1} textColor="primary" textFont="secondary">
            Grind Time
          </Heading>
          <Image src={images.sk8} />
        </Slide>
        <Slide
          transition={['slide']}
          bgColor="primary"
          textColor="tertiary"
          notes="
          * The moment you think you are too smart, you've lost the game.<br /><br />
          * You need the student mentality or else you miss learning opportunities<br /><br />
          * The other day, I saw blog post headline about render props and thought... oh I know that, I don't need to read it<br /><br />
          * I caught myself, opened it up and actually learned some new things I hadn't thought about before.
          "
        >
          <List>
            <Heading size={1} textColor="secondary" textFont="secondary">
              Ego Trippin'
            </Heading>
            <ListItem>Check your ego. You aren’t that smart</ListItem>
            <ListItem>I'm ready to learn</ListItem>
            <ListItem>I'm ready to keep an open mind</ListItem>
            <ListItem>I'm a student</ListItem>
          </List>
        </Slide>
        <Slide
          transition={['slide']}
          bgColor="primary"
          textColor="tertiary"
          notes="* As someone who loves to code, this one gets me excited the most <br /><br />
          * So you need to care less about everything and start writing more code without worrying about being judged.<br /><br /> 
          * 'whats the best database for this hobby project i'll never look at again'<br /><br /> 
          * When you are coding to learn. Stop worrying about getting everything right and break things.<br /><br /> 
          * So much development happens in those moments where you are fixing problems that you created"
        >
          <List>
            <Heading size={1} textColor="secondary" textFont="secondary">
              Iteration Driven Development
            </Heading>
            <ListItem>Give fewer shits and make more things</ListItem>
            <ListItem>Iteration and refinement will produce quality</ListItem>
          </List>
        </Slide>
        <Slide
          transition={['slide']}
          bgColor="primary"
          textColor="tertiary"
          notes="* There are always going to be a ton of smarter people than you, use them.<br /><br />
          * I don't know how many people remember the John Papa style guide<br /><br />
          * A lot of people might look at snippets as cheating learning<br /><br />
          * I see it as exposure to best practices<br />
          "
        >
          <List>
            <Heading size={1} textColor="secondary" textFont="secondary">
              Use Smarter People
            </Heading>
            <ListItem>Find Good Style Guides</ListItem>
            <ListItem>User sponsored Snippet Libraries</ListItem>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="tertiary" textFont="secondary">
            Step 6.
          </Heading>
          <Heading size={1} textColor="primary" textFont="secondary">
            Total Immersion
          </Heading>
          <Image src={images.robocop} />
        </Slide>
        <Slide
          transition={['slide']}
          bgColor="primary"
          textColor="tertiary"
          notes="* You're going to hear how people who talk about this stuff talk.<br /><br />
          * Follow everything you can<br /><br />
          * If you hear things enough, it will be how you talk about it naturally<br /><br />
          * You will learn without even trying.<br /><br />
          * I'd like to finish off with a quote from a smart individual"
        >
          <List>
            <Heading size={1} textColor="secondary" textFont="secondary">
              Consume
            </Heading>
            <ListItem>
              Podcasts, YT Videos, Blogs, Slack Groups, Twitter Follower
            </ListItem>
            <ListItem>Let it permeate your brain</ListItem>
            <ListItem>Surround yourself with topic</ListItem>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="secondary" textColor="primary">
          <BlockQuote textFont="secondary">
            <Quote>If you're not first, you're last</Quote>
            <Cite>Ricky Bobby</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={['slide']} bgColor="primary" textColor="tertiary">
          <Heading size={1} textColor="secondary" textFont="secondary">
            Thanks!
          </Heading>
          <List textAlign="center">
            <Text textColor="tertiary">Twitter & IG</Text>
            <Text textColor="tertiary">@stolinski / @leveluptuts</Text>
            <Text textColor="tertiary">Level Up Tutorials Youtube</Text>
            <Link href="https://www.leveluptutorials.com/" target="_blank">
              <Text textColor="tertiary">LevelUpTutorials.com</Text>
            </Link>
            <Link href="https://syntax.fm/" target="_blank">
              <Text textColor="tertiary">Syntax.fm</Text>
            </Link>
          </List>
        </Slide>
      </Deck>
    );
  }
}
