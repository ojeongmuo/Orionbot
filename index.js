const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
const welcomeChannelName = "안녕하세요";
const byeChannelName = "안녕히가세요";
const welcomeChannelComment = "어서오세요.";
const byeChannelComment = "안녕히가세요.";

client.on('ready', () => {
  console.log('켰다.');
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);

  member.addRole(guild.roles.find(role => role.name == "게스트"));
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});




client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content == '안녕 윤성아') {
    return message.reply('안녕하세요 형님');
  }

if(message.content == '그래') {
    return message.reply('필요 하신거 있으신가요 윤성 엽사 치시면 재미있는 사진을 보내드립니다');
  }

if(message.content == '오') {
    return message.reply('ㅎㅎ ');
  }

if(message.content == '느금마') {
    return message.reply('넵 저 ');
  }

if(message.content == '현상 수배 금액') {
    let img = 'https://cdn.discordapp.com/attachments/757259241643048980/757270368749879437/z.PNG';
    let embed = new Discord.RichEmbed()
      .setTitle('이름 조두순 아닌 홍윤성')
      .setURL('http://www.naver.com')
      .setAuthor('복수다', img, 'http://www.naver.com')
      .setThumbnail(img)
      .addBlankField()
      .addField('이름 조두순 아닌 홍윤성', '나이1살')
      .addField('태어난곳', '북한 시골')      
      .addField('엄마', 'ㅇㅇ', true)
.addField('수배 금액', '윤성이 똥 ', true)
     
      
      .setFooter('내가 만듬', img)

    message.channel.send(embed)
  }

   else if(message.content == '현상 수배') {
    let helpImg = 'https://cdn.discordapp.com/attachments/757259241643048980/757270368749879437/z.PNG';
    let commandList = [
      {name: 'ping', desc: '현재 핑 상태'},
      {name: '현상 수배 금액 ', desc: '프로필을 불러옵니다'},
      {name: 'embed2', desc: 'embed 예제2 (help)'},
      {name: '!전체공지', desc: 'dm으로 전체 공지 보내기'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('윤성이 BOT', helpImg)
      .setColor('#186de6')
      .setFooter(`윤성이 봇 BOT ❤️`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  if(message.content.startsWith('!전체공지')) {
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
