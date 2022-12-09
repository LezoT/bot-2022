const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
} = require("discord.js");

const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember, Channel } = Partials;

const { loadEvents } = require("./Handlers/eventhandler");
const { loadCommands } = require("./Handlers/commandHandler");

const client = new Client({
  intents: [Guilds, GuildMember, GuildMessages],
  partials: [User, Message, GuildMember, ThreadMember],
});

client.commands = new Collection();
client.config = require("./config.json");

client.login(client.config.token).then(() => {
  loadEvents(client);
  loadCommands(client);
});
