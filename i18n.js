(function () {
  function get(obj, path) {
    var keys = path.split(".");
    for (var i = 0; i < keys.length; i++) obj = obj[keys[i]];
    return obj;
  }

  var TRANSLATIONS = {
    en: {
      nav: { home: "Home", about: "About", experience: "Experience", projects: "Projects", contact: "Contact" },
      hero: {
        kicker: "Software Developer",
        greeting: "Hi, I'm",
        tagline: "Let's start creating together, <span>back-end</span> and <span>cybersecurity</span>"
      },
      about: {
        title: "About Me",
        p1: "Hello, my name is Alexandre Sacchetta Virginio. I'm 23 years old, and this is how my story with code began.",
        p2: "Ever since I finished high school, I've been fascinated by two worlds: programming and cybersecurity — building things, understanding how systems work, and learning how to protect them. That curiosity pushed me to start a Bachelor's degree in Computer Engineering in Brazil, where I spent my days studying and my nights chasing real skills.",
        p3: "Not long after, I earned my first opportunity as a Back-end Developer, working mainly with Python. Suddenly, what I was learning in class had a real purpose — solving problems, writing clean code, and seeing my work actually help people.",
        p4: "After about a year balancing college and work, life surprised me in the best way: I met my wife. That moment changed everything. I moved to Canada, got married, and decided to restart with a bigger goal — building a strong career here.",
        p5: "In 2025, I began my Computer Programming diploma at Algonquin College in Ottawa. Now I'm looking for my first opportunity as a developer in Canada — a team where I can contribute with discipline, communication, and real back-end fundamentals, while growing into a professional software developer with a strong cybersecurity mindset.",
        contactBtn: "Contact Me"
      },
      exp: {
        sectionTitle: "Experience & Education",
        card1: { date: "2022 – 2024", title: "Computer Science (Brazil)", desc: "Bachelor's degree. Algorithms, programming, databases, software engineering." },
        card2: { date: "Feb 2023 – Mar 2024", title: "Back-end Developer · Adyen", desc: "Internship in São José dos Campos. Java & Python, REST APIs, databases." },
        card3: { date: "2024", title: "Moved to Canada", desc: "Relocated, married, and restarted with a bigger goal — building a strong career here." },
        card4: { date: "2025 – Present", title: "Computer Programming — Algonquin College", desc: "Diploma in progress. Back-end, databases, and cybersecurity fundamentals." }
      },
      proj: {
        sectionTitle: "Projects",
        subtitle: "Things I've built — from APIs to security audits.",
        allProjects: "All projects",
        card1: { title: "REST API Server", desc: "Back-end REST API project. Java, Python, Node.js — reliable APIs." },
        card2: { title: "Web Application Security Audit", desc: "Cybersecurity project — OWASP, secure coding, and security assessment." }
      },
      contact: { title: "Contact Me" },
      form: { name: "Name", email: "Email", subject: "Subject", message: "Message", submit: "Submit", sending: "Sending…", ok: "Message sent ✓", error: "Something went wrong. Try again.", networkErr: "Network error. Try again." },
      footer: { rights: "© 2026 Alexandre Sacchetta. All rights reserved." },
      modal: { viewProject: "View project", viewGitHub: "View on GitHub", viewLinkedInPost: "See post on LinkedIn" },
      experiencesModal: {
        exp1: { title: "Bachelor's in Computer Science (Ciência da Computação)", company: "Uninter, Brazil", date: "2022 – 2024", description: "Computer Science is the field that broadly investigates the principles and technologies involved in processing information. It aims to understand how computational systems work — from theoretical foundations (algorithms, data structures, logic) to practical applications in software development, networks, and hardware architecture. The area also covers research and innovation in areas such as artificial intelligence, information security, distributed systems, and cloud computing.\n\nAbout the course\n\nThe Bachelor's in Computer Science at Uninter provides a solid foundation in computing fundamentals: algorithms, programming, operating systems, and networks. Students learn to develop and analyze software and applications, combining theory and practice to understand how computational systems work. The methodology includes live and recorded classes, labs, and problem-solving, encouraging practice and innovation.\n\nMain disciplines\n\n• Relational Databases\n• Software Engineering\n• Data Structures I and II\n• Programming Logic and Algorithms\n• Operating Systems\n\nDuring the program, students develop skills from basic logic to advanced concepts in computer systems: programming in different languages, designing efficient algorithms, understanding hardware and software architectures, managing data, administering networks, and applying concepts of artificial intelligence. The course also fosters critical analysis, problem-solving, systemic thinking, and the use of modern tools used in tech companies. Practical work is done through integrating projects, virtual lab activities, and challenges that simulate real situations in the technology sector. This combination prepares graduates to develop technological solutions and to innovate in a constantly evolving field." },
        exp2: { title: "Back-end Developer", company: "Adyen · Internship", date: "Feb 2023 – Mar 2024 · 1 yr 2 mos", description: "São José dos Campos, São Paulo, Brazil · On-site\n\nWorked as a backend developer contributing to the development and maintenance of server-side applications using Java and Python. Participated in building and improving backend services, focusing on reliability, performance, and clean code practices.\n\n• Developed and maintained backend components using Java (OOP, services, APIs) and Python for data processing and automation tasks\n\n• Assisted in building and consuming RESTful APIs, ensuring proper request handling, validation, and error management\n\n• Worked with databases to store, retrieve, and manipulate application data efficiently\n\n• Collaborated with other developers to implement features, fix bugs, and improve existing systems\n\n• Applied object-oriented programming principles, code organization, and basic design patterns\n\n• Used Git for version control and followed team workflows for code reviews and deployments\n\n• Gained experience working in a production-oriented environment, understanding system behavior, logging, and troubleshooting\n\nThis role helped me build a strong foundation in backend development, teamwork, and real-world software engineering practices using Java and Python." },
        exp3: { title: "Moved to Canada", company: "Life change", date: "2024", description: "Relocated to Canada, got married, and decided to restart with a bigger goal — building a strong career as a developer with a cybersecurity mindset." },
        exp4: { title: "Computer Programming (Co-op and Non Co-op)", company: "Algonquin College, Ottawa", date: "2025 – Present · 2 Years", description: "Program #0336X03FWO\n\nLearn workplace-ready programming languages and practical applications to use wherever your career takes you.\n\nThe two-year Computer Programming Ontario College Diploma program prepares you for a career in software development. The program also specializes in program development strategies (using object-oriented modelling), database design and database administration.\n\nUse leading industry software products such as Oracle and CASE tools. Learn about programming languages such as Java, COBOL, SQL and PHP. Study object-oriented analysis and design, operating systems and coding in integrated environments, and learn how to debug, test, and maintain code.\n\nIn your final semester, participate in a software development project working with external clients to gain real-world experience in the programming field.\n\nStudents also have the option to gain real-world experience through a paid co-operative education (co-op) work term. Please note that places in the co-op work term are subject to availability and academic eligibility. Admission to the co-op program does not guarantee a co-op placement.\n\nGraduates may work in a variety of different fields, as almost all sectors of industry require programming and database skills." }
      },
      projectsModal: {
        proj1: { title: "REST API Server", skills: "Java, Python, Node.js, SQL, REST", description: "Back-end REST API project. Building reliable APIs and server-side logic. Focus on clean architecture and maintainability.", image: "images/loading.png", link: "https://github.com/SacchettaDev/REST-API-Server", video: "", linkedinPost: "" },
        proj2: { title: "Web Application Security Audit", skills: "OWASP, Linux, Secure Coding, Log Analysis", description: "Cybersecurity-focused project. Security assessment, OWASP practices, and secure coding techniques for web applications.", image: "images/loading.png", link: "https://github.com/SacchettaDev/Web-Application-Security-Audit", video: "", linkedinPost: "" }
      }
    },
    fr: {
      nav: { home: "Accueil", about: "À propos", experience: "Expérience", projects: "Projets", contact: "Contact" },
      hero: {
        kicker: "Développeur logiciel",
        greeting: "Bonjour, je suis",
        tagline: "Créons ensemble, <span>back-end</span> et <span>cybersécurité</span>"
      },
      about: {
        title: "À propos",
        p1: "Bonjour, je m'appelle Alexandre Sacchetta Virginio. J'ai 23 ans, et voici comment mon histoire avec le code a commencé.",
        p2: "Depuis la fin du lycée, je suis fasciné par deux mondes : la programmation et la cybersécurité — construire des choses, comprendre le fonctionnement des systèmes et apprendre à les protéger. Cette curiosité m'a poussé à commencer une licence en génie informatique au Brésil.",
        p3: "Peu après, j'ai obtenu ma première opportunité en tant que développeur back-end, principalement avec Python. Ce que j'apprenais en cours avait soudain un but concret : résoudre des problèmes, écrire du code propre et voir mon travail aider les gens.",
        p4: "Après environ un an à concilier études et travail, la vie m'a réservé une belle surprise : j'ai rencontré ma femme. J'ai déménagé au Canada, nous nous sommes mariés et j'ai décidé de repartir avec un objectif plus grand : construire une solide carrière ici.",
        p5: "En 2025, j'ai commencé mon diplôme en programmation informatique au Collège Algonquin à Ottawa. Je cherche maintenant ma première opportunité en tant que développeur au Canada — une équipe où je peux contribuer avec discipline, communication et de solides bases back-end.",
        contactBtn: "Me contacter"
      },
      exp: {
        sectionTitle: "Expérience et formation",
        card1: { date: "2022 – 2024", title: "Informatique (Brésil)", desc: "Licence. Algorithmes, programmation, bases de données, génie logiciel." },
        card2: { date: "Fév 2023 – Mar 2024", title: "Développeur back-end · Adyen", desc: "Stage à São José dos Campos. Java et Python, API REST, bases de données." },
        card3: { date: "2024", title: "Installation au Canada", desc: "Déménagement, mariage et nouveau départ — construire une carrière ici." },
        card4: { date: "2025 – Présent", title: "Programmation — Collège Algonquin", desc: "Diplôme en cours. Back-end, bases de données et cybersécurité." }
      },
      proj: {
        sectionTitle: "Projets",
        subtitle: "Ce que j'ai construit — des APIs aux audits sécurité.",
        allProjects: "Tous les projets",
        card1: { title: "Serveur API REST", desc: "Projet back-end API REST. Java, Python, Node.js — APIs fiables." },
        card2: { title: "Audit sécurité web", desc: "Projet cybersécurité — OWASP, codage sécurisé et évaluation." }
      },
      contact: { title: "Me contacter" },
      form: { name: "Nom", email: "E-mail", subject: "Sujet", message: "Message", submit: "Envoyer", sending: "Envoi…", ok: "Message envoyé ✓", error: "Une erreur s'est produite. Réessayez.", networkErr: "Erreur réseau. Réessayez." },
      footer: { rights: "© 2026 Alexandre Sacchetta. Tous droits réservés." },
      modal: { viewProject: "Voir le projet", viewGitHub: "Voir sur GitHub", viewLinkedInPost: "Voir le post LinkedIn" },
      experiencesModal: {
        exp1: { title: "Licence en informatique (Ciência da Computação)", company: "Uninter, Brésil", date: "2022 – 2024", description: "L'informatique est le domaine qui étudie les principes et technologies du traitement de l'information. Elle vise à comprendre le fonctionnement des systèmes informatiques — des fondements théoriques (algorithmes, structures de données, logique) aux applications pratiques (développement logiciel, réseaux, architecture matérielle). Elle couvre aussi la recherche et l'innovation en intelligence artificielle, sécurité de l'information, systèmes distribués et cloud.\n\nÀ propos du cursus\n\nLa licence en informatique à Uninter offre une base solide : algorithmes, programmation, systèmes d'exploitation et réseaux. Les étudiants apprennent à développer et analyser des logiciels et applications, en alliant théorie et pratique. La méthodologie inclut cours en direct et enregistrés, travaux pratiques et résolution de problèmes.\n\nPrincipales disciplines\n\n• Bases de données relationnelles\n• Génie logiciel\n• Structures de données I et II\n• Logique de programmation et algorithmes\n• Systèmes d'exploitation\n\nDurant le cursus, les étudiants acquièrent des compétences de la logique de base aux concepts avancés : programmation en plusieurs langages, conception d'algorithmes efficaces, compréhension des architectures matérielles et logicielles, gestion des données, administration des réseaux et concepts d'intelligence artificielle. Le cursus favorise l'analyse critique, la résolution de problèmes et l'utilisation des outils modernes. Les projets intégrateurs, laboratoires virtuels et défis pratiques simulent des situations réelles. Cette combinaison prépare les diplômés à développer des solutions technologiques et à innover dans un domaine en constante évolution." },
        exp2: { title: "Développeur back-end", company: "Adyen · Stage", date: "Fév 2023 – Mar 2024 · 1 an 2 mois", description: "São José dos Campos, São Paulo, Brésil · Sur site\n\nDéveloppeur back-end pour le développement et la maintenance d'applications côté serveur en Java et Python. Participation à la construction et à l'amélioration des services back-end, avec un focus sur la fiabilité, les performances et le code propre.\n\n• Développement et maintenance de composants back-end en Java (POO, services, APIs) et Python pour le traitement de données et l'automatisation\n\n• Participation à la construction et à l'utilisation d'APIs RESTful (gestion des requêtes, validation, gestion des erreurs)\n\n• Travail avec des bases de données pour stocker, récupérer et manipuler les données des applications\n\n• Collaboration avec d'autres développeurs pour implémenter des fonctionnalités, corriger des bugs et améliorer les systèmes existants\n\n• Application des principes de programmation orientée objet, d'organisation du code et de patterns de conception de base\n\n• Utilisation de Git pour le contrôle de version et respect des flux d'équipe pour revues de code et déploiements\n\n• Expérience en environnement de production : comportement des systèmes, logging et dépannage\n\nCe rôle m'a permis de construire une base solide en développement back-end, travail d'équipe et pratiques d'ingénierie logicielle en conditions réelles avec Java et Python." },
        exp3: { title: "Installation au Canada", company: "Changement de vie", date: "2024", description: "Déménagement au Canada, mariage et nouveau départ avec un objectif plus ambitieux — construire une carrière solide comme développeur avec une approche cybersécurité." },
        exp4: { title: "Programmation (Co-op et non Co-op)", company: "Collège Algonquin, Ottawa", date: "2025 – Présent · 2 ans", description: "Programme #0336X03FWO\n\nLangages de programmation et applications pratiques pour votre carrière.\n\nLe diplôme collégial de deux ans en Programmation prépare à une carrière en développement logiciel. Le programme se spécialise dans les stratégies de développement (modélisation orientée objet), conception et administration de bases de données.\n\nUtilisation de logiciels utilisés en industrie (Oracle, outils CASE). Langages : Java, COBOL, SQL, PHP. Analyse et conception orientées objet, systèmes d'exploitation et codage en environnements intégrés ; débogage, tests et maintenance du code.\n\nAu dernier semestre, participation à un projet de développement logiciel avec des clients externes pour une expérience terrain.\n\nOption de stage coopératif (co-op) rémunéré. Les places en co-op sont soumises à disponibilité et critères académiques. L'admission au programme co-op ne garantit pas un placement.\n\nLes diplômés peuvent travailler dans divers secteurs, la plupart des industries ayant besoin de compétences en programmation et bases de données." }
      },
      projectsModal: {
        proj1: { title: "Serveur API REST", skills: "Java, Python, Node.js, SQL, REST", description: "Projet API REST back-end. Architecture propre et maintenabilité.", image: "images/loading.png", link: "https://github.com/SacchettaDev/REST-API-Server", video: "", linkedinPost: "" },
        proj2: { title: "Audit sécurité application web", skills: "OWASP, Linux, codage sécurisé", description: "Projet cybersécurité. Évaluation, bonnes pratiques OWASP et techniques de codage sécurisé.", image: "images/loading.png", link: "https://github.com/SacchettaDev/Web-Application-Security-Audit", video: "", linkedinPost: "" }
      }
    },
    pt: {
      nav: { home: "Início", about: "Sobre", experience: "Experiência", projects: "Projetos", contact: "Contato" },
      hero: {
        kicker: "Desenvolvedor de software",
        greeting: "Olá, sou",
        tagline: "Vamos criar juntos, <span>back-end</span> e <span>cibersegurança</span>"
      },
      about: {
        title: "Sobre mim",
        p1: "Olá, meu nome é Alexandre Sacchetta Virginio. Tenho 23 anos, e assim começou minha história com programação.",
        p2: "Desde que terminei o ensino médio, fiquei fascinado por dois mundos: programação e cibersegurança — construir coisas, entender como os sistemas funcionam e aprender a protegê-los. Essa curiosidade me levou a começar o bacharelado em Engenharia da Computação no Brasil.",
        p3: "Pouco depois, conquistei minha primeira oportunidade como desenvolvedor back-end, trabalhando principalmente com Python. O que eu aprendia na faculdade passou a ter um propósito real: resolver problemas, escrever código limpo e ver meu trabalho ajudar pessoas.",
        p4: "Após cerca de um ano conciliando faculdade e trabalho, a vida me surpreendeu da melhor forma: conheci minha esposa. Mudei para o Canadá, casei e decidi recomeçar com um objetivo maior — construir uma carreira sólida aqui.",
        p5: "Em 2025, comecei o diploma em Programação de Computadores no Algonquin College em Ottawa. Agora busco minha primeira oportunidade como desenvolvedor no Canadá — uma equipe onde eu possa contribuir com disciplina, comunicação e fundamentos de back-end.",
        contactBtn: "Contato"
      },
      exp: {
        sectionTitle: "Experiência e educação",
        card1: { date: "2022 – 2024", title: "Ciência da Computação (Brasil)", desc: "Bacharelado. Algoritmos, programação, bancos de dados, engenharia de software." },
        card2: { date: "Fev 2023 – Mar 2024", title: "Desenvolvedor back-end · Adyen", desc: "Estágio em São José dos Campos. Java e Python, APIs REST, bancos de dados." },
        card3: { date: "2024", title: "Mudança para o Canadá", desc: "Mudança, casamento e recomeço — construir uma carreira forte aqui." },
        card4: { date: "2025 – Presente", title: "Programação — Algonquin College", desc: "Diploma em andamento. Back-end, bancos de dados e cibersegurança." }
      },
      proj: {
        sectionTitle: "Projetos",
        subtitle: "O que eu construí — de APIs a auditorias de segurança.",
        allProjects: "Todos os projetos",
        card1: { title: "Servidor API REST", desc: "Projeto back-end API REST. Java, Python, Node.js — APIs confiáveis." },
        card2: { title: "Auditoria de segurança web", desc: "Projeto de cibersegurança — OWASP, codificação segura e avaliação." }
      },
      contact: { title: "Contato" },
      form: { name: "Nome", email: "E-mail", subject: "Assunto", message: "Mensagem", submit: "Enviar", sending: "Enviando…", ok: "Mensagem enviada ✓", error: "Algo deu errado. Tente novamente.", networkErr: "Erro de rede. Tente novamente." },
      footer: { rights: "© 2026 Alexandre Sacchetta. Todos os direitos reservados." },
      modal: { viewProject: "Ver projeto", viewGitHub: "Ver no GitHub", viewLinkedInPost: "Ver post no LinkedIn" },
      experiencesModal: {
        exp1: { title: "Bacharelado em Ciência da Computação", company: "Uninter, Brasil", date: "2022 – 2024", description: "Ciência da Computação é o campo que investiga os princípios e tecnologias do processamento de informação. Objetiva entender como os sistemas computacionais funcionam — dos fundamentos teóricos (algoritmos, estruturas de dados, lógica) às aplicações práticas em desenvolvimento de software, redes e arquitetura de hardware. A área também cobre pesquisa e inovação em inteligência artificial, segurança da informação, sistemas distribuídos e nuvem.\n\nSobre o curso\n\nO bacharelado em Ciência da Computação na Uninter oferece base sólida em fundamentos da computação: algoritmos, programação, sistemas operacionais e redes. Os alunos aprendem a desenvolver e analisar software e aplicações, combinando teoria e prática. A metodologia inclui aulas ao vivo e gravadas, laboratórios e resolução de problemas.\n\nPrincipais disciplinas\n\n• Bancos de Dados Relacionais\n• Engenharia de Software\n• Estruturas de Dados I e II\n• Lógica de Programação e Algoritmos\n• Sistemas Operacionais\n\nDurante o curso, os alunos desenvolvem habilidades da lógica básica a conceitos avançados: programação em diferentes linguagens, projeto de algoritmos eficientes, compreensão de arquiteturas de hardware e software, gestão de dados, administração de redes e aplicação de conceitos de inteligência artificial. O curso também fomenta análise crítica, resolução de problemas e uso de ferramentas modernas. O trabalho prático é feito por projetos integradores, laboratórios virtuais e desafios que simulam situações reais. Essa combinação prepara os egressos para desenvolver soluções tecnológicas e inovar em um campo em constante evolução." },
        exp2: { title: "Desenvolvedor back-end", company: "Adyen · Estágio", date: "Fev 2023 – Mar 2024 · 1 ano e 2 meses", description: "São José dos Campos, São Paulo, Brasil · Presencial\n\nAtuação como desenvolvedor back-end no desenvolvimento e manutenção de aplicações server-side em Java e Python. Participação na construção e melhoria de serviços back-end, com foco em confiabilidade, desempenho e código limpo.\n\n• Desenvolvimento e manutenção de componentes back-end em Java (POO, serviços, APIs) e Python para processamento de dados e automação\n\n• Participação na construção e consumo de APIs RESTful, com tratamento adequado de requisições, validação e tratamento de erros\n\n• Trabalho com bancos de dados para armazenar, recuperar e manipular dados das aplicações\n\n• Colaboração com outros desenvolvedores para implementar funcionalidades, corrigir bugs e melhorar sistemas existentes\n\n• Aplicação de princípios de programação orientada a objetos, organização de código e padrões de projeto básicos\n\n• Uso de Git para controle de versão e fluxos de equipe para code reviews e deploys\n\n• Experiência em ambiente de produção: comportamento do sistema, logging e troubleshooting\n\nEsse papel ajudou a construir uma base sólida em desenvolvimento back-end, trabalho em equipe e práticas reais de engenharia de software com Java e Python." },
        exp3: { title: "Mudança para o Canadá", company: "Mudança de vida", date: "2024", description: "Mudança para o Canadá, casamento e decisão de recomeçar com um objetivo maior — construir uma carreira sólida como desenvolvedor com mentalidade em cibersegurança." },
        exp4: { title: "Programação (Co-op e não Co-op)", company: "Algonquin College, Ottawa", date: "2025 – Presente · 2 anos", description: "Programa #0336X03FWO\n\nAprenda linguagens de programação e aplicações práticas para onde sua carreira levar.\n\nO diploma de dois anos em Programação de Computadores prepara para uma carreira em desenvolvimento de software. O programa também se especializa em estratégias de desenvolvimento (modelagem orientada a objetos), design e administração de bancos de dados.\n\nUso de ferramentas líderes como Oracle e CASE. Linguagens como Java, COBOL, SQL e PHP. Análise e design orientados a objetos, sistemas operacionais e codificação em ambientes integrados; debug, testes e manutenção de código.\n\nNo último semestre, participação em um projeto de desenvolvimento de software com clientes externos para experiência real.\n\nOs alunos também podem optar por experiência prática por meio de estágio co-op remunerado. As vagas no co-op estão sujeitas à disponibilidade e critérios acadêmicos. A admissão ao programa co-op não garante colocação.\n\nOs egressos podem atuar em diversos setores, pois quase todos os segmentos da indústria exigem habilidades em programação e bancos de dados." }
      },
      projectsModal: {
        proj1: { title: "Servidor API REST", skills: "Java, Python, Node.js, SQL, REST", description: "Projeto back-end API REST. Foco em arquitetura limpa e manutenção.", image: "images/loading.png", link: "https://github.com/SacchettaDev/REST-API-Server", video: "", linkedinPost: "" },
        proj2: { title: "Auditoria de segurança web", skills: "OWASP, Linux, codificação segura", description: "Projeto de cibersegurança. Avaliação, práticas OWASP e técnicas de codificação segura para aplicações web.", image: "images/loading.png", link: "https://github.com/SacchettaDev/Web-Application-Security-Audit", video: "", linkedinPost: "" }
      }
    }
  };

  var STORAGE_KEY = "siteLang";
  var langLabels = { en: "EN", fr: "FR", pt: "PT" };

  window.CURRENT_LANG = localStorage.getItem(STORAGE_KEY) || "en";
  if (TRANSLATIONS[window.CURRENT_LANG] === undefined) window.CURRENT_LANG = "en";

  window.__I18N = {
    current: window.CURRENT_LANG,
    t: TRANSLATIONS,
    getExperiences: function () { return this.t[this.current].experiencesModal; },
    getProjects: function () { return this.t[this.current].projectsModal; },
    formMsg: function (key) { return get(this.t[this.current].form, key); }
  };

  function applyLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    window.CURRENT_LANG = lang;
    window.__I18N.current = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang === "pt" ? "pt-BR" : lang;

    var t = TRANSLATIONS[lang];
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var val = get(t, el.getAttribute("data-i18n"));
      if (val != null) el.textContent = val;
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var val = get(t, el.getAttribute("data-i18n-html"));
      if (val != null) el.innerHTML = val;
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-ph");
      var val = key ? get(t, key) : null;
      if (val != null) el.placeholder = val;
    });

    var langCurrent = document.getElementById("langCurrent");
    if (langCurrent) langCurrent.textContent = langLabels[lang] || lang.toUpperCase();
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyLanguage(window.CURRENT_LANG);

    var langBtn = document.getElementById("langBtn");
    var langDropdown = document.getElementById("langDropdown");
    var switcher = langBtn && langBtn.closest(".lang-switcher");
    if (langBtn && langDropdown && switcher) {
      langBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        switcher.classList.toggle("open");
        langBtn.setAttribute("aria-expanded", switcher.classList.contains("open"));
      });
      langDropdown.querySelectorAll("[data-lang]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var lang = this.getAttribute("data-lang");
          applyLanguage(lang);
          switcher.classList.remove("open");
          langBtn.setAttribute("aria-expanded", "false");
        });
      });
      document.addEventListener("click", function () { switcher.classList.remove("open"); langBtn.setAttribute("aria-expanded", "false"); });
    }
  });
})();
