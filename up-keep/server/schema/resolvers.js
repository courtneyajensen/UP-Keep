const { Fall, Spring, Summer, Winter } = require('../models');

const resolvers = {
    Query: {
        fall: async () => {
            return Fall.find({});
        },
         spring: async () => {
            return Spring.find({});
         },
         summer: async () => {
            return Summer.find({})
         },
         winter: async () => {
            return Winter.find({})
         }
    },
    Mutation: {
      creatFallTask: async (parent, args) => {
         const falltask = await FallTask.create(args);
         return falltask
      },
      creatFallTask: async (parent, args) => {
         const springtask = await SpringTask.create(args);
         return springtask
      },
      creatFallTask: async (parent, args) => {
         const summertask = await SummerTask.create(args);
         return summertask
      },
      creatFallTask: async (parent, args) => {
         const wintertask = await WinterTask.create(args);
         return wintertask
      },
    },
};

module.exports = resolvers;