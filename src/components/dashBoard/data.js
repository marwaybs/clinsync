export const categories = [
  'General Chat', 
  'Cardiology', 
  'Psychiatry',
  'Nephrology',
  'Infectious Disease',
]

export const people = [
  'Peach Smith', 
  'Sarah Rogers', 
  'Kat Orwell',
]

export const peopleBio = [
  {
    name: 'Peach Smith',
    bio: 'A cardiologist at Hamilton General Hospital',
    focus: '',
    pubs: '',
  },
  {
    name:'Sarah Rogers',
    bio: 'A cardiologist at Hamilton General Hospital',
    focus: '',
    pubs: '',
  },
  {
    name: 'Kat Orwell',
    bio: 'A cardiologist at Hamilton General Hospital',
    focus: '',
    pubs: '',
  },
]

export const conversations = [
  [
    {sender: 'me', text: 'Hi, I have a quick question about Polycycstic Kidney Disease. Do you have time to chat right now?'},
    {sender: 'you', text: 'Yes, I normally charge 300 Credits for a simple question and then 100 credits per 15 minute for more complex ones.'},
    {sender: 'me', text: 'That sounds fair. I’m sending an ultrasound over, can you check whether you think this is PKD?'},
    {sender: 'me', text: '[ULTRASOUND HERE]'},
    {sender: 'me', text: 'This is a 47 y.o. Male of Caribbean descent.'},
    {sender: 'you', text: 'That image appears to be within expected range for their demographic.'},
    {sender: 'me', text: 'Thanks!'},
    {sender: 'you', text: 'You’re welcome'},
  ],
  [
    {sender: 'you', text: 'Hey, I need to ask you a quick question. When are you available for a consult?'},
    {sender: 'me', text: 'I’m typically free from 6pm to 9pm on weeknights and from 10am to noon on weekends.'},
    {sender: 'you', text: 'Sounds good, how much do you charge for a consult?'},
    {sender: 'me', text: 'I typically charge 150 credits every 15 minutes'},
    {sender: 'you', text: 'Cool, can I book you for 30 minutes on Sunday, Noveber 10th from 10 am to 11 am?'},
    {sender: 'me', text: 'Sure.'},
    {sender: 'you', text: 'See you then!'},
  ],
  [
    {sender: 'you', text: 'Hello'},
  ],
]

export const posts = [
  {
    user: 'Dr.Beam',
    description: "Hi everyone, please note that there is a strain of Vibrio going around the downtown Toronto area. Please advise all your patients with open wounds to take extra care in sanitation. ", 
    // [TWO PEOPLE LIKED THIS POST]
    comments: [
      {
        user: "Doctor1",
        text: "Looks like a chest",
        helpful: 2,
        irrelevant: 0,
      },
      {
        user: "Doctor2",
        text: "I agree",
        helpful: 2,
        irrelevant: 0,
      }
    ]
  },
  {
    user: 'Dr. John - General Practitioner',
    description: "I have a 21 y.o. female patient with a persistent cough which is unresponsive to amoxicillin. Does anyone have any suggestions for how I should proceed? ",
    comments: [
      {
        user: "Dr. Doe - Internal Medicine",
        text: "Could be a postnasal drip. It should go away by itself in two weeks.",
        helpful: 7,
        irrelevant: 0,
      },
      {
        user: "Dr. Smith - Surgeon",
        text: "I agree",
        helpful: 0,
        irrelevant: 5,
      }
    ]
  }
]
