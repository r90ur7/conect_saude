import { Professional } from "@/types/professional";

export enum CategoryEnum {
  TODAS = "todas",
  LOJA_ORTOPEDICA = " LOJA ORTOPEDICA ",
  CLINICA_MEDICA = "clinica-medica",
  CLINICA_ODONTOLOGICA = "clinica-odontologica",
  CLINICA_OFTALMOLOGICA = "clinica-oftalmologica",
  LABORATORIO = "laboratorio",
  MEDICOS = "medicos",
  NUTRICIONISTA = "nutricionista",
  FISIOTERAPEUTA = "fisioterapeuta",
  OTICAS = "oticas",
}

export const categories = [
  { id: CategoryEnum.TODAS, name: "Todas" },
  { id: CategoryEnum.LOJA_ORTOPEDICA, name: "Loja Ortopédica" },
  { id: CategoryEnum.CLINICA_MEDICA, name: "Clínica Médica" },
  { id: CategoryEnum.CLINICA_ODONTOLOGICA, name: "Clínica Odontológica" },
  { id: CategoryEnum.CLINICA_OFTALMOLOGICA, name: "Clínica Oftalmológica" },
  { id: CategoryEnum.LABORATORIO, name: "Laboratório" },
  { id: CategoryEnum.MEDICOS, name: "Médicos" },
  { id: CategoryEnum.NUTRICIONISTA, name: "Nutricionista" },
  { id: CategoryEnum.FISIOTERAPEUTA, name: "Fisioterapeuta" },
  { id: CategoryEnum.OTICAS, name: "Óticas" },
];


export const professionals: Professional[] = [
  {
    id: "1",
    name: "Dra. Ana Silva",
    specialty: "Clínica Geral",
    location: "Centro Médico São Paulo",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&h=300&fit=crop",
    phone: "(11) 99999-9999",
    category: CategoryEnum.CLINICA_MEDICA,
    email: "ana.silva@example.com",
    social: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
    },
    schedule: [
      { weekDay: "Segunda-feira", hours: "08:00 - 18:00" },
      { weekDay: "Terça-feira", hours: "08:00 - 18:00" },
      { weekDay: "Quarta-feira", hours: "08:00 - 18:00" },
      { weekDay: "Quinta-feira", hours: "08:00 - 18:00" },
      { weekDay: "Sexta-feira", hours: "08:00 - 16:00" },
    ],
    weeklySchedule: [
      { 
        day: "Segunda-feira", 
        activities: "Consultas gerais, Avaliações de rotina" 
      },
      { 
        day: "Terça-feira", 
        activities: "Consultas gerais, Exames preventivos" 
      },
      { 
        day: "Quarta-feira", 
        activities: "Consultas gerais, Retornos" 
      },
      { 
        day: "Quinta-feira", 
        activities: "Consultas gerais, Procedimentos ambulatoriais" 
      },
      { 
        day: "Sexta-feira", 
        activities: "Consultas gerais, Reuniões clínicas" 
      },
    ],
    about: "Com mais de 15 anos de experiência em Clínica Geral, a Dra. Ana Silva é reconhecida por sua abordagem humanizada e atendimento personalizado. Dedica-se ao cuidado integral da saúde de seus pacientes, com foco na prevenção e promoção do bem-estar.",
    education: [
      "Graduação em Medicina pela Universidade de São Paulo (USP)",
      "Residência em Clínica Médica pelo Hospital das Clínicas FMUSP",
      "Especialização em Medicina Preventiva",
      "Mestrado em Saúde Pública",
      "Membro da Sociedade Brasileira de Clínica Médica"
    ]
  },
  {
    id: "2",
    name: "Laboratório Central",
    specialty: "Análises Clínicas",
    location: "Av. Paulista, 1000",
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=400&h=300&fit=crop",
    phone: "(11) 98888-8888",
    category: CategoryEnum.LABORATORIO,
    email: "lab.central@example.com",
    social: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
    },
    schedule: [
      { weekDay: "Segunda a Sexta", hours: "06:00 - 18:00" },
      { weekDay: "Sábado", hours: "07:00 - 13:00" },
    ],
    weeklySchedule: [
      { day: "Segunda a Sexta", activities: "Coleta de exames, Análises laboratoriais" },
      { day: "Sábado", activities: "Coleta de exames" },
    ],
    about: "O Laboratório Central é referência em análises clínicas há mais de 25 anos. Equipado com tecnologia de ponta e equipe altamente qualificada, oferece resultados precisos e confiáveis em tempo recorde.",
    education: [
      "Certificação ISO 9001",
      "Acreditação pelo PALC",
      "Equipamentos de última geração",
      "Equipe especializada em análises clínicas"
    ]
  },
  {
    id: "3",
    name: "Dr. Carlos Santos",
    specialty: "Cardiologia",
    location: "Hospital Santa Cruz",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&h=300&fit=crop",
    phone: "(11) 97777-7777",
    category: CategoryEnum.MEDICOS,
    email: "carlos.santos@example.com",
    social: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    schedule: [
      { weekDay: "Segunda-feira", hours: "09:00 - 17:00" },
      { weekDay: "Quarta-feira", hours: "09:00 - 17:00" },
      { weekDay: "Sexta-feira", hours: "09:00 - 16:00" },
    ],
    weeklySchedule: [
      { day: "Segunda-feira", activities: "Consultas cardiológicas, Exames de rotina" },
      { day: "Quarta-feira", activities: "Ecocardiograma, Check-up cardíaco" },
      { day: "Sexta-feira", activities: "Consultas e retornos" },
    ],
    about: "Dr. Carlos Santos é especialista em Cardiologia com mais de 20 anos de experiência. Dedica-se ao diagnóstico e tratamento de doenças cardiovasculares, com ênfase em prevenção e qualidade de vida.",
    education: [
      "Doutorado em Cardiologia pela UNIFESP",
      "Residência em Cardiologia no InCor",
      "Membro da Sociedade Brasileira de Cardiologia",
      "Especialização em Ecocardiografia"
    ]
  },
  {
    id: "4",
    name: "Dra. Marina Costa",
    specialty: "Pediatria",
    location: "Clínica Infantil Feliz",
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=400&h=300&fit=crop",
    phone: "(11) 96666-6666",
    category: "medicos",
    email: "marina.costa@example.com",
    social: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
    },
    schedule: [
      { weekDay: "Segunda a Quinta", hours: "08:00 - 16:00" },
      { weekDay: "Sexta-feira", hours: "08:00 - 12:00" },
    ],
    weeklySchedule: [
      { day: "Segunda-feira", activities: "Consultas pediátricas, Puericultura" },
      { day: "Terça-feira", activities: "Consultas de rotina, Vacinação" },
      { day: "Quarta-feira", activities: "Consultas e acompanhamento" },
      { day: "Quinta-feira", activities: "Consultas e orientação nutricional" },
      { day: "Sexta-feira", activities: "Retornos e casos especiais" },
    ],
    about: "Dra. Marina Costa é pediatra há 12 anos, com especial dedicação ao desenvolvimento infantil e medicina preventiva. Sua abordagem acolhedora torna as consultas mais tranquilas para crianças e pais.",
    education: [
      "Especialização em Pediatria pela UNIFESP",
      "Residência no Hospital Infantil Sabará",
      "Membro da Sociedade Brasileira de Pediatria",
      "Pós-graduação em Desenvolvimento Infantil"
    ]
  },
  {
    id: "5",
    name: "Funerária Paz Eterna",
    specialty: "Serviços Funerários",
    location: "Rua das Flores, 500",
    image: "https://images.unsplash.com/photo-1523293836414-f04e712e1f3b?q=80&w=400&h=300&fit=crop",
    phone: "(11) 95555-5555",
    category: "funerarias",
    email: "atendimento@pazeterna.com",
    social: {
      facebook: "https://facebook.com",
    },
    schedule: [
      { weekDay: "Segunda a Domingo", hours: "24 horas" },
    ],
    weeklySchedule: [
      { day: "Todos os dias", activities: "Atendimento 24h, Serviços funerários completos" },
    ],
    about: "A Funerária Paz Eterna oferece serviços funerários completos com respeito e dignidade há mais de 30 anos. Nossa equipe está preparada para dar todo o suporte necessário nos momentos mais difíceis.",
    education: [
      "Certificação em Tanatopraxia",
      "Licença da Vigilância Sanitária",
      "Equipe treinada em suporte ao luto",
      "Serviço de assistência social"
    ]
  },
  {
    id: "6",
    name: "Pronto Socorro 24h",
    specialty: "Emergências Médicas",
    location: "Av. Principal, 100",
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=400&h=300&fit=crop",
    phone: "(11) 94444-4444",
    category: "emergencias",
    email: "ps24h@example.com",
    social: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
    },
    schedule: [
      { weekDay: "Segunda a Domingo", hours: "24 horas" },
    ],
    weeklySchedule: [
      { day: "Todos os dias", activities: "Atendimento de emergência 24h, Pronto-atendimento" },
    ],
    about: "O Pronto Socorro 24h está equipado para atender emergências médicas com rapidez e eficiência. Nossa equipe multidisciplinar está pronta para oferecer o melhor atendimento em situações críticas.",
    education: [
      "Equipe médica especializada em emergências",
      "UTI móvel própria",
      "Centro cirúrgico de emergência",
      "Certificação em ATLS e ACLS"
    ]
  },
  {
    id: "7",
    name: "Dr. Roberto Oliveira",
    specialty: "Ortopedia",
    location: "Centro Médico Saúde Total",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&h=300&fit=crop",
    phone: "(11) 93333-3333",
    category: "especialistas",
    email: "roberto.oliveira@example.com",
    social: {
      linkedin: "https://linkedin.com",
    },
    schedule: [
      { weekDay: "Segunda e Quarta", hours: "08:00 - 18:00" },
      { weekDay: "Terça e Quinta", hours: "13:00 - 19:00" },
      { weekDay: "Sexta-feira", hours: "08:00 - 16:00" },
    ],
    weeklySchedule: [
      { day: "Segunda-feira", activities: "Consultas ortopédicas, Avaliações" },
      { day: "Terça-feira", activities: "Cirurgias eletivas" },
      { day: "Quarta-feira", activities: "Consultas e retornos pós-operatórios" },
      { day: "Quinta-feira", activities: "Cirurgias e procedimentos" },
      { day: "Sexta-feira", activities: "Consultas e revisões" },
    ],
    about: "Dr. Roberto Oliveira é especialista em Ortopedia e Traumatologia, com foco em cirurgias minimamente invasivas e tratamento de lesões esportivas. Possui vasta experiência em procedimentos artroscópicos.",
    education: [
      "Doutorado em Ortopedia pela USP",
      "Fellowship em Cirurgia do Joelho nos EUA",
      "Membro da Sociedade Brasileira de Ortopedia",
      "Especialização em Medicina Esportiva"
    ]
  },
  {
    id: "8",
    name: "Laboratório Diagnóstico",
    specialty: "Exames de Imagem",
    location: "Rua dos Exames, 200",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=400&h=300&fit=crop",
    phone: "(11) 92222-2222",
    category: "laboratorios",
    email: "contato@labdiagnostico.com",
    social: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
    },
    schedule: [
      { weekDay: "Segunda a Sexta", hours: "07:00 - 19:00" },
      { weekDay: "Sábado", hours: "07:00 - 13:00" },
    ],
    weeklySchedule: [
      { day: "Segunda a Sexta", activities: "Raio-X, Tomografia, Ressonância, Ultrassom" },
      { day: "Sábado", activities: "Raio-X e Ultrassom" },
    ],
    about: "O Laboratório Diagnóstico é referência em exames de imagem, oferecendo tecnologia de ponta e laudos precisos. Nossa equipe de radiologistas é altamente qualificada para realizar diversos tipos de exames diagnósticos.",
    education: [
      "Equipamentos de última geração",
      "Certificação em Qualidade Diagnóstica",
      "Equipe de radiologistas especializados",
      "Sistema digital de arquivamento e comunicação"
    ]
  },
  {
    id: "9",
    name: "Dra. Juliana Lima",
    specialty: "Dermatologia",
    location: "Clínica Dermatológica",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=400&h=300&fit=crop",
    phone: "(11) 91111-1111",
    category: "especialistas",
    email: "juliana.lima@example.com",
    social: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
    },
    schedule: [
      { weekDay: "Segunda a Quinta", hours: "09:00 - 17:00" },
      { weekDay: "Sexta-feira", hours: "09:00 - 15:00" },
    ],
    weeklySchedule: [
      { day: "Segunda-feira", activities: "Consultas clínicas, Procedimentos estéticos" },
      { day: "Terça-feira", activities: "Tratamentos a laser, Consultas" },
      { day: "Quarta-feira", activities: "Cirurgias dermatológicas" },
      { day: "Quinta-feira", activities: "Consultas e procedimentos estéticos" },
      { day: "Sexta-feira", activities: "Retornos e avaliações" },
    ],
    about: "Dra. Juliana Lima é especialista em Dermatologia Clínica e Estética, com expertise em tratamentos avançados para pele. Dedica-se ao tratamento de doenças dermatológicas e procedimentos estéticos.",
    education: [
      "Especialização em Dermatologia pela SBD",
      "Mestrado em Medicina Estética",
      "Fellowship em Laser e Tecnologias",
      "Membro da Academia Americana de Dermatologia"
    ]
  },
  {
    id: "10",
    name: "Clínica Bem Estar",
    specialty: "Medicina Integrativa",
    location: "Jardim Saúde",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=400&h=300&fit=crop",
    phone: "(11) 90000-0000",
    category: "clinica-medica",
    email: "contato@bemestar.com",
    social: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
    },
    schedule: [
      { weekDay: "Segunda a Sexta", hours: "08:00 - 20:00" },
      { weekDay: "Sábado", hours: "09:00 - 14:00" },
    ],
    weeklySchedule: [
      { day: "Segunda-feira", activities: "Acupuntura, Medicina Tradicional Chinesa" },
      { day: "Terça-feira", activities: "Homeopatia, Fitoterapia" },
      { day: "Quarta-feira", activities: "Terapias holísticas, Consultas" },
      { day: "Quinta-feira", activities: "Nutrição funcional, Acupuntura" },
      { day: "Sexta-feira", activities: "Consultas integrativas" },
      { day: "Sábado", activities: "Terapias complementares" },
    ],
    about: "A Clínica Bem Estar é especializada em medicina integrativa, unindo práticas convencionais e complementares para promover saúde e bem-estar. Nossa abordagem visa o equilíbrio entre corpo e mente.",
    education: [
      "Equipe multidisciplinar especializada",
      "Certificações em práticas integrativas",
      "Parceria com centros de pesquisa",
      "Formação em medicina tradicional chinesa"
    ]
  },
  {
    id: "11",
    name: "Dr. Fernando Mendes",
    specialty: "Psiquiatria",
    location: "Instituto Mental",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=400&h=300&fit=crop",
    phone: "(11) 98765-4321",
    category: "especialistas",
    email: "fernando.mendes@example.com",
    social: {
      linkedin: "https://linkedin.com",
    },
    schedule: [
      { weekDay: "Segunda a Quinta", hours: "08:00 - 17:00" },
      { weekDay: "Sexta-feira", hours: "08:00 - 12:00" },
    ],
    weeklySchedule: [
      { day: "Segunda-feira", activities: "Consultas psiquiátricas, Avaliações" },
      { day: "Terça-feira", activities: "Terapia em grupo, Consultas" },
      { day: "Quarta-feira", activities: "Atendimento individual" },
      { day: "Quinta-feira", activities: "Consultas e acompanhamento" },
      { day: "Sexta-feira", activities: "Supervisão clínica, Retornos" },
    ],
    about: "Dr. Fernando Mendes é psiquiatra com mais de 15 anos de experiência, especializado em transtornos de humor e ansiedade. Sua abordagem humanizada visa o bem-estar mental e emocional dos pacientes.",
    education: [
      "Doutorado em Psiquiatria pela UNIFESP",
      "Especialização em Terapia Cognitivo-Comportamental",
      "Membro da Associação Brasileira de Psiquiatria",
      "Formação em Neuropsiquiatria"
    ]
  },
  {
    id: "12",
    name: "Ambulância Vida",
    specialty: "Remoção de Emergência",
    location: "Atendimento 24h",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=400&h=300&fit=crop",
    phone: "(11) 91234-5678",
    category: "emergencias",
    email: "contato@ambulanciavida.com",
    social: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
    },
    schedule: [
      { weekDay: "Segunda a Domingo", hours: "24 horas" },
    ],
    weeklySchedule: [
      { day: "Todos os dias", activities: "Remoções de emergência, Transporte inter-hospitalar" },
    ],
    about: "A Ambulância Vida oferece serviço de remoção e transporte de pacientes com segurança e profissionalismo. Nossa frota moderna e equipe especializada garantem atendimento de qualidade 24 horas por dia.",
    education: [
      "Equipe certificada em suporte básico e avançado",
      "Frota com UTI móvel",
      "Certificação da ANVISA",
      "Profissionais especializados em emergências"
    ]
  }
];