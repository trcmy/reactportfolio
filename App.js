import React, { useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Linking, TouchableOpacity } from 'react-native';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Project from './Projects';

const App = () => {
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);

  const handleAboutMeClick = () => {
    aboutMeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleProjectsClick = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGalleryClick = () => {
    galleryRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Navbar>
        <Navbar.Brand href="#home" style={{ marginLeft: '4vw', marginRight: '20vw', fontSize: 40, color: '#FC350E', fontWeight: 'bold'}}>MY VO - Digital Media Portolio</Navbar.Brand>
        <Nav className="mr-auto" style={{ width: '100%' }}>
          <Nav.Link onClick={handleAboutMeClick} style={{ flex: '1', fontSize: 18 }}>ABOUT</Nav.Link>
          <Nav.Link onClick={handleProjectsClick} style={{ flex: '1', fontSize: 18 }}>PROJECT</Nav.Link>
          <Nav.Link onClick={handleGalleryClick} style={{ flex: '1', fontSize: 18 }}>GALLERY</Nav.Link>
          <Nav.Link onClick={handleContactClick} style={{ flex: '1', fontSize: 20 }}>CONTACT</Nav.Link>
        </Nav>
      </Navbar>
      <View ref={aboutMeRef}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Welcome To My Portfolio!</Text>
        <Text style={styles.sectionHeading}>About me</Text>
        <View style={styles.contentContainer}>
          <Image style={styles.image} source={require('./assets/self.jpg')} />
          <Text style={styles.paragraph}>
          Hello! My name is My Vo. <br></br>
          A design uses various elements to convey a mood, draw the eye in a certain direction,
          or evoke several feelings. As a digital media enthusiast, I enjoy blending creativity with technology to craft
          compelling visual narratives. From graphic design to multimedia projects, I approach each endeavor with a blend
          of artistic flair and technical expertise, aiming to leave a lasting impression in the digital landscape.
          </Text>
        </View>
        </View>
      </View>
      <View ref={projectsRef}>
        <Text style={styles.sectionHeading}>Project</Text>
        <Project
          title="QUIZ APP"
          description="For the Quiz App project, my primary goal was to create a user-friendly React Native application
          that efficiently renders a list of questions and answers while supporting various question types like True/False,
          Multiple Choice, and Multiple Answer. I utilized React Native Navigation for seamless navigation between screens and
          implemented components such as Question and Summary as per project requirements. By incorporating these design decisions
          and leveraging React Native's capabilities, I successfully developed a Quiz App that meets the project requirements and
          offers a smooth and engaging user experience."
          videoId="WlpfDZKo0pI"
        />
        <Project
          title="TODO APP"
          description="For the Todo App project, I aimed to create a seamless user experience for managing tasks efficiently while
          incorporating a visually appealing design. Leveraging React Native, Expo, React Native Elements, and Flatlist, I embarked on
          the journey of developing a sleek and functional app. Regarding design decisions, I opted for a sophisticated color scheme
          comprising black, gold, and white to evoke a sense of professionalism. Using UI elements also ensures clarity and enhances
          user comprehension. Also, Flatlist facilitates efficient data rendering, improving the user's navigation experience within the app.
          Each design element was carefully considered to prioritize user convenience and functionality, resulting in a Todo App combining aesthetic and practical utility."
          videoId="c039DxY0BWc"
        />
        <Project
          title="EXERCISE APP"
          description="My primary aim for the Exercise App project was to develop a user-friendly interface for tracking exercise durations,
          utilizing React and useState to implement dynamic functionalities. To accomplish this, I employed my UI/UX design, JavaScript, and
          React programming skills. To address this issue, I carefully structured the component to increment the timer upon start button activation
          and reset it to a reasonable value upon reset button click. I also implemented padding for single digits to ensure a consistent display format."
          videoId="Vk2MoZE7iVQ"
        />
      </View>
      <View ref={galleryRef}>
        <Text style={styles.sectionHeading}>Gallery</Text>
        <Text style={styles.paragraph2}>
        For my App Gallery, I embarked on a creative journey to showcase the versatility and functionality
        of the Figma platform. Through meticulous design and intuitive user experience, I crafted a series of
        interactive prototypes and mockups highlighting collaborative design's power. 
        </Text>
        <View style={styles.galleryContainer}>
          <ScrollView horizontal={true} contentContainerStyle={styles.gallery}>
            <Image style={styles.galleryImage} source={require('./assets/exercise.png')} />
            <Image style={styles.galleryImage} source={require('./assets/todo.png')} />
            <Image style={styles.galleryImage} source={require('./assets/flashcard.png')} />
            <Image style={styles.galleryImage} source={require('./assets/alarm.png')} />
          </ScrollView>
        </View>
      </View>
      <View ref={contactRef}>
        <View style={styles.contact}>
          <Text style={styles.contactHeading}>CONTACT</Text>
          <View style={styles.contactList}>
            <TouchableOpacity onPress={() => Linking.openURL('mailto:info@example.com')}>
              <Text style={styles.contactItem}>EMAIL: my444730@ucf.edu</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.example.com/contact')}>
              <Text style={styles.contactItem}>INSTAGRAM</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.example.com/contact')}>
              <Text style={styles.contactItem}>LINKEDIN</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 40, justifyContent:'center', color: '#747474',}}>
          <Text>© Copyright</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F4F3F3',
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 40,
    paddingHorizontal: 60,
  },
  //welcome part//
  header: {
    backgroundColor: '#E4E4E4',
  },
  headerText: {
    fontSize: 20,
    paddingVertical: 50,
    alignItems: 'center',
    color: '#747474', 
    marginLeft: 650,
  },
  //about//
  sectionHeading: {
    fontSize: 30,
    marginVertical: 30,
    marginLeft: 60,
    fontWeight: 'bold',
    color: '#FC350E',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 60,
  },
  image: {
    width: 400,
    height: 550,
    marginBottom: 40,
  },
  paragraph: {
    flex: 1,
    fontSize: 18,
    marginRight: 100,
    marginLeft: 50,
    color: '#747474', 
    padding: 150,
  },
  //projects
  videoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 600,
    backgroundColor: '#f1f1f1',
    marginHorizontal: 60,
    marginBottom: 60,
  },
  //gallery
  galleryContainer: {
    maxHeight: 800,
    marginBottom: 40,
    marginLeft: 60,
  },
  gallery: {
    alignItems: 'center',
  },
  galleryImage: {
    width: 900,
    height: 500,
    marginRight: 40,
  },
  paragraph2: {
    flex: 1,
    fontSize: 18,
    marginRight: 120,
    marginLeft: 60,
    marginBottom: 40,
    color: '#747474', 
    fontStyle: "italic",
  },
  //contact
  contact: {
    backgroundColor: '#E4E4E4',
    alignItems: 'center',
    paddingVertical: 40,
  },
  contactHeading: {
    color: '#747474',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 40,
    marginRight: 15,
  },
  contactList: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  contactItem: {
    color: '#FB401B',
    fontSize: 18,
    marginHorizontal: 50,
  },
});

export default App;
