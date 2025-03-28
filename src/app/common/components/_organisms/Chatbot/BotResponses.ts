import {BotResponses, QuickQuestion} from "@/app/common/types/common";

export const botResponses:BotResponses = {
    hello: "გამარჯობა! რით შემიძლია დაგეხმაროთ?",
    skills: "მე ვმუშაობ შემდეგი ტექნოლოგიებით: JavaScript, TypeScript, React,React-Native, Next.js, Node.js,PHP,Laravel Tailwind CSS და Framer Motion",
    experience: "მაქვს 1+ წლის გამოცდილება ვებ დეველოპმენტში. ვთანამშრომლობდი როგორც სტარტაპებთან, ასევე მსხვილ კომპანიებთან. ჩემი პორტფოლიო მოიცავს სხვადასხვა სფეროს პროექტებს, მათ შორის ელექტრონული კომერციის პლატფორმებს, დეშბორდებს და მობილურ აპლიკაციებს.",
    contact: "შეგიძლიათ დამიკავშირდეთ ელ-ფოსტაზე: vaxojaniashvili186@gmail.com, ან სოციალურ ქსელებში - LinkedIn, GitHub, Twitter. ასევე შეგიძლიათ შეავსოთ საკონტაქტო ფორმა ჩემი პორტფოლიოს ვებგვერდზე.",
    projects: "ჩემი პროექტები მოიცავს: 1) Alliance ის პროექტი რომლის ვებსაიტზეც ვმუშაობ  2) HotCard ის აპლიკაცია რომელიც არის ქართული პროექტი, 3) მობილური აპლიკაცია ProPay მოსწვალე-მასწავლებლისთვის. ყველა პროექტის დეტალები შეგიძლიათ იხილოთ პორტფოლიოს პროექტების განყოფილებაში.",
    process: "ჩემი სამუშაო პროცესი იწყება კლიენტთან კონსულტაციით, საიდანაც ვაგროვებ მოთხოვნებს. შემდეგ ვქმნი დაბალი და მაღალი დეტალიზაციის დიზაინებს, რომლებიც მტკიცდება კლიენტის მიერ. დეველოპმენტის ფაზა იყოფა სპრინტებად, თითოეული სპრინტის ბოლოს ხდება შესრულებული სამუშაოს დემონსტრაცია. პროექტის დასრულების შემდეგ ვახორციელებ ტესტირებას და ვუზრუნველყოფ ტექნიკურ მხარდაჭერას.",
    education: "მაქვს ბაკალავრის ხარისხი კომპიუტერულ მეცნიერებებში და მაგისტრის ხარისხი ვებ დეველოპმენტში. გარდა ამისა, გავლილი მაქვს სხვადასხვა სერტიფიცირებული კურსები, მათ შორის React და Node.js-ის მიმართულებით.",
    technologies: "ძირითადი ტექნოლოგიები: React, Next.js, Node.js, TypeScript, MongoDB, PostgreSQL. Frontend: HTML5, CSS3, Tailwind, SASS, Framer Motion. Backend: Express.js, NestJS, Laravel GraphQL. DevOps: Git, SQL Docker, CI/CD, AWS.",
    availability: "ამჟამად ვიღებ ახალ პროექტებს. შემიძლია ვიმუშაო როგორც სრულ განაკვეთზე, ასევე ნაწილობრივ დატვირთვით. დამიკავშირდით დეტალებისთვის.",
    timeline: "პროექტის ხანგრძლივობა დამოკიდებულია მის მოცულობაზე და სირთულეზე. მარტივი ლენდინგ გვერდი შეიძლება დასრულდეს 1-2 კვირაში, საშუალო სირთულის პროექტები - 1-2 თვეში, ხოლო რთული პროექტები შეიძლება გაგრძელდეს 3-6 თვე.",
    pricing: "ფასები დამოკიდებულია პროექტის მოცულობაზე, სირთულეზე და ვადებზე. შემიძლია ვიმუშაო როგორც საათობრივად, ასევე ფიქსირებული ღირებულებით პროექტზე. დამიკავშირდით უფრო დეტალური შეთავაზებისთვის.",
    services: "ჩემი სერვისები მოიცავს: ვებ დეველოპმენტს, მობილური აპლიკაციების შექმნას, UI/UX დიზაინს, ტექნიკურ კონსულტაციას, არსებული პროექტების განახლებას და გაუმჯობესებას, SEO ოპტიმიზაციას.",
    default: "მადლობა თქვენი შეკითხვისთვის! თუ გსურთ უფრო კონკრეტული ინფორმაცია მიიღოთ, გთხოვთ შეარჩიოთ ერთ-ერთი ქვემოთ მოცემული თემა ან დამისვათ დამატებითი კითხვა."
};
export const getBotResponse = (input:string) => {
    const lowerInput = input.toLowerCase();

    if (lowerInput.includes('ხელმისაწვდომ') || lowerInput.includes('თავისუფალი') ||
        lowerInput.includes('availability') || lowerInput.includes('მიიღებ')) {
        return botResponses.availability;
    }
    else if (lowerInput.includes('გამარჯობა') || lowerInput.includes('სალამი') ||
        lowerInput.includes('hello') || lowerInput.includes('hi')) {
        return botResponses.hello;
    } else if (lowerInput.includes('უნარ') || lowerInput.includes('skill') ||
        lowerInput.includes('შეგიძლია') || lowerInput.includes('ტექნოლოგიებ') ||
        lowerInput.includes('ცოდნა')) {
        return botResponses.skills;
    } else if (lowerInput.includes('გამოცდილება') || lowerInput.includes('experience') ||
        lowerInput.includes('მუშაობ')) {
        return botResponses.experience;
    } else if (lowerInput.includes('კონტაქტ') || lowerInput.includes('დაკავშირება') ||
        lowerInput.includes('მეილი') || lowerInput.includes('ტელეფონი')) {
        return botResponses.contact;
    } else if (lowerInput.includes('პროექტ') || lowerInput.includes('project') ||
        lowerInput.includes('ნამუშევრებ') || lowerInput.includes('პორტფოლიო')) {
        return botResponses.projects;
    } else if (lowerInput.includes('პროცეს') || lowerInput.includes('მეთოდოლოგია') ||
        lowerInput.includes('როგორ მუშაობ')) {
        return botResponses.process;
    } else if (lowerInput.includes('განათლება') || lowerInput.includes('სწავლა') ||
        lowerInput.includes('უნივერსიტეტი') || lowerInput.includes('education')) {
        return botResponses.education;
    } else if (lowerInput.includes('ტექნოლოგი') || lowerInput.includes('tech stack') ||
        lowerInput.includes('framework') || lowerInput.includes('language')) {
        return botResponses.technologies;
    } else if (lowerInput.includes('დრო') || lowerInput.includes('ვადა') ||
        lowerInput.includes('timeline') || lowerInput.includes('როდის') ||
        lowerInput.includes('ხანგრძლივობა')) {
        return botResponses.timeline;
    } else if (lowerInput.includes('ფას') || lowerInput.includes('ღირებულება') ||
        lowerInput.includes('price') || lowerInput.includes('cost') ||
        lowerInput.includes('რა ჯდება')) {
        return botResponses.pricing;
    } else if (lowerInput.includes('სერვის') || lowerInput.includes('მომსახურება') ||
        lowerInput.includes('რას აკეთებ') || lowerInput.includes('service')) {
        return botResponses.services;
    } else {
        return botResponses.default;
    }
};

export const quickQuestions:QuickQuestion[] = [
    { id: 1, text: "რა ტექნოლოგიებს ფლობთ?" },
    { id: 2, text: "თქვენი პროექტების შესახებ" },
    { id: 3, text: "საკონტაქტო ინფორმაცია" },
    { id: 4, text: "რა ღირს თქვენი მომსახურება?" },
    { id: 5, text: "ხელმისაწვდომი ხართ ახალი პროექტებისთვის?" }
];