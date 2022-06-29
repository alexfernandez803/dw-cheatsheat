import CognitoStack from "./CognitoStack";


export default function main(app) {
  new CognitoStack(app, "cognito");
}
