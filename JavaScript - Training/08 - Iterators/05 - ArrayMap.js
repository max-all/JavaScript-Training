const members = ["Taylor", "Donald", "Don", "Bobby"];

const announcements = members.map((member) => {
    return member + " joiner the contest.";
});

console.log(announcements);
// print: 'Taylor joiner the contest.'
//        'Donald joiner the contest.'
//        'Don joiner the contest.'
//        'Bobby joiner the contest.'