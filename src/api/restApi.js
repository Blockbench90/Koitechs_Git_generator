import Axios from "axios";

const GITHUB_API_USER = "https://api.github.com/users/";

export const fetchUserData = (username) => {
    return Axios.get(GITHUB_API_USER + username).then((response) => response.data)
}

export const fetchUserRepos = (username) => {
    return Axios.get(GITHUB_API_USER + username + "/repos")
        .then((repositories) => fetchReposLanguages(repositories.data));
}

//sort by last update
const compare = (a, b) => {
    if (a.updated_at > b.updated_at) return -1;
    else if (a.updated_at < b.updated_at) return 1;
    else if ((a.updated_at = b.updated_at)) {
        if (a.forks_count > b.forks_count) return -1;
        else if (a.forks_count < b.forks_count) return 1;
        else return 0;
    }
}

//Artem, you were right, Promise.all is a very cool thing
export const fetchReposLanguages = (repositories) => {
    repositories.sort(compare);
    return Promise.all( repositories.map((repo) => Axios.get(repo.languages_url)
                .then((repoLanguages) => {
                    return {
                        name: repo.name,
                        description: repo.description,
                        url: repo.html_url,
                        languages: repoLanguages
                    };
                })
        )
    );
}


