export interface project {
  preview: string
  title: string
  description: string
  gitHub: URL
  deploy: URL
}

export const listProjects: project[] = [
  {
    preview: '/preview/Chat-bot.svg',
    title: 'Chat bot',
    description: 'This is a chat Bot using opnenai API, this bot cand response any question',
    gitHub: new URL('https://github.com/ronald7745/chat-bot'),
    deploy: new URL('https://chat-bot-ronald7745.vercel.app/')
  },
  {
    preview: '/preview/Url-shortener.svg',
    title: 'Url shortener',
    description: 'This is a Shortener for urls, you can shorter the large urls',
    gitHub: new URL('https://github.com/ronald7745/url-shortener'),
    deploy: new URL('https://urll.fun')
  },
  {
    preview: '/preview/Chat.svg',
    title: 'Chat App',
    description: 'This is a web application where you can send text messages to other people and in which you can have 1 on 1 conversations, your messages will be saved in a database with the time they were sent and you can check them from any device simply by accessing your account from github.',
    gitHub: new URL('https://github.com/ronald7745/chat-app'),
    deploy: new URL('https://chat-app-ronald7745.vercel.app')
  },
  {
    preview: '/preview/Todo.svg',
    title: 'Todo App',
    description: 'This is a web app where you can create, read, modify and delete your to-do list and all this in real time where you can access it from any device, simply by logging in with your github account',
    gitHub: new URL('https://github.com/ronald7745/Todo-app'),
    deploy: new URL('https://todo-app-ronald7745.vercel.app/')
  },
  {
    preview: '/preview/Payments.svg',
    title: 'Subscription Payments',
    description: 'This is a payment gateway (coming soon)',
    gitHub: new URL('https://github.com/ronald7745/subscription-payments'),
    deploy: new URL('https://subscription-payments-nine.vercel.app/')
  }
]
