module.exports = {
  'content-api': require('./content-api'),
};

// module.exports = [
//   {
//     method: 'GET',
//     path: '/',
//     handler: 'myController.index',
//     config: {
//       policies: [],
//     },
//   },
//   {
//     method: 'POST',
//     path: '/setOwnIDDataByLoginId',
//     handler: 'setOwnIDDataByLoginIdController.index',
//     config: {
//       policies: [],
//       auth: false
//     },
//   },
// ];
