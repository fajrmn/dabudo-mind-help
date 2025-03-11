document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if (burger) {
        burger.addEventListener('click', () => {
            // Toggle Nav
            nav.classList.toggle('nav-active');
            
            // Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
            
            // Burger Animation
            burger.classList.toggle('toggle');
        });
    }

    // Modal functionality
    const modal = document.getElementById('test-modal');
    const modalTitle = document.getElementById('modal-category-title');
    const testsList = document.getElementById('tests-list');
    const viewTestButtons = document.querySelectorAll('.view-tests');
    const closeButton = document.querySelector('.close');

    // Open modal with the appropriate category tests
    viewTestButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.closest('.category-card').dataset.category;
            openTestsModal(category);
        });
    });

    // Close modal when clicking the X
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }

    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Function to open modal and display tests for a category
    function openTestsModal(category) {
        // Set the modal title based on category
        let categoryTitle;
        switch(category) {
            case 'personality':
                categoryTitle = 'Personality Tests';
                break;
            case 'psychopathology':
                categoryTitle = 'Psychopathology Tests';
                break;
            case 'attitude':
                categoryTitle = 'Attitude Tests';
                break;
            default:
                categoryTitle = 'Tests';
        }
        
        modalTitle.textContent = categoryTitle;
        
        // Clear previous test items
        testsList.innerHTML = '';
        
        // Get tests for the selected category
        const tests = testsData[category] || [];
        
        // Create test items
        tests.forEach(test => {
            const testItem = document.createElement('div');
            testItem.className = 'test-item';
            
            testItem.innerHTML = `
                <h3>${test.name}</h3>
                <p>${test.shortDescription}</p>
                <p class="test-time"><i class="far fa-clock"></i> ${test.estimatedTime}</p>
                <a href="test.html?category=${category}&id=${test.id}" class="btn-secondary">Take Test</a>
            `;
            
            testsList.appendChild(testItem);
        });
        
        // Display the modal
        modal.style.display = 'block';
    }

    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // In a real application, you would send this data to a server
            // For now, we'll just show an alert
            alert(`Thank you, ${name}! Your message has been received. We'll respond to ${email} soon.`);
            
            // Reset the form
            contactForm.reset();
        });
    }
});

// Create the test page if we're on that page
if (window.location.pathname.includes('test.html')) {
    document.addEventListener('DOMContentLoaded', function() {
        // Parse URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category');
        const testId = urlParams.get('id');
        
        // Validate parameters
        if (!category || !testId || !testsData[category]) {
            window.location.href = 'index.html';
            return;
        }
        
        // Find the test
        const test = testsData[category].find(t => t.id === testId);
        if (!test) {
            window.location.href = 'index.html';
            return;
        }
        
        // Set up the test page
        setupTestPage(test, category);
    });
}

// Function to set up the test page
function setupTestPage(test, category) {
    // Get elements
    const testContainer = document.querySelector('.test-container');
    if (!testContainer) return;
    
    // Update test header
    const testHeader = document.querySelector('.test-header');
    testHeader.innerHTML = `
        <h1>${test.name}</h1>
        <p>${test.description}</p>
        <p class="test-time"><i class="far fa-clock"></i> ${test.estimatedTime}</p>
    `;
    
    // Check if test has questions
    if (!test.questions || test.questions.length === 0) {
        testContainer.innerHTML += '<p class="no-questions">This test is currently under development. Please check back soon.</p>';
        return;
    }
    
    // Initialize the test state
    let currentQuestionIndex = 0;
    const answers = {};
    
    // Create and show the first question
    showQuestion(currentQuestionIndex);
    
    // Function to show a question
    function showQuestion(index) {
        const question = test.questions[index];
        if (!question) return;
        
        // Create question container
        let questionDiv = document.querySelector('.question');
        if (!questionDiv) {
            questionDiv = document.createElement('div');
            questionDiv.className = 'question';
            testContainer.appendChild(questionDiv);
        }
        
        // Create options HTML
        const optionsHtml = question.options.map(option => `
            <div class="option ${answers[question.id] === option.value ? 'selected' : ''}">
                <input type="radio" id="option-${option.value}" name="question-${question.id}" value="${option.value}" ${answers[question.id] === option.value ? 'checked' : ''}>
                <label for="option-${option.value}">${option.text}</label>
            </div>
        `).join('');
        
        // Update question content
        questionDiv.innerHTML = `
            <h3>Question ${index + 1} of ${test.questions.length}</h3>
            <p>${question.text}</p>
            <div class="options">
                ${optionsHtml}
            </div>
        `;
        
        // Add event listeners to options
        const optionElements = questionDiv.querySelectorAll('.option');
        optionElements.forEach(option => {
            option.addEventListener('click', function() {
                const input = this.querySelector('input');
                input.checked = true;
                
                optionElements.forEach(opt => opt.classList.remove('selected'));
                this.classList.add('selected');
                
                answers[question.id] = parseInt(input.value);
                
                // Auto-advance only if answer is selected
                setTimeout(() => {
                    if (answers[question.id] !== undefined) {
                        const nextBtn = document.querySelector('.next-btn');
                        if (nextBtn) nextBtn.click();
                    }
                }, 500);
            });
        });
        
        // Create or update navigation buttons
        let navButtons = document.querySelector('.navigation-buttons');
        if (!navButtons) {
            navButtons = document.createElement('div');
            navButtons.className = 'navigation-buttons';
            testContainer.appendChild(navButtons);
        }
        
        navButtons.innerHTML = `
            ${index > 0 ? '<button class="btn prev-btn">Previous</button>' : ''}
            ${index < test.questions.length - 1 ? 
                '<button class="btn next-btn">Next</button>' : 
                '<button class="btn submit-btn">Submit</button>'
            }
        `;
        
        // Add event listeners to navigation buttons
        const prevButton = navButtons.querySelector('.prev-btn');
        if (prevButton) {
            prevButton.addEventListener('click', function() {
                if (currentQuestionIndex > 0) {
                    currentQuestionIndex--;
                    showQuestion(currentQuestionIndex);
                }
            });
        }
        
        const nextButton = navButtons.querySelector('.next-btn');
        if (nextButton) {
            nextButton.addEventListener('click', function(e) {
                if (answers[question.id] === undefined) {
                    e.preventDefault();
                    alert('Please select an answer to continue.');
                } else {
                    if (currentQuestionIndex < test.questions.length - 1) {
                        currentQuestionIndex++;
                        showQuestion(currentQuestionIndex);
                    }
                }
            });
        }
        
        const submitButton = navButtons.querySelector('.submit-btn');
        if (submitButton) {
            submitButton.addEventListener('click', function() {
                // Check if all questions have been answered
                const answered = test.questions.every(q => answers[q.id] !== undefined);
                
                if (!answered) {
                    if (confirm('You have not answered all questions. Do you want to submit anyway?')) {
                        showResults(test, answers);
                    }
                } else {
                    showResults(test, answers);
                }
            });
        }
    }
    
    // Function to show results
    function showResults(test, answers) {
        // Calculate score
        let totalScore = 0;
        test.questions.forEach(q => {
            let score = answers[q.id] || 0;
            if ([3,7,9].includes(q.id)) {
                score = 4 - score; // Reverse score 0-4 scale
            }
            totalScore += score;
        });
        
        // Add average comparison
        const traitResults = test.interpretation.traits.map(trait => {
            const score = trait.questions.reduce((sum, qId) => sum + (answers[qId] || 0), 0);
            const average = trait.ranges[1].average; // Get average from interpretation
            const comparison = score > average ? "above" : score < average ? "below" : "equal to";
            return {
                name: trait.name,
                score: score,
                average: average,
                comparison: comparison
            };
        });
        
        // Clear test container
        testContainer.innerHTML = '';
        
        // Change container class for styling
        testContainer.className = 'results-container';
        
        // Create results header
        const resultsHeader = document.createElement('div');
        resultsHeader.className = 'results-header';
        resultsHeader.innerHTML = `
            <h1>Your Results</h1>
            <p>${test.name}</p>
        `;
        testContainer.appendChild(resultsHeader);
        
        // Create results content
        const resultsContent = document.createElement('div');
        resultsContent.className = 'results-content';
        
        // Add score summary
        const scoreSummary = document.createElement('div');
        scoreSummary.className = 'score-summary';
        
        // If the test has interpretation data, use it
        let interpretation = '';
        if (test.interpretation && test.interpretation.ranges) {
            const range = test.interpretation.ranges.find(r => totalScore >= r.min && totalScore <= r.max);
            if (range) {
                interpretation = `
                    <div class="interpretation">
                        <h3>${range.label}</h3>
                        <p>${range.description}</p>
                    </div>
                `;
                
                scoreSummary.innerHTML = `
                    <h3>Your Score: ${totalScore}</h3>
                    <p>Category: ${range.label}</p>
                `;
            }
        } else {
            // Generic score summary if no interpretation data
            scoreSummary.innerHTML = `
                <h3>Your Score: ${totalScore}</h3>
                <p>Thank you for completing the test.</p>
            `;
        }
        
        resultsContent.appendChild(scoreSummary);
        
        // Add trait results
        traitResults.forEach(trait => {
            const diff = trait.score - trait.average;
            const comparisonElem = document.createElement('div');
            comparisonElem.className = 'trait-comparison';
            comparisonElem.innerHTML = `
                <h3>${trait.name}</h3>
                <div class='score-bar'>
                    <div class='user-score' style='width: ${Math.min(trait.score,20)*5}%'>
                        Your: ${trait.score}
                    </div>
                    <div class='average-line' style='left: ${trait.average*5}%'>
                        Avg: ${trait.average}
                    </div>
                </div>
            `;
            resultsContent.appendChild(comparisonElem);
        });
        
        // Add visualization if applicable
        if (test.interpretation && test.interpretation.ranges) {
            const scoreVisualization = document.createElement('div');
            scoreVisualization.className = 'score-bars';
            
            // Find the range the score falls into
            const currentRange = test.interpretation.ranges.find(r => totalScore >= r.min && totalScore <= r.max);
            const maxPossibleScore = Math.max(...test.interpretation.ranges.map(r => r.max));
            
            // Create a bar for each range
            test.interpretation.ranges.forEach(range => {
                const scoreBar = document.createElement('div');
                scoreBar.className = 'score-bar';
                
                const isCurrentRange = range === currentRange;
                
                scoreBar.innerHTML = `
                    <div class="score-label">
                        <span>${range.label}</span>
                        <span>${range.min}-${range.max}</span>
                    </div>
                    <div class="score-bar-outer">
                        <div class="score-bar-inner" style="width: ${((range.max - range.min + 1) / maxPossibleScore) * 100}%; 
                                                           background-color: ${isCurrentRange ? 'var(--primary-color)' : '#ddd'};">
                        </div>
                    </div>
                `;
                
                scoreVisualization.appendChild(scoreBar);
            });
            
            resultsContent.appendChild(scoreVisualization);
        }
        
        // Add interpretation if available
        if (interpretation) {
            resultsContent.innerHTML += interpretation;
        }
        
        testContainer.appendChild(resultsContent);
        
        // Add action buttons
        const actionButtons = document.createElement('div');
        actionButtons.className = 'action-buttons';
        actionButtons.innerHTML = `
            <a href="index.html" class="btn">Back to Home</a>
            <a href="test.html?category=${category}&id=${test.id}" class="btn-secondary">Take Test Again</a>
        `;
        testContainer.appendChild(actionButtons);
        
        // Add comparison visualization
        const comparisonVisualization = document.createElement('div');
        comparisonVisualization.className = 'comparison-visualization';
        
        // Create a bar for each trait
        traitResults.forEach(trait => {
            const traitBar = document.createElement('div');
            traitBar.className = 'trait-bar';
            
            traitBar.innerHTML = `
                <div class="trait-label">
                    <span>${trait.name}</span>
                </div>
                <div class="trait-bar-outer">
                    <div class="trait-bar-inner" style="width: ${trait.score / 20 * 100}%; background-color: ${trait.comparison === 'above' ? 'var(--primary-color)' : trait.comparison === 'below' ? 'var(--secondary-color)' : '#ddd'};">
                    </div>
                </div>
            `;
            
            comparisonVisualization.appendChild(traitBar);
        });
        
        resultsContent.appendChild(comparisonVisualization);
    }
}

// Add error handling for missing test data
window.addEventListener('error', function(e) {
  console.error('Runtime error:', e.error);
  alert('Test loading failed - redirecting home');
  window.location.href = 'index.html';
});
