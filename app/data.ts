type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

type TechStacks = {
  name: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Access Online Australia',
    description:
      'An e-commerce website specialising in access equipment for hire and for sale with a full product solution including servicing, training, and transport.',
    link: '#',
    video:
      '/projects/accessonline.png',
    id: 'project1',
  },
  {
    name: 'Ebidmo (Freelance)',
    description: 'An online auction platform that offers real-time auction capabilities, providing instant updates on bidding activity and auction progress.',
    link: '#',
    video:
      '/projects/ebidmo.png',
    id: 'project2',
  },
  {
    name: 'LedigBolig (Freelance)',
    description: 'A website that offering rental homes throughout Denmark.',
    link: 'https://ledigbolig.dk/home',
    video:
      '/projects/ledigbolig.png',
    id: 'project2',
  },
  {
    name: 'Giza Steel',
    description: 'An e-commerce website to market the developed software for engineers and detailers to optimize the connection design process.',
    link: 'https://gizasteel.com',
    video:
      '/projects/gizasteel.png',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Emapta Global',
    title: 'Full-Stack Developer',
    start: 'Jan 2024',
    end: 'Present',
    link: '#',
    id: 'work1',
  },
  {
    company: 'Ebidmo (Contract)',
    title: 'Full-Stack Developer',
    start: 'Sept 2023',
    end: 'Dec 2023',
    link: '#',
    id: 'work2',
  },
  {
    company: 'International Design Services',
    title: 'Lead Web Developer',
    start: 'Jul 2021',
    end: 'Aug 2023',
    link: '#',
    id: 'work3',
  },
  {
    company: 'Collective Solution',
    title: 'Senior Web Developer',
    start: 'Apr 2013',
    end: 'Jun 2021',
    link: '#',
    id: 'work4',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/jerielformento',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/jeriel-formento-076592138/',
  },
]

export const TECH_STACKS: TechStacks[] = [
  {
    name: 'PHP/Laravel'
  },
  {
    name: 'Vue/React/NextJS'
  },
  {
    name: 'ASP.Net MVC/Core'
  },
  {
    name: 'MySQL/MSSQL'
  },
  {
    name: 'Python/Django'
  },
  {
    name: 'HTML'
  },
  {
    name: 'CSS/Boostrap/Tailwind'
  },
  {
    name: 'Javascript/jQuery'
  },
  {
    name: 'Git/GitHub'
  },
  {
    name: 'Linux'
  },
]

export const EMAIL = 'jerielformento@gmail.com'
