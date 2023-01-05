const { Fall, Spring, Summer, Winter } = require('../models');

const resolvers = {
   Query: {
     Fall: async () => {
       return Fall.find({});
     },
     Spring: async (parent, { _id }) => {
       const params = _id ? { _id } : {};
       return Spring.find(params);
     },
     Summer: async (parent, {_id }) => {
       const params = _id ? {_id } : {};
     },
     Winter: async (parent, {_id }) => {
       const params = _id ? {_id } : {};
     },
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