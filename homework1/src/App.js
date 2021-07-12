import Chess from './Components/Chess/Chess';
// import Colortest from './Components/Colortest/Colortest';
import ColorFlipper from './Components/ColorFlipper/ColorFlipper';
import Bold from './Components/Bold/Bold';
import UnderlineItalic from './Components/UndrelineItalic/UnderlineItalic';
import Menu from './Components/Menu/Menu';
import Section from './Components/Section/Section';
import './App.css';

function App() {
   // Task 5
   const customHtmlEl = (
      <div className="customHtmlEL" title={'ololosha'}>
         TEEEEEESSSSSTTTTT
      </div>
   );

   // Menu anchors
   const links = ['main_page', 'article', 'about', 'contacts'];

   return (
      <div className="container" id="main_page">
         <Menu anchor={links} />
         <Section id="article">
            <h2>Статьи</h2>
            <p>
               Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
               commodo ligula eget dolor. Aenean massa. Cum sociis natoque
               penatibus et magnis dis parturient montes, nascetur ridiculus
               mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
               quis, sem. Nulla consequat massa quis enim. Donec pede justo,
               fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
               rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
               felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
               Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
               Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
               enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
               tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque
               rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
               Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
               rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
               quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam
               quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
               Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut
               libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci
               eget eros faucibus tincidunt.
            </p>
         </Section>
         <Section id="about">
            <h2>О нас</h2>
            <p>
               Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
               commodo ligula eget dolor. Aenean massa. Cum sociis natoque
               penatibus et magnis dis parturient montes, nascetur ridiculus
               mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
               quis, sem. Nulla consequat massa quis enim. Donec pede justo,
               fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
               rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
               felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
               Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
               Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
               enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
               tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque
               rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
               Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
               rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
               quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam
               quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
               Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut
               libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci
               eget eros faucibus tincidunt.
            </p>
         </Section>
         <Section id="contacts">
            <h2>Контакты</h2>
            <p>
               Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
               commodo ligula eget dolor. Aenean massa. Cum sociis natoque
               penatibus et magnis dis parturient montes, nascetur ridiculus
               mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
               quis, sem. Nulla consequat massa quis enim. Donec pede justo,
               fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
               rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
               felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
               Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
               Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
               enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
               tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque
               rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
               Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
               rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
               quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam
               quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
               Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut
               libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci
               eget eros faucibus tincidunt.
            </p>
         </Section>
         <Section>
            <h3>{`Task 3, Bold Component`}</h3>
            <Bold className={'bold_component'}>I am Bold Component</Bold>
         </Section>
         <Section>
            <h3>{`Task 4, Underline & Italic Component`}</h3>
            <UnderlineItalic className={'underline_italic_component'}>
               I am Underlined and have Italic at the same time
            </UnderlineItalic>
         </Section>
         <Section>
            <h3>{`Task 5, Custom html element which receives data and show it as a title`}</h3>
            {customHtmlEl}
         </Section>
         <Section>
            <h3>{`Task 7, Create a block and change its color randomly by clicking`}</h3>
            <ColorFlipper></ColorFlipper>
         </Section>
         <Section>
            <Chess></Chess>
         </Section>
      </div>
   );
}

export default App;
