export class RestClientRequest {

    sendGetRequest(apiUrl) {

        return cy.request({
            method: 'Get',
            url: apiUrl
        })

    }

    sendPostRequest(apiUrl, headers, bodysent) {
        return cy.request({
            method: 'POST',
            url: apiUrl,
            headers: headers,

            body: bodysent

        })
    }

    deleteRequest(apiUrl, headers) {
        return cy.request(
            {
                method: 'DELETE',
                url: apiUrl,
                headers: headers
            }

        )
    }

}

export const restClient = new RestClientRequest();