async function fetchGraphQL(text, variables) {
    const REACT_APP_GITHUB_AUTH_TOKEN = process.env.NEXT_PUBLIC_GRAPHQL_URL;
    console.log('fetch ', process.env);
    // Fetch data from GitHub's GraphQL API:
    const response = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
        method: 'POST',
        headers: {
            Authorization: `bearer ${REACT_APP_GITHUB_AUTH_TOKEN}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: text,
            variables,
        }),
    });
    let data = await response.json()
    console.log('aq respo', data);
    // Get the response as JSON
    return data;
}

export default fetchGraphQL;


