// let Parse = require('parse')
// let LiveQueryClient = Parse.LiveQueryClient
// const appId = 'notesApp'
// const serverURL = 'ws://localhost:1337/parse'
// const masterKey = '123'
// const liveQueryCollection = 'Message'

// let client = new LiveQueryClient({
//   applicationId: appId,
//   serverURL: serverURL,
//   masterKey: masterKey
// })

// var chatroom = {
//   __type: 'Pointer',
//   className: 'Message'
// }
// // let query = new Parse.Query(Parse.Object.extend('InstantMessage'));

// // query.equalTo('chatroom',chatroom);
// // query.greaterThan("length", 5);
// // query.equalTo('chatroom',chatroom);
// // let subscription = client.subscribe(query);

// // // Add sessiontoken for liveQuery to work with ACL
// // subscription.on('create', (object) => {
// //   console.log('object created');
// // });

// // process.on('uncaughtException', function (err) {
// //     console.log(err);
// // });
// // client.open({ useMasterKey: true })
// client.open()
// client.on('open', () => {
//   console.log('connection opened')
// })

// let query = new Parse.Query('GameScore')

// // let query = new Parse.Query('Game');

// // query.equalTo('chatroom',chatroom);
// // query.greaterThan("length", 5);
// // let query = new Parse.Query(Parse.Object.extend('InstantMessage'));
// // query.equalTo('chatroom',pointerToTheChatroom);
// let subscription = client.subscribe(query)

// // // Add sessiontoken for liveQuery to work with ACL
// subscription.on('create', object => {
//   console.log('object created')
// })

// process.on('uncaughtException', function (err) {
//     console.log(err);
// });

import Parse from 'parse-adowning'
// Parse.serverURL = 'https://parseapi.back4app.com/'
Parse.serverURL = 'http://localhost:3000/parse'
// Parse.initialize(
//   'lYny8sROsl2veGOXhWFE7q1J8XYdIrPARwXNCtJg', // This is your Application ID
//   'lrensT6Zzd9sM8i3CZIX6ivUoyvOO8vOjZsMrEn4' // This is your Javascript key
// )
Parse.initialize(
  'notesApp', // This is your Application ID
  '123', // This is your Javascript key
  '123' // This is your Javascript key
)
// const client = new Parse.LiveQueryClient({
//   applicationId: 'notesApp',
//   serverURL: 'wss://' + 'groupandrews.back4apParse.io', // Example: 'wss://livequerytutorial.back4apParse.io'
//   javascriptKey: 'lrensT6Zzd9sM8i3CZIX6ivUoyvOO8vOjZsMrEn4',
//   masterKey: 'lspXwNsOTPT7osDd8lh5xHQDbeB7iSQdoFAUILzb'
// })
// const client = new Parse.LiveQueryClient({
//   applicationId: 'notesApp',
//   serverURL: 'ws://' + 'localhost:8080/parse', // Example: 'wss://livequerytutorial.back4apParse.io'
//   //   javascriptKey: '123'
//   masterKey: '123'
// })
// client.open({ useMasterKey: true })
Parse.LiveQuery.open()
// const Hero = Parse.Object.extend('GameScore')
// const query2 = new Parse.Query(Hero)
// // query2.fromLocalDatastore();
// // const results = await query2.find();
// // console.log(results);
// // var subscription = Parse.LiveQuery.subscribe(query2)
// let subscription = query2.subscribe()

// // // console.log("On t  ", typeof this.heroes);
// subscription.on('create', hero => {
//   self.heroes.push(hero)
//   //   //   this.heroes += hero;
//   console.log('On create event ', hero)
// })
// console.log(client)

export default Parse