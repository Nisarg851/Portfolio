import ResumeProfileIcon from "/resume-profile-icon.svg";
import { Link } from "react-router-dom";
import Title from "../Common/Title";
import { Achievement } from "../Achievements";

const AchievementAndCertView = () => {
    const achievement = [
        {"id":1, 
            "title": "AWS Certified Developer - Associate", 
            "org": "Amazon Web Services Training and Certification", 
            "date": "Oct 2024", 
            "link": "https://www.credly.com/badges/49a2c662-e145-4b94-8d41-edd84c972ccb/linked_in_profile",
            "description": "While preparing for the **AWS Developer Associate** certification, I gained hands-on experience with **AWS services** like **Lambda, DynamoDB, API Gateway, and S3**, understanding how to build **scalable and serverless applications**. I explored **IAM roles and policies** to manage access control effectively. I also learned how to optimize **CI/CD pipelines** using **CodePipeline and CodeBuild**. Debugging applications with **CloudWatch and X-Ray** helped me grasp monitoring and logging best practices. Most importantly, I strengthened my knowledge of **event-driven architectures** and **asynchronous processing** using **SQS, SNS, and EventBridge**.",
            "tags": [{"aws":"AWS"}, 
                        {"cloud":"Cloud Computing"}, 
                        {"cda":"Certified Developer Associate"}, 
                        {"ci_cd":"CI / CD"}]
        },
        {"id":2, 
            "title": "Humber Expo Winner", 
            "org": "Humber", 
            "date": "Aug 2023", 
            "link": "https://www.linkedin.com/posts/hemali1310_educationinnovation-projectexpo-bestproject-activity-7095930632148553729-fN3U",
            "description": "At **Humber EXPO**, we outperformed **20 competing teams** to secure **first place** with our innovative project. I led the **backend transformation** from Node.js to **AWS Amplify SDK**, significantly enhancing **scalability** and **security** with **multi-factor authentication** and **fine-grained access controls**. My focus on **database performance** led to a **30% reduction in query response times** by optimizing the schema with **AWS DynamoDB**. Additionally, I contributed to an engaging **user experience**, crafting a **responsive React.js interface** that boosted **user interaction by 25%**. Our streamlined **AWS-based deployment processes** solidified our position at the top, proving our **technical excellence and teamwork**.",
            "tags": [{"aws":"AWS"},
                        {"react":"React"},  
                        {"javascript":"Javascript"}, 
                        {"css":"CSS"},
                        {"amplify":"AWS Amplify"},
                        {"solution_architect":"Solution Architect"},
                        {"graphql":"GraphQL"},
                        {"backend":"Backend"},
                        {"frontend":"Frontend"}]
        },
        {"id":3, 
            "title": "1st Runner-up at Cloud Native Hackathon", 
            "org": "DevPost", 
            "date": "Dec 2021", 
            "link": "https://cloudnativehack21.devpost.com/project-gallery",
            "description": "We **competed fiercely** at the *Cloud Native Hackathon* hosted by DevPost and secured the **1st Runner-Up** position with our project, **BookFlix**—an online library inspired by Netflix. Leveraging **Azure**, we built a scalable and resilient infrastructure, **containerized** the application using **Docker**, and efficiently **orchestrated** it with **Azure Kubernetes Service (AKS)**. Our solution demonstrated seamless deployment, high availability, and cloud-native best practices, setting us apart from the competition.",
            "tags": [{"azure":"Azure"}, 
                        {"python":"Python"}, 
                        {"django":"Django"}, 
                        {"docker":"Docker"}, 
                        {"kubernetes":"Kubernetes"}]
        }
    ]

    return (
        <div className="w-full h-full">
            <div className="flex">
                <Link to="/resume" className="md:hidden p-1"><img src={ResumeProfileIcon} alt="resume" /></Link>
                <Title title={"CERTIFICATION AND ACHIEVEMENTS"} className="w-full flex justify-center text-2xl title primary-title underline"/>
            </div>
            <ul className="py-2">
                {achievement.map((item, index) => <Achievement key={index} achievement={item}/>)}
            </ul>
        </div>
    );
}

export default AchievementAndCertView;