import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const courses = [
  { name: 'First Aid', duration: '6 weeks', fee: 1500, Discription: 'In our First Aid course, you will learn how to respond effectively in emergencies, offering cruial care that can save lives. This comprehensive training covers essential techniques such as CPR, wound management, and handling common injuries.'},
  { name: 'Sewing', duration: '6 months', fee: 1500, Discription: 'Our Sewing course is designed for those who want to blend creativity with practical skills. Over six months, you will learn everthing from basic stitches to advanced techniqes, enabling you to repair and create clthing, soft furnishings, and much more.'}, 
  { name: 'Life Skills', duration: '6 weeks', fee: 1500, Discription: 'Our Life Skills course goes beyond the basics to prepare you for success in every aspect of life. This course covers a wide range of essential topics, including communication, financial literacy, time management, and emotional intelligence.' },
  { name: 'Landscaping', duration: '6 months', fee: 1500, Discription: 'Our Landscaping course is ideal for those with a passion for the outdoors and a keen eye for design. This course covers everthing from garden planning and plant selection to soil management and sustainable practices.' },
  { name: 'Child Minding', duration: '6 weeks', fee: 750, Discription: 'Our Child Minding course is designed to equip you wiht the skills needed to provide exceptional care for children. The intensive six-week program covers child development, safety protocols, nutrition, and engaging activities to support learning and growth.' },
  { name: 'Garden Maintenance', duration: '6 months', fee: 750, Discription: 'Our Garden Maintenance course is tailored for those who love working with plants and want to maintain beautiful, thriving gardens. In this six-week program, you will learn essential gardening skills, including plant care, pest control, and seasonal maintenance.' },
  { name: 'Cooking', duration: '6 weeks', fee: 750, Discription: 'Our Cooking course is perfect for those who want ot master the art of cooking in a short period. Over six weeks, you will learn everthing from basic cooking techniques to advanced recipes that will impress any palate.' },
];

// Home Page
const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Empowering the Nation Online Academy operates on a straightforward process.
        Students can enroll in our comprehensive six-month programs or opt for shorter, specialized courses.
      </Text>
      <Button title="Six-Month Courses" onPress={() => navigation.navigate('SixMonthCourses')} />
      <Button title="Six-Week Courses" onPress={() => navigation.navigate('SixWeekCourses')} />
      <Button title="Calculate Fees" onPress={() => navigation.navigate('CalculateFees')} />
      <Button title="Contact Us" onPress={() => navigation.navigate('Contact')} />
      <Button title="About Us" onPress={() => navigation.navigate('About')} />
    </View>
  );
};

// Six-Month Courses
const SixMonthCoursesScreen = ({ navigation }: any) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.subtitle}>Six-Month Courses</Text>
      {courses
        .filter((course) => course.duration === '6 months')
        .map((course, index) => (
          <Button
            key={index}
            title={course.name}
            onPress={() => navigation.navigate('CourseDetail', { course })}
          />
        ))}
    </ScrollView>
  );
};

// Six-Week Courses
const SixWeekCoursesScreen = ({ navigation }: any) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.subtitle}>Six-Week Courses</Text>
      {courses
        .filter((course) => course.duration === '6 weeks')
        .map((course, index) => (
          <Button
            key={index}
            title={course.name}
            onPress={() => navigation.navigate('CourseDetail', { course })}
          />
        ))}
    </ScrollView>
  );
};

// Course Detail
const CourseDetailScreen = ({ route, navigation }: any) => {
  const { course } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{course.name} Course</Text>
      <Text>Duration: {course.duration}</Text>
      <Text>Fee: ${course.fee}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

// Calculate Fees
const CalculateFeesScreen = () => {
  const totalFee = courses.reduce((sum, course) => sum + course.fee, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Total Course Fees</Text>
      <Text>Total Fee: ${totalFee}</Text>
    </View>
  );
};

// Contact Page
const ContactScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Contact Us</Text>
      <Text>Email: WWW.EMPOWERINGTHENATION.COM</Text>
      <Text>Phone: 012-635-8975</Text>
      <Text>Address: 1. 123 Ubuntu Avenue, Newtown, Johannesburg, 2001
                     2. 456 Baobab Street, Sandton, Johannesburg, 2196
                     3.789 Madiba Lane, Soweto, Johannesburg, 1804
      </Text>
    </View>
  );
};

// About Us Page
const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>About Us</Text>
      <Text>
      Founded in 2018, Empowering the Nation is a Johannesburg-based initiative led by Precious Radebe, dedicated to providing vital skills training for domestic workers and gardeners. Driven by a personal mission to uplift those in her community, Precious created this training school to offer opportunities that her parents and other elderly relatives never had—a chance to upskill, become more marketable, and improve their earning potential.
Our Mission
Empowering the Nation aims to transform the lives of domestic workers and gardeners by equipping them with the skills necessary to thrive in today’s job market. Whether it's helping them secure better-paying jobs or empowering them to start their own small businesses, our courses are designed to open doors to new opportunities.
Our Programs
We offer a range of comprehensive training programs tailored to meet the needs of our students:
•	Six-Month Learnerships: An intensive program spread over 12 weeks, designed to provide in-depth knowledge and hands-on experience.
•	Six-Week Short Skills Training Programs: Focused and practical, these courses are perfect for those looking to quickly upskill and enhance their marketability.
Our Value to Employers
Many employers seek to upskill their domestic workers and gardeners to provide more skilled services to their households. At Empowering the Nation, we offer flexible course selections with attractive discounts:
•	One course – no discount
•	Two courses – 5% discount
•	Three courses – 10% discount
•	More than three courses – 15% discount
Our Vision
We believe in the power of education to uplift communities. By empowering domestic workers and gardeners with new skills, we are not just enhancing their job prospects but also contributing to the broader goal of economic empowerment within our community.
Our Commitment to Quality
We take pride in maintaining a professional image that reflects the importance of our mission. Our choice of images, fonts, and colors on this website is carefully selected to align with the purpose and professionalism of Empowering the Nation.

      </Text>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SixMonthCourses" component={SixMonthCoursesScreen} />
        <Stack.Screen name="SixWeekCourses" component={SixWeekCoursesScreen} />
        <Stack.Screen name="CourseDetail" component={CourseDetailScreen} />
        <Stack.Screen name="CalculateFees" component={CalculateFeesScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#228b22',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
