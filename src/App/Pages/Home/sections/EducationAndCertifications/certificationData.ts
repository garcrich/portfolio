import { CertificationData } from "./EduAndCertsTypes"
import devOpsImg from './../../../../../assets/images/certifications/aws-certified-devops-engineer-professional.png'
import devAscImg from './../../../../../assets/images/certifications/aws-certified-developer-associate.png'
import udacityImg from './../../../../../assets/images/certifications/udacity-logo.png'
export const certifications:CertificationData[] = [
  {
    title: 'AWS Certified DevOps Engineer Professional',
    description:
      "As a DevOps Professional, I've trained to implement and manage a continuous delivery system, automate infrastructure, and manage application lifecycles on the AWS platform.",
    certification: {
      verificationUrl: 'https://www.credly.com/badges/7e1f7dee-a2aa-407c-bd71-a8e3ea542d30/',
      img: devOpsImg,
    }
  },
  {
    title: `AWS Certified Developer Associate`,
    description:
      'This certification has equipped me with the skills to develop, deploy, and debug cloud-based applications using AWS. I focus on best practices, security, and performance optimization.',
      certification: {
        verificationUrl: 'https://www.credly.com/earner/earned/badge/b4d03bbd-2cd9-4f0e-a2ba-f21429d9d3b7',
        img: devAscImg,
      }
  },
  {
    title: 'Udacity Front-End Nanodegree',
    description:
      'Through this Nanodegree, I gained hands-on experience and in-depth knowledge in building responsive, accessible, and performant web applications using HTML, CSS, and JavaScript.',
    certification: {
      verificationUrl: 'https://confirm.udacity.com/2GSGDVHA',
      img: udacityImg,
    }
  },
];
