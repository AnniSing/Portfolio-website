# Portfolio-website
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aniket Kumar Singh - Portfolio</title>
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Google Fonts: Inter -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Font Awesome for Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" xintegrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <style>
        /* Custom styles to apply the Inter font */
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f8fafc; /* A light gray background */
        }
        /* Simple animation for section fade-in */
        .fade-in-section {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .fade-in-section.is-visible {
            opacity: 1;
            transform: translateY(0);
        }
        /* Styles for the AI modal */
        .modal-overlay {
            transition: opacity 0.3s ease;
        }
        .modal-container {
            transition: transform 0.3s ease;
        }
    </style>
</head>
<body class="text-gray-800">

    <!-- Header & Navigation -->
    <header class="bg-white shadow-md sticky top-0 z-50">
        <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="#" class="text-2xl font-bold text-gray-900">Aniket Kumar Singh</a>
            <div class="hidden md:flex space-x-6">
                <a href="#about" class="text-gray-600 hover:text-blue-600 transition duration-300">About</a>
                <a href="#skills" class="text-gray-600 hover:text-blue-600 transition duration-300">Skills</a>
                <a href="#experience" class="text-gray-600 hover:text-blue-600 transition duration-300">Experience</a>
                <a href="#projects" class="text-gray-600 hover:text-blue-600 transition duration-300">Projects</a>
                <a href="#contact" class="text-gray-600 hover:text-blue-600 transition duration-300">Contact</a>
            </div>
            <div class="md:hidden">
                <button id="mobile-menu-button" class="text-gray-600 hover:text-blue-600 focus:outline-none">
                    <i class="fas fa-bars fa-lg"></i>
                </button>
            </div>
        </nav>
        <!-- Mobile Menu -->
        <div id="mobile-menu" class="hidden md:hidden px-6 pt-2 pb-4">
            <a href="#about" class="block py-2 text-gray-600 hover:text-blue-600">About</a>
            <a href="#skills" class="block py-2 text-gray-600 hover:text-blue-600">Skills</a>
            <a href="#experience" class="block py-2 text-gray-600 hover:text-blue-600">Experience</a>
            <a href="#projects" class="block py-2 text-gray-600 hover:text-blue-600">Projects</a>
            <a href="#contact" class="block py-2 text-gray-600 hover:text-blue-600">Contact</a>
        </div>
    </header>

    <main>
        <!-- Hero Section -->
        <section id="hero" class="bg-white py-20 md:py-32">
            <div class="container mx-auto px-6 text-center">
                <img src="http://googleusercontent.com/file_content/1" 
                     alt="Aniket Kumar Singh" 
                     class="w-36 h-36 md:w-48 md:h-48 rounded-full mx-auto mb-6 shadow-lg border-4 border-white object-cover">
                <h1 class="text-4xl md:text-6xl font-bold text-gray-900">Aniket Kumar Singh</h1>
                <p class="mt-4 text-lg md:text-xl text-gray-600">Aspiring Web Developer | Tech Enthusiast | Lifelong Learner</p>
                <div class="mt-8 flex justify-center space-x-6">
                    <a href="https://www.linkedin.com/in/aniket-kumar-singh-047228291" target="_blank" class="text-gray-500 hover:text-blue-700 transition duration-300">
                        <i class="fab fa-linkedin fa-2x"></i>
                    </a>
                    <a href="#" target="_blank" class="text-gray-500 hover:text-gray-900 transition duration-300">
                        <i class="fab fa-github fa-2x"></i>
                    </a>
                    <a href="#" target="_blank" class="text-gray-500 hover:text-blue-400 transition duration-300">
                        <i class="fab fa-twitter fa-2x"></i>
                    </a>
                </div>
                <div class="mt-10">
                    <a href="#contact" class="bg-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300 shadow-lg">Get in Touch</a>
                    <a href="#" class="ml-4 border border-gray-300 text-gray-700 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300">View Resume</a>
                </div>
            </div>
        </section>

        <!-- About Me Section -->
        <section id="about" class="py-20 fade-in-section">
            <div class="container mx-auto px-6">
                <h2 class="text-3xl font-bold text-center mb-2">About Me</h2>
                <div class="text-center mb-8">
                     <button id="write-about-me-btn" class="bg-indigo-100 text-indigo-700 font-semibold px-6 py-2 rounded-full hover:bg-indigo-200 transition duration-300 text-sm">
                        ✨ Write with AI
                    </button>
                </div>
                <div class="max-w-3xl mx-auto text-center text-gray-700 text-lg leading-relaxed" id="about-me-content">
                    <p>
                        Hello! I'm Aniket, a passionate and driven individual with a strong interest in web development and technology. I enjoy solving complex problems and building beautiful, intuitive web applications. My journey into the world of tech has been fueled by a constant curiosity and a desire to create things that make a difference.
                    </p>
                    <p class="mt-4">
                        When I'm not coding, you can find me exploring the latest tech trends, reading articles, or contributing to open-source projects. I'm always eager to learn new skills and collaborate with like-minded people.
                    </p>
                </div>
            </div>
        </section>

        <!-- Skills Section -->
        <section id="skills" class="py-20 bg-white fade-in-section">
            <div class="container mx-auto px-6">
                <h2 class="text-3xl font-bold text-center mb-12">My Skills</h2>
                <div id="skills-list" class="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <!-- Skill Item -->
                    <div class="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                        <i class="fab fa-html5 fa-3x text-orange-500 mb-4"></i>
                        <h3 class="font-semibold text-lg">HTML5</h3>
                    </div>
                    <!-- Skill Item -->
                    <div class="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                        <i class="fab fa-css3-alt fa-3x text-blue-500 mb-4"></i>
                        <h3 class="font-semibold text-lg">CSS3</h3>
                    </div>
                    <!-- Skill Item -->
                    <div class="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                        <i class="fab fa-js-square fa-3x text-yellow-500 mb-4"></i>
                        <h3 class="font-semibold text-lg">JavaScript</h3>
                    </div>
                    <!-- Skill Item -->
                    <div class="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                        <i class="fab fa-react fa-3x text-cyan-400 mb-4"></i>
                        <h3 class="font-semibold text-lg">React</h3>
                    </div>
                </div>
            </div>
        </section>

        <!-- Experience Section -->
        <section id="experience" class="py-20 fade-in-section">
            <div class="container mx-auto px-6">
                <h2 class="text-3xl font-bold text-center mb-12">Work Experience</h2>
                <div class="max-w-3xl mx-auto">
                    <div class="bg-white p-6 rounded-lg shadow-md mb-6">
                        <div class="flex justify-between items-center">
                            <h3 class="text-xl font-semibold">Frontend Developer Intern</h3>
                            <p class="text-gray-500">Jan 2024 - Present</p>
                        </div>
                        <p class="text-blue-600 font-medium mt-1">Tech Solutions Inc.</p>
                        <ul class="mt-4 list-disc list-inside text-gray-700">
                            <li>Developed and maintained responsive user interfaces using React and Tailwind CSS.</li>
                            <li>Collaborated with designers and backend developers to implement new features.</li>
                            <li>Participated in code reviews and contributed to improving code quality.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Education Section -->
        <section id="education" class="py-20 bg-white fade-in-section">
            <div class="container mx-auto px-6">
                <h2 class="text-3xl font-bold text-center mb-12">Education</h2>
                <div class="max-w-3xl mx-auto">
                    <div class="bg-white p-6 rounded-lg shadow-md mb-6 border-l-4 border-blue-500">
                        <div class="flex justify-between items-center">
                            <h3 class="text-xl font-semibold">Bachelor of Technology in Computer Science</h3>
                            <p class="text-gray-500">2021 - 2025</p>
                        </div>
                        <p class="text-gray-600 font-medium mt-1">Indian Institute of Technology, Delhi</p>
                        <p class="mt-2 text-gray-700">
                            Relevant Coursework: Data Structures, Algorithms, Web Development, Database Management.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Projects Section -->
        <section id="projects" class="py-20 fade-in-section">
            <div class="container mx-auto px-6">
                <h2 class="text-3xl font-bold text-center mb-2">My Projects</h2>
                 <div class="text-center mb-12">
                     <button id="get-project-ideas-btn" class="bg-teal-100 text-teal-700 font-semibold px-6 py-2 rounded-full hover:bg-teal-200 transition duration-300 text-sm">
                        ✨ Get Project Ideas
                    </button>
                </div>
                <div id="projects-grid" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Project Card 1 -->
                    <div class="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                        <img src="https://placehold.co/600x400/3B82F6/FFFFFF?text=Project+One" alt="Project 1" class="w-full h-48 object-cover">
                        <div class="p-6">
                            <h3 class="text-xl font-semibold mb-2">E-commerce Website</h3>
                            <p class="text-gray-700 mb-4">A full-featured e-commerce platform built with the MERN stack. Includes product listings, shopping cart, and user authentication.</p>
                            <a href="#" class="text-blue-600 font-semibold hover:underline">View Project <i class="fas fa-arrow-right ml-1"></i></a>
                        </div>
                    </div>
                    <!-- Project Card 2 -->
                    <div class="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                        <img src="https://placehold.co/600x400/10B981/FFFFFF?text=Project+Two" alt="Project 2" class="w-full h-48 object-cover">
                        <div class="p-6">
                            <h3 class="text-xl font-semibold mb-2">Task Management App</h3>
                            <p class="text-gray-700 mb-4">A simple and intuitive task manager to help users stay organized. Built with React and uses local storage for data persistence.</p>
                            <a href="#" class="text-blue-600 font-semibold hover:underline">View Project <i class="fas fa-arrow-right ml-1"></i></a>
                        </div>
                    </div>
                    <!-- Project Card 3 -->
                    <div class="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                        <img src="https://placehold.co/600x400/F59E0B/FFFFFF?text=Project+Three" alt="Project 3" class="w-full h-48 object-cover">
                        <div class="p-6">
                            <h3 class="text-xl font-semibold mb-2">Portfolio Template</h3>
                            <p class="text-gray-700 mb-4">A responsive portfolio website template created with HTML, Tailwind CSS, and a touch of JavaScript for interactivity.</p>
                            <a href="#" class="text-blue-600 font-semibold hover:underline">View Project <i class="fas fa-arrow-right ml-1"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="py-20 bg-white fade-in-section">
            <div class="container mx-auto px-6">
                <h2 class="text-3xl font-bold text-center mb-4">Get In Touch</h2>
                <p class="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                    I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <div class="text-center">
                    <a href="mailto:aniket.singh@example.com" class="bg-blue-600 text-white font-semibold px-10 py-4 rounded-full hover:bg-blue-700 transition duration-300 shadow-lg text-lg">
                        Say Hello
                    </a>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-8">
        <div class="container mx-auto px-6 text-center">
            <div class="flex justify-center space-x-6 mb-4">
                <a href="https://www.linkedin.com/in/aniket-kumar-singh-047228291" target="_blank" class="text-gray-400 hover:text-white transition duration-300">
                    <i class="fab fa-linkedin fa-lg"></i>
                </a>
                <a href="#" target="_blank" class="text-gray-400 hover:text-white transition duration-300">
                    <i class="fab fa-github fa-lg"></i>
                </a>
                <a href="#" target="_blank" class="text-gray-400 hover:text-white transition duration-300">
                    <i class="fab fa-twitter fa-lg"></i>
                </a>
            </div>
            <p>&copy; 2025 Aniket Kumar Singh. All Rights Reserved.</p>
            <p class="text-sm text-gray-500 mt-2">Designed with <i class="fas fa-heart text-red-500"></i> using Tailwind CSS</p>
        </div>
    </footer>

    <!-- AI Modal -->
    <div id="ai-modal" class="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 hidden z-50">
        <div class="modal-container bg-white w-full max-w-md p-6 rounded-lg shadow-xl transform scale-95">
            <div class="flex justify-between items-center mb-4">
                <h3 id="modal-title" class="text-xl font-semibold">AI Assistant</h3>
                <button id="close-modal-btn" class="text-gray-500 hover:text-gray-800">&times;</button>
            </div>
            <div id="modal-content">
                <!-- Content will be injected by JavaScript -->
            </div>
        </div>
    </div>


    <script>
        // --- DOM Elements ---
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const writeAboutMeBtn = document.getElementById('write-about-me-btn');
        const getProjectIdeasBtn = document.getElementById('get-project-ideas-btn');
        const aiModal = document.getElementById('ai-modal');
        const modalOverlay = document.querySelector('.modal-overlay');
        const modalContainer = document.querySelector('.modal-container');
        const closeModalBtn = document.getElementById('close-modal-btn');
        const modalTitle = document.getElementById('modal-title');
        const modalContent = document.getElementById('modal-content');
        const aboutMeContent = document.getElementById('about-me-content');
        const projectsGrid = document.getElementById('projects-grid');

        // --- Mobile Menu Logic ---
        mobileMenuButton.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
        mobileMenu.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') mobileMenu.classList.add('hidden');
        });

        // --- Intersection Observer for Fade-in Animation ---
        const sections = document.querySelectorAll('.fade-in-section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('is-visible');
            });
        }, { threshold: 0.1 });
        sections.forEach(section => observer.observe(section));

        // --- Modal Logic ---
        const openModal = () => {
            aiModal.classList.remove('hidden');
            setTimeout(() => {
                modalOverlay.classList.add('opacity-100');
                modalContainer.classList.add('scale-100');
            }, 10);
        };

        const closeModal = () => {
            modalOverlay.classList.remove('opacity-100');
            modalContainer.classList.remove('scale-100');
            setTimeout(() => aiModal.classList.add('hidden'), 300);
        };

        closeModalBtn.addEventListener('click', closeModal);
        aiModal.addEventListener('click', (e) => {
            if (e.target === aiModal) closeModal();
        });

        // --- Gemini API Call Function ---
        async function callGemini(prompt) {
            // NOTE: In a real-world scenario, the API key should not be exposed client-side.
            // This is a placeholder for demonstration purposes.
            const apiKey = ""; // Canvas will provide this
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
            
            const payload = {
                contents: [{ role: "user", parts: [{ text: prompt }] }]
            };

            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                if (!response.ok) {
                    throw new Error(`API request failed with status ${response.status}`);
                }

                const result = await response.json();
                if (result.candidates && result.candidates.length > 0) {
                    return result.candidates[0].content.parts[0].text;
                }
                throw new Error("No content generated.");

            } catch (error) {
                console.error("Error calling Gemini API:", error);
                return "Sorry, I couldn't generate a response right now. Please try again later.";
            }
        }
        
        // --- AI Feature: "About Me" Writer ---
        writeAboutMeBtn.addEventListener('click', () => {
            modalTitle.textContent = '✨ AI "About Me" Writer';
            modalContent.innerHTML = `
                <p class="text-gray-600 mb-4">Enter some keywords about yourself (e.g., "passionate coder, loves React, team player"), and I'll write a professional summary for you.</p>
                <textarea id="keywords-input" class="w-full p-2 border rounded-md mb-4" rows="3" placeholder="e.g., creative, problem-solver, JavaScript enthusiast"></textarea>
                <button id="generate-about-me-submit" class="w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700 transition duration-300">Generate</button>
                <div id="ai-result-container" class="mt-4 hidden">
                    <h4 class="font-semibold mb-2">Generated Summary:</h4>
                    <div id="ai-about-me-result" class="bg-gray-100 p-4 rounded-md text-gray-800 whitespace-pre-wrap"></div>
                    <button id="copy-text-btn" class="mt-2 text-sm text-indigo-600 hover:underline">Copy to Clipboard</button>
                </div>
            `;
            openModal();

            document.getElementById('generate-about-me-submit').addEventListener('click', async (e) => {
                const button = e.target;
                const keywords = document.getElementById('keywords-input').value;
                if (!keywords.trim()) {
                    alert("Please enter some keywords.");
                    return;
                }

                const resultContainer = document.getElementById('ai-result-container');
                const resultDiv = document.getElementById('ai-about-me-result');
                
                button.disabled = true;
                button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Generating...';
                
                const prompt = `Write a professional and engaging "About Me" section for a portfolio, in two short paragraphs. The person is named Aniket Kumar Singh. Base it on these keywords: ${keywords}.`;
                const aiResponse = await callGemini(prompt);
                
                resultDiv.textContent = aiResponse;
                resultContainer.classList.remove('hidden');
                button.disabled = false;
                button.textContent = 'Generate';
            });
        });

        // Event delegation for dynamically added "Copy" button
        modalContent.addEventListener('click', e => {
            if (e.target.id === 'copy-text-btn') {
                const textToCopy = document.getElementById('ai-about-me-result').textContent;
                navigator.clipboard.writeText(textToCopy).then(() => {
                    e.target.textContent = 'Copied!';
                    setTimeout(() => e.target.textContent = 'Copy to Clipboard', 2000);
                }).catch(err => console.error('Failed to copy: ', err));
            }
        });


        // --- AI Feature: Project Idea Generator ---
        getProjectIdeasBtn.addEventListener('click', async (e) => {
            const button = e.target;
            button.disabled = true;
            button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Thinking...';

            const skills = Array.from(document.querySelectorAll('#skills-list h3')).map(skill => skill.textContent).join(', ');
            
            modalTitle.textContent = '✨ Project Idea Generator';
            modalContent.innerHTML = `<div class="text-center"><i class="fas fa-spinner fa-spin fa-2x text-teal-500"></i><p class="mt-2">Generating ideas based on your skills...</p></div>`;
            openModal();

            const prompt = `I am a web developer with skills in ${skills}. Suggest three unique and impressive project ideas for my portfolio. For each idea, provide a short, exciting description (2-3 sentences). Format the response as a list.`;
            const aiResponse = await callGemini(prompt);

            modalContent.innerHTML = `
                <p class="text-gray-600 mb-4">Here are a few ideas based on your skills in ${skills}:</p>
                <div class="bg-gray-100 p-4 rounded-md text-gray-800 whitespace-pre-wrap">${aiResponse}</div>
            `;
            
            button.disabled = false;
            button.innerHTML = '✨ Get Project Ideas';
        });

    </script>
</body>
</html>
