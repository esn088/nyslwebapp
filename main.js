var app = new Vue({
    el: '#app',
    data: {

        datafutbol: {},
        full_url: "https://api.myjson.com/bins/16kufk",
        arrayname: ["a", "b"],
        optionvalue: "",
        buscador: "",
    },
    created: function () {

        this.getData()
    },
    methods: {
        changeValue: function () {
            this.optionvalue = document.getElementById("select").value;
        },
        buscadorequipo: function (array) {
            for (i = 0; i < array.length; i++) {
                if(this.optionvalue==array[i].name)
                    console.log(array[i].name)
            }

        },
        getData: function () {
            fetch(this.full_url, {

                method: "GET",

            }).then(function (response) {

                if (response.ok) {
                    // add a new promise to the chain
                    return response.json();
                }
                // signal a server error to the chain
                throw new Error(response.statusText);
            }).then(function (json) {
                // equals to .success in JQuery Ajax call
                this.datafutbol = json;
                app.arrayname = this.datafutbol.nysldata.teams;
                console.log(this.datafutbol);
                console.log(app.arrayname);
                buscadorequipo(app.arrayname);
                app.optionvalue = document.getElementById("select").value;
                console.log(app.optionvalue)


            }).catch(function (error) {
                // called when an error occurs anywhere in the chain
                console.log("Request failed: " + error.message);
            });


        },


    }
})
