import { NextRequest, NextResponse } from 'next/server';
import { Octokit } from 'octokit';

import config from "@/config";

export const GET = async (req: NextRequest) => {
	const repoName = req.nextUrl.searchParams.get('repoName');

	const octokit = new Octokit({
		// auth: process.env.GITHUB_AUTH_TOKEN,
	});

	if (repoName) {
		const { data: repo } = await octokit.request('GET /repos/{owner}/{repo}', {
			owner: config.about.githubUsername,
			repo: repoName,
		});

		return NextResponse.json({
			stars: repo?.stargazers_count,
			forksCount: repo?.forks_count,
		});
	}

	const { data: repos } = await octokit.request('GET /users/{username}/repos', {
		username: config.about.githubUsername,
	});
	const { data: followers } = await octokit.request(
		'GET /users/{username}/followers',
		{
			username: config.about.githubUsername,
		},
	);

	const stars = repos
		.filter((repo) => !repo.fork)
		.reduce((acc, repo) => {
			return acc + (repo.stargazers_count ?? 0);
		}, 0);

	return NextResponse.json({
		followers: followers.length,
		stars,
	});
};
