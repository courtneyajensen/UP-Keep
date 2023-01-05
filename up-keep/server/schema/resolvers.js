const { Fall, Spring, Summer, Winter } = require('../models');

const resolvers = {
   Query: {
     fallTasks: async () => {
       return Fall.find({});
     },
     springTasks: async () => {
      return Spring.find({});
     },
     summerTasks: async () => {
      return Summer.find({});
     },
     winterTasks: async () => {
      return Winter.find({});
     },
   },
    Mutation: {
      createFallTask: async (parent, args) => {
         const falltask = await FallTask.create(args);
         return falltask
      },
      createSpringTask: async (parent, args) => {
         const springtask = await SpringTask.create(args);
         return springtask
      },
      createSummerTask: async (parent, args) => {
         const summertask = await SummerTask.create(args);
         return summertask
      },
      createWinterTask: async (parent, args) => {
         const wintertask = await WinterTask.create(args);
         return wintertask
      }
    },
};

module.exports = resolvers;