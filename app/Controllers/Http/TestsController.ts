 //import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TestsController {
   public async test(){

        const { Telegraf } = require('telegraf')
        
const bot = new Telegraf('1940404994:AAHPEEydj1bQZyoyoEa-702MKtDk4lqWkt4')


bot.start((ctx) =>{
   ctx.reply(ctx.from.first_name+" have enter the "+ctx.updateSubTypes[0] +" Start command !!! " )
  
})

bot.help((ctx) =>{
    ctx.reply("you have entered Help command!!! :) XD")
    console.log(ctx.from.first_name)
})

bot.command('greetjpn', (ctx) => ctx.reply('Konichiwa '+ctx.from.first_name))
bot.command('greetpinoy', (ctx) => ctx.reply('Kamusta ka '+ctx.from.first_name))
bot.command('oldschool', (ctx) => ctx.reply('Hello '+ctx.from.first_name))

bot.hears('hi', (ctx) => ctx.reply('Hello!'))
bot.hears('hello', (ctx) => ctx.reply('Hi!'))

bot.hears('cat', (ctx) => ctx.reply('Meow '))
bot.hears('dog', (ctx) => ctx.reply('arf'))
bot.hears('naruto', (ctx) => ctx.reply('datebayo!'))
bot.hears('boruto', (ctx) => ctx.reply('datebasa!'))
bot.hears('jojo', (ctx) => ctx.reply('Nani?'))
bot.hears(['dpets','dpet','my defipets', 'axie', 'axie infinity', 'slp'], (ctx) => ctx.reply('To the moon'))

bot.settings((ctx) =>{
    ctx.reply("you have entered Settings command!!! :) XD")
})

bot.launch();
    

    }


  public async echo(){

    const { Telegraf } = require('telegraf')
        
    const bot = new Telegraf('1938942960:AAGIX4XaUOL8MKo-f8UQfYm10ISHo1v0v6o')
        
    const helpMessage = `
        Say something to me
        /start - start the bot
        /help - command reference
        /echo - this will return your message `
      
      bot.use((ctx, next) =>{
        if(ctx.updateSubTypes[0]=="text"){
           bot.telegram.sendMessage(-507876322, ctx.from.username +" Said: "+ctx.message.text)
        }else{
          bot.telegram.sendMessage(-507876322, ctx.from.username +" Sent: "+ctx.updateSubTypes[0]) 
            
        }
        next()
       })  

      bot.start((ctx) =>{
        
      ctx.reply("Hi, I am Echo bot") 
      ctx.reply(helpMessage)
        })

      bot.help((ctx) =>{
        
      ctx.reply(helpMessage)
        })
      bot.command("echo", (ctx) => {
       
        
        let input = ctx.message.text
        let inputArray = input.split(" ")
            

        let message = ""
            if(inputArray.length ==1){
               message = "you said echo"
            }else{
              inputArray.shift()
              message ="you said "+ inputArray.join(" ")
              }

              ctx.reply(message)

        })
      
        


        
      bot.hears('hi', (ctx) => ctx.reply('Hello!'))
      bot.hears('hello', (ctx) => ctx.reply('Hi!'))
    
      bot.launch();
    }

    public async media(){
      const { Telegraf } = require('telegraf')
        
      const bot = new Telegraf('1901061611:AAEOzrGSNoN4ofDOMXb84afilu7imtW-Euc')

      bot.on('message', (ctx,next) => {
        console.log('you recevied a message from '+ctx.from.username)
        next()
      })

      bot.command('media', ctx => {
        //sfc url
        bot.telegram.sendPhoto(ctx.chat.id,`https://trip101.com/article/best-things-to-do-san-fernando-la-union-philippines` )
        ctx.reply('hey')
      })

  
      //makati url
      //https://tribune.net.ph/wp-content/uploads/2018/09/metro1-1.jpg

      //manila url
      //https://i.ytimg.com/vi/1qjNgko9EFw/maxresdefault.jpg

      //mandaluyong
      //https://cnnphilippines.com/.imaging/mte/demo-cnn-new/750x450/dam/cnn/2020/3/17/Boni-Mandaluyong_CNNPH.jpg/jcr:content/Boni-Mandaluyong_CNNPH.jpg

      //baguio
      //https://timonscabansi.com/wp-content/uploads/2019/08/baguio-city-bell-church.jpg

      bot.launch()
    }
}
