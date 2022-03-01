const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/dcr');
const { STRING } = Sequelize;

const Teacher = db.define('teacher', {
    name: {
        type: STRING,
        allowNull: false
    },
    style: {
        type: STRING,
        allowNull: false
    }
    })

    const Student = db.define('student', {
        name: {
            type: STRING,
            allowNull: false
        }
    })

    const Class = db.define('class', {
        name: {
            type: STRING,
            allowNull: false   
        },
        level: {
            type: STRING,
            allowNull: false
        },
        day: {
            type: STRING,
            allowNull: false
        },
        time: {
            type: STRING,
            allowNull: false
        },
    })

    Class.belongsTo(Teacher)
    Class.belongsTo(Student)
    Class.belongsTo(Teacher)
    
    Student.hasMany(Class)
    Teacher.hasMany(Class)
    Teacher.hasMany(Student)
  
  
    const syncAndSeed = async() =>{
        await db.sync( { force: true } );

const [student1,student2,student3,student4] = await Promise.all([
        Student.create({name: 'Alice'}),
        Student.create({name: 'Edward'}),
        Student.create({name: 'Bella'}),
        Student.create({name: 'Rosalie'})
    ])

const [teacher1,teacher2,teacher3,teacher4] = await Promise.all([
        Teacher.create({name: 'Natalie', style: 'theatre'}),
        Teacher.create({name: 'Morgan', style: 'theatre'}),
        Teacher.create({name: 'Gwen', style: 'tap'}),
        Teacher.create({name: 'Tracee', style: 'contemporary'})
    ])
    
const [theatre1,jazz,tap,theatre2] = await Promise.all([
           Class.create({name: 'Theatre 1', level: 'Beginner', day: 'Monday', time: '10:00am'}),
            Class.create({name: 'Jazz', level: 'Basic', day: 'Tuesday', time: '10:00am'}),
            Class.create({name: 'Tap', level: 'Basic', day: 'Wednesday', time: '10:00am'}),
            Class.create({name: 'Theatre 2', level: 'Beginner', day: 'Thursday', time: '10:00am'}),
        ])
    }

    module.exports = {
        syncAndSeed, 
        db,
        models: {
          Teacher, 
          Class, 
          Student
        }
    }