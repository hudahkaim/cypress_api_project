/// <reference types = "cypress" />

import { restClient } from "../../support/restClient"


describe('API testing practice', () => {
    let token
    beforeEach(() => {

        cy.loginTotheApp('h@gmail.com', 'Test@123')
        token = Cypress.env('token')

    })

    it('Get request test', () => {
        restClient.sendGetRequest("http://localhost:3000/api/tags")
            .then(response => {
                cy.log(JSON.stringify(response))
                expect(response.status).to.equal(200)
                expect(response.body.tags).to.contains("qa eng")
            })
    })

    it('Add article after taking login token ', () => {
        let slug
        restClient.sendPostRequest("http://localhost:3000/api/articles", {
            "Authorization": "Token " + token
        }, {
            "article": {
                "title": "thruh post client",
                "description": "kheer edited",
                "body": "def dum",
                "tagList": [
                    "newtag"
                ]
            }
        }
        ).then(response => {
            expect(response.body.article.title).to.equal('thruh post client')
            slug = response.body.article.slug

            cy.request({
                method: "PUT",
                url: "http://localhost:3000/api/articles/" + slug,
                headers:
                {
                    "Authorization": "Token " + token
                },
                body:
                {
                    "article": {
                        "title": "thruh post client edited",
                        "description": "kheer edited",
                        "body": "def dum",
                        "tagList": [
                            "newtag"
                        ]
                    }
                }


            }).then(response => {
                expect(response.body.article.title).to.equal("thruh post client edited")

            })


        })


    })
    //delete
    it('Add an article then delete an article ', () => {
        let slug

        restClient.sendPostRequest("http://localhost:3000/api/articles",
            {
                "Authorization": "Token " + token
            },
            {
                article: {
                    "title": "thruh post client edited",
                    "description": "delete me",
                    "body": "def dum",
                    "tagList": [
                        "newtag"
                    ]
                }

            }).then(response => {
                expect(response.body.article.title).to.equal('thruh post client edited')
                slug = response.body.article.slug
                restClient.deleteRequest("http://localhost:3000/api/articles/"+slug,
                {
                    "Authorization": "Token " + token
                })
               .then(response => {
                    expect(response.status).to.equal(204)

                })


            })


    })
})







