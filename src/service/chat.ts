import HttpClient from "../network/http";
export default class ChatService {
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  async getChats() {
    return this.http.fetch(`/chats`, {
      method: "GET",
    });
  }

  async postTweet(text: String) {
    return this.http.fetch(`/chats`, {
      method: "POST",
      body: JSON.stringify({ text }),
    });
  }

  async deleteTweet(chatId: number) {
    return this.http.fetch(`/tweets/${chatId}`, {
      method: "DELETE",
    });
  }

  async updateTweet(chatId: number, text: String) {
    return this.http.fetch(`/tweets/${chatId}`, {
      method: "PUT",
      body: JSON.stringify({ text }),
    });
  }
}
