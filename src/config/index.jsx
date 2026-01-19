import CONFIG from "./env";

const ENV = "local";

const AppConfig = CONFIG[ENV];

export default AppConfig;
