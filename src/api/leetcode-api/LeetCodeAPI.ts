const USER_NAME = 'Pavelgq'

class LeetCodeAPI {
  url = 'https://leetcode.com/graphql';
  schema = `{ matchedUser(username: ${USER_NAME}) {
    username
    submitStats: submitStatsGlobal {
        acSubmissionNum {
            difficulty
            count
            submissions
        }
    }
    }
}
`
  fetchApi() {
    return fetch(this.url, {
      method: 'POST',

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify(
        this.schema
      )
      })
    }
  
}

export default LeetCodeAPI

