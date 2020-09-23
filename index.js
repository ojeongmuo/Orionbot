const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;


client.on('ready', () => {
  console.log('켰다.');
client.user.setPresence({ game: { name: 'o!help' }, status: 'online' })
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content == '사용법') {
    return message.reply('o!help 쳐보세요');
  }






if(message.content == 'o!겐지') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name Genji```', '```fix\nFlick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/755758873335300320/756212406740451418/997b60a86b5f1c96.PNG')
    

    message.channel.send(embed)
  }





  if(message.content == 'o!겐지') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
  
      .addField('```Name Genji```', '```fix\nSilent Shot```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/755758873335300320/756212812216533022/e5c8a73472ed7289.PNG')
    message.channel.send(embed)
  }

if(message.content == 'o!겐지') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name Genji```', '```fix\nAbilities```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/755758873335300320/756213069301940356/153915b7c848a127.PNG')
    message.channel.send(embed)
  }

  if(message.content == 'o!토르비온') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name Torbjorn```', '```fix\nSilent Shot```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/755758873335300320/756307222031630466/f8a6e0a2266eeeff.PNG')

    message.channel.send(embed)
  }





  if(message.content == 'o!토르') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')

      .addField('```Name Torbjorn```', '```fix\nSilent Shot```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/755758873335300320/756307222031630466/f8a6e0a2266eeeff.PNG')

    message.channel.send(embed)
  }


  

 
  


  
  
  
  
  if(message.content == 'o!리퍼') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')

      .addField('```Name Reaper```', '```fix\nFlick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/755758873335300320/756211618680930365/ed3e4eea0f92f94c.PNG')

    message.channel.send(embed)
  }



  if(message.content == 'o!리퍼') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')

      .addField('```Name Reaper```', '```fix\nSilent shot```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/755758873335300320/756211641523241010/2.PNG')

    message.channel.send(embed)
  }



  




  

  if(message.content == 'o!둠피') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')

      .addField('```Name Doom```', '```fix\nFlick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/755758873335300320/756307318051962971/9431fd1a8b973ac6.PNG')
 
    message.channel.send(embed)
  }



  if(message.content == 'o!둠피') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')

      .addField('```Name Doom```', '```fix\nSilent Shot```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/755758873335300320/756307376554115090/b2b275953186ee6f.PNG')

    message.channel.send(embed)
  }



  if(message.content == 'o!위도우') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')

      .addField('```Name Widow```', '```fix\nFlick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/755758873335300320/756202639376646355/1a3bb2f54b11d621.PNG')

    message.channel.send(embed)
  }

  
  if(message.content == 'o!위도우') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
 
      .addField('```Name Widow```', '```fix\nSilent Shot```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/755758873335300320/756202997545042062/f8651bb8d3161100.PNG')

    message.channel.send(embed)
  }


  if(message.content == 'o!위도') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')

      .addField('```Name Widow```', '```fix\nFlick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/755758873335300320/756202639376646355/1a3bb2f54b11d621.PNG')
  
    message.channel.send(embed)
  }


  if(message.content == 'o!위도') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
   
      .addField('```Name Widow```', '```fix\nSilent Shot```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/755758873335300320/756202997545042062/f8651bb8d3161100.PNG')
 
    message.channel.send(embed)
  }


  if(message.content == 'o!한조') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
    
      .addField('```Name Hanzo```', '```fix\nFlick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/755758873335300320/756208537390153899/7283f0fdc3f6b160.PNG')

    message.channel.send(embed)
  }


  
  if(message.content == 'o!정크') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
 
      .addField('```Name Junkrat```', '```fix\nSilent Shot```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/755758873335300320/756402818549809173/e1ad6cbcd9495f7a.PNG')

    message.channel.send(embed)
  }
  


  



  if(message.content == 'o!애쉬') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')

      .addField('```Name Ash```', '```fix\nFlick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/755758873335300320/756201110053584966/8a49ef0f1992e74e.PNG')

    message.channel.send(embed)
  }
  

  if(message.content == 'o!애쉬') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')

      .addField('```Name Ash```', '```fix\nSilent Shot```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/755758873335300320/756201546030645289/e8d8a38b712967aa.PNG')

    message.channel.send(embed)
  }



  



  if(message.content == 'o!파라') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name Para```', '```fix\nFlick```', true)

      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/755758873335300320/756401748058439710/ee7c7ecc7b4f85e3.PNG')

    message.channel.send(embed)
  }
  



  if(message.content == 'o!파라') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name Para```', '```fix\nSilent Shot```', true)
 
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/755758873335300320/756401750432546916/2c58d6f092569b82.PNG')

    message.channel.send(embed)
  }

if(message.content == 'o!디바') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name D.Va```', '```fix\nTracking```', true)
  
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/756303199824248962/757080266396401725/1.PNG')

    message.channel.send(embed)
  }

  if(message.content == 'o!디바') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name D.Va```', '```fix\nAbilities```', true)
  
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/756303199824248962/757080278190653580/e85d9e43bbc0400b.PNG')

    message.channel.send(embed)
  }


  if(message.content == 'o!호그') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name Roadhog```', '```fix\nFlick```', true)
  
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/756303199824248962/757078018605711391/157bd7a846310122.PNG')

    message.channel.send(embed)
  }

  if(message.content == 'o!호그') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name Roadhog```', '```fix\nSilent Shot```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/756303199824248962/757078064705568808/ee95c4d1522487ad.PNG')
    message.channel.send(embed)
  }

  if(message.content == 'o!호그') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name Roadhog```', '```fix\nAbilities```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/756303199824248962/757078187347017828/2.png')
    message.channel.send(embed)
  }

  if(message.content == 'o!시그마') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name Sigma```', '```fix\nFlick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/756303199824248962/757078311946944533/69a410a168422f6f.PNG')
    message.channel.send(embed)
  }
  
  if(message.content == 'o!시그마') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name Sigma```', '```fix\nAbilities```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/756303199824248962/757079399047757985/53b61f75af8eed6f.PNG')
    message.channel.send(embed)
  }
  if(message.content == 'o!레킹볼') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name wrecking ball```', '```fix\nTracking```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/756303199824248962/757078589907796108/2.png')
    message.channel.send(embed)
  }

  
  
  if(message.content == 'o!오리사') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name Orisa```', '```fix\nTracking```', true)
     
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/756303199824248962/757079009665351780/3.PNG')
     
    message.channel.send(embed)
  }
  
  if(message.content == 'o!윈스턴') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name Winston```', '```fix\nTracking```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/756303199824248962/757079054544273419/1.PNG')
    message.channel.send(embed)
  }

  if(message.content == 'o!윈스') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name Winston```', '```fix\nTracking```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/756303199824248962/757079054544273419/1.PNG')
    message.channel.send(embed)
  }

  if(message.content == 'o!로드호그') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name Roadhog```', '```fix\nFlick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/756303199824248962/757078018605711391/157bd7a846310122.PNG')
    message.channel.send(embed)
  }

  if(message.content == 'o!로드호그') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name Roadhog```', '```fix\nSilent Shot```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/756303199824248962/757078064705568808/ee95c4d1522487ad.PNG')
    message.channel.send(embed)
  }


  if(message.content == 'o!로드호그') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name Roadhog```', '```fix\nAbilities```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/756303199824248962/757078187347017828/2.png')
    message.channel.send(embed)
  }


  





  if(message.content == 'o!라인') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .addField('```Name Reinhardt```', '```fix\nTracking```', true)
      .setColor('#000000')
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/756303199824248962/757079491268050960/d1611a4afa8db87d.PNG')
    message.channel.send(embed)
  }



  if(message.content == 'o!라인') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .addField('```Name Reinhardt```', '```fix\nAbilities```', true)
      .setColor('#000000')
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/756303199824248962/757079399047757985/53b61f75af8eed6f.PNG')
    message.channel.send(embed)
  }

 





  



 

  


  

  if(message.content == 'o!정크렛') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
 
      .addField('```Name Junkrat```', '```fix\nSilent Shot```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/755758873335300320/756402818549809173/e1ad6cbcd9495f7a.PNG')
   
    message.channel.send(embed)
  }



  
  

  if(message.content == 'o!아나') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name Ana```', '```fix\nFlick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/756303199824248962/757079636382318632/d732d3bf16f6abb6.PNG')
    message.channel.send(embed)
  }

if(message.content == 'o!아나') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name Ana```', '```fix\nAbilities```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/756303199824248962/757079880835006505/1456b47c9722e7d2.PNG')
    message.channel.send(embed)
  }

 
  



  if(message.content == 'o!맥') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name Mac```', '```fix\nFlick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/755758873335300320/756207115391074465/1.PNG')
      message.channel.send(embed)
    }



  if(message.content == 'o!맥') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name Mac```', '```fix\nSilent Shot```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/755758873335300320/756206832258908180/f822da4068d8b9c2.PNG')
    message.channel.send(embed)
  }

  if(message.content == 'o!맥크리') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name MacCree```', '```fix\nFlick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/755758873335300320/756207115391074465/1.PNG')
    message.channel.send(embed)
  }


  if(message.content == 'o!맥크리') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name MacCree```', '```fix\nSilent Shot```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/755758873335300320/756206832258908180/f822da4068d8b9c2.PNG')
    message.channel.send(embed)
  }



  

  if(message.content == 'o!트레') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name Tracer```', '```fix\nTracking```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/755758873335300320/756203563474092093/1.PNG')
    message.channel.send(embed)
  }





  if(message.content == 'o!트레이서') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name Tracer```', '```fix\nTracking```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/755758873335300320/756203563474092093/1.PNG')
    message.channel.send(embed)
  }

  if(message.content == 'o!메이') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name May```', '```fix\nTracking```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/755758873335300320/756207375559557150/f22c693aaa50146d.PNG')
    message.channel.send(embed)
  }


if(message.content == 'o!솔저') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name Soldier```', '```fix\nTracking```', true)
      .setImage('https://cdn.discordapp.com/attachments/755758873335300320/756207553343520788/8180055256142d8f.PNG')
      .setThumbnail(img)
    message.channel.send(embed)
  }


  if(message.content == 'o!솔져') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name Soldier```', '```fix\nTracking```', true)
      .setImage('https://cdn.discordapp.com/attachments/755758873335300320/756207553343520788/8180055256142d8f.PNG')
      .setThumbnail(img)
    message.channel.send(embed)
  }

  


  
  if(message.content == 'o!솜브라') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name Sombra```', '```fix\nTracking```', true)
      .setImage('https://cdn.discordapp.com/attachments/755758873335300320/756207926997286982/e1e4317cbc91a488.PNG')
      .setThumbnail(img)
    message.channel.send(embed)
  }


  
  if(message.content == 'o!시메') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name Symmetra```', '```fix\nTracking```', true)
      .setImage('https://cdn.discordapp.com/attachments/755758873335300320/756401926375079958/b2453cf4a8db284d.PNG')
      .setThumbnail(img)
    message.channel.send(embed)
  }

  if(message.content == 'o!시메') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name Symmetra```', '```fix\nSilent Shot```', true)
      .setImage('https://cdn.discordapp.com/attachments/755758873335300320/756401919072665620/1.PNG')
      .setThumbnail(img)
    message.channel.send(embed)
  }


  if(message.content == 'o!시메트라') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name Symmetra```', '```fix\nTracking```', true)
      .setImage('https://cdn.discordapp.com/attachments/755758873335300320/756401926375079958/b2453cf4a8db284d.PNG')
      .setThumbnail(img)
    message.channel.send(embed)
  }

  if(message.content == 'o!시메트라') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name Symmetra```', '```fix\nSilent Shot```', true)
      .setImage('https://cdn.discordapp.com/attachments/755758873335300320/756401919072665620/1.PNG')
      .setThumbnail(img)
    message.channel.send(embed)

  }
 


  if(message.content == 'o!바스') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name Bastion```', '```fix\nTracking```', true)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750918569646096394/1.PNG')
      .setThumbnail(img)
    message.channel.send(embed)
  }

  if(message.content == 'o!바스티온') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name Bastion```', '```fix\nTracking```', true)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750918569646096394/1.PNG')
      .setThumbnail(img)

    message.channel.send(embed)
  }


  if(message.content == 'o!마우스') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#FFFF00')
      .addField('```Korean```', '```fix\nMouse translation```', true)
      .setImage('https://cdn.discordapp.com/attachments/756303199824248962/756407053060145153/2fbc732fa2c809ed.jpg')
      .setThumbnail(img)

    message.channel.send(embed)
  }
  
  
if(message.content == 'o!play') {
    let embed = new Discord.RichEmbed()
      .setColor('#FFFF00')
      .setImage('https://cdn.discordapp.com/attachments/755758873335300320/756428964729323550/r3gZGHB.gif')
      .setTitle('```Orion Function```')
      .addField('Orion is Overwatch memory aimbot.', 'Orion is one of the most advanced and customizable.')
.addField('cheat with the highest level of security.', 'You will get a powerful performace and easy to use') 
.addField('interface with 0% of FPS Drops or any type', 'of our customers we make sure') 
.addField('you get what you paid for', 'Are you just going to watch this?') 


    message.channel.send(embed)
  }


 



        else if(message.content == 'o!help') 
       {
        let helpImg = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
        let commandList = [
          {name: 'o!(사용할 영웅)', desc: '사용할 영웅 값을 보내줍니다.'},
{name: 'o!마우스', desc: '마우스 설정키를 번역 해줍니다.'},
        ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('ORION BOT HELP USER', helpImg)
      .setColor('#fff000')


      .setTimestamp()
    .setImage('https://cdn.discordapp.com/attachments/748535337244033095/748955743461441640/UndetectedSawN.png')

    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  if(message.content.startsWith('!전체공지오리온')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('!전체공지'.length);
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(`<@${message.author.id}> ${contents}`);
      });
  
      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
  }
});

function checkPermission(message) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(`<@${message.author.id}> ` + "명령어를 수행할 관리자 권한을 소지하고 있지않습니다.")
    return true;
  } else {
    return false;
  }
}

function changeCommandStringLength(str, limitLen = 8) {
  let tmp = str;
  limitLen -= tmp.length;

  for(let i=0;i<limitLen;i++) {
      tmp += ' ';
  }

  return tmp;
}


client.login(token);
 
