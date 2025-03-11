# Dabudo Mind Help - Psychological Testing Platform

## Project Structure
```
├── css/
│   └── styles.css       # Main stylesheet
├── js/
│   ├── main.js          # Core application logic
│   └── testsData.js     # Test definitions and data
├── index.html           # Main application page
├── test.html            # Test taking interface
└── README.md            # This documentation
```

## Adding New Content

### 1. Adding a New Category
1. Open `testsData.js`
2. Add a new key to the `testsData` object:
```javascript
const testsData = {
    newCategory: [
        // Tests will go here
    ],
    // Existing categories...
};
```

### 2. Adding a New Test
1. Within your chosen category array in `testsData.js`, add a new test object:
```javascript
{
    id: "unique-test-id",
    name: "Test Name",
    shortDescription: "Brief description",
    description: "Detailed test description",
    estimatedTime: "X-Y minutes",
    questions: [],       // See next section
    interpretation: {}   // See interpretation section
}
```

### 3. Adding Questions
Each question object should follow this format:
```javascript
{
    id: 1,  // Unique question number
    text: "Question text",
    options: [
        { value: 0, text: "Strongly Disagree" },
        { value: 1, text: "Disagree" },
        // Add more options as needed
    ]
}
```

### 4. Adding Interpretation
Provide score ranges and descriptions:
```javascript
interpretation: {
    ranges: [
        {
            min: 0,
            max: 10,
            label: "Category Name",
            description: "Detailed interpretation"
        }
        // Add more ranges
    ],
    scoringNote: "Explanation of scoring"
}
```

## Styling Guidelines

### Test Interface
- Questions use class `.question p` (bold, 18px)
- Options use class `.option` (with hover/selected states)
- Navigation buttons use `.btn` and `.btn-secondary`

### Results Page
- Score summary uses `.score-summary`
- Visualizations use `.score-bars` and `.score-bar-inner`

## Key Features

### Auto-Advance
- Questions automatically advance 500ms after selection
- Users cannot skip unanswered questions

### Scoring Logic
- Reverse scoring supported (specify question IDs)
- Automatic score calculation and interpretation

### Responsive Design
- Mobile-friendly layout
- Smooth transitions and animations

## Example: LOT-R Test
See `testsData.js` for complete implementation of the Life Orientation Test-Revised, including:
- 10 questions with reverse scoring
- Score interpretation ranges
- Detailed descriptions

## Best Practices
1. Maintain consistent question/answer formats
2. Use clear, descriptive test names
3. Provide accurate time estimates
4. Include comprehensive interpretation guidelines
5. Test all new additions thoroughly

## Running the Application
1. Start development server:
```bash
python3 -m http.server 8000
```
2. Open in browser: http://localhost:8000
