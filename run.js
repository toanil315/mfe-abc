const concurrently = require("concurrently");

const args = process.argv.slice(2)[0].replace("--apps=", "").split(",");

console.log("=====APP NEED TO START IN LOCAL: ", args);

const colors = [
  "cyan",
  "yellow",
  "greenBright",
  "blueBright",
  "magentaBright",
  "white",
  "grey",
  "red",
];

concurrently(
  args.map((appName, index) => {
    return {
      command: `yarn --cwd ${appName} start --env apps=${args.join(",")}`,
      prefixColor: colors[index],
      name: appName,
    };
  }),
  {
    killOthers: ["failure", "success"],
  }
);