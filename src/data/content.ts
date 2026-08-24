export interface ProfileLink {
  label: string;
  url: string;
  kind: 'email' | 'github' | 'linkedin' | 'lattes';
}

export interface Profile {
  name: string;
  role: string;
  bio: string;
  photoUrl: string;
  links: ProfileLink[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
}

export const profile: Profile = {
  name: 'Juliana Falcão',
  role: 'Engenharia de Software',
  bio: 'Estudante de Engenharia de Software no 7º período, com experiência em projetos acadêmicos e desenvolvimento de aplicações usando Python, React, TypeScript, SQL e Docker. Interesse particular em qualidade, testes e documentação.',
  photoUrl: '/meu-portifolio/foto.jpeg',
  links: [
    { label: 'E-mail', url: 'mailto:jtavaresfalcao8@gmail.com', kind: 'email' },
    { label: 'GitHub', url: 'https://github.com/julianafalcaoo', kind: 'github' },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/juliana-falc%C3%A3o-863433198/',
      kind: 'linkedin',
    },
    { label: 'Lattes', url: 'https://lattes.cnpq.br/8118179843434977', kind: 'lattes' },
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    category: 'Desenvolvimento',
    skills: ['Python', 'JavaScript', 'TypeScript', 'React', 'FastAPI'],
  },
  {
    category: 'Banco de dados',
    skills: ['PostgreSQL', 'MySQL', 'SQL'],
  },
  {
    category: 'Ferramentas',
    skills: ['Git/GitHub', 'Docker'],
  },
  {
    category: 'Qualidade & engenharia',
    skills: [
      'Testes',
      'Documentação',
      'APIs REST',
      'Engenharia de dados',
    ],
  },
];

export const projects: Project[] = [
  {
    slug: 'anapora',
    name: 'AÑAPORÃ',
    tagline: 'Valorização de produtos indígenas',
    description:
      'Plataforma para valorização e comercialização de produtos indígenas, desenvolvida em equipe com foco na cultura e nos produtos artesanais.',
  },
  {
    slug: 'clinic-manager',
    name: 'Clinic Manager',
    tagline: 'Gerenciamento de clínicas',
    description:
      'Aplicação web para auxiliar no gerenciamento de informações e processos de uma clínica, com interface para organização dos dados.',
  },
  {
    slug: 'zoobet',
    name: 'Jogo do Bicho — ZOOBET',
    tagline: 'Projeto acadêmico',
    description:
      'Aplicação desenvolvida como projeto acadêmico para aplicar conceitos de programação, estruturação de sistemas e manipulação de dados.',
  },
];
