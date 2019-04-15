const appData = {
	name: 'Gmail',
	mailboxes: [
        {type:'inbox',
         names: ['A', 'B', 'C', 'D']
        },
        {type:'starred',
         names: ['X', 'Y','Z']
        },
        {type:'sent',
         names: ['M', 'N', 'O']
        },
        {type:'drafts',
        names: ['J','K','L']
        }
	],
	contacts: [
		{name: 'Shane', lastMessage: "I wont be in class today"},
		{name: 'Katy', lastMessage: "You're such a nerd"}
    ],
    emails: [
        {name:'WMS ABC',
         text: 'vksyfdsvcjscv'},
        {name: 'Natural Gas',
         text: 'uygewwvvcib'},
        {name: 'target',
         text: 'vu6ewfvn'}, 
        {name: 'Troop46',
        text: 'iuwefqbkcfkb'}
        ]
}
// console.log(appData.mailboxes[0].names);
// console.log(appData.emails);
//console.log(appData.emails[1].text);
// appData.emails[3].status = 'sent';
// console.log(appData.emails[3]);
appData.mailboxes[3].names.push('pp');
console.log(appData.mailboxes[3].names);
