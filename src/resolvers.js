import { User } from "./models/User";

export const resolvers = {
    Query: {
        users: () => User.find({})
    },
    Mutation: {
        createUser: async (_, filter) => {
            const newUser = new User(filter);
            await newUser.save();
            return newUser;
        },
        updateUser: async (_, { filter, userArgsToUpdate }) => {
            const updatedUser = await User.findOneAndUpdate(
                filter,
                userArgsToUpdate,
                { new: true }
            );
            return updatedUser;
        },
        deleteUser: async (_, filter) => {
            const deletedUser = await User.findOneAndDelete(filter);
            return deletedUser;
        }
    }
};
