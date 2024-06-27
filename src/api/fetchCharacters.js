import axios from "axios";

export const fetchCharacters = async (pageParam, { id }) => {
  const base_URL = "https://graphql.anilist.co";
  const query = `
    query media($id: Int, $page: Int) {
      Media(id: $id) {
        id
        characters(page: $page, sort: [ROLE, RELEVANCE, ID]) {
          pageInfo {
            total
            perPage
            currentPage
            lastPage
            hasNextPage
          }
          edges {
            id
            role
            name
            voiceActorRoles(sort: [RELEVANCE, ID]) {
              roleNotes
              dubGroup
              voiceActor {
                id
                name {
                  userPreferred
                }
                language: languageV2
                image {
                  large
                }
              }
            }
            node {
              id
              name {
                userPreferred
              }
              image {
                large
              }
            }
          }
        }
      }
    }
  
  `;
  const variables = {
    page: pageParam,
    id: id,
  };

  const options = {
    method: "post",
    url: base_URL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: {
      query: query,
      variables: variables,
    },
  };

  try {
    const resp = await axios(options);
    return resp.data.data.Media.characters;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
