import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
const members = [
  {
    name: "Ahmed Rashad",
    title: "Back-end Developer",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum ea natus architecto incidunt id corrupti quibusdam",
    flink: "#",
    tlink: "#",
    glink: "#",
    llink: "#",
  },
  {
    name: "Mohammed Khaled",
    title: "Front-end Developer",
    info: "I'm also a Freelancer. I love long term opportunities and building relationships. Make sure to check my Github/LinkedIn for other projects I'm working on!",
    flink: "https://www.facebook.com/people/Mohammed-Khaled/100005763781061/",
    tlink: "https://twitter.com/_MoKhaled_",
    glink: "https://github.com/MoKhaled112",
    llink: "https://www.linkedin.com/in/mokhaled112/",
  },
  {
    name: "Mahmoud Easa",
    title: "Front-end Developer",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum ea natus architecto incidunt id corrupti quibusdam",
    flink: "#",
    tlink: "#",
    glink: "#",
    llink: "#",
  },
  {
    name: "Youssef Husien",
    title: "Front-end Developer",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum ea natus architecto incidunt id corrupti quibusdam",
    flink: "#",
    tlink: "#",
    glink: "#",
    llink: "#",
  },
  {
    name: "Mostafa Ahmed",
    title: "Front-end Developer",
    info: " Hi, I am Mostafa Alsadawy, a Front-end developer from Egypt, I love to build websites that not only look great but deliver the best experience to the visitors.",
    flink: "#",
    tlink: "#",
    glink: "https://github.com/Mostafa-Alsadawy",
    llink: "https://www.linkedin.com/in/mostafa-ahmed-515473215/",
  },
];

const Team = () => {
  return (
    <>
        <NavBar />
      <div className="p-4 bg-primary">
        <p className="text-center text-3xl font-bold text-PWhite mb-4">Our team</p>
        <p className="text-center mb-8 text-xl font-normal text-PWhite">
          Meet the team members who worked on this project
        </p>
        <div className="grid grid-cols-1  gap-4 md:gap-8">
          {members.map((member, i) => (
            <TeamCard key={i} member={member} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

const TeamCard = (props) => {
  return (
    <div className="flex bg-primary rounded-lg shadow">
      <div className="block w-24 md:w-48  relative">
        {/* TODO Add your picture */}
        <img
          alt="profile"
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--xG1gcsyJ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/h68x0up43hmknl5tjcww.jpg"
          className=" w-full h-full object-cover"
        />
      </div>
      <div className="bg-primary rounded-lg shadow px-8 py-4 pt-8 grow">
        <div className="text-center">
          <p className="text-2xl text-Gold">
            {props.member.name}
          </p>
          <p className="text-xl text-PWhite font-light">
            {props.member.title}
          </p>
          <p className="text-md text-PWhite w-60  mx-auto py-4 font-light">
            {props.member.info}
          </p>
        </div>
      </div>
      <div className="pt-8 flex flex-col border-t border-Gold w-40 mx-auto text-PWhite items-center justify-around">
        <a href={props.member.flink}>
          <FaFacebookF
            className="text-xl hover:text-PWhite dark:hover:text-white transition-colors duration-200"
            size={30}
          />
        </a>
        <a href={props.member.tlink}>
          <FaTwitter
            className="text-xl hover:text-PWhite dark:hover:text-white transition-colors duration-200"
            size={30}
          />
        </a>
        <a href={props.member.glink}>
          <AiFillGithub
            className="text-xl hover:text-PWhite dark:hover:text-white transition-colors duration-200"
            size={30}
          />
        </a>
        <a href={props.member.llink}>
          <AiFillLinkedin
            className="text-xl hover:text-PWhite dark:hover:text-white transition-colors duration-200"
            size={30}
          />
        </a>
      </div>
    </div>
  );
};

export default Team;
