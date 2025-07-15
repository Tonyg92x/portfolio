import { useContext, useState }     from 'react';
import { Context }                  from '../App';
import { Proj }                     from '../classes/Project'
import Project                      from './Project';

const Projects = ({}) => {
    const { theme, language }               = useContext(Context);
    const [activeSection, setActiveSection] = useState('Programming');
    const sections                          = ['Programming', 'SystemAdministration', 'CyberSecurity', 'DevOps'];
    const sectionsEn                        = ['Programming', 'System Administration', 'Cyber Security', 'DevOps']
    const sectionsFr                        = ['Programmation', 'Administration Système', 'Cyber Sécurité', 'DevOps']
    const projectsEn                        = {
        Programming: [
            new Proj('Minishell', 'C - System Programing', 'This project is part of the core curriculum at 42 school. It involves creating a shell that allows executing commands via the execve system function. The features are inspired by Bash. Arguments, redirection operators, and control operators are supported by the program.', 'https://github.com/Tonyg92x/42-common-core/tree/master/08-minishell', '/minishell.png'),
            new Proj('PushSwap', 'C - Sorting Algorithm', 'Pushswap is a project that is part of the core curriculum at 42 school. The program takes a list of numbers as an argument. These numbers are all placed in a stack according to the order of the list. The goal of the project is to sort the numbers in ascending order. To do this, you must use predetermined actions that operate only on the top and bottom of the stack. A second stack is also available. It is possible to move the top element of one stack to the other stack. The algorithm must use the fewest number of actions possible, with the risk of receiving a grade of 0 if the number of actions is too high.', 'https://github.com/Tonyg92x/42-common-core/tree/master/04-push_swap', '/c.png'),
            new Proj('Cub3d', 'C - 3D Rendering', 'The cub3d project at 42 is a graphical display project. Using a basic graphics library (42MLX), we have to create our own version of Wolfenstein 3D. This game was the first of its kind (FPS). Released in 1992, the computing power of computers was limited. The 3D graphics we see in modern video games were impossible. However, the company id Software was ingenious and managed to disprove this assumption. They used a 2D grid for position calculations in the game. The player\'s field of vision sends a ray per pixel across the width of the screen. Then, with the length of the ray (calculated with the DDA algorithm for performance reasons), a depth effect is applied to the height. This is how the first 3D FPS was born. Here is my version of this game.', 'https://github.com/Tonyg92x/42-common-core/tree/master/09-cub3d', '/cub3d.jpg'),
            new Proj('Portfolio', 'React - Web Application', 'This project is the website you are currently viewing. To enhance my frontend programming skills while sharing my journey in the tech industry, I developed this site.', 'none', '/react.png'),
            new Proj('Quebec Game Jam 2023', 'Game Developement', 'To explore the world of game creation, I formed and led a team of five programmers with little to no experience to participate in this event. It was a fantastic first experience in the field of video games.', 'none', '/unity.png'),
        ],
        SystemAdministration: [
            new Proj('Pfsense', 'Networking', 'Since cybersecurity is a field that interests me, and networking is a central element of it, I decided to deepen my knowledge in this area. To learn the basics, I installed my own pfSense router instead of the one provided by my ISP. Through this, I learned several concepts such as network segmentation, DNS, DHCP, NAT, IPS and more.', 'none', '/openbsd.png'),
            new Proj('Proxmox', 'Virtualisation', 'After creating my network architecture, I built a server using desktop computer parts. I then installed Proxmox to learn virtualization with a type 1 hypervisor. This server allowed me to build a lab to learn various concepts. Several services are hosted on it to help me learn ethical hacking and use management and development tools. Fun fact: this site is hosted on this server, which is on an isolated network behind a WAF and several reverse proxies.', 'none', '/proxmox.png'),
            new Proj('Ubiquity', 'Infrastructure', 'To satisfy my geeky needs, I upgraded my homelab with a NAS, a server rack, rebuilt my server in a 2U chassis, and added Ubiquiti networking equipment. I created a new network architecture and upgraded my network with 10 Gb/s fiber connections. I am now ready to upgrade my server to multiple mini-PCs in a HA cluster with shared storage for redundancy.', 'none', '/ubiquity.png'),
        ],
        CyberSecurity: [
            new Proj('TryHackMe', 'Certification', 'To learn CyberSecurty basics, I did start by doing TryHackMe learning path\'s. It did teached me a lot on the cyber security field.', 'https://tryhackme.com/p/TonyG92x', '/thm.png'),
            new Proj('Google Cyber Security Certification', 'Certification', 'I completed the Google Cybersecurity Certification. It\'s a 5-month course created by Google to teach core cybersecurity concepts.', 'https://www.coursera.org/account/accomplishments/specialization/94CWHVKC7AVB', '/googlecert.png'),
            new Proj('Security Onion', 'Security Engineering', 'To learn more about Security Information and Event Management (SIEM) and Security Operations Center (SOC), I built one myself. I used multiple open-source solutions to create a defense system for my homelab. The first one I tried was Security Onion. It’s a great solution that is easy to set up and costs nothing to upgrade an IT environment\'s defense.', 'none', '/sos.png'),
            new Proj('Wazuh', 'Security Engineering', 'My second favorite free tool for improving the security of my environment is Wazuh. Wazuh is the very first open-source EDR tool. This tool allows for vulnerability management, triggering alerts based on events in the environment, and responding to attacks. It’s a very comprehensive solution that I recommend for small budgets.', 'none', '/wazuh.png'),
        ],
        DevOps: [
            new Proj('Ansible', 'Automation', 'To automate multiple tasks in my environment, I use Ansible. Ansible allows me to provision servers, automatically update my servers, and easily apply an action to multiple machines.', 'none', '/ansible.png'),
            new Proj('Terraform', 'Infrastructure as Code', 'To deploy my environments, I use Terraform. This allows me to automatically instantiate Linux servers based on parameters defined in a YAML file. These servers are then provisioned with Ansible.', 'none', '/terraform.png'),
            new Proj('Docker', 'Virtualisation', 'In order to use a minimum of resources, I also use Docker images for several services. Additionally, when I code, I create a Docker image of my application. This allows me to deploy my applications easily, regardless of the host\'s operating system. It’s very useful in my CI/CD pipelines.', 'none', '/docker.png'),
            new Proj('Gitlab CI/CD', 'Developpement Operations', 'To keep my code in a private environment, I use GitLab, which is hosted in my homelab. GitLab does much more than just managing Git branches. It allows actions to be triggered automatically when code is pushed to the server. For example, when I push the code for this application, tests are performed. My CI/CD pipeline ensures that all tests, including vulnerability tests, are successfully completed before automatically updating the application in real time. This practice prevents deploying code that could break an application. It enables continuous development, which means making it easier to develop and maintain an active application.', 'none', '/gitlab.png'),
            //new Proj('Kubernetes', 'Virtualisation', '', '', '/k8s.png'),
        ],};

    const projectsFr                        = {
        Programming: [
            new Proj('Minishell', 'C - Programmation système', 'Ce projet fait partie du cursus principal de l\'école 42. Il consiste à créer un shell permettant de lancer des commandes via la fonction système execve. Les fonctionnalités sont inspirées de Bash. Les arguments, les opérateurs de redirection et les opérateurs de contrôle sont pris en charge par le programme.', 'https://github.com/Tonyg92x/42-common-core/tree/master/08-minishell', '/minishell.png'),
            new Proj('PushSwap', 'C - Sorting Algorithm', 'Pushswap est un projet qui fait partie du cursus principal de l\'école 42. Le programme prend en argument une liste de nombres. Ces nombres sont tous placés, selon l\'ordre de la liste, dans une pile. L\'objectif du projet est de trier les nombres en ordre croissant. Pour ce faire, il est nécessaire d\'utiliser des actions prédéterminées qui agissent uniquement sur le haut et le bas de la pile. Une deuxième pile est aussi disponible. Il est possible d\'envoyer l\'élément du haut d\'une pile vers l\'autre pile. L\'algorithme doit utiliser le plus petit nombre d\'actions possible, au risque d\'obtenir la note 0 si le nombre d\'actions est trop grand.', 'https://github.com/Tonyg92x/42-common-core/tree/master/04-push_swap', '/c.png'),
            new Proj('Cub3d', 'C - Rendu 3D', 'Le projet cub3d de 42 est un projet d\'affichage graphique. En utilisant une librairie graphique de base (42MLX), il faut créer notre propre version de Wolfenstein 3D. Ce jeu fut le premier de son genre (FPS). Sorti en 1992, les capacités de calcul des ordinateurs étaient limitées. L\'affichage 3D que nous voyons dans les jeux vidéo récents était impossible. Cependant, la compagnie id Software fut ingénieuse et réussit à réfuter cette hypothèse. Ils ont utilisé une grille en 2D pour les calculs de positions dans le jeu. La direction du champ de vision du joueur envoie un rayon par pixel sur toute la largeur de l\'écran. Puis, avec la longueur du rayon (calculée avec l\'algorithme DDA pour des raisons de performance), un effet de profondeur est appliqué sur la hauteur. C\'est ainsi que le premier FPS en 3D est né. Voici ma version de ce jeu.', 'https://github.com/Tonyg92x/42-common-core/tree/master/09-cub3d', '/cub3d.jpg'),
            new Proj('Portfolio', 'Application Web', 'Ce projet est le site que vous consultez actuellement. Afin d\'améliorer mes compétences en programmation frontend tout en partageant mon parcours dans le monde des technologies, j\'ai programmé ce site.', 'none', '/react.png'),
            new Proj('Game Jam  de Québec 2023', 'Unity - Développement de jeux vidéo', 'Afin d\'expérimenter le monde de la création de jeux vidéo, j\'ai créé et dirigé une équipe de cinq programmeurs sans ou avec très peu d\'expérience pour participer à cet événement. Ce fut une superbe première expérience dans le domaine des jeux vidéo.', 'https://anthony-guay.tonyg-systems.com', '/unity.png'),
        ],
        SystemAdministration: [
            new Proj('Pfsense', 'Réseautique', 'Puisque la cybersécurité est un domaine qui m\'intéresse et que la réseautique en est un élément central, j\'ai décidé d\'approfondir mes connaissances dans ce domaine. Pour apprendre les bases, j\'ai installé mon propre routeur pfSense au lieu de celui fourni par mon FAI (fournisseur d\'accès Internet). J\'ai ainsi appris plusieurs concepts comme la segmentation réseau, DNS, DHCP, NAT, IPS, etc.', 'none', '/openbsd.png'),
            new Proj('Proxmox', 'Virtualisation', 'Après avoir créé mon architecture réseau, j\'ai construit un serveur avec des pièces d\'ordinateurs de bureau. J\'ai ensuite installé Proxmox pour apprendre la virtualisation avec un hyperviseur de type 1. Ce serveur m\'a permis de créer un laboratoire afin d\'apprendre plusieurs concepts. Plusieurs services y sont hébergés pour m\'aider à apprendre le piratage éthique ainsi qu\'à utiliser des outils de gestion et de développement. Fait amusant : ce site est hébergé sur ce serveur, qui est sur un réseau isolé derrière un WAF et plusieurs Reverse Proxies.', 'none', '/proxmox.png'),
            new Proj('Ubiquity Homelab Upgrade', 'Infrastructure', 'Pour satisfaire mes besoins de geek, j\'ai amélioré mon homelab avec un NAS, un rack serveur, reconstruit mon serveur dans un châssis 2U et j\'ai ajouté des équipements de réseautique Ubiquiti. J\'ai créé une nouvelle architecture réseau et amélioré mon réseau avec des liens en fibre optique à 10 Gb/s. Je suis maintenant prêt à mettre à niveau mon serveur en utilisant plusieurs mini-PC dans un cluster HA avec du stockage partagé pour assurer la redondance.', 'none', '/ubiquity.png'),
        ],
        CyberSecurity: [
            new Proj('TryHackMe', 'Formation en ligne', 'Pour apprendre les bases de la cybersécurité, j\'ai commencé par suivre le parcours d\'apprentissage TryHackMe. Cela m\'a permis d\'apprendre beaucoup sur la cybersécurité.', 'https://tryhackme.com/p/TonyG92x', '/thm.png'),
            new Proj('Google - Certificat en Cybersécurité', 'Certification', 'J\'ai obtenu la certification en cybersécurité de Google. C\'est un cours de 5 mois créé par Google pour apprendre des concepts fondamentaux en cybersécurité.', 'https://www.coursera.org/account/accomplishments/specialization/94CWHVKC7AVB', '/googlecert.png'),
            new Proj('Security Onion', 'Security Engineering', 'Pour en savoir plus sur la gestion des informations et des événements de sécurité (SIEM) et le centre des opérations de sécurité (SOC), j\'en ai créé un moi-même. J\'ai utilisé plusieurs solutions open-source pour construire un système de défense pour mon homelab. La première que j\'ai essayée est Security Onion. C\'est une excellente solution, facile à configurer et sans coût pour améliorer la défense d\'un environnement informatique.', 'none', '/sos.png'),
            new Proj('Wazuh', 'Security Engineering', 'Mon deuxième outil gratuit préféré pour améliorer la sécurité de mon environnement est Wazuh. Wazuh est le tout premier outil EDR open source. Cet outil permet de gérer les vulnérabilités, de déclencher des alertes en fonction des événements dans l\'environnement et de répondre à une attaque. C\'est une solution très complète que je recommande pour les petits budgets.', 'none', '/wazuh.png'),
        ],
        DevOps: [
            new Proj('Ansible', 'Automatisation', 'Pour automatiser plusieurs tâches dans mon environnement, j\'utilise Ansible. Ansible me permet de provisionner des serveurs, de mettre à jour automatiquement mes serveurs et d\'appliquer une action sur plusieurs machines facilement.', 'none', '/ansible.png'),
            new Proj('Terraform', 'Infrastructure en tant que code', 'Pour déployer mes environnements, j\'utilise Terraform. Cela me permet d\'instancier des serveurs Linux automatiquement selon des paramètres définis dans un fichier YAML. Ces serveurs sont ensuite provisionnés avec Ansible.', 'none', '/terraform.png'),
            new Proj('Docker', 'Virtualisation', 'Afin d\'utiliser un minimum de ressources, j\'utilise également des images Docker pour plusieurs services. De plus, lorsque je programme, je crée une image Docker de mon application. Cela me permet de déployer mes applications facilement, peu importe le système d\'exploitation de l\'hôte. C\'est très utile dans mes pipelines de CI/CD.', 'none', '/docker.png'),
            new Proj('Gitlab CI/CD', 'Opérations de développement', 'Afin de conserver mon code dans un environnement privé, j\'utilise GitLab, qui est hébergé dans mon homelab. GitLab permet de faire bien plus que de la gestion de branches Git. Il permet de lancer des actions automatiquement lorsque du code est envoyé sur le serveur. Par exemple, lorsque j\'envoie le code de cette application, des tests sont effectués. Mon pipeline CI/CD permet de valider que tous les tests et les tests de vulnérabilités sont effectués avec succès avant de mettre à jour automatiquement l\'application en temps réel. Cette pratique évite d\'envoyer du code qui brise une application. Cela permet de faire du développement en continu, ce qui signifie que l\'on peut développer et maintenir une application active plus facilement.', 'none', '/gitlab.png'),
            //new Proj('Kubernetes', 'Virtualisation', '', 'none', '/k8s.png'),
        ],};

    return (
        <div>
            {
                language === 'English' ? (
                    <div className={`section bg-skin-primary${theme} text-skin-primary${theme}`}>
                        <h1>Projects</h1>
                        <div className={`projects_div bg-skin-secondary${theme} text-skin-secondary${theme}`}>
                            <div className={`projects_header`}>
                                {sections.map((section, index) => (
                                    <button key={section} className={`section_button ${activeSection === section ? `active bg-skin-third${theme} text-skin-third${theme}` : ''}`} onClick={() => setActiveSection(section)}>
                                        <h4>{sectionsEn[index]}</h4>
                                    </button>
                                ))}
                            </div>
                            <div className={`projects_body bg-skin-third${theme} text-skin-third${theme} rounded-lg`}>
                                {projectsEn[activeSection].map((projectsEn, index) => (
                                    <Project projectEn={projectsEn} projectFr={projectsFr} key={index}/>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={`section bg-skin-primary${theme} text-skin-primary${theme}`}>
                        <h1>Projets</h1>
                        <div className={`projects_div bg-skin-secondary${theme} text-skin-secondary${theme}`}>
                            <div className={`projects_header`}>
                                {sections.map((section, index) => (
                                    <button key={section} className={`section_button ${activeSection === section ? `active bg-skin-third${theme} text-skin-third${theme}` : ''}`} onClick={() => setActiveSection(section)}>
                                        <h4>{sectionsFr[index]}</h4>
                                    </button>
                                ))}
                            </div>
                            <div className={`projects_body bg-skin-third${theme} text-skin-third${theme}`}>
                                {projectsFr[activeSection].map((projectsFr, index) => (
                                    <Project projectEn={projectsEn} projectFr={projectsFr} key={index}/>
                                ))}
                            </div>
                        </div>
                    </div>
                )
            }
        </div>

    );
}

export default Projects
