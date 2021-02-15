const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(url);

async function insertTestUsers() {
    try {
        await client.connect();
        console.log(`mongo connected at ${url}`);

        const db = client.db("test");
        const users = db.collection("users");

        const newUsers = createUsers();
        let count = 0;
        newUsers.forEach(async newUser => {
            const res = await users.insertOne(newUser);
            count = count + res.result.n;
        });
        console.log(`Inserted ${count} new users`);
    } finally {
        await client.close();
        console.log(`mongo connection closed`);
    }
}

function createUsers() {
    const studentNames = [
        "Simeon Andonov",
        "Maartje Blanxart",
        "Jenci Roma",
        "Elliana Duvàl",
        "Antoni Graves ",
        "Fionnuala Pharlain",
        "Arvids Santini",
        "Semiha Welch",
        "Serife Wells",
        "Ahmed Pavlovski",
        "Manju Losa",
        "Theofilos Dodge",
        "Yamin Ruan",
        "Gabriele Warrob",
        "Sanjay Nifterik",
        "Zaahir Van Heel",
        "Ely Boivin",
        "Johanna Romagnoli",
        "York Krumin",
        "Nadezhda Hoedemaekers"
    ];

    const counselorNames = [
        "Else Cavan",
        "Maja Both",
        "Eldar Tafani",
        "Asiya Flores",
        "Klara Dunn"
    ];

    const instructorNames = [
        "Leonor Kavanaugh",
        "Gervasio Gheorghe",
        "Mason Kawasaki",
        "Silas Magro",
        "Plácido Estévez"
    ];

    const adminNames = ["Luciana Wyman", "Jerahmeel Carson"];

    const generateUsername = name =>
        `${name.split(" ")[0].toLowerCase()}.${name.split(" ")[1][0].toLowerCase()}`;
    const password = "asdf";
    const generateTimezone = () => {
        const tzs = [-480, -420, -360, -300, 0, 60, 120, 330, 480];
        return tzs[Math.floor(Math.random() * tzs.length)];
    };

    const generateDocs = (names, type) =>
        names.map(name => ({
            type,
            username: generateUsername(name),
            password,
            firstName: name.split(" ")[0],
            lastName: name.split(" ")[1],
            timezone: generateTimezone(),
            courses: []
        }));

    return generateDocs(studentNames, "student")
        .concat(generateDocs(counselorNames, "counselor"))
        .concat(generateDocs(instructorNames, "instructor"))
        .concat(generateDocs(adminNames, "admin"));
}

insertTestUsers();
