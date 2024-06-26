import Member from '@/backend/schemas/Member';

import { connectDb } from '@/backend/util/MongoDb';
import { Cache } from '@/backend/util/Cache';

import GithubProfile from '@/backend/interfaces/GithubProfile';
import UserInfo from '@/interfaces/UserInfo';

const githubCache = new Cache<GithubProfile>();

connectDb();

export async function getMembers(): Promise<UserInfo[]> {
  return await Member.find().exec();
}

export async function getGithubInfo(nodeId: string): Promise<GithubProfile> {
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
        Authorization: `Bearer ${process.env.GITHUB_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    const body = await response.json();
    const githubProfile = body['data']['node'];

    githubCache.set(nodeId, githubProfile, 1000 * 60 * 5);
  }

  return githubCache.get(nodeId);
}
