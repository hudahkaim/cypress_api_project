/// <reference types = "cypress" />


describe('API testing practice', () => {
    let token
    beforeEach(() => {

     cy.loginTotheApp('h@gmail.com','Test@123')
     token= Cypress.env('token')

    })

    it('Get request test', () => {
        cy.request({
            method: 'Get',
            url: 'http://localhost:3000/api/tags'
        }).then(response => {
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(200)
            expect(response.body.tags).to.contains("qa eng")
        })
    })

    it('Add article after taking login token ', () => {
        let slug
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/api/articles',
            headers: {
                "Authorization": "Token " + token
            },
            body:
            {
                article: {
                    "title": "New domertteec",
                    "description": "ferdome",
                    "body": "dboododo",
                    "tagList": [
                        "tarreusus"
                    ]
                }

            }

        }).then(response => {
            expect(response.body.article.title).to.equal('New domertteec')
            slug = response.body.article.slug

            cy.request({
                method: "PUT",
                url: "http://localhost:3000/api/articles/" +slug,
                headers:
                {
                    "Authorization": "Token " + token
                },
                body:
                {
                    "article": {
                        "title": "New domertteec edited",
                        "description": "kheer edited",
                        "body": "def dum",
                        "tagList": [
                            "newtag"
                        ]
                    }
                }


            }).then(response => {
                expect(response.body.article.title).to.equal("New domertteec edited")

            } )


        })


    })
    //delete
    it('Add an article then delete an article ', () => {
        let slug
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/api/articles',
            headers: {
                "Authorization": "Token " + token
            },

            body:
            {
                article: {
                    "title": "New domertteec edited",
                    "description": "delete me",
                    "body": "def dum",
                    "tagList": [
                        "newtag"
                    ]
                }

            }

        }).then(response => {
            expect(response.body.article.title).to.equal('Hello from delete')
            slug = response.body.article.slug

            cy.request({
                method: "DELETE",
                url: "http://localhost:3000/api/articles/" +slug,
                headers:
                {
                    "Authorization": "Token " + token
                }


            }).then(response => {
                expect(response.status).to.equal(204)

            } )


        })


    })
})







