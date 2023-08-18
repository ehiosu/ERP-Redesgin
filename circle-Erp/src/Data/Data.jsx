import { BiTime, BiTrendingUp } from 'react-icons/bi'
import {FiDivide} from 'react-icons/fi'
import{VscGraph}    from'react-icons/vsc'
import{GrOptimize}  from 'react-icons/gr'
import{SiKasasmart} from  'react-icons/si'

export const ScrollData=[{title:'Manage your Finances',icon:<FiDivide/>,style:'bg-[#1B49C1]'},{title:'Boost your Sales',icon:<VscGraph/>,style:'bg-[#F57347]'},{title:'Integrate your Services',icon:<BiTime/>,style:'bg-[#5BD7DF]'},{title:'Optimize your Operations',icon:<BiTrendingUp />,style:'bg-[#5662A1]'},{title:'Integrate your Services',icon:<SiKasasmart/>,style:'bg-[#afbcff80]'}]


export const TextData = [
    {
        chatID: '0',
        recepient_Username: 'Olatunde Johnson',
        chat: [
            { id: '0', message: 'Hello, have you scheduled the meeting?', timestamp: '16-08-2023, 09:30',recipient:'Olatunde Johnson'  },
            { id: '1', message: 'Yes, the meeting is scheduled for tomorrow at 2:00 PM.', timestamp: '16-08-2023, 09:35' ,recipient:'you'},
            { id: '2', message: 'Great, thank you!', timestamp: '16-08-2023, 09:40',recipient:'Olatunde Johnson'  },
            { id: '3', message: 'You\'re welcome!', timestamp: '17-08-2023, 09:45',recipient:'you' }
        ]
    },
    {
        chatID: '1',
        recepient_Username: 'Alice Smith',
        chat: [
            { id: '0', message: 'Hi, could you please send me the quarterly report?', timestamp: '16-08-2023, 10:15' ,recipient:'you'},
            { id: '1', message: 'Sure, I will send it to you shortly.', timestamp: '16-08-2023, 10:20',recipient:'Alice Smith'  },
            { id: '2', message: 'Thank you! I need it for the upcoming presentation.', timestamp: '16-08-2023, 10:30' ,recipient:'you'},
            { id: '3', message: 'No problem, I\'ll make sure to get it to you in time.', timestamp: '16-08-2023, 10:35',recipient:'Alice Smith'  }
        ]
    },
    {
        chatID: '2',
        recepient_Username: 'David Brown',
        chat: [
            { id: '0', message: 'Good morning, any updates on the project?', timestamp: '16-08-2023, 11:45',recipient:'you' },
            { id: '1', message: 'Yes, we made significant progress. I can share the details in our meeting.', timestamp: '16-08-2023, 11:50' ,recipient:'Alice Smith'},
            { id: '2', message: 'That sounds promising. Looking forward to the meeting.', timestamp: '16-08-2023, 12:00',recipient:'you'  },
            { id: '3', message: 'Absolutely, I think you\'ll be pleased with the developments.', timestamp: '16-08-2023, 12:05',recipient:'Alice Smith' }
        ]
    },
   
];


export const TextChannels=[
    {'channelID':1,'channelName':'general'},
    {'channelID':2,'channelName':'Tech Team'}
]