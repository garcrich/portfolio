import { RecommendationData } from "./recommendationTypes";
import lanyeProfile from "./../../../../assets/images/recommendation-profiles/lane-profile.jpg";
import zachProfile from "./../../../../assets/images/recommendation-profiles/zach-profile.jpg";
import hamletProfile from "./../../../../assets/images/recommendation-profiles/hamlet-profile.jpg";
import jasonProfile from "./../../../../assets/images/recommendation-profiles/jason-c-profile.jpg";

const recommendationsData: RecommendationData[] = [
  {    name: 'Lanye Lund',
  title: 'Software Engineer at Vyne Dental',
  text: [`Ricky is an incredible frontend developer. He has strong skills with React and JavaScript. When I worked with him, he was learning cloud-based systems using AWS and has continued to strengthen those skills. He is great to work with and brings his expertise to the contribute in a team environment.`],
  img: lanyeProfile
},
  {
    name: 'Zach Lamb',
    title: 'Full-Stack Developer at Sana Benefits',
    text: [`...Ricky's exceptional leadership and mentoring skills have been invaluable to our team. He has a unique ability to communicate complex technical concepts in a way that is easy to understand, making him an excellent mentor for junior engineers. I have personally seen Ricky go out of his way to help junior team members, providing guidance, feedback, and support whenever needed.`
    ],
    img: zachProfile
  },
  {
    name: 'Hamlet Gordillo',
    title: 'Software QA Engineer | Next-Gen Blockchain | Nerd United',
    text: [`Ricky has been fantastic to work with. His ability to get things done is excellent and he communicates very well with whatever teams he is working with. His passion for continuous learning is also a very great skill that will be valuable wherever he goes.`],
    img: hamletProfile
  },
  {
    name: 'Jason Christensen',
    title: 'Sr. Manager of Software and Services Engineering at thomasarts',
    text: [`Ricky is a remarkable person to work with. He is an excellent communicator who brings professionalism, energy, and a great attitude to every project he is involved in. Ricky has a great passion for what he does and takes every opportunity he can to learn and teach...`],
    img: jasonProfile
  },
];

export default recommendationsData;
