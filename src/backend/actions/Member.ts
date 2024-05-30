import {connectDb} from "@/backend/util/MongoDb";

import Member from "@/backend/schemas/Member";

import {Cache} from "@/backend/util/Cache";

import GithubProfile from "@/interfaces/GithubProfile";

const githubCache = new Cache<GithubProfile>();

export async function getMembers() {
  await connectDb();

  return await Member.find().exec();
}

export async function getGithubInfo(nodeId: string) {
  if (!githubCache.has(nodeId)) {
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

    const body = await response.json();
    const githubProfile = body['data']['node'];

    githubCache.set(nodeId, githubProfile, 1000*60);
  }

  return githubCache.get(nodeId);
}
