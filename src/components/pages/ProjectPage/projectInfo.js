import arcade from "./images/arcade.jpg";
import leapmotion from "./images/leapmotion.jpeg";
import roomscanner from "./images/roomscanner.jpg";
import shoes from "./images/shoes.jpg";
import treadmill from "./images/treadmill.jpg";
import arcadedrum from "./images/arcadedrum.jpg";

const info = [
  {
    id: '00',
    title: 'Treadmill',
    description:
      'The Omnidirectional VR Treadmill is a treadmill that has a connected virtual reality (VR) set, which gives users the experience of moving around in a fictional or foreign place. This design was inspired by the Holodeck from Star Trek and was one of the first projects of the UTOPH team.',
    image: treadmill,
    start: 'October 2015',
    end: 'November 2017',
    members: 'Andrew Ilersich, Caulan Rupke, Michael Lawee, Torin Anderson',
  },
  {
    id: '01',
    title: 'Leap Arcade',
    description:
      "The Leap Motion Arcade is a multiplayer virtual reality (VR) game console with multiple playable games, including one inspired by the Avatar series. It was put up for display at the 2018 UofT Fall Club's Fair and is currently playable in the Bahen lobby.",
    image: arcade,
    start: 'May 2019',
    end: 'September 2019',
    members: 'Andrew Ilersich, Anthony Kwon, Ben Goodchild, Torin Anderson',
  },
  {
    id: '02',
    title: 'Omni-Directional Shoes',
    description:
      'The Omni-Directional Shoes are a pair of electronic slippers connected to a virtual reality (VR) set that follow the motion of the user and gives them the experience of moving around in a fictional or foreign place. This project was designed to be an alternate presentation of the Holodeck from Star Trek, similar to our omnidirectional VR treadmill project.',
    image: shoes,
    start: '2017',
    end: '2019',
    members: 'Andrew Ilersich, Ben Goodchild, Torin Anderson',
  },
  {
    id: '03',
    title: 'Room Scanner',
    description:
      "The 3D Room Scanner is a handheld device that can be used to easily scan a room and get details about it, such as its size and shape, which can be used to develop virtual reality (VR) landscapes. By sweeping the device's scanner across the room, it can identify the corners and dimensions to create a 3D mapping which can be used as a framework for VR projects. This model primarily uses Lidar, a 360 degree camera, and a HTC Vive controller, which keeps track of the device's position.",
    image: roomscanner,
    start: 'January 2018',
    end: 'Ongoing',
    members: 'Andrew Ilersich, Torin Anderson, Anthony Kwon, Ben Goodchild',
  },
  {
    id: '04',
    title: 'Leap Motion',
    description:
      'The Leap Motion VR Interaction is a tool that uses a sensor to map the motion of the user’s hands to a digital 3D skeleton without needing to attach any external devices. Currently it is able to track simple motions with relative accuracy; our goal for this project is to integrate multiple sensors in order to improve the precision and recognise more complex gestures and motions.',
    image: leapmotion,
    start: '2016',
    end: 'Ongoing',
    members: 'All',
  },
  {
    id: '05',
    title: 'Arcade Drum Game',
    description:
      'The Arcade Drum Game is a 3D Rhythm game that uses 4 sets of electronic bongos attached to an Arduino to send signals when a hand contacts the pads. The game was built in Unity with the next implementation goal of bringing it into VR.',
    image: arcadedrum,
    start: 'September 2022',
    end: 'December 2022',
    members: 'Irwin Ngo, Scott Hirano, Andrew Cheung, Jeslyn Wang, Viet Minh Nguyen, Andrew Magnuson, Ling Bi, Andy Huang, Youssef Rachad',
  },
];

export default info;
