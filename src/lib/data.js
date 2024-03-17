import { BiHappy } from 'react-icons/bi'
import { MdEmergencyRecording, MdOutlinePhotoLibrary } from 'react-icons/md'
import { FaUserCircle } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { PiBookmarkSimpleFill } from "react-icons/pi";
import { MdGroups } from "react-icons/md";
import { PiVideoFill } from "react-icons/pi";
import { FaShop } from "react-icons/fa6";
import { RiMessengerFill } from "react-icons/ri";
import { Expand, Group, Home, Shop, Users, Video } from "../assets/icons/index";

export const posts = [
  {
    title:
      "Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.",
    user: "Cisco Neimo",
    user_img: "/img/images.jpg",
    img: "/img/fate.jpg",
    time: "2h ago",
  },
  {
    title:
      "Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.",
    user: "jeams pichar",
    user_img: "/img/images2.jpg",
    img: "/img/jjk.jpg",
    time: "30min ago",
  },
  {
    title:
      "Include popular icons in your React projects easily with react-icons, which utilizes ES6 .",
    user: "Levin kimotu",
    user_img: "/img/images.jpg",
    img: "/img/cre.jpg",
    time: "37min ago",
  },
  {
    title:
      "پاکستان اووپنر امام الحق کی شادی کی تقریبات شروع قوالی نائیٹ تھی لاسٹ نائیٹ ،",
    user: "Levin kimotu",
    user_img: "/img/images1.jpg",
    img: "/img/cop.jpg",
    time: "1h ago",
  },
];

export const postBtns = [
  {
    btnTitle: "Live video",
    icon: (
      <MdEmergencyRecording className="text-lg sm:text-2xl text-teal-500" />
    ),
  },
  {
    btnTitle: "Photo/video",
    icon: (
      <MdOutlinePhotoLibrary className="text-lg sm:text-2xl text-emerald-500" />
    ),
  },
  {
    btnTitle: "Feeling/activity",
    icon: <BiHappy className="text-lg sm:text-2xl text-amber-500" />,
  },
];

export const SidebarMenuItems = [
  {
    mTitle: "cisco neimo",
    icon: <FaUserCircle className="text-2xl text-[#36d164cc]" />,
    to:"/profile"
  },
  {
    mTitle: "Find Friends",
    icon:   <FaUserGroup className="text-2xl text-[#36d164cc]" />,
    to:"/friends"
  },
  {
    mTitle: "Saved",
    icon: <PiBookmarkSimpleFill className="text-2xl text-[#36d164cc]" />,
    to:"/saved"
  },
  {
    mTitle: "Groups",
    icon: <MdGroups className="text-2xl text-[#36d164cc]" />,
    to:"/groups"
    ,
  },
  {
    mTitle: "Videos",
    icon: <PiVideoFill className="text-2xl text-[#36d164cc]" />,
    to:"/videos"
    ,
  },
  {
    mTitle: "Marketplace",
    icon: <FaShop className="text-2xl text-[#36d164cc]" />,
    to:"/marketplace"
  },
  {
    mTitle: "Messenger",
    icon: <RiMessengerFill className="text-2xl text-[#36d164cc]" />,
    to:"/messenger"
  },
  
];
export const TopbarMenu = [
  {
    icon: <Home />,
    to:"/"
  },
  {
    icon:   <Users />,
    to:"/friends"
  },
  {
    icon: <Video />,
    to:"/videos"
  },
  {
    icon: <Shop />,
    to:"/marketplace"
    ,
  },
  {
    icon: <Group />,
    to:"/groups"
    ,
  },
  {
    icon: <Expand />,
    to:"/bookmarks"
  },
];

export const videoPosts = [
  {
    title:
      "FIGHTER- Sher Khul Gaye (Song) - Hrithik Roshan,Deepika Padukone -Vishal Sheykhar -Kumaar -Bhushan K",
    user: "Cisco Neimo",
    user_img: "/img/images.jpg",
    video: "/videos/FIGHTER- Sher Khul Gaye (Song) - Hrithik Roshan,Deepika Padukone -Vishal Sheykhar -Kumaar -Bhushan K.mp4",
    time: "2h ago",
  },
  {
    title:
      "GEET LAGDAI (Official Music Video) Kaka - Kanika Mann - Kaka Kera Tah kara ke Dekhni - Kaka New Song",
    user: "Cisco Neimo",
    user_img: "/img/images.jpg",
    video: "/videos/GEET LAGDAI (Official Music Video) Kaka - Kanika Mann - Kaka Kera Tah kara ke Dekhni - Kaka New Song.mp4",
    time: "2h ago",
  },
  {
    title:
      "Hasti Rahe Tu - Paradox -(Bhula Main Jahaan)- Amulya Rattan - EP- The Unknown Letter - Def Jam India",
    user: "Cisco Neimo",
    user_img: "/img/images.jpg",
    video: "/videos/Hasti Rahe Tu - Paradox -(Bhula Main Jahaan)- Amulya Rattan - EP- The Unknown Letter - Def Jam India.mp4",
    time: "2h ago",
  },
  {
    title:
      "Kaka Abnormal ( Official Video ) - Kaka New Song - Shayari - Kaka Punjabi Urdu Poetry - #kaka",
    user: "Cisco Neimo",
    user_img: "/img/images.jpg",
    video: "/videos/Kaka Abnormal ( Official Video ) - Kaka New Song - Shayari - Kaka Punjabi Urdu Poetry - kaka.mp4",
    time: "2h ago",
  },
  {
    title:
      "Sound of Salaar - Music By Ravi Basrur - Hombale Films_2",
    user: "Cisco Neimo",
    user_img: "/img/images.jpg",
    video: "/videos/Sound of Salaar - Music By Ravi Basrur - Hombale Films_2.mp4",
    time: "2h ago",
  },
  {
    title:
      "Sun Saiyan - Masroor Fateh Ali Khan ( Official Music Video )  -  “Qurban” OST ARY Digital",
    user: "Cisco Neimo",
    user_img: "/img/images.jpg",
    video: "/videos/Sun Saiyan - Masroor Fateh Ali Khan ( Official Music Video )  -  “Qurban” OST ARY Digital.mp4",
    time: "2h ago",
  },
  
];       

export const reels = [
  {
    title:
      "Boldness in every step, Salaar style - Salaar - Prabhas - Prashanth - Prithviraj - Hombale Films",
    user: "Cisco Neimo",
    user_img: "/img/images.jpg",
    video: "/reels/Boldness in every step, Salaar style - Salaar - Prabhas - Prashanth - Prithviraj - Hombale Films.mp4",
    time: "2h ago",
  },
  {
    title:
      "Did you know this- @ezsNippets #react #css",
    user: "Cisco Neimo",
    user_img: "/img/images.jpg",
    video: "/reels/Did you know this.mp4",
    time: "2h ago",
  },
  {
    title:
      "Funny Clip from The Flash Movie in Hindi",
    user: "Cisco Neimo",
    user_img: "/img/images.jpg",
    video: "/reels/Funny Clip from The Flash Movie in Hindi.mp4",
    time: "2h ago",
  },
  {
    title:
      "Sarada shocked see boruto shuriken 🔥 #boruto #sarada",
    user: "Cisco Neimo",
    user_img: "/img/images.jpg",
    video: "/reels/Sarada shocked see boruto shuriken.mp4",
    time: "2h ago",
  },
  {
    title:
      "Shikamaru 🔥💯",
    user: "Cisco Neimo",
    user_img: "/img/images.jpg",
    video: "/reels/Shikamaru.mp4",
    time: "2h ago",
  },
  {
    title:
      "WHO WANTS THE BLACK",
    user: "Cisco Neimo",
    user_img: "/img/images.jpg",
    video: "/reels/WHO WANTS THE BLACK.mp4",
    time: "2h ago",
  },
  {
    title:
      "Water cutter gun #science #sciencefacts",
    user: "Cisco Neimo",
    user_img: "/img/images.jpg",
    video: "/reels/Water cutter gun.mp4",
    time: "2h ago",
  },
  
  
];       