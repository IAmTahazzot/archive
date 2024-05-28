const studyClass = {
    name: 'Chemistry',
    start_time: '07:00:00',
    end_time: '8:00:00',
    teacher: 'Stephanie',
    total_student: 70,
};

// let's loop over this object
for (const item of Object.keys(studyClass)) console.log(item)
for (const item in studyClass) console.log(item)
for (const item of Object.entries(studyClass)) console.log(item)

