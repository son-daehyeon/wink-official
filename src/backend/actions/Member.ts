import {connectDb} from "@/backend/util/MongoDb";

import Member from "@/backend/schemas/Member";
import GithubProfile from "@/interfaces/GithubProfile";

export async function getMembers() {
  await connectDb();

  return await Member.find().exec();
}

export async function getGithubInfo(nodeId: string) {
  const query = `
  {
      node(id: "${nodeId}") {
          ... on User {
              avatarUrl
              url
          }
      }
  }`;

  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.GITHUB_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  return (await response.json())['data']['node'] as GithubProfile;
}
