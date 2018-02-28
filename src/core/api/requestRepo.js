export class GetDataRequest {

    static getArticles(page, pageSize) {
        const headers = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8",
        };
        const url = `http://api.blog.testing.singree.com/?page=${page}&limit=${pageSize}`;

        return fetch(url,  {headers: headers})
            .then((response) => {
                const status = response.status;
                if (status === 401) {
                    //this.showLogoutError();
                } else if (status === 400) {
                    const error = Error("Validation error");
                    error.Data = response.json();
                    error.Type = "ValidationError";
                    throw error;
                } else if (status < 200 || status >= 300) {
                    throw response.json();
                } else if (status === 204) {
                    return {};
                } else {
                    return response.json();
                }
            });
    }
}