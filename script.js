// JavaScript for Interactive Elements

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("header nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Highlight active section in navigation
    const sections = document.querySelectorAll(".section");
    const observerOptions = {
        threshold: 0.6
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const navLink = document.querySelector(`header nav ul li a[href="#${entry.target.id}"]`);

            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove("active"));
                navLink.classList.add("active");
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Add animations on scroll
    const animatedElements = document.querySelectorAll(".animate-on-scroll");

    const animateObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.5 });

    animatedElements.forEach(element => animateObserver.observe(element));


    // Chat Bot 
    const chatbotIcon = document.getElementById("chatbot-icon");
    const chatbotWindow = document.getElementById("chatbot-window");
    const chatbotClose = document.getElementById("chatbot-close");
    const chatbotMessages = document.getElementById("chatbot-messages");
    const chatbotInput = document.getElementById("chatbot-input");
    const chatbotSend = document.getElementById("chatbot-send");

    // Open chatbot window
    chatbotIcon.addEventListener("click", () => {
        chatbotWindow.style.display = "flex";
        chatbotIcon.style.display = "none";
    });

    // Close chatbot window
    chatbotClose.addEventListener("click", () => {
        chatbotWindow.style.display = "none";
        chatbotIcon.style.display = "flex";
    });

    // Add message to chatbot
    const addMessage = (text, sender) => {
        const message = document.createElement("p");
        message.classList.add(sender === "bot" ? "bot-message" : "user-message");
        message.textContent = text;
        chatbotMessages.appendChild(message);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    };

    // Handle user input
    chatbotSend.addEventListener("click", () => {
        const userMessage = chatbotInput.value.trim();
        if (userMessage) {
            addMessage(userMessage, "user");
            chatbotInput.value = "";

            // Simulate bot response
            setTimeout(() => {
                addMessage("Thanks for your question! I wil soon be proving your information.", "bot");
            }, 1000);
        }
    });

    chatbotInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            chatbotSend.click();
        }
    });
});
