// Tab functionality
function showTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.add('hidden');
    });
    
    // Remove active styles from all tab buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('border-primary', 'text-primary');
        button.classList.add('border-transparent', 'text-gray-500');
    });
    
    // Show the selected tab content
    const selectedTab = document.getElementById(tabName + '-tab');
    if (selectedTab) {
        selectedTab.classList.remove('hidden');
    }
    
    // Add active styles to the clicked tab button
    event.target.classList.remove('border-transparent', 'text-gray-500');
    event.target.classList.add('border-primary', 'text-primary');
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Set the overview tab as active by default
    const overviewTab = document.querySelector('button[onclick="showTab(\'overview\')"]');
    if (overviewTab) {
        overviewTab.classList.remove('border-transparent', 'text-gray-500');
        overviewTab.classList.add('border-primary', 'text-primary');
    }
    
    // Show overview content by default
    const overviewContent = document.getElementById('overview-tab');
    if (overviewContent) {
        overviewContent.classList.remove('hidden');
    }
});

// Search functionality (placeholder)
function handleSearch() {
    const searchInput = document.querySelector('input[type="text"]');
    const searchTerm = searchInput.value.trim();
    
    if (searchTerm) {
        alert(`Searching for: ${searchTerm}`);
        // In a real application, this would trigger an API call
    }
}

// Add search event listener
document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.querySelector('button:has(.fa-search)');
    if (searchButton) {
        searchButton.addEventListener('click', handleSearch);
    }
    
    // Allow enter key to trigger search
    const searchInput = document.querySelector('input[type="text"]');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Contact button functionality
document.addEventListener('DOMContentLoaded', function() {
    // Call Now button
    const callButton = document.querySelector('button:has(.fa-phone)');
    if (callButton) {
        callButton.addEventListener('click', function() {
            alert('Calling: +971 XX XXX XXXX');
        });
    }
    
    // Send Message button
    const messageButton = document.querySelector('button:has(.fa-envelope)');
    if (messageButton) {
        messageButton.addEventListener('click', function() {
            alert('Opening email client...');
        });
    }
    
    // WhatsApp button
    const whatsappButton = document.querySelector('button:has(.fa-whatsapp)');
    if (whatsappButton) {
        whatsappButton.addEventListener('click', function() {
            window.open('https://wa.me/971xxxxxxxxx?text=Hi, I\'m interested in the Luxury 2-Bed Apartment in Downtown Dubai', '_blank');
        });
    }
});