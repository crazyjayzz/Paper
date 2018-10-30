
const { Client, Attachment ,RichEmbed} = require('discord.js');
const Discord = require('discord.js');
//const config =  require('./config.json');
const PaperBot = new Discord.Client({disableEveryone: true});
//const Files = require(require('path').join(__dirname, 'js', 'Main.js')).Files;
PaperBot.on("ready", async () => 
{
	console.log(`${PaperBot.user.username} is online!`)
	PaperBot.user.setActivity("Prefix is '-'!", {type: "WARCHING"});
});
//PaperBot.login(config.token);

///////////////////////////////////เวลาบอส/////////////////////////////////////

var Fullday = new Date();
var Timezone = Fullday.setTime( Fullday.getTime() + 7 * 60 * 60 * 1000 );
var Timezone2= Fullday.toISOString()
var day = Fullday.getDay();
var time1 = Fullday.getHours();
var min1 = Fullday.getMinutes();
var boss1 ="คจาคาร์";
var boss2 ="คารานด้า";
var boss3 ="นูเวอร์";
var boss4 ="คูทุม";
var boss5 ="โอฟิน";
var day0 = "อาทิตย์";
var day1 = "จันทร์";
var day2 = "อังคาร";
var day3 = "พุธ";
var day4 = "พฤหัสบดี";
var day5 = "ศุกร์";
var day6 = "เสาร์";
var Timeboss1 = "00:30น.";
var Timeboss2 = "06:00น.";
var Timeboss3 = "10:00น.";
var Timeboss4 = "14:00น.";
var Timeboss5 = "19:00น.";
var Timeboss6 = "23:00น.";

	PaperBot.on('message', msg => 
{
	if (msg.content === '!Boss')
	{
		if(day === 0 )
		{
      		var dayname = day0;
    		var T01 = (`${Timeboss1} ${boss2}`);
    		var T02 = (`${Timeboss2} ${boss4}`);
    		var T03 = (`${Timeboss3} ${boss1}  ${boss2}`);
    		var T04 = (`${Timeboss4} ${boss3}  ${boss4}`);
    		var T05 = (`${Timeboss5} ${boss2}`);
    		var T06 = (`${Timeboss6} ${boss3}  ${boss4} `);
    		var T07 = (`วัน${day1}  ${Timeboss1} ${boss1}`);
			const embed = new RichEmbed()
      		.setTitle(`เวลาบอสโลก วัน${dayname}`)
      		.setColor(0xFF0000)
      		.setDescription(`${T01}\n${T02}\n${T03}\n${T04}\n${T05}\n${T06}\n${T07}`);
       		msg.reply(embed);
    	} 

		
			if(day === 1 )
		{
      		var dayname = day1;
    		var T11 = (`${Timeboss1} ${boss1}`);
    		var T12 = (`${Timeboss2} ${boss2}`);
    		var T13 = (`${Timeboss4} ${boss3}`);
    		var T14 = (`${Timeboss5} ${boss1}`);
    		var T15 = (`${Timeboss6} ${boss5}`);
    		var T16 = (`วัน${day2}  ${Timeboss1} ${boss3}`);
			const embed = new RichEmbed()
			.setTitle(`เวลาบอสโลก วัน${dayname}`)
      		.setColor(0xFF0000)
      		.setDescription(`${T11}\n${T12}\n${T13}\n${T14}\n${T15}\n${T16}`);
       		msg.reply(embed);
    		} 

		
		if(day === 2 )
		{
      		var dayname = day2;
    		var T21 = (`${Timeboss1} ${boss3}`);
    		var T22 =(`${Timeboss2} ${boss4}`);
    		var T23 =(`${Timeboss3} ${boss1}  ${boss2}`);
    		var T24 =(`${Timeboss4} ${boss4}`);
    		var T25 =(`${Timeboss5} ${boss3}`);
    		var T26 =(`${Timeboss6} ${boss3}  ${boss4}`);
    		var T27 =(`วัน${day3}  ${Timeboss1} ${boss1}`);
			const embed = new RichEmbed()
      		.setTitle(`เวลาบอสโลก วัน${dayname}`)
      		.setColor(0xFF0000)
      		.setDescription(`${T21}\n${T22}\n${T23}\n${T24}\n${T25}\n${T26}\n${T27}`);
       		msg.reply(embed);
    		} 

		
			if(day === 3 )
		{
			var dayname = day3;
    		var T31 = (`${Timeboss1} ${boss1}`);
    		var T32 =(`${Timeboss3} ${boss1}`);
    		var T33 =(`${Timeboss4} ${boss2}`);
    		var T34 =(`${Timeboss5} ${boss4}`);
    		var T35 =(`${Timeboss6} ${boss5}`);
    		var T36 =(`วัน${day4}  ${Timeboss1} ${boss4}`);
			const embed = new RichEmbed()
      		.setTitle(`เวลาบอสโลก วัน${dayname}`)
      		.setColor(0xFF0000)
      		.setDescription(`${T31}\n${T32}\n${T33}\n${T34}\n${T35}\n${T36}`);
       		 msg.reply(embed);
    	} 

		
			if(day === 4 )
		{
      		var dayname = day4;
    		var T41 =(`${Timeboss1} ${boss4}`); 
    		var T42 =(`${Timeboss2} ${boss3}`);
    		var T43 =(`${Timeboss3} ${boss1}`);
    		var T44 =(`${Timeboss4} ${boss4}`);
    		var T45 =(`${Timeboss5} ${boss1}  ${boss2}`);
    		var T46 =(`${Timeboss6} ${boss1}  ${boss3}`);
    		var T47 =(`วัน${day5}  ${Timeboss1} ${boss1}`);
			const embed = new RichEmbed()
      		.setTitle(`เวลาบอสโลก วัน${dayname}`)
      		.setColor(0xFF0000)
      		.setDescription(`${T41}\n${T42}\n${T43}\n${T44}\n${T45}\n${T46}\n${T47}`);
       		msg.reply(embed);
    		} 

			if(day === 5 )
		{
      		var dayname = day5;
    		var T51 = (`${Timeboss1} ${boss1}`);
    		var T52 = (`${Timeboss3} ${boss4}`);
    		var T53 = (`${Timeboss4} ${boss1}`);
    		var T54 = (`${Timeboss5} ${boss3}`);
    		var T55 = (`${Timeboss6} ${boss5}`);
    		var T56 = (`วัน${day6}  ${Timeboss1} ${boss2}`);
			const embed = new RichEmbed()
      		.setTitle(`เวลาบอสโลก ${dayname}`)
      		.setColor(0xFF0000)
      		.setDescription(`${T51}\n${T52}\n${T53}\n${T54}\n${T55}\n${T56}`);
       		msg.reply(embed);
    		} 

			if(day === 6 )
		{
      		var dayname = day6;
    		var T61 = (`${Timeboss1} ${boss2}`);
    		var T62 =(`${Timeboss2} ${boss3}`);
    		var T63 =(`${Timeboss3} ${boss4}  ${boss1}`);
    		var T64 =(`${Timeboss4} ${boss3}  ${boss2}`);
    		var T65 =(`${Timeboss5} มูลัคคา กวินท์`);
    		var T66 =(`วัน${day0}  ${Timeboss1} ${boss2}`);
			const embed = new RichEmbed()
      		.setTitle(`เวลาบอสโลก วัน${dayname}`)
      		.setColor(0xFF0000)
      		.setDescription(`${T61}\n${T62}\n${T63}\n${T64}\n${T65}\n${T66}`);
       		msg.reply(embed);
    		} 
	}
});

///รูปภาพ

PaperBot.on('message', message => 
{
    if (message.content === '!ชุดเกราะ') 
	{
        const attachment = new Attachment('https://www.picz.in.th/images/2018/10/29/3SCxSn.png');
        message.channel.send(attachment);
    }
	if (message.content === '!อาวุธ') 
	{
        const attachment = new Attachment('https://www.picz.in.th/images/2018/10/29/3SCEw1.png');
        message.channel.send(attachment);
    }
	if (message.content === '!ประดับ') 
	{
        const attachment = new Attachment('https://www.picz.in.th/images/2018/10/29/3SCqI2.png');
        message.channel.send(attachment);
    }
	if (message.content === '!ตารางบอส') 
	{
        const attachment = new Attachment('https://www.picz.in.th/images/2018/10/29/3SCo5J.jpg');
        message.channel.send(attachment);
    }
});

PaperBot.on("message", (msg) =>
{
	if (!msg.content.startsWith("!")) return;
	if (msg.content.slice(1).split(" ")[0] === "Help")
		{
	   const embed = new RichEmbed()
      .setTitle('คำสั่ง')
      .setColor(0xFF0000)
      .setDescription('!Boss(เช็คเวลาบอส) !ตารางบอส !อาวุธ(เช็คFS) !เกราะ(เช็คFS) !ประดับ(เช็คFS)');
       msg.channel.send(embed);
		}
	if (msg.content.slice(1).split(" ")[0] === "help")
		{
		const embed = new RichEmbed()
      .setTitle('คำสั่ง')
      .setColor(0xFF0000)
      .setDescription('!Boss(เช็คเวลาบอส) !ตารางบอส !อาวุธ(เช็คFS) !เกราะ(เช็คFS) !ประดับ(เช็คFS)');
       msg.channel.send(embed);
		}
	
	
});
PaperBot.login('NTA2MDc4MzczMjQ0Njk4NjI0.DrpwOw.iwoujpB0wQm-a_4vpdl3WmNKBA8');


