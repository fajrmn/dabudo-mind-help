// Test data organized by categories
const testsData = {
    personality: [
        {
            id: "pds",
            name: "Personality Data Sheet (PDS)",
            shortDescription: "Comprehensive personality assessment",
            description: "Measures Big Five personality traits with 20 questions across 5 dimensions.",
            estimatedTime: "15-20 minutes",
            questions: [
                // Extraversion (Questions 1-4)
                {
                    id: 1,
                    text: "I am the life of the party.",
                    options: [
                        { value: 0, text: "Strongly Disagree" },
                        { value: 1, text: "Disagree" },
                        { value: 2, text: "Neutral" },
                        { value: 3, text: "Agree" },
                        { value: 4, text: "Strongly Agree" }
                    ]
                },
                {
                    id: 2,
                    text: "I feel comfortable around people.",
                    options: [
                        { value: 0, text: "Strongly Disagree" },
                        { value: 1, text: "Disagree" },
                        { value: 2, text: "Neutral" },
                        { value: 3, text: "Agree" },
                        { value: 4, text: "Strongly Agree" }
                    ]
                },
                {
                    id: 3,
                    text: "I enjoy being around others.",
                    options: [
                        { value: 0, text: "Strongly Disagree" },
                        { value: 1, text: "Disagree" },
                        { value: 2, text: "Neutral" },
                        { value: 3, text: "Agree" },
                        { value: 4, text: "Strongly Agree" }
                    ]
                },
                {
                    id: 4,
                    text: "I am outgoing and sociable.",
                    options: [
                        { value: 0, text: "Strongly Disagree" },
                        { value: 1, text: "Disagree" },
                        { value: 2, text: "Neutral" },
                        { value: 3, text: "Agree" },
                        { value: 4, text: "Strongly Agree" }
                    ]
                },
                // Agreeableness (Questions 5-8)
                {
                    id: 5,
                    text: "I am cooperative and compromising.",
                    options: [
                        { value: 0, text: "Strongly Disagree" },
                        { value: 1, text: "Disagree" },
                        { value: 2, text: "Neutral" },
                        { value: 3, text: "Agree" },
                        { value: 4, text: "Strongly Agree" }
                    ]
                },
                {
                    id: 6,
                    text: "I am empathetic and compassionate.",
                    options: [
                        { value: 0, text: "Strongly Disagree" },
                        { value: 1, text: "Disagree" },
                        { value: 2, text: "Neutral" },
                        { value: 3, text: "Agree" },
                        { value: 4, text: "Strongly Agree" }
                    ]
                },
                {
                    id: 7,
                    text: "I am polite and courteous.",
                    options: [
                        { value: 0, text: "Strongly Disagree" },
                        { value: 1, text: "Disagree" },
                        { value: 2, text: "Neutral" },
                        { value: 3, text: "Agree" },
                        { value: 4, text: "Strongly Agree" }
                    ]
                },
                {
                    id: 8,
                    text: "I am sensitive to the feelings of others.",
                    options: [
                        { value: 0, text: "Strongly Disagree" },
                        { value: 1, text: "Disagree" },
                        { value: 2, text: "Neutral" },
                        { value: 3, text: "Agree" },
                        { value: 4, text: "Strongly Agree" }
                    ]
                },
                // Conscientiousness (Questions 9-12)
                {
                    id: 9,
                    text: "I am organized and planful.",
                    options: [
                        { value: 0, text: "Strongly Disagree" },
                        { value: 1, text: "Disagree" },
                        { value: 2, text: "Neutral" },
                        { value: 3, text: "Agree" },
                        { value: 4, text: "Strongly Agree" }
                    ]
                },
                {
                    id: 10,
                    text: "I am reliable and responsible.",
                    options: [
                        { value: 0, text: "Strongly Disagree" },
                        { value: 1, text: "Disagree" },
                        { value: 2, text: "Neutral" },
                        { value: 3, text: "Agree" },
                        { value: 4, text: "Strongly Agree" }
                    ]
                },
                {
                    id: 11,
                    text: "I am self-disciplined and controlled.",
                    options: [
                        { value: 0, text: "Strongly Disagree" },
                        { value: 1, text: "Disagree" },
                        { value: 2, text: "Neutral" },
                        { value: 3, text: "Agree" },
                        { value: 4, text: "Strongly Agree" }
                    ]
                },
                {
                    id: 12,
                    text: "I am goal-oriented and driven.",
                    options: [
                        { value: 0, text: "Strongly Disagree" },
                        { value: 1, text: "Disagree" },
                        { value: 2, text: "Neutral" },
                        { value: 3, text: "Agree" },
                        { value: 4, text: "Strongly Agree" }
                    ]
                },
                // Neuroticism (Questions 13-16)
                {
                    id: 13,
                    text: "I am anxious and worried.",
                    options: [
                        { value: 0, text: "Strongly Disagree" },
                        { value: 1, text: "Disagree" },
                        { value: 2, text: "Neutral" },
                        { value: 3, text: "Agree" },
                        { value: 4, text: "Strongly Agree" }
                    ]
                },
                {
                    id: 14,
                    text: "I am angry and hostile.",
                    options: [
                        { value: 0, text: "Strongly Disagree" },
                        { value: 1, text: "Disagree" },
                        { value: 2, text: "Neutral" },
                        { value: 3, text: "Agree" },
                        { value: 4, text: "Strongly Agree" }
                    ]
                },
                {
                    id: 15,
                    text: "I am vulnerable and sensitive.",
                    options: [
                        { value: 0, text: "Strongly Disagree" },
                        { value: 1, text: "Disagree" },
                        { value: 2, text: "Neutral" },
                        { value: 3, text: "Agree" },
                        { value: 4, text: "Strongly Agree" }
                    ]
                },
                {
                    id: 16,
                    text: "I am self-conscious and insecure.",
                    options: [
                        { value: 0, text: "Strongly Disagree" },
                        { value: 1, text: "Disagree" },
                        { value: 2, text: "Neutral" },
                        { value: 3, text: "Agree" },
                        { value: 4, text: "Strongly Agree" }
                    ]
                },
                // Openness (Questions 17-20)
                {
                    id: 17,
                    text: "I am open-minded and curious.",
                    options: [
                        { value: 0, text: "Strongly Disagree" },
                        { value: 1, text: "Disagree" },
                        { value: 2, text: "Neutral" },
                        { value: 3, text: "Agree" },
                        { value: 4, text: "Strongly Agree" }
                    ]
                },
                {
                    id: 18,
                    text: "I am creative and imaginative.",
                    options: [
                        { value: 0, text: "Strongly Disagree" },
                        { value: 1, text: "Disagree" },
                        { value: 2, text: "Neutral" },
                        { value: 3, text: "Agree" },
                        { value: 4, text: "Strongly Agree" }
                    ]
                },
                {
                    id: 19,
                    text: "I am artistic and appreciative.",
                    options: [
                        { value: 0, text: "Strongly Disagree" },
                        { value: 1, text: "Disagree" },
                        { value: 2, text: "Neutral" },
                        { value: 3, text: "Agree" },
                        { value: 4, text: "Strongly Agree" }
                    ]
                },
                {
                    id: 20,
                    text: "I have a vivid imagination.",
                    options: [
                        { value: 0, text: "Strongly Disagree" },
                        { value: 1, text: "Disagree" },
                        { value: 2, text: "Neutral" },
                        { value: 3, text: "Agree" },
                        { value: 4, text: "Strongly Agree" }
                    ]
                }
            ],
            interpretation: {
                traits: [
                    {
                        name: "Extraversion",
                        questions: [1, 2, 3, 4],
                        ranges: [
                            { min: 0, max: 6, label: "Low", average: 10.2 },
                            { min: 7, max: 13, label: "Average", average: 10.2 },
                            { min: 14, max: 20, label: "High", average: 10.2 }
                        ]
                    },
                    {
                        name: "Agreeableness",
                        questions: [5, 6, 7, 8],
                        ranges: [
                            { min: 0, max: 6, label: "Low", average: 10.2 },
                            { min: 7, max: 13, label: "Average", average: 10.2 },
                            { min: 14, max: 20, label: "High", average: 10.2 }
                        ]
                    },
                    {
                        name: "Conscientiousness",
                        questions: [9, 10, 11, 12],
                        ranges: [
                            { min: 0, max: 6, label: "Low", average: 10.2 },
                            { min: 7, max: 13, label: "Average", average: 10.2 },
                            { min: 14, max: 20, label: "High", average: 10.2 }
                        ]
                    },
                    {
                        name: "Neuroticism",
                        questions: [13, 14, 15, 16],
                        ranges: [
                            { min: 0, max: 6, label: "Low", average: 10.2 },
                            { min: 7, max: 13, label: "Average", average: 10.2 },
                            { min: 14, max: 20, label: "High", average: 10.2 }
                        ]
                    },
                    {
                        name: "Openness",
                        questions: [17, 18, 19, 20],
                        ranges: [
                            { min: 0, max: 6, label: "Low", average: 10.2 },
                            { min: 7, max: 13, label: "Average", average: 10.2 },
                            { min: 14, max: 20, label: "High", average: 10.2 }
                        ]
                    }
                ],
                scoringNote: "Normative data from N=10,000 population"
            }
        },
        {
            id: "neo-pi",
            name: "NEO Personality Inventory (NEO-PI, NEO PI-R)",
            shortDescription: "Measures the five major domains of personality",
            description: "Evaluates the five major dimensions of personality: Neuroticism, Extraversion, Openness to Experience, Agreeableness, and Conscientiousness.",
            estimatedTime: "30-40 minutes",
            questions: [
                // Neuroticism (Questions 1-6)
                {
                    id: 1,
                    text: "I often feel tense or jittery",
                    options: [
                        { value: 0, text: "Strongly Disagree" },
                        { value: 1, text: "Disagree" },
                        { value: 2, text: "Neutral" },
                        { value: 3, text: "Agree" },
                        { value: 4, text: "Strongly Agree" }
                    ]
                },
                {
                    id: 2,
                    text: "I often feel helpless and want someone else to solve my problems",
                    options: [
                        { value: 0, text: "Strongly Disagree" },
                        { value: 1, text: "Disagree" },
                        { value: 2, text: "Neutral" },
                        { value: 3, text: "Agree" },
                        { value: 4, text: "Strongly Agree" }
                    ]
                },
                {
                    id: 3,
                    text: "I often feel angry and hostile for no good reason",
                    options: [
                        { value: 0, text: "Strongly Disagree" },
                        { value: 1, text: "Disagree" },
                        { value: 2, text: "Neutral" },
                        { value: 3, text: "Agree" },
                        { value: 4, text: "Strongly Agree" }
                    ]
                },

                // Extraversion (Questions 7-12)
                {
                    id: 7,
                    text: "I really enjoy talking to people",
                    options: [
                        { value: 0, text: "Strongly Disagree" },
                        { value: 1, text: "Disagree" },
                        { value: 2, text: "Neutral" },
                        { value: 3, text: "Agree" },
                        { value: 4, text: "Strongly Agree" }
                    ]
                },
                {
                    id: 8,
                    text: "I like to have a lot of people around me",
                    options: [
                        { value: 0, text: "Strongly Disagree" },
                        { value: 1, text: "Disagree" },
                        { value: 2, text: "Neutral" },
                        { value: 3, text: "Agree" },
                        { value: 4, text: "Strongly Agree" }
                    ]
                },
                {
                    id: 9,
                    text: "I prefer working as part of a team rather than alone",
                    options: [
                        { value: 0, text: "Strongly Disagree" },
                        { value: 1, text: "Disagree" },
                        { value: 2, text: "Neutral" },
                        { value: 3, text: "Agree" },
                        { value: 4, text: "Strongly Agree" }
                    ]
                },

                // Openness (Questions 13-18)
                {
                    id: 13,
                    text: "I enjoy trying new and foreign foods",
                    options: [
                        { value: 0, text: "Strongly Disagree" },
                        { value: 1, text: "Disagree" },
                        { value: 2, text: "Neutral" },
                        { value: 3, text: "Agree" },
                        { value: 4, text: "Strongly Agree" }
                    ]
                },
                {
                    id: 14,
                    text: "I often enjoy playing with theories or abstract ideas",
                    options: [
                        { value: 0, text: "Strongly Disagree" },
                        { value: 1, text: "Disagree" },
                        { value: 2, text: "Neutral" },
                        { value: 3, text: "Agree" },
                        { value: 4, text: "Strongly Agree" }
                    ]
                },
                {
                    id: 15,
                    text: "I have a very active imagination",
                    options: [
                        { value: 0, text: "Strongly Disagree" },
                        { value: 1, text: "Disagree" },
                        { value: 2, text: "Neutral" },
                        { value: 3, text: "Agree" },
                        { value: 4, text: "Strongly Agree" }
                    ]
                },

                // Agreeableness (Questions 19-24)
                {
                    id: 19,
                    text: "I generally try to be thoughtful and considerate",
                    options: [
                        { value: 0, text: "Strongly Disagree" },
                        { value: 1, text: "Disagree" },
                        { value: 2, text: "Neutral" },
                        { value: 3, text: "Agree" },
                        { value: 4, text: "Strongly Agree" }
                    ]
                },
                {
                    id: 20,
                    text: "I tend to trust people until they give me reason not to",
                    options: [
                        { value: 0, text: "Strongly Disagree" },
                        { value: 1, text: "Disagree" },
                        { value: 2, text: "Neutral" },
                        { value: 3, text: "Agree" },
                        { value: 4, text: "Strongly Agree" }
                    ]
                },
                {
                    id: 21,
                    text: "I feel others' emotions strongly",
                    options: [
                        { value: 0, text: "Strongly Disagree" },
                        { value: 1, text: "Disagree" },
                        { value: 2, text: "Neutral" },
                        { value: 3, text: "Agree" },
                        { value: 4, text: "Strongly Agree" }
                    ]
                },

                // Conscientiousness (Questions 25-30)
                {
                    id: 25,
                    text: "I keep my belongings neat and clean",
                    options: [
                        { value: 0, text: "Strongly Disagree" },
                        { value: 1, text: "Disagree" },
                        { value: 2, text: "Neutral" },
                        { value: 3, text: "Agree" },
                        { value: 4, text: "Strongly Agree" }
                    ]
                },
                {
                    id: 26,
                    text: "I pay attention to small details",
                    options: [
                        { value: 0, text: "Strongly Disagree" },
                        { value: 1, text: "Disagree" },
                        { value: 2, text: "Neutral" },
                        { value: 3, text: "Agree" },
                        { value: 4, text: "Strongly Agree" }
                    ]
                },
                {
                    id: 27,
                    text: "I make plans and stick to them",
                    options: [
                        { value: 0, text: "Strongly Disagree" },
                        { value: 1, text: "Disagree" },
                        { value: 2, text: "Neutral" },
                        { value: 3, text: "Agree" },
                        { value: 4, text: "Strongly Agree" }
                    ]
                }
            ],
            interpretation: {
                traits: [
                    {
                        name: "Neuroticism",
                        questions: [1,2,3],
                        ranges: [
                            { min: 0, max: 6, label: "Low (Emotionally Stable)", description: "Remains calm under pressure, rarely feels anxious" },
                            { min: 7, max: 12, label: "Average", description: "Experiences normal levels of emotional reactivity" },
                            { min: 13, max: 15, label: "High (Emotionally Reactive)", description: "Tends to experience negative emotions frequently" }
                        ]
                    },
                    {
                        name: "Extraversion",
                        questions: [7,8,9],
                        ranges: [
                            { min: 0, max: 6, label: "Low (Introverted)", description: "Prefers solitary activities, socially reserved" },
                            { min: 7, max: 12, label: "Average", description: "Balances social and solitary time effectively" },
                            { min: 13, max: 15, label: "High (Extraverted)", description: "Energized by social interaction, assertive" }
                        ]
                    },
                    {
                        name: "Openness",
                        questions: [13,14,15],
                        ranges: [
                            { min: 0, max: 6, label: "Low (Conventional)", description: "Prefers routine and familiar experiences" },
                            { min: 7, max: 12, label: "Average", description: "Open to new ideas but values tradition" },
                            { min: 13, max: 15, label: "High (Innovative)", description: "Curious, imaginative, seeks new experiences" }
                        ]
                    },
                    {
                        name: "Agreeableness",
                        questions: [19,20,21],
                        ranges: [
                            { min: 0, max: 6, label: "Low (Competitive)", description: "Skeptical of others' motives, self-focused" },
                            { min: 7, max: 12, label: "Average", description: "Generally cooperative but assertive" },
                            { min: 13, max: 15, label: "High (Altruistic)", description: "Trusting, helpful, and compassionate" }
                        ]
                    },
                    {
                        name: "Conscientiousness",
                        questions: [25,26,27],
                        ranges: [
                            { min: 0, max: 6, label: "Low (Flexible)", description: "Spontaneous, may struggle with organization" },
                            { min: 7, max: 12, label: "Average", description: "Balances planning with adaptability" },
                            { min: 13, max: 15, label: "High (Dependable)", description: "Organized, detail-oriented, reliable" }
                        ]
                    }
                ],
                scoringNote: "Norms based on N=5,000 adult population. Scores calculated as sum of item responses (0-4 scale). Average ranges calculated ±1 SD from mean."
            }
        },
        {
            id: "mbti",
            name: "Myers-Briggs Type Indicator (MBTI)",
            shortDescription: "Identify psychological preferences in how people perceive the world",
            description: "Assesses psychological preferences in how individuals perceive the world and make decisions, categorizing people into 16 personality types.",
            estimatedTime: "25-30 minutes",
            questions: [
                // Example questions for MBTI
                {
                    id: 1,
                    text: "I prefer to focus on the outer world.",
                    options: [
                        { value: 0, text: "Strongly Disagree" },
                        { value: 1, text: "Disagree" },
                        { value: 2, text: "Neutral" },
                        { value: 3, text: "Agree" },
                        { value: 4, text: "Strongly Agree" }
                    ]
                },
                {
                    id: 2,
                    text: "I rely on my intuition.",
                    options: [
                        { value: 0, text: "Strongly Disagree" },
                        { value: 1, text: "Disagree" },
                        { value: 2, text: "Neutral" },
                        { value: 3, text: "Agree" },
                        { value: 4, text: "Strongly Agree" }
                    ]
                }
                // Add more questions as needed
            ],
            interpretation: {
                types: [
                    {
                        name: "Extroversion",
                        questions: [1],
                        ranges: [
                            { min: 0, max: 1, label: "Introverted", average: 1.5 },
                            { min: 2, max: 3, label: "Balanced", average: 1.5 },
                            { min: 4, max: 4, label: "Extroverted", average: 1.5 }
                        ]
                    },
                    {
                        name: "Intuition",
                        questions: [2],
                        ranges: [
                            { min: 0, max: 1, label: "Sensing", average: 1.5 },
                            { min: 2, max: 3, label: "Balanced", average: 1.5 },
                            { min: 4, max: 4, label: "Intuitive", average: 1.5 }
                        ]
                    }
                ],
                scoringNote: "Example scoring for MBTI"
            }
        },
        {
            id: "16pf",
            name: "16 Personality Factor Questionnaire (16PF)",
            shortDescription: "Measures 16 personality traits",
            description: "Assesses 16 personality factors that provide a comprehensive picture of an individual's personality.",
            estimatedTime: "35-45 minutes",
            questions: [
                // Example questions for 16PF
                {
                    id: 1,
                    text: "I am reserved.",
                    options: [
                        { value: 0, text: "Strongly Disagree" },
                        { value: 1, text: "Disagree" },
                        { value: 2, text: "Neutral" },
                        { value: 3, text: "Agree" },
                        { value: 4, text: "Strongly Agree" }
                    ]
                },
                {
                    id: 2,
                    text: "I am warm and outgoing.",
                    options: [
                        { value: 0, text: "Strongly Disagree" },
                        { value: 1, text: "Disagree" },
                        { value: 2, text: "Neutral" },
                        { value: 3, text: "Agree" },
                        { value: 4, text: "Strongly Agree" }
                    ]
                }
                // Add more questions as needed
            ],
            interpretation: {
                factors: [
                    {
                        name: "Reserved vs. Outgoing",
                        questions: [1, 2],
                        ranges: [
                            { min: 0, max: 1, label: "Reserved", average: 1.5 },
                            { min: 2, max: 3, label: "Balanced", average: 1.5 },
                            { min: 4, max: 4, label: "Outgoing", average: 1.5 }
                        ]
                    }
                ],
                scoringNote: "Example scoring for 16PF"
            }
        },
        {
            id: "psi",
            name: "Psychological Screening Inventory (PSI)",
            shortDescription: "Brief screening tool for personality assessment",
            description: "A concise screening instrument designed to identify potential personality issues or areas of concern.",
            estimatedTime: "15-20 minutes",
            questions: [] // Questions would be populated here
        },
        {
            id: "epps",
            name: "Edwards Personal Preference Schedule (EPPS)",
            shortDescription: "Measures personal preferences and motivational needs",
            description: "Assesses an individual's motivational needs and personal preferences across various dimensions.",
            estimatedTime: "25-35 minutes",
            questions: [] // Questions would be populated here
        },
        {
            id: "cpi",
            name: "California Psychological Inventory (CPI)",
            shortDescription: "Measures personality characteristics in everyday life",
            description: "Assesses personality traits and interpersonal behavior patterns in everyday life situations.",
            estimatedTime: "45-60 minutes",
            questions: [] // Questions would be populated here
        },
        {
            id: "stai",
            name: "State Trait Anxiety Inventory (STAI)",
            shortDescription: "Measures anxiety states and traits",
            description: "Differentiates between temporary 'state anxiety' and the more general 'trait anxiety' characteristics.",
            estimatedTime: "10-15 minutes",
            questions: [] // Questions would be populated here
        },
        {
            id: "bst",
            name: "Beck Self-Concept Test (BST)",
            shortDescription: "Measures attitudes about self",
            description: "Evaluates an individual's attitudes, perceptions, and beliefs about themselves.",
            estimatedTime: "15-20 minutes",
            questions: [] // Questions would be populated here
        },
        {
            id: "byi",
            name: "Beck Youth Inventories (BYI-II)",
            shortDescription: "Evaluates emotional and social impairment in youth",
            description: "Assesses emotional and social impairment in children and adolescents across multiple domains.",
            estimatedTime: "20-25 minutes",
            questions: [] // Questions would be populated here
        },
        {
            id: "bai",
            name: "Beck Anxiety Inventory (BAI)",
            shortDescription: "Measures severity of anxiety",
            description: "A self-report measure designed to assess the severity of anxiety symptoms.",
            estimatedTime: "5-10 minutes",
            questions: [] // Questions would be populated here
        },
        {
            id: "bhs",
            name: "Beck Hopelessness Scale (BHS)",
            shortDescription: "Measures negative attitudes about the future",
            description: "Assesses three major aspects of hopelessness: feelings about the future, loss of motivation, and expectations.",
            estimatedTime: "5-10 minutes",
            questions: [] // Questions would be populated here
        },
        {
            id: "cbcl",
            name: "Child Behavior Checklist (CBCL)",
            shortDescription: "Identifies problem behavior in children",
            description: "Identifies problem behavior and competencies in children as reported by parents or caregivers.",
            estimatedTime: "15-20 minutes",
            questions: [] // Questions would be populated here
        }
    ],
    psychopathology: [
        {
            id: "aamd-abs",
            name: "AAMD Adaptive Behavior Scale",
            shortDescription: "Assesses adaptive behavior skills",
            description: "Evaluates adaptive behavior skills and functioning in individuals with intellectual and developmental disabilities.",
            estimatedTime: "20-30 minutes",
            questions: [] // Questions would be populated here
        },
        {
            id: "bsab-i",
            name: "Balthazar Scales of Adaptive Behavior I: Functional Independence (BSAB-I)",
            shortDescription: "Measures functional independence",
            description: "Assesses functional independence and adaptive behavior in individuals with disabilities.",
            estimatedTime: "25-35 minutes",
            questions: [] // Questions would be populated here
        },
        {
            id: "mmpi",
            name: "Minnesota Multiphasic Personality Inventory (MMPI)",
            shortDescription: "Identifies personal, social, and behavioral problems",
            description: "A widely used psychometric test designed to assess personality traits and psychopathology.",
            estimatedTime: "60-90 minutes",
            questions: [] // Questions would be populated here
        },
        {
            id: "mmpi-2",
            name: "MMPI-2",
            shortDescription: "Updated version of the MMPI",
            description: "An updated version of the MMPI with revised questions and additional scales for better assessment.",
            estimatedTime: "60-90 minutes",
            questions: [] // Questions would be populated here
        },
        {
            id: "mmpi-2-rf",
            name: "MMPI-2-RF",
            shortDescription: "Restructured form of the MMPI-2",
            description: "A restructured form of the MMPI-2 with improved psychometric properties and clinical utility.",
            estimatedTime: "35-50 minutes",
            questions: [] // Questions would be populated here
        },
        {
            id: "mmpi-3",
            name: "MMPI-3",
            shortDescription: "Latest version of the MMPI",
            description: "The most recent version of the MMPI with updated norms and improved validity scales.",
            estimatedTime: "45-60 minutes",
            questions: [] // Questions would be populated here
        },
        {
            id: "mmpi-a-rf",
            name: "MMPI-A-RF",
            shortDescription: "Adolescent version of the MMPI",
            description: "A version of the MMPI specifically designed for use with adolescent populations.",
            estimatedTime: "30-45 minutes",
            questions: [] // Questions would be populated here
        },
        {
            id: "mapi",
            name: "Millon Adolescent Personality Inventory (MAPI)",
            shortDescription: "Assesses personality patterns in adolescents",
            description: "Evaluates personality patterns, concerns, and behavioral correlates in adolescents.",
            estimatedTime: "30-40 minutes",
            questions: [] // Questions would be populated here
        },
        {
            id: "mcmi",
            name: "Millon Clinical Multiaxial Inventory (MCMI)",
            shortDescription: "Identifies personality disorders and clinical syndromes",
            description: "A psychological assessment tool to provide information on personality traits and psychopathology.",
            estimatedTime: "25-35 minutes",
            questions: [] // Questions would be populated here
        },
        {
            id: "mcmi-iv",
            name: "MCMI-IV",
            shortDescription: "Latest version of the MCMI",
            description: "The fourth edition of the MCMI, updated with new items and scales for improved clinical utility.",
            estimatedTime: "25-35 minutes",
            questions: [] // Questions would be populated here
        },
        {
            id: "bdi",
            name: "Beck Depression Inventory (BDI)",
            shortDescription: "Measures severity of depression",
            description: "A 21-question multiple-choice self-report inventory for measuring the severity of depression.",
            estimatedTime: "10-15 minutes",
            questions: [] // Questions would be populated here
        },
        {
            id: "bdi-ii",
            name: "BDI-II",
            shortDescription: "Updated version of the BDI",
            description: "The second edition of the BDI, revised to reflect DSM-IV criteria for depression.",
            estimatedTime: "10-15 minutes",
            questions: [] // Questions would be populated here
        },
        {
            id: "pai",
            name: "Personality Assessment Inventory (PAI)",
            shortDescription: "Comprehensive assessment of adult psychopathology",
            description: "A comprehensive assessment of adult psychopathology that provides information relevant to clinical diagnosis and treatment planning.",
            estimatedTime: "40-50 minutes",
            questions: [] // Questions would be populated here
        },
        {
            id: "edi",
            name: "Eating Disorder Inventory (EDI)",
            shortDescription: "Measures symptoms and psychological traits of eating disorders",
            description: "A self-report questionnaire designed to assess the presence of eating disorders and associated psychological traits.",
            estimatedTime: "20-25 minutes",
            questions: [] // Questions would be populated here
        },
        {
            id: "edi-2",
            name: "EDI-2",
            shortDescription: "Expanded version of the EDI",
            description: "An expanded version of the EDI that includes additional subscales for more comprehensive assessment.",
            estimatedTime: "25-30 minutes",
            questions: [] // Questions would be populated here
        },
        {
            id: "edi-3",
            name: "EDI-3",
            shortDescription: "Latest version of the EDI",
            description: "The third edition of the EDI with improved psychometric properties and updated norms.",
            estimatedTime: "25-30 minutes",
            questions: [] // Questions would be populated here
        }
    ],
    attitude: [
        {
            id: "swls",
            name: "Satisfaction With Life Scale (SWLS)",
            shortDescription: "Measures global life satisfaction",
            description: "A short 5-item instrument designed to measure global cognitive judgments of satisfaction with one's life.",
            estimatedTime: "2-3 minutes",
            questions: [
                {
                    id: 1,
                    text: "In most ways my life is close to my ideal.",
                    options: [
                        { value: 1, text: "Strongly Disagree" },
                        { value: 2, text: "Disagree" },
                        { value: 3, text: "Slightly Disagree" },
                        { value: 4, text: "Neither Agree nor Disagree" },
                        { value: 5, text: "Slightly Agree" },
                        { value: 6, text: "Agree" },
                        { value: 7, text: "Strongly Agree" }
                    ]
                },
                {
                    id: 2,
                    text: "The conditions of my life are excellent.",
                    options: [
                        { value: 1, text: "Strongly Disagree" },
                        { value: 2, text: "Disagree" },
                        { value: 3, text: "Slightly Disagree" },
                        { value: 4, text: "Neither Agree nor Disagree" },
                        { value: 5, text: "Slightly Agree" },
                        { value: 6, text: "Agree" },
                        { value: 7, text: "Strongly Agree" }
                    ]
                },
                {
                    id: 3,
                    text: "I am satisfied with my life.",
                    options: [
                        { value: 1, text: "Strongly Disagree" },
                        { value: 2, text: "Disagree" },
                        { value: 3, text: "Slightly Disagree" },
                        { value: 4, text: "Neither Agree nor Disagree" },
                        { value: 5, text: "Slightly Agree" },
                        { value: 6, text: "Agree" },
                        { value: 7, text: "Strongly Agree" }
                    ]
                },
                {
                    id: 4,
                    text: "So far I have gotten the important things I want in life.",
                    options: [
                        { value: 1, text: "Strongly Disagree" },
                        { value: 2, text: "Disagree" },
                        { value: 3, text: "Slightly Disagree" },
                        { value: 4, text: "Neither Agree nor Disagree" },
                        { value: 5, text: "Slightly Agree" },
                        { value: 6, text: "Agree" },
                        { value: 7, text: "Strongly Agree" }
                    ]
                },
                {
                    id: 5,
                    text: "If I could live my life over, I would change almost nothing.",
                    options: [
                        { value: 1, text: "Strongly Disagree" },
                        { value: 2, text: "Disagree" },
                        { value: 3, text: "Slightly Disagree" },
                        { value: 4, text: "Neither Agree nor Disagree" },
                        { value: 5, text: "Slightly Agree" },
                        { value: 6, text: "Agree" },
                        { value: 7, text: "Strongly Agree" }
                    ]
                }
            ],
            interpretation: {
                ranges: [
                    { min: 5, max: 9, label: "Extremely Dissatisfied", description: "Extremely dissatisfied with current life. This level of dissatisfaction is often driven by poor satisfaction in multiple life domains, or significant dissatisfaction in one or more domains." },
                    { min: 10, max: 14, label: "Dissatisfied", description: "Significantly below average in life satisfaction. People in this range usually have substantial problems in several areas of their lives, or one area that is going very badly." },
                    { min: 15, max: 19, label: "Slightly Below Average", description: "Just slightly below average in life satisfaction. Most people who score in this range have small but significant problems in several areas of their lives, or one area that represents a substantial problem." },
                    { min: 20, max: 24, label: "Average", description: "Within the average range of life satisfaction. Most people are generally satisfied, but have some areas where they aspire to improvement." },
                    { min: 25, max: 29, label: "High", description: "High score, representing a high level of satisfaction. People who score in this range generally love their lives and feel that things are going very well." },
                    { min: 30, max: 35, label: "Very High", description: "Very high score, indicating that you consider your life to be exceptional in most or all of the major domains. You're flourishing and finding fulfillment in important areas of life." }
                ]
            }
        },
        {
            id: "lot-r",
            name: "Life Orientation Test-Revised (LOT-R)",
            shortDescription: "Measures optimism versus pessimism",
            description: "Assesses individual differences in generalized optimism versus pessimism.",
            estimatedTime: "5-10 minutes",
            questions: [
                {
                    id: 1,
                    text: "In uncertain times, I usually expect the best.",
                    options: [
                        { value: 0, text: "Strongly Disagree" },
                        { value: 1, text: "Disagree" },
                        { value: 2, text: "Neutral" },
                        { value: 3, text: "Agree" },
                        { value: 4, text: "Strongly Agree" }
                    ]
                },
                {
                    id: 2,
                    text: "It's easy for me to relax.",
                    options: [
                        { value: 0, text: "Strongly Disagree" },
                        { value: 1, text: "Disagree" },
                        { value: 2, text: "Neutral" },
                        { value: 3, text: "Agree" },
                        { value: 4, text: "Strongly Agree" }
                    ]
                },
                {
                    id: 3,
                    text: "If something can go wrong for me, it will.",
                    options: [
                        { value: 4, text: "Strongly Disagree" }, // Reverse scored
                        { value: 3, text: "Disagree" },
                        { value: 2, text: "Neutral" },
                        { value: 1, text: "Agree" },
                        { value: 0, text: "Strongly Agree" }
                    ]
                },
                {
                    id: 4,
                    text: "I'm always optimistic about my future.",
                    options: [
                        { value: 0, text: "Strongly Disagree" },
                        { value: 1, text: "Disagree" },
                        { value: 2, text: "Neutral" },
                        { value: 3, text: "Agree" },
                        { value: 4, text: "Strongly Agree" }
                    ]
                },
                {
                    id: 5,
                    text: "I enjoy my friends a lot.",
                    options: [
                        { value: 0, text: "Strongly Disagree" },
                        { value: 1, text: "Disagree" },
                        { value: 2, text: "Neutral" },
                        { value: 3, text: "Agree" },
                        { value: 4, text: "Strongly Agree" }
                    ]
                },
                {
                    id: 6,
                    text: "It's important for me to keep busy.",
                    options: [
                        { value: 0, text: "Strongly Disagree" },
                        { value: 1, text: "Disagree" },
                        { value: 2, text: "Neutral" },
                        { value: 3, text: "Agree" },
                        { value: 4, text: "Strongly Agree" }
                    ]
                },
                {
                    id: 7,
                    text: "I hardly ever expect things to go my way.",
                    options: [
                        { value: 4, text: "Strongly Disagree" }, // Reverse scored
                        { value: 3, text: "Disagree" },
                        { value: 2, text: "Neutral" },
                        { value: 1, text: "Agree" },
                        { value: 0, text: "Strongly Agree" }
                    ]
                },
                {
                    id: 8,
                    text: "I don't get upset too easily.",
                    options: [
                        { value: 0, text: "Strongly Disagree" },
                        { value: 1, text: "Disagree" },
                        { value: 2, text: "Neutral" },
                        { value: 3, text: "Agree" },
                        { value: 4, text: "Strongly Agree" }
                    ]
                },
                {
                    id: 9,
                    text: "I rarely count on good things happening to me.",
                    options: [
                        { value: 4, text: "Strongly Disagree" }, // Reverse scored
                        { value: 3, text: "Disagree" },
                        { value: 2, text: "Neutral" },
                        { value: 1, text: "Agree" },
                        { value: 0, text: "Strongly Agree" }
                    ]
                },
                {
                    id: 10,
                    text: "Overall, I expect more good things to happen to me than bad.",
                    options: [
                        { value: 0, text: "Strongly Disagree" },
                        { value: 1, text: "Disagree" },
                        { value: 2, text: "Neutral" },
                        { value: 3, text: "Agree" },
                        { value: 4, text: "Strongly Agree" }
                    ]
                }
            ],
            interpretation: {
                ranges: [
                    { 
                        min: 0, 
                        max: 13, 
                        label: "Very Pessimistic", 
                        description: "Tendency to expect negative outcomes. This outlook may benefit from cognitive-behavioral strategies to challenge negative thought patterns."
                    },
                    { 
                        min: 14, 
                        max: 18, 
                        label: "Moderately Pessimistic", 
                        description: "Generally expects somewhat negative outcomes, but with some flexibility. Could benefit from focusing on positive aspects of situations."
                    },
                    { 
                        min: 19, 
                        max: 22, 
                        label: "Neutral/Realistic", 
                        description: "Balanced outlook that considers both positive and negative possibilities. This middle range represents a realistic perspective."
                    },
                    { 
                        min: 23, 
                        max: 26, 
                        label: "Moderately Optimistic", 
                        description: "Generally expects positive outcomes while remaining grounded in reality. This outlook is associated with better stress management."
                    },
                    { 
                        min: 27, 
                        max: 32, 
                        label: "Very Optimistic", 
                        description: "Strong tendency to expect positive outcomes. While generally beneficial, extremely high scores might indicate unrealistic optimism in some situations."
                    }
                ],
                scoringNote: "Scores range from 0 to 32. Items 3, 7, and 9 are reverse scored. Higher scores indicate greater optimism."
            }
        },
        {
            id: "rses",
            name: "Rosenberg Self-Esteem Scale (RSES)",
            shortDescription: "Measures global self-worth",
            description: "A 10-item scale that measures global self-worth by measuring both positive and negative feelings about the self.",
            estimatedTime: "5-10 minutes",
            questions: [] // Questions would be populated here
        },
        {
            id: "ers-r",
            name: "Ego Resiliency Scale Revised (ERS-R)",
            shortDescription: "Measures psychological resilience",
            description: "Assesses an individual's ability to adapt to changing circumstances and recover from adversity.",
            estimatedTime: "10-15 minutes",
            questions: [] // Questions would be populated here
        },
        {
            id: "jas",
            name: "Jenkins Activity Survey (JAS)",
            shortDescription: "Assesses Type A behavior pattern",
            description: "Identifies Type A behavior patterns associated with increased risk of coronary heart disease.",
            estimatedTime: "15-20 minutes",
            questions: [] // Questions would be populated here
        },
        {
            id: "gse",
            name: "General Self-Efficacy Scale (GSE)",
            shortDescription: "Measures belief in one's competence",
            description: "Assesses the belief that one's actions are responsible for successful outcomes, measuring a broad sense of personal competence.",
            estimatedTime: "5-10 minutes",
            questions: [] // Questions would be populated here
        }
    ]
};
