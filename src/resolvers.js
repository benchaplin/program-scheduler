import { User } from "./models/User";

export const resolvers = {
    Query: {
        students: () => User.find({ type: "student" })
    },
    Mutation: {
        createUser: async (_, userArgs) => {
            const newUser = new User(userArgs);
            await newUser.save();
            console.log(newUser);
            return newUser;
        }
    }
};
