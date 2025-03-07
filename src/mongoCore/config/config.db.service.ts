import { Configuration } from "./config.key";
import { ConfigService } from "./config.service";
import { MongoClientOptions, ServerApiVersion } from "mongodb";

const config = new ConfigService();

export const URI = 
  `mongodb://${
    config.get(Configuration.MONGOUSERNAME)
  }:${
    config.get(Configuration.MONGOPASSWORD)
  }@${
    config.get(Configuration.MONGOHOST)
  }/${
    config.get(Configuration.MONGODATABASE)
  }`;
console.log(URI);
export const databaseProvider: MongoClientOptions = {
  serverApi: ServerApiVersion.v1,
  auth: {
    username: config.get(Configuration.MONGOUSERNAME),
    password: config.get(Configuration.MONGOPASSWORD)
  },
  connectTimeoutMS: 10000,
  socketTimeoutMS: 45000,
  maxPoolSize: 10,
  authSource: "admin",
  tls: false,
};
